---
sidebar_position: 7
---

# Root Cause Analysis API

If you already run an analyzer — an AI agent, a runbook engine, a script — OpsiMate can carry its conclusion for you. You push the analysis onto an alert, operators see it in the alert's details panel, rate it 👍 or 👎, and their verdict is sent straight back to your system so the next analysis can be better.

OpsiMate does not generate the analysis here; it stores, displays and routes feedback on it.

## Which alert

Use the alert `id` your system sent when it created the alert. The custom-alerts ingest endpoint echoes it back as `data.alertId`:

```json
{ "success": true, "data": { "alertId": "incident-4711", "status": "firing" } }
```

The id is yours to choose, so it is normally your own incident or ticket reference. An analysis can be pushed whether the alert is still active or already resolved — resolving an alert keeps its root cause; firing again under the same id hides it. It is dropped when the alert is permanently deleted, or when the **Root cause analyses** data-retention policy purges it (the policy is off until an admin enables it; its default window is 365 days).

## One analysis per episode

An analysis explains one firing episode. When a resolved alert fires again under the same id, the previous analysis is hidden: `GET /api/v1/alerts/{alertId}/root-cause` returns `200` with `rootCause: null`, and `POST /api/v1/alerts/{alertId}/root-cause/rating` returns `404` (`No root cause for this alert`). Push a new analysis with `PUT` for the new episode — it replaces the hidden analysis and its feedback URLs, and clears the rating.

Unresolving an alert from the UI is not a re-fire and keeps its analysis. Repeated firing requests to `/api/v1/alerts/custom` while the alert is still firing also keep it.

## Push an analysis

```
PUT /api/v1/alerts/{alertId}/root-cause
```

```bash
curl -X PUT "https://opsimate.example.com/api/v1/alerts/incident-4711/root-cause" \
  -H "Content-Type: application/json" \
  -H "x-api-token: <your API token>" \
  -d '{
    "content": "Node pool spot-01 was evicted at 09:12; 3 of 5 replicas unschedulable.",
    "feedbackUpUrl": "https://analyzer.example.com/rating?token=secret&direction=up",
    "feedbackDownUrl": "https://analyzer.example.com/rating?token=secret&direction=down"
  }'
```

| Field | Required | Limits |
| --- | --- | --- |
| `content` | yes | 1–65,536 characters. Rendered as plain text, with line breaks preserved — no markdown. |
| `feedbackUpUrl` | no | A valid URL, at most 2,048 characters. |
| `feedbackDownUrl` | no | A valid URL, at most 2,048 characters. |

Both URLs are optional and are stored exactly as given — a push is only rejected if they are not valid URLs; the safety rules under [The callback](#the-callback) apply when the callback fires. They may embed a secret: they are stored server-side and **never** returned by any read endpoint. OpsiMate sends no authentication headers with the callback, so whatever your endpoint needs has to travel in the URL.

A successful push returns the stored analysis, with `source` telling you it came from the API and the rating fields empty until someone votes:

```json
{
  "success": true,
  "data": {
    "rootCause": {
      "alertId": "incident-4711",
      "source": "api",
      "content": "Node pool spot-01 was evicted at 09:12; 3 of 5 replicas unschedulable.",
      "rating": null,
      "ratedBy": null,
      "ratedAt": null,
      "ratingComment": null,
      "createdAt": "2026-10-12T09:20:41.812Z",
      "updatedAt": "2026-10-12T09:20:41.812Z"
    }
  }
}
```

**Pushing again replaces the content and the feedback URLs, and clears the rating.** A URL you leave out of the new push is cleared, not kept. A 👍 collected on the previous analysis must not silently endorse the new one, so the verdict starts empty on every push — even one with identical content.

If no alert with that id exists, active or resolved, the push returns `404` (`Alert not found`); an invalid body returns `400`.

## Read it back

```
GET /api/v1/alerts/{alertId}/root-cause
```

Returns `{ "success": true, "data": { "rootCause": … } }`, or `rootCause: null` when nothing has been pushed — that is a `200`, not a `404`. The two callback URLs are never included.

## Ratings

```
POST /api/v1/alerts/{alertId}/root-cause/rating
```

```json
{ "rating": "down", "comment": "The eviction was a red herring; it was a quota problem." }
```

- `rating` is `"up"` or `"down"`.
- `comment` is optional, at most 2,000 characters, and is stored **only** with `"down"` — the server drops it for `"up"`.
- Rating is a human action: it needs a logged-in user. A call with only an API token gets `401` (`Rating requires a user session`).
- If the alert has no analysis, or its previous analysis was hidden after it fired again, `404` (`No root cause for this alert`).
- Re-rating overwrites the previous verdict, and a new rating without a comment clears the old comment.

The response tells you whether the callback got through:

```json
{ "success": true, "data": { "rootCause": { "…": "…" }, "callbackDelivered": false } }
```

`callbackDelivered` is `true` on success, `false` if your endpoint refused or failed, and `null` when no matching URL was configured. The rating is saved either way.

## The callback

When someone rates an analysis, OpsiMate sends one `POST` with `Content-Type: application/json` to `feedbackUpUrl` or `feedbackDownUrl`:

```json
{
  "alertId": "incident-4711",
  "rating": "down",
  "ratedBy": "Dana Operator",
  "ratedAt": "2026-10-12T09:31:02.000Z",
  "comment": "The eviction was a red herring; it was a quota problem."
}
```

`comment` is always present in the payload and is `null` for a 👍.

Delivery is deliberately best-effort:

- the verdict is written to OpsiMate's database **before** the callback is attempted;
- a **3-second** timeout applies;
- redirects are refused (`redirect: 'error'`), so the URL must be final;
- there is **no retry** — a failure is logged and reported as `callbackDelivered: false`;
- no authentication headers are attached.

**URL safety.** These rules are checked when the callback fires, not when you push: an unsafe URL is still stored, and the rating then reports `callbackDelivered: false`. Only `http` and `https` targets are called. Link-local addresses are refused — `169.254.0.0/16`, which includes the cloud instance metadata service, and IPv6 link-local `fe80::/…`. Private and loopback addresses are allowed, so an analyzer collector on your internal network is fine.

## Authentication summary

| Action | Credential |
| --- | --- |
| `PUT` root cause | Your API token — `x-api-token` header, `api_token` query parameter, or a user's bearer token. A logged-in **Viewer** is rejected with `403`. |
| `GET` root cause | The same credentials. A **Viewer** can read. |
| `POST` rating | A logged-in user session. An API token alone is `401`. |

## What operators see

In the alert's details panel a **Root cause** section appears once an analysis exists: the text, labelled **via API** with how long ago (an **AI analysis** label is reserved for a future OpsiMate feature; nothing produces it yet), and 👍 / 👎 buttons underneath. A 👎 first asks **"What went wrong?"** — an optional note the operator can skip — and after a verdict the section shows who rated it and when. Ratings can be changed at any time. The section is absent when no analysis has been pushed, and disappears when a resolved alert fires again until a new analysis arrives.

Rating needs an account that can edit: the server rejects a **Viewer** with `403 Forbidden`, so a verdict comes from an admin, editor or operation user.

## Next steps

- [Custom Alerts](../integrations/custom-alerts.md) — pushing alerts in, and where the `alertId` comes from
- [Alert Management](./alert-management.md) — the details panel the analysis shows up in
- [Silences and Mute Policies](./silences-and-mute-policies.md) — pausing an alert while you work on it
