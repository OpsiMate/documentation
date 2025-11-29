---
sidebar_position: 2
---

# Alert Management

The Alert Management page provides a centralized view of all alerts across your services and integrations.


<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/alertpage.png" alt="OpsiMate Alerts Page" style={{width: '700px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>OpsiMate alerts dashboard showing real-time notifications and alert management</p>
</div>

## Overview

Access the Alert Management page to:

- **View all alerts**: See alerts from all integration sources in one place
- **Filter and search**: Find specific alerts by service or status

## Alert Dashboard Features

### Active Alerts
View currently active alerts:
- Real-time status updates
- Associated services and tags
- Time since alert started

### Dismissing and Restoring Alerts

You can temporarily hide alerts that you’ve reviewed by **dismissing** them:

- Click the **X icon** on an alert row to move it to a dismissed state.
- Dismissed alerts are removed from the active alerts list.
- If you dismissed an alert by mistake, you can **restore** it back to the active list.

### Grouping Alerts

Use **group by** to organize alerts based on what matters to you:

- Group alerts by any field (for example service, status, source, or severity)
- Group by **nested fields** inside the alert payload for more advanced views
- Quickly spot patterns, noisy sources, or services with repeated issues

### Alert Details Sidebar

Click any alert row to open a **details sidebar** on the right:

- See full alert information, including labels, payload, and timestamps
- Follow a direct **link to the source** alert in the original monitoring tool
- Use a **runbook link** to jump straight to the documentation or procedure for handling that alert

Each alert shows its source integration for easy traceability back to the original monitoring system.
