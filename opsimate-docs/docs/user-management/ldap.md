---
sidebar_position: 4
---

# Directory Login (LDAP / Active Directory)

OpsiMate can sign users in against your existing directory — OpenLDAP, Active Directory, FreeIPA or anything else that speaks LDAP. Nobody needs to be invited or given a separate password: a directory user's OpsiMate account is created the first time they sign in, and their role is re-read from their directory groups at every login.

Directory passwords are never stored in OpsiMate.

## How it works

1. OpsiMate binds to the directory with a read-only service account and searches the **search base** for the email address the user typed. Leave the bind DN empty to search anonymously, if your directory allows it.
2. It checks the password by binding again **as that user's entry**. The result is pass or fail; the password itself is kept nowhere.
3. It reads the user's groups — from the `memberOf` attribute on the user entry, or by searching group entries for the user's DN — and maps them to a role. The **highest matching role wins**: `admin` > `editor` > `operation` > `viewer`.
4. A user in none of the mapped groups is refused, unless you set a default role for them.

Name and role changes in the directory are picked up at the user's next login. A session that is already open keeps its role until its token expires.

## Set it up in the app

The quickest path. As an admin, open **Settings → Users → Directory login (LDAP)** and press **Configure**.

| Section | What it asks for |
| --- | --- |
| **Connection** | Server URL (`ldaps://host:636`, or `ldap://host:389` with StartTLS), timeout, whether to verify the server certificate, and optionally the CA certificate PEM when the directory isn't publicly trusted. |
| **Service account** | Bind DN and password of the read-only account used to look users up. The password is stored encrypted and is never shown again after saving. |
| **Users** | Search base, search filter (`{{email}}` is replaced by the address typed at login; Active Directory usually wants `(&(objectClass=user)(mail={{email}}))`), and the email and name attributes. |
| **Groups and roles** | Where groups live (`memberOf`, or a group search base and filter with `{{dn}}`), then one group per line under Admin / Editor / Operation / Viewer. **Everyone else** decides what happens to a user who matches nothing: refuse sign-in, or give them a role. Plus the number of failed logins that triggers a temporary block. |

Then:

1. **Save**
2. **Test connection** — add an email under *Test with a user* to see which role that person would get, without signing in as them
3. switch it on

Changes take effect immediately; no restart is needed. Every edit is recorded in the [audit log](./audit-logs.md).

The card's badge tells you the current state: **Enabled**, **Off**, or **Not active** — the last one means the switch is on but the configuration is incomplete, and the page spells out what is missing. While the settings are incomplete, directory sign-in stays off rather than half-working.

## Or configure it as code

If a `config.yml` `ldap:` section or any `LDAP_*` environment variable is present, that server configuration takes priority over the database settings, and the Settings page shows it read-only — you can still test it there.

Copy the commented example from the main repository's [default-config.yml](https://github.com/OpsiMate/OpsiMate/blob/main/default-config.yml):

```yaml title="config.yml"
ldap:
  enabled: true
  url: "ldaps://ldap.example.com:636"        # or ldap://...:389 with start_tls: true
  start_tls: false
  bind_dn: "cn=opsimate,ou=service,dc=example,dc=com"
  bind_password: "change-me"
  search_base: "ou=people,dc=example,dc=com"
  search_filter: "(mail={{email}})"          # AD: "(&(objectClass=user)(mail={{email}}))"
  name_attribute: "displayName"
  groups_attribute: "memberOf"               # AD / OpenLDAP with the memberOf overlay
  # group_search_base: "ou=groups,dc=example,dc=com"   # for directories without memberOf
  # group_search_filter: "(member={{dn}})"
  role_mapping:                              # full group DN (safest) or bare name; highest role wins
    admin: ["cn=opsimate-admins,ou=groups,dc=example,dc=com"]
    editor: ["sre"]
    viewer: ["engineering"]
  # default_role: viewer                     # for users in none of those groups; omit to refuse them
  login_max_failures: 5                      # per email per 15 min, below your directory lockout; 0 = no limit
  tls:
    rejectUnauthorized: true
    # ca_file: "/app/data/ldap-ca.pem"
```

The same options exist as environment variables, layered on top of whatever the file says — useful when a directory password shouldn't live in `config.yml`:

| Variable | Example |
| --- | --- |
| `LDAP_ENABLED` | `true` |
| `LDAP_URL` | `ldaps://ldap.example.com:636` |
| `LDAP_START_TLS` | `true` (with an `ldap://` URL) |
| `LDAP_BIND_DN` / `LDAP_BIND_PASSWORD` | service account |
| `LDAP_SEARCH_BASE` | `ou=people,dc=example,dc=com` |
| `LDAP_SEARCH_FILTER` | `(mail={{email}})` |
| `LDAP_NAME_ATTRIBUTE` / `LDAP_EMAIL_ATTRIBUTE` | `displayName` / `mail` |
| `LDAP_GROUPS_ATTRIBUTE` | `memberOf` |
| `LDAP_GROUP_SEARCH_BASE` / `LDAP_GROUP_SEARCH_FILTER` | `ou=groups,dc=example,dc=com` / `(member={{dn}})` |
| `LDAP_ROLE_ADMIN_GROUPS`, `LDAP_ROLE_EDITOR_GROUPS`, `LDAP_ROLE_OPERATION_GROUPS`, `LDAP_ROLE_VIEWER_GROUPS` | `cn=ops,ou=groups,dc=example,dc=com;sre` (`;` or `\|` separated) |
| `LDAP_DEFAULT_ROLE` | `viewer` |
| `LDAP_TLS_CA_FILE` | `/app/data/ldap-ca.pem` |
| `LDAP_TLS_REJECT_UNAUTHORIZED` | `true` (only set `false` for testing) |
| `LDAP_TIMEOUT_MS` | `5000` |
| `LDAP_LOGIN_MAX_FAILURES` | `5` (`0` = no limit) |

An incomplete section leaves directory login off and logs the reason instead of failing the start. See [Configuration](../getting-started/configuration.md) for how the file and the variables interact.

## Security notes

**Encrypt the connection.** Use `ldaps://`, or `ldap://` with StartTLS. With plain `ldap://` and no StartTLS the passwords cross the network unencrypted, and OpsiMate logs a warning at startup. Leave certificate verification on: turning it off is a testing option only, and with it off anyone on the network path can read those passwords.

**Prefer full group DNs in the role mapping**, at least for `admin`. A bare name such as `admins` matches any group called `admins` anywhere the lookup can reach it, so anyone who can create or own a group there could grant themselves that role.

**Accounts are tied to the directory entry that created them.** An OpsiMate account belongs to the DN that signed in first. If a different entry later answers for the same email — a reused address, or an entry that was moved or renamed — that login is refused and the server log says so. Delete the OpsiMate user to let the new entry sign in.

**Failed logins are throttled before they reach the directory.** After 5 failed attempts for one email within 15 minutes, OpsiMate answers `429` without contacting the directory at all. This keeps a guessed-password script from tripping your directory's own lockout, which would freeze that person's account everywhere; the trade-off is that anyone who knows a user's email can block their OpsiMate login for 15 minutes. Keep the directory lockout threshold above this number, or raise or disable the limit with `login_max_failures` / `LDAP_LOGIN_MAX_FAILURES` (`0` = no limit) when your directory has no lockout policy.

## Local accounts still work

Local accounts — including the first admin — always sign in against OpsiMate's own password, even when directory login is enabled and even when the directory is unreachable. That is your way back in if the directory is down or misconfigured. A directory entry can never take over a local account that already uses the same email.

## What directory users see

- In **Settings → Users** they carry an **LDAP** badge, meaning the account was created at their first login and its role follows their groups.
- Their email is read-only: it comes from the directory.
- OpsiMate does not manage their password. The admin password-reset action is not offered for them, a password change is refused, and a "forgot password" request for their address is ignored — the same silent answer as for an unknown email. Passwords and emails for these accounts change in the directory.

## Next steps

- [Register and Login](./register-login.md) — how local accounts sign in
- [Admin Panel](./admin-panel.md) — managing users and roles
- [Audit Logs](./audit-logs.md) — the record kept of directory setting changes
