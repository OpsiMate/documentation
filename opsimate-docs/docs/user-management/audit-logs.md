---
sidebar_position: 3
---

# Audit Logs

OpsiMate keeps an audit log of configuration changes: who changed what, and when.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/auditlog.png" alt="Audit Log Dashboard" style={{width: '700px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>Comprehensive audit log showing all system activities and user actions</p>
</div>

## What Is Logged

Each entry has an action (`CREATE`, `UPDATE` or `DELETE`) and a resource type:

| Resource type | What creates an entry |
| --- | --- |
| `DASHBOARD` | Creating or updating a saved dashboard |
| `ENRICHMENT` | Creating, updating or deleting an enrichment rule |
| `ACTION` | Creating, updating or deleting an action |
| `MUTE_POLICY` | Creating, updating or deleting a mute policy |
| `CALLBACK` | Creating, updating or deleting an alert callback |
| `SECRET` | Creating, updating or deleting a secret |
| `AI` | Changing the AI settings |
| `LDAP` | Changing the LDAP settings |
| `ROOT_CAUSE` | Rating a root cause, with or without a comment |
| `USER` | A user resetting their password through the email link |

## Log Information

Each audit entry includes:

- **Timestamp**: When the action occurred
- **User**: Who performed the action
- **Action Type**: `CREATE`, `UPDATE` or `DELETE`
- **Resource**: The resource type and its name, for example the dashboard name

## Viewing the Audit Log

Open **Settings → Audit Log**. Entries are listed newest first, 10 per page by default. You can change the page size and use the pagination controls under the table to see older entries.

## Retention

Audit log entries are kept until you turn on a retention policy. An admin can do that in **Settings → Data Retention**. When it is on, OpsiMate deletes audit log entries older than the configured period (90 days by default).