---
sidebar_position: 1
---

# Adding Alerts

Learn how to set up alerts for your services through integration providers like Grafana.

## How It Works

Alerts in OpsiMate are created by **connecting integrations** to your alert sources.

Every integration is a **webhook**: the source **pushes** its alerts to an OpsiMate webhook URL. OpsiMate never polls a source for alerts.

- Each alert event is sent directly from the source into OpsiMate.
- OpsiMate deduplicates by the alert `id`. Sending the same `id` again updates the existing alert instead of creating a new one.
- When the source sends a resolve for that `id`, the alert is resolved in OpsiMate as well.

For an overview of all supported integrations and how they behave, see the
**[Integrations Overview](/docs/integrations/overview)** page.

## Viewing Alerts

Once your integrations are configured, you can view alerts from the **Alerts tab**:

- Open the **Alerts** tab in OpsiMate
- Use the **alerts table** to see all active alerts
- Filter and sort by status, source, or service

## Alert States

An alert is in one of two states:
- **Firing**: the alert is active at its source
- **Resolved**: the incident is over, and the alert moved to the resolved alerts

Two flags can be set on a firing alert:
- **Silenced**: paused on purpose for a chosen duration. It is still firing at its source. See [Silences and Mute Policies](./silences-and-mute-policies.md).
- **Unread**: nobody has opened the alert yet, so it is drawn in **bold**. See [Alert Management](./alert-management.md).

The system updates alert states from what your integrations send. A [custom webhook](/docs/integrations/custom-alerts) resolves an alert by sending its `id` with `"status": "resolved"`.
