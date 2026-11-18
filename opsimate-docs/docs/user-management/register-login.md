---
sidebar_position: 1
---

# Register and Login

OpsiMate provides secure user authentication for managing alerts, incidents, and team operations.

## Initial Registration (First Admin)

On a new OpsiMate installation, registration is reserved exclusively for creating the initial administrator:

1. When no users exist, every visitor is automatically redirected to `/register`.
2. The registration screen is titled **Create First Admin User** and prompts for your **Full Name**, **Email**, and **Password**.
3. Passwords must be at least 6 characters long with no spaces.
4. Upon clicking **Create Admin**, the account is created with the **Admin** role, and you are signed in immediately.
5. If SMTP email is configured, a welcome email is sent to this address. No separate email verification step is required.

Once the first admin user is registered, public registration is permanently disabled. Any subsequent registration attempts return `403 Forbidden` (`Registration is disabled after first admin`). All future team members must be invited by an administrator in **Settings > Users > Add User**, or authenticate via directory login (LDAP).

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/register.png" alt="OpsiMate First Admin Registration" style={{width: '350px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>First admin user creation</p>
</div>

## Login

Existing team members can log in to access the alerts dashboard:

1. Navigate to the login page (`/login`).
2. Enter your email address and password.
3. Click **Sign In**. If the credentials do not match, the application displays "Invalid email or password".

### Username Login (Optional)
If the server has `login.default_email_domain` configured in its [configuration](../getting-started/configuration.md), the input field label changes to **Email or username**. Users can enter their bare username (without `@`), and OpsiMate will automatically append the configured domain to complete the login.

### Directory (LDAP) Login
If your organization has enabled LDAP integration, directory users sign in directly through the standard login page using their corporate credentials. Local accounts—including the initial admin—continue to authenticate using their OpsiMate passwords. For configuration details, see [Directory Login (LDAP)](./ldap.md).

<div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '30px 0', flexWrap: 'wrap' }}>
  <div style={{ textAlign: 'center' }}>
    <img src="/img/login.png" alt="OpsiMate Login" style={{ width: '350px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
    <p style={{ fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>OpsiMate user login</p>
  </div>
</div>

## Forgot Password

Local users can reset a forgotten password:

- The **Forgot password?** link on the login screen is displayed only when email is enabled on the server.
- Requesting a reset requires the mailer and `mailLinkBaseUrl` to be configured (see the [Email (SMTP) Configuration](../getting-started/configuration.md) documentation).
- Enter your registered email address. OpsiMate sends a reset link to `<mailLinkBaseUrl>/reset-password?token=...`, which remains valid for **15 minutes**.
- Password reset links are single-use. If a link has expired or was already used, the page displays "This password reset link is no longer valid" with an option to request a fresh link.
- The new password must be at least **8 characters** long, contain no spaces, and cannot match your current password.
- **Privacy protection:** To prevent account enumeration, entering an unregistered email or an LDAP user address responds with the same success confirmation without dispatching an email.

## Changing Your Password

Logged-in local users can update their password from their profile:

1. Click on your profile icon in the navigation bar and select **Profile**.
2. Click **Edit**.
3. Under **Change Password (Optional)**, enter your new password (minimum 6 characters).
4. Save your changes.

:::note Directory Accounts
Accounts managed via LDAP/Active Directory cannot update their password in OpsiMate. Directory accounts will see a note indicating their password must be managed through their corporate directory service.
:::
