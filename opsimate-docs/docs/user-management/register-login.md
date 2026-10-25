---
sidebar_position: 1
---

# Register and Login

- OpsiMate provides secure user authentication.

## First-run: creating the admin account

Registration is a first-run step, not a sign-up page. While no user exists, the app sends every visitor to `/register` and shows a **Create First Admin User** form (email, full name, password). The password needs at least 6 characters and no spaces. After it succeeds you are signed in straight away, and the account is an **Admin**.

The first registration then closes: with any user present, `POST /api/v1/users/register` answers 403 "Registration is disabled after first admin". Everyone else is added by an admin in **Settings → Users → Add User**, or signs in through [directory login (LDAP)](./ldap.md) if that is set up.

No email verification happens at any point. If the [mailer is configured](../getting-started/configuration.md#email-smtp-configuration), the new admin receives a one-time welcome email — that is the only welcome email OpsiMate sends.

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/register.png" alt="OpsiMate Register" style={{width: '350px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>OpsiMate user registration</p>
</div>

## Login

Sign in with your email and password. A wrong email or password shows "Invalid email or password".

If the server sets [`login.default_email_domain`](../getting-started/configuration.md#login), the field reads **Email or username** and a name without `@` signs in as `name@<domain>` — `dana` becomes `dana@company.com`. With LDAP on, directory users sign in here with their directory password; local accounts, including the first admin, keep signing in with their OpsiMate password. See [Directory login (LDAP)](./ldap.md).

## Forgot password

The **Forgot password?** link on the login page is shown only when email is enabled on the server, with [`mailLinkBaseUrl` set](../getting-started/configuration.md#email-smtp-configuration).

1. Enter your email. The server sends a link to `<mailLinkBaseUrl>/reset-password?token=…`, valid for **15 minutes**.
2. Choose a new password: at least 8 characters, no spaces, and different from your current one.
3. An expired or already-used link shows "This password reset link is no longer valid", with a button to request a new one.

For an unknown email, or a directory (LDAP) account, the server sends nothing but answers exactly as if it had, so the page cannot be used to find out who has an account.

To change your own password later, use **Profile → edit → Change Password (Optional)** (at least 6 characters). Directory accounts see a note that their password is managed by the directory instead.

<div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '30px 0', flexWrap: 'wrap' }}>
  <div style={{ textAlign: 'center' }}>
    <img src="/img/login.png" alt="OpsiMate Dashboard" style={{ width: '350px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
    <p style={{ fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>OpsiMate user login</p>
  </div>
</div>

