---
sidebar_position: 3
---

# Resolved Alerts

When an alert is resolved, by its source or by someone in OpsiMate, it moves to the **Resolved** tab on the Alerts page. OpsiMate keeps it there so you can review what happened and learn from past incidents.

## What You See in the Resolved View

In the **Resolved** tab, you can:

- Browse alerts that are no longer firing
- See when an alert started and when it was resolved
- Review severity, source integration, and tags
- Filter and search to find the time ranges, sources, or tags you care about

The API lists the same alerts with `GET /api/v1/alerts/resolved`.

## Analyzing Past Alerts

Use resolved alerts to:

- Identify recurring problems and noisy sources
- Spot patterns around specific integrations or environments
- Support post-incident reviews and long-term reliability improvements

For trends such as MTTR, MTTA and alert volume, see [Insights](./insights.md).

## Unresolve an Alert

Select an alert in the **Resolved** tab to open its details panel, then choose
**Unresolve**. The alert returns to the active list with **Firing** status.

The API does the same with `PATCH /api/v1/alerts/resolved/{id}/unresolve`.

## Permanently Delete a Resolved Alert

An admin can permanently delete a resolved alert, from the **Resolved** tab or with `DELETE /api/v1/alerts/resolved/{id}`. This can't be undone.

## Data Retention

Resolved alerts are kept until you delete them. An admin can turn on a retention policy for resolved alerts in **Settings → Data Retention**. When it is on, OpsiMate purges resolved alerts older than the configured period (180 days by default).
