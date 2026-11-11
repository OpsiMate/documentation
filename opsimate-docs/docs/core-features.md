---
sidebar_position: 2
---

# 🚀 Core Features

OpsiMate is your alerts command center – bringing every signal from every source into one focused workspace.

## 🔔 All Your Alerts in One Place

**Centralize alerts from every source**
- Connect alerts from monitoring tools and cloud providers through webhook integrations
- Unify noisy, scattered alerts into a single queue, deduplicated by alert ID
- Filter, search and group by severity, source, tag, team or time window, and save the view as a dashboard
- Describe the alerts you want in plain words, and AI search sets the filters for you

## 🧑‍💼 Ownership and Collaboration

**Know who is on it**
- Assign an owner to each alert, add comments, and follow a per-alert history timeline
- Organize people into on-call teams, with role-based access (admin, editor, viewer)

## ⚡ Actionable Alerts

**Act without leaving the alert**
- Run Slack, Teams, Jira or HTTP [actions](alerts/actions) from an alert
- Add links and runbooks to alerts as they arrive, with [enrichment rules](alerts/enrichments)
- Keep the tags your source sends, or add your own with enrichment rules

## 🔕 Less Noise

**Quiet what you already know about**
- [Mute policies](alerts/silences-and-mute-policies) silence alerts that match any field, on a schedule or right away, without deleting anything

## 🧠 Root Cause Analysis

**Close the loop with your tooling**
- Your system pushes a root cause per alert through the [Root Cause API](alerts/root-cause-api)
- Operators rate it, and the verdict is relayed back to the sender

## 🕒 Learn from Historical Alerts

**Study the past to build a better future**
- Browse resolved alerts in the [Resolved view](alerts/archived-alerts)
- Follow MTTR, MTTA, volume and re-fire trends on the [Insights](alerts/insights) page
## 📺 TV Mode Dashboards

**Your alerts on the big screen**
- Display alerts on wall-mounted TVs in NOC or office spaces
- Create dedicated views for managers, NOC teams, and on-call engineers
- Build multiple dashboards for different stakeholders and contexts

## 👥 Simple for Everyone

**A view that works for technical and non-technical users**
- Clear, human-friendly summaries for managers and stakeholders
- Detailed, actionable context for engineers and on-call teams
- One shared view so everyone talks about the same reality

---

## 🔮 Coming Next

### 🤖 Built-in Investigation Agent
- One-click root cause that looks at your cluster, logs and metrics ([HolmesGPT](https://holmesgpt.dev) integration, in design)

### 🔄 Incidents
- Group related alerts into a named incident

### 📣 Alert Routing
- Escalate to Slack or on-call by severity and team

---

## 🎯 Getting Started

Ready to explore OpsiMate's capabilities? Start with:

1. **[Deploy OpsiMate](getting-started/deploy)** - Set up your OpsiMate server
2. **[Connect an integration](integrations/overview)** - Point your monitoring tools at OpsiMate
3. **[Work your alerts](alerts/alert-management)** - Triage, assign and resolve them