---
id: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

The OpsiMate server reads its settings either from a YAML configuration file or from built-in defaults plus a few environment variables. This page covers which mode you are in, every key the server actually uses, and the variables that apply either way.

## How the configuration is loaded

The `CONFIG_FILE` environment variable decides the mode:

| Situation | What the server uses |
| --- | --- |
| `CONFIG_FILE` points to an existing file | That file, for `server`, `database`, `security` and `mailer`. The matching environment variables are **not** read. |
| `CONFIG_FILE` is unset, or names a file that does not exist | Built-in defaults, plus the environment variables below. |

The shipped container deployments run in file mode. `docker-compose.yml` and the Helm chart mount a `config.yml` at `/app/config/config.yml` and point `CONFIG_FILE` there; the all-in-one image also bakes this repository's `default-config.yml` into `/app/config/default-config.yml`, and its entrypoint falls back to that copy when no `config.yml` is mounted. Either way, `API_TOKEN` and the `SMTP_*` variables are ignored in those deployments — edit `config.yml` instead. A bare `docker run opsimate/backend` without `CONFIG_FILE` is the exception: it runs on the built-in defaults and does read those variables.

Two things behave differently from that rule:

- `PORT` and `HOST` override the listening address even when a file is loaded.
- Directory login is layered on top of the file: any `LDAP_*` variable overrides the same key in the `ldap:` section.

A loaded file must contain `server.port`, `database.path` and `security.private_keys_path`. Without any of them the server logs `Invalid config file: <path>` and refuses to start, rather than booting against the wrong database.

## Configuration file

```yaml title="config.yml"
# OpsiMate configuration — only the keys the server reads

server:
  port: 3001                  # Backend API port
  host: "0.0.0.0"             # Use "localhost" for a plain local run

database:
  path: "/app/data/database/opsimate.db"      # SQLite file (a mounted volume in Docker)

security:
  private_keys_path: "/app/data/private-keys" # Uploaded secrets (SSH keys, kubeconfigs)
  api_token: "change-me"      # Token monitoring tools send with webhook requests

# mailer: ...  see "Email (SMTP) Configuration" below
# ldap:   ...  see "Directory login (LDAP)" below
```

`security.api_token` is the shared secret external systems present when they push alerts: the webhook endpoints accept it as an `x-api-token` header or an `api_token` query parameter. Without a file, the server takes it from `API_TOKEN` and falls back to `opsimate`; `default-config.yml` also sets `opsimate`. Change it for anything that is not a demo.

In file mode nothing fills in a missing `api_token`: if the loaded file has no `security.api_token`, every request that authenticates with an API token is rejected. Keep the key in your file. The Helm chart's default `config.configYml` does not include it, and the chart's `API_TOKEN` secret (`secrets.apiToken`) is ignored because a config file is loaded — Helm users must add `api_token` under `security` in `config.configYml`.

A fully commented file, including the mailer and directory-login sections, ships with the repository as [default-config.yml](https://github.com/OpsiMate/OpsiMate/blob/main/default-config.yml). `scripts/start-docker.sh` downloads that file as `config.yml` when you don't have one yet, and the all-in-one image uses it as the fallback described above.

## Key reference

| Key | Default | What it does |
| --- | --- | --- |
| `server.port` | `3001` | Port the API listens on. **Required in a loaded file.** |
| `server.host` | `SERVER_HOST`, else `0.0.0.0` | Address to bind. `0.0.0.0` is what a container needs. |
| `database.path` | `../../data/database/opsimate.db` | Where the SQLite database lives. **Required in a loaded file.** |
| `security.private_keys_path` | `../../data/private-keys` | Directory where uploaded secrets (SSH private keys and kubeconfig files) are stored. **Required in a loaded file.** |
| `security.api_token` | `API_TOKEN`, else `opsimate` (defaults mode only) | Shared token for inbound webhooks. In file mode there is no fallback — set it in the file. |
| `mailer` | `enabled: false` | Email settings; see the SMTP section below. |
| `ldap` | disabled | Directory login; see below. |

The defaults in the table are the ones a plain checkout falls back to. [default-config.yml](https://github.com/OpsiMate/OpsiMate/blob/main/default-config.yml), which the containers start from, puts `database.path` and `security.private_keys_path` under `/app/data/...` instead, because the database and the keys have to sit on mounted volumes to survive a restart.

## Environment variables that always apply

These are read regardless of which mode you are in:

| Variable | Purpose |
| --- | --- |
| `PORT` | Overrides `server.port`, from the file or the defaults. |
| `HOST` | Overrides `server.host`. |
| `JWT_SECRET` | Signs login sessions. The fallback (`changeme-secret`) is a public placeholder that ships in this repository — set your own, or anyone with the repo can mint a session. |
| `ENCRYPTION_KEY` | Encrypts the credentials stored for integrations. In production (`NODE_ENV=production`) the server logs a warning at every boot when it is unset, because stored credentials are then protected by the same kind of public fallback. The server keeps running rather than refusing to start, so existing deployments can rotate the key on their own schedule. |
| `METRICS_TOKEN` | Optional bearer token for the Prometheus `GET /metrics` endpoint. Unset means `/metrics` is open; set means scrapers must send `Authorization: Bearer <token>`. See [Prometheus metrics](./metrics.md). |

The SMTP variables (`EMAIL_ENABLED`, `SMTP_*`, `APP_BASE_URL`) are listed with the mailer below, and apply only when no configuration file is loaded.

## Directory login (LDAP)

An `ldap:` section in the same file, or any `LDAP_*` variable, turns on sign-in against a directory such as Active Directory or OpenLDAP. The variables are layered on top of the section, which is how Docker and Helm installs usually configure it.

Directory users sign in with their email and directory password; their OpsiMate account is created on first login and its role follows their group membership afterwards. Local accounts keep signing in locally, including while the directory is unreachable.

An enabled but incomplete section is switched off with a warning at boot rather than failing the start. The full key list — URL, service-account bind, search filter, group mapping and TLS options — is in the [configuration example README](https://github.com/OpsiMate/OpsiMate/blob/main/configuration_example/README.md); it is long enough that it does not belong on this page.

## Email (SMTP) Configuration

Email is disabled by default. To enable welcome and password-reset emails, add a top-level `mailer` section to the YAML file selected by the server's `CONFIG_FILE` environment variable. Keep the existing server, database, and security sections.

```yaml title="config.yml"
mailer:
  enabled: true
  host: "smtp.example.com"
  port: 587
  secure: false
  from: "OpsiMate <opsimate@example.com>"
  mailLinkBaseUrl: "https://opsimate.example.com"
  auth:
    user: "your-smtp-username"
    pass: "your-smtp-password"
```

Replace the example values with your SMTP provider's settings. Set `from` to a sender address your provider allows, and set `mailLinkBaseUrl` to the public URL of your OpsiMate frontend, without a trailing slash. Password-reset emails require this URL to build the reset link.

Use `secure: false` with port 587 for STARTTLS, or `secure: true` with port 465 for TLS from the start, according to your provider's instructions. See the [Nodemailer SMTP options](https://nodemailer.com/smtp#general-options) for details.

Email requires `enabled: true`, a host, a port, and both authentication fields. When a loaded YAML file enables email but omits any of those SMTP fields, OpsiMate disables email and logs a warning. Keep credentials out of version control, and restart the server after changing its configuration.

### Environment Variables

When `CONFIG_FILE` is unset or points to a file that does not exist, the server uses its default configuration and reads these environment variables:

| Variable | Purpose |
| --- | --- |
| `EMAIL_ENABLED` | Set to the literal value `true` to enable email. |
| `SMTP_HOST` | SMTP server hostname. |
| `SMTP_PORT` | SMTP port number, for example `587`. |
| `SMTP_USER` | SMTP authentication username. |
| `SMTP_PASS` | SMTP authentication password. |
| `SMTP_FROM` | Sender address, equivalent to `mailer.from`. |
| `APP_BASE_URL` | Public frontend URL, equivalent to `mailer.mailLinkBaseUrl`. |

These variables do **not** override a loaded YAML configuration. If your deployment sets `CONFIG_FILE` to an existing file, configure `mailer` in that file instead. There is no SMTP environment variable for `secure`; use YAML when your provider requires `secure: true`.

### Check the Connection

After restarting, check the server logs for `MailClient: SMTP transporter is ready to send emails`. If SMTP verification fails, check your provider's host, port, credentials, and network access. A successful connection check confirms SMTP connectivity; it does not guarantee that a message will reach a recipient's inbox.

## Next Steps

After configuring OpsiMate:

1. **Restart the server** to apply the changes
2. **Connect a monitoring tool** — [Integrations overview](../integrations/overview.md)
3. **Work your alerts** — [Alert management](../alerts/alert-management.md)

## Support

If you need help with configuration:

- Check the [deployment guide](deploy) for basic setup
- Join our [community discussions](https://github.com/opsimate/opsimate/discussions)
- Report configuration issues on [GitHub](https://github.com/opsimate/opsimate/issues)
