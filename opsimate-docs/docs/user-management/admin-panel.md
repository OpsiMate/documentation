---
sidebar_position: 2
---

# Settings: Users & Roles

Settings is where administrators manage the people who use OpsiMate and configure instance-wide behaviour. The **Settings** link only appears in the sidebar for users with the **Admin** role, so everything on this page is admin-only.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/user-management.png" alt="User Management Interface" style={{width: '600px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>The Users tab on the Settings page, where team members are added and configured</p>
</div>

## Settings tabs

| Tab | What it holds |
| --- | --- |
| **Users** | Team members, roles and directory (LDAP) login. |
| **Audit Log** | Who changed what, and when. See [Audit Log](./audit-logs.md). |
| **Data Retention** | How long alert and history data is kept. |
| **Alert Silences** | Silence and mute policies that apply across alerts. See [Silences and Mute Policies](../alerts/silences-and-mute-policies.md). |
| **AI (Beta)** | AI provider configuration and the root-cause/MCP guides. See [AI (Beta)](./ai.md). |
| **Callbacks** | Webhook callbacks sent to external endpoints when alert events happen. Only admins see this tab. |

Data Retention and Callbacks do not have their own page yet; their settings are described inside those tabs.

## Managing users

All user management happens in **Settings → Users**.

### Adding a user

1. Open **Settings** → **Users**.
2. Click **Add User**.
3. Fill in:
   - **Email** — the address the user signs in with.
   - **Full Name** — shown throughout the UI.
   - **Password** — at least 6 characters, with no spaces.
   - **Role** — **Viewer** by default; Admin, Editor, Operation and Viewer are available.

New accounts are created immediately; there is no invitation email or approval step.

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/create-user.png" alt="OpsiMate Adding User" style={{width: '350px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>OpsiMate user adding</p>
</div>

### Changing a user's role

Use the role dropdown in the user's row. The new role applies from the user's next sign-in; a session that is already open keeps its previous role until its token expires.

### Editing a user

The pencil icon opens the user's **Full Name** and **Email**. Changing the email changes the address they sign in with.

### Resetting a password

The key icon opens **Reset Password**: enter a **New Password** and **Confirm Password**. The new password must be at least 8 characters, contain no spaces, and match the confirmation.

Two exceptions:

- **Directory (LDAP) users** have no reset button — their password lives in the directory.
- **Your own account** cannot be reset from this list. Use your profile settings instead.

### Deleting a user

The trash icon asks for confirmation before removing the account. Deletion cannot be undone.

### Bulk changes

Tick the checkboxes on the left of the table to reveal two bulk actions:

- **Bulk Role Change** — sets the selected users to one role.
- **Delete Selected (N)** — confirms, then deletes the selected users. This cannot be undone.

Your own row cannot be selected, so you cannot bulk-change or bulk-delete your own account.

### Searching

The search box filters the table by **name or email**.

### The Source column

Each user is marked **Local** or **LDAP**:

- **Local** — the account and its password live in OpsiMate.
- **LDAP** — the account is provisioned on first directory login; the password lives in the directory, and the email comes from there and cannot be edited here.

For directory users as a whole, see [Directory Login (LDAP)](./ldap.md); the LDAP settings themselves sit at the bottom of the **Users** tab.

## User roles

OpsiMate has four roles. They are enforced on the server, so a role's limits hold even if the UI is bypassed.

| Role | What it can do |
| --- | --- |
| **Admin** | Everything: manages users (add, change role, edit, reset password, delete), opens **Settings** and changes AI, LDAP, Callbacks, Data Retention and the silence reset schedule, permanently deletes resolved alerts, and creates, edits and deletes on-call teams. |
| **Editor** | Works alerts — takes ownership, comments, silences, resolves and makes other alert changes — and sees the **Integrations** page. Cannot open Settings and cannot permanently delete resolved alerts. |
| **Operation** | The same alert work as Editor, but the sidebar does not show the **Integrations** link. This is the only difference between the two roles. |
| **Viewer** | Read-only. Any create, edit or delete is refused by the server. |

Only Admins can manage users, so role changes, password resets and deletions are all admin actions.
