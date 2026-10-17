---
sidebar_position: 6
---

# Callbacks

A callback is an HTTP request OpsiMate sends to a URL of yours **after** a user changes an alert: silences it, resolves it, assigns an owner, adds a comment, runs an action. Use it to keep a ticketing system, a chat bot or your own automation in step with what people do in OpsiMate.

Callbacks are configured by admins under **Settings → Callbacks**.

## How a callback fires

1. The user's change is written to the database and to the alert's History tab.
2. Only then is the callback queued. The user's request returns immediately; it never waits for your receiver.
3. The request is sent in the background with a 5 second timeout. If the receiver fails or does not answer, OpsiMate retries after 1 s, 5 s and 30 s, then gives up and records the error. The Settings list shows the last delivery of each callback (Delivered / Failed with the error).

A slow or broken receiver can therefore never slow down or fail an action in OpsiMate.

Requests for one callback are sent one at a time, in order. A receiver that is down keeps at most 500 deliveries waiting per callback; beyond that, new ones are dropped and counted in the `opsimate_callbacks_sent_total{outcome="dropped"}` metric.

## Events

Each callback subscribes to a set of events. An event fires for every entry a **user action** writes to the alert's History tab, so the list below and the History tab always agree. Automatic changes (a source reporting recovery, a silence expiring, the daily silence reset, retention clean-up) never fire a callback.

| Event | When |
| --- | --- |
| `silenced` | A user silenced the alert. `details.silencedUntil` is the expiry (null = until unsilenced), `details.comment` the optional comment. |
| `unsilenced` | A user unsilenced the alert. |
| `resolved` | A user resolved the alert manually. `details.comment` is the optional comment. |
| `unresolved` | A user moved a resolved alert back to firing. |
| `owner_assigned` | An owner was set. `details.ownerId` / `details.ownerName` name the owner. |
| `owner_unassigned` | The owner was removed. |
| `comment_added` | A comment was added. `details.comment` is its text. |
| `action_run` | An action was run against the alert. `details.actionName` names it. |
| `deleted` | A resolved alert was deleted permanently. `alerts[0]` is its last snapshot. |

Some user actions write more than one entry: silencing with a JWT user also assigns the alert to that user (`owner_assigned`), and a silence or resolve with a comment also adds the comment (`comment_added`). Each entry is its own callback request.

## Bulk actions

A bulk action (silence, resolve, assign or comment on many alerts from the selection bar) produces **one request per event** carrying every affected alert, not one request per alert. The payload is the same shape; `bulk` is `true` and `alerts` holds the whole list.

## The request

```
POST <your URL>
Content-Type: application/json
User-Agent: OpsiMate-Callback/1
X-OpsiMate-Event: silenced
X-OpsiMate-Delivery: 2f9e0c7e-6a2b-4a3b-9c1d-5d7e8f9a0b1c
X-OpsiMate-Timestamp: 1760522400
X-OpsiMate-Signature: sha256=3b2f…
<your headers>
```

The method is POST or PUT. Headers you configure are added on top of the defaults (and can override `Content-Type`); this is where a receiver's auth token goes.

### Payload

```json
{
  "event": "silenced",
  "timestamp": "2026-10-15T10:00:00.000Z",
  "actor": { "id": "7", "name": "Dana Levi" },
  "alerts": [
    {
      "id": "grafana-123",
      "alertName": "High CPU on web-1",
      "status": "firing",
      "severity": "critical",
      "type": "Grafana",
      "tags": { "env": "prod", "team": "platform", "severity": "critical" },
      "startsAt": "2026-10-15T09:40:00.000Z",
      "updatedAt": "2026-10-15T09:58:00.000Z",
      "alertUrl": "https://grafana.example.com/alerting/123",
      "summary": "CPU above 90% for 10 minutes",
      "isSilenced": true,
      "silencedUntil": null,
      "ownerId": null
    }
  ],
  "details": { "silencedUntil": null, "comment": "Looking into it" },
  "bulk": false
}
```

- `actor.id` is the user's id when the request carried a user session, `null` for an API-token caller. `actor.name` is the display name.
- `alerts` always contains the full alert objects as OpsiMate stores them (the same shape the alerts API returns). A single action has one entry; a bulk action has many.
- `details` carries the event-specific extras listed in the events table. Keys that do not apply are absent.

### Verifying the signature

Every callback with a secret is signed. The signed string is the `X-OpsiMate-Timestamp` value, a dot, and the raw request body:

```
signature = "sha256=" + hex(HMAC-SHA256(secret, timestamp + "." + body))
```

Compare it in constant time with the `X-OpsiMate-Signature` header, and reject requests whose timestamp is older than a few minutes to stop replays. Node.js example:

```js
import { createHmac, timingSafeEqual } from 'node:crypto';

export const isFromOpsiMate = (secret, headers, rawBody) => {
  const timestamp = headers['x-opsimate-timestamp'];
  const expected = 'sha256=' + createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex');
  const given = headers['x-opsimate-signature'] ?? '';
  const fresh = Math.abs(Date.now() / 1000 - Number(timestamp)) < 300;
  return fresh && given.length === expected.length && timingSafeEqual(Buffer.from(given), Buffer.from(expected));
};
```

The secret is generated when the callback is created. It is shown in the edit dialog (Copy) and can be rotated there; you may also type your own (at least 8 characters).

### Body template

By default the JSON payload above is sent. A body template replaces it with text of your own, using the same `{{variable}}` syntax as [Actions](./actions.md): every alert variable (`{{name}}`, `{{severity}}`, `{{label.env}}`, …) is taken from the **first** alert of the payload, plus:

| Variable | Value |
| --- | --- |
| `{{event}}` | The event name |
| `{{timestamp}}` | When the change happened (ISO) |
| `{{actor.name}}`, `{{actor.id}}` | Who made the change |
| `{{count}}` | Number of alerts in the payload |
| `{{alertIds}}` | The alert ids, comma separated |
| `{{payload}}` | The whole JSON payload, for nesting it under your own envelope |

Values are inserted as-is (no JSON escaping), so a comment containing a quote can break a JSON template; put free text in `{{payload}}` when that matters. The signature covers the rendered body.

## Managing callbacks

**Settings → Callbacks** lists every callback with its events, last delivery and an on/off switch.

- A new callback is created **off**. Nothing is sent until an admin switches it on; the switch in the list is the only thing that enables it.
- **Send test** in the dialog sends one sample `silenced` payload to the URL as typed (saved or not) and shows the receiver's status code and answer. Tests are not retried.
- Edits take effect immediately. Deliveries that were still queued when a callback is switched off are skipped.
- Creating, editing and deleting callbacks is recorded in the [audit log](../user-management/audit-logs.md). The secret and header values are never written there, only header names.

## API

All endpoints need an admin session.

| Method | Path | What |
| --- | --- | --- |
| GET | `/api/v1/callbacks` | List callbacks (with `lastStatus`, `lastError`, `lastSentAt`) |
| POST | `/api/v1/callbacks` | Create. Body: `name`, `url` (http/https), `method` (POST default), `headers`, `bodyTemplate`, `events`, `enabled` (false default), `secret` (optional) |
| GET | `/api/v1/callbacks/:id` | One callback |
| PUT | `/api/v1/callbacks/:id` | Partial update; only the fields sent change |
| DELETE | `/api/v1/callbacks/:id` | Delete |
| POST | `/api/v1/callbacks/test` | Send one sample request. Body: `url`, `method`, `headers`, `bodyTemplate`, `secret` |

Metrics: `opsimate_callbacks_sent_total{event, outcome}` counts deliveries by final outcome (`success`, `error` after retries, `dropped`).
