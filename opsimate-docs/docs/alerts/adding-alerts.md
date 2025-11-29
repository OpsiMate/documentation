---
sidebar_position: 1
---

# Adding Alerts

Learn how to set up alerts for your services through integration providers like Grafana.

## How It Works

Alerts in OpsiMate are created by **connecting integrations** to your alert sources.

There are **two types of integrations**, depending on how alerts flow into OpsiMate:

- **Pull integrations** (for example Grafana):
  - Once configured, OpsiMate automatically **pulls alerts** from the source.
  - New alerts appear in OpsiMate without extra setup.
  - When the alert status changes in the source (e.g., resolves), the status is **updated in OpsiMate** as well.
- **Push integrations** (for example GCP webhook):
  - The external system **pushes alerts** to OpsiMate, usually via a webhook URL.
  - Each alert event is sent directly from the source into OpsiMate.

For an overview of all supported integrations and how they behave, see the
**[Integrations Overview](/docs/integrations/overview)** page.

## Viewing Alerts

Once your integrations are configured, you can view alerts from the **Alerts tab**:

- Open the **Alerts** tab in OpsiMate
- Use the **alerts table** to see all active alerts
- Filter and sort by status, source, or service

## Alert States

Alerts can have the following states:
- **Active**: Currently firing
- **Dismissed**: Manually acknowledged by a user

The system automatically updates alert states based on your integration provider's data.
