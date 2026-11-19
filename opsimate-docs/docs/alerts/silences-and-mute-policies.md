---
sidebar_position: 6
---

# Silences and Mute Policies

Use a **silence** when you have reviewed an individual alert and want to pause it
temporarily. Use a **mute policy** to mark alerts that match a maintenance window
or a known issue. Neither operation resolves or deletes the alert.

## Silence an alert

1. Open an active alert's details panel and select **Silence**, or use the alert
   row's action menu. You can also select several alerts and silence them together.
2. Choose a duration: **Until midnight**, **5 minutes**, **15 minutes**,
   **30 minutes**, **1 hour**, **2 hours**, or **6 hours**. Midnight is in your
   browser's local time zone.
3. Optionally add a comment explaining the silence, then confirm.

Silencing an alert assigns it to you. Silencing it again restarts its timer.
The status icon in the table and details panel identifies it as **Silenced**;
hover over the icon to see when a timed silence ends. Select **Unsilence** in the
details panel or row menu to end it early.

Your dashboard's status filters determine whether silenced alerts are visible.
Use the **Silenced** button above the active alerts table to show or hide them.

Administrators can also configure **Settings → Alert Silences → Daily silence
reset**. When enabled, silences established before the daily reset are cleared at
the configured hour in **server time**, even if their individual duration is longer.
Silences created after that reset remain until their own expiry or the next reset.

## Create a mute policy

Open **Mute Policies** and select **New mute policy**.

1. Enter a descriptive **Name**, such as `Weekly database maintenance`.
2. Set name criteria, label criteria, or both using the matching rules below.
   Choose **Apply to all alerts (ignore name and label criteria)** only when the
   policy should cover every alert.
3. Choose a **One-time** window or a **Recurring** schedule.
4. Optionally add **Reason / notes**, then save the policy.

An active matching policy marks the alert as **Muted**. It does not remove the
stored alert. A dashboard filtered to **Firing** excludes muted alerts; include
**Muted** in the status filter to inspect them. A silenced alert displays the
**Silenced** status even when it also matches a mute policy.

### Matching rules

| Criteria | How they match |
| --- | --- |
| Name substrings | Any supplied substring may match. Matching is case-insensitive. |
| Labels within one group | Every matcher in that group must match. |
| Multiple label groups | Any complete group may match. |
| Name and label criteria together | Both the name condition and a label group must match. |
| Apply to all alerts | Ignores name and label criteria. |

Label equality compares the complete value and is case-sensitive. A label `contains` condition compares a substring case-insensitively. The `exists` operator matches when a label is present, regardless of its value. A missing label does not satisfy an `exists` matcher. An empty policy does not match everything: supply criteria or explicitly select **Apply to all alerts**.

For example, a name substring `database` and one label group containing
`env = production` and `team = platform` match `Database connection errors` only
when **both** labels have those values. Adding another name substring `replication`
allows either name, while retaining the same label requirements.

### Time windows

**One-time:** set **Starts at** and **Ends at**, or use a duration preset. Without
a start, the policy applies immediately; without an end, it has no expiry. The
start is inclusive and the end is exclusive.

**Recurring:** select the days of the week and the start and end times. These
times use the **server's local time zone**. The current form requires the end time
to be later than the start time on the same day; it does not accept an overnight
window in a single schedule.

## Manage policies

The **Mute Policies** page shows each policy's matching criteria, time window, and
status: **Active**, **Scheduled**, or **Expired**. Search by policy name, name
criteria, labels, or notes. Use the pencil button to edit a policy, or the trash
button to delete it after confirmation.

Policies are controlled by their time windows; there is no separate enable/disable
switch. To stop a policy, edit its window or delete it. Ending one policy does not
remove another matching policy or an individual alert silence.

## API

The API lets you silence and unsilence alerts, manage bulk silence actions, configure the daily silence reset, and create and manage mute policies.

### Authentication

Use one of the following credentials for API requests:

- **API token:** Send the shared API token in the `x-api-token` header or as the `api_token` query parameter. This is the same token used by webhooks.
- **User session:** Send a user's JWT as `Authorization: Bearer <JWT>`.

A logged-in **Viewer** can read data but cannot perform write operations; write requests return `403 Forbidden`. Daily silence reset settings are admin-only, and requests authenticated with an API token are rejected with `403 Forbidden`.

When using an API token, there is no acting user. Silences created using an API token are not assigned a new owner. If the silence already has an owner, the existing owner is preserved, and a supplied comment is not stored.

### Silence an alert

```http
PATCH /api/v1/alerts/{alertId}/silence
```

Silences an alert until a specified time, or indefinitely if `silencedUntil` is `null` or omitted. Re-silencing an alert replaces its existing `silencedUntil` value, restarting the timer.

```bash
curl -X PATCH "https://opsimate.example.com/api/v1/alerts/incident-4711/silence" \
  -H "Content-Type: application/json" \
  -H "x-api-token: <your API token>" \
  -d '{
    "silencedUntil": null,
    "comment": "Investigating this alert"
  }'
```

| Field | Required | Limits |
| --- | --- | --- |
| `alertId` | yes | Alert ID in the URL. |
| `silencedUntil` | no | A date string accepted by `Date.parse`; stored in UTC. `null` or omitted means indefinite silence until explicitly unsilenced. |
| `comment` | no | Maximum 5,000 characters. Not stored when authenticated with an API token. |

A successful request returns `200` with `{ "success": true, "data": { "alert": ... } }`. If the alert does not exist, the API returns `404`; an invalid request body returns `400`.

The UI does not offer indefinite silencing. The daily silence reset also clears indefinite silences created through the API.

### Unsilence an alert

```http
PATCH /api/v1/alerts/{alertId}/unsilence
```

Removes the silence from an alert. This endpoint does not require a request body.

```bash
curl -X PATCH "https://opsimate.example.com/api/v1/alerts/incident-4711/unsilence" \
  -H "x-api-token: <your API token>"
```

A successful request returns `200` with `{ "success": true, "data": { "alert": ... } }`. If the alert does not exist, the API returns `404` (`Alert not found`).

### Bulk silence actions

```http
POST /api/v1/alerts/bulk
```

Use this endpoint to silence or unsilence multiple alerts in one request. Provide exactly one of `ids` or `query`. The `ids` option accepts 1–10,000 alert IDs. The `query` option uses the same `filters`, `from`, `to`, and `search` parameters as the alert list.

```bash
curl -X POST "https://opsimate.example.com/api/v1/alerts/bulk" \
  -H "Content-Type: application/json" \
  -H "x-api-token: <your API token>" \
  -d '{
    "action": "silence",
    "ids": ["incident-4711", "incident-4712"],
    "silencedUntil": null,
    "comment": "Investigating related alerts"
  }'
```

| Field | Required | Limits |
| --- | --- | --- |
| `action` | yes | This section documents `silence` and `unsilence`. The endpoint also accepts `resolve`, `assignOwner`, and `comment`. |
| `ids` | one of `ids` or `query` | Array of 1–10,000 alert IDs. |
| `query` | one of `ids` or `query` | Object with `filters`, `from`, `to`, and `search`, using the same format as the alert list. |
| `silencedUntil` | for `silence` | A date string accepted by `Date.parse`; stored in UTC. `null` or omitted means indefinite silence until explicitly unsilenced. |
| `comment` | no | Maximum 5,000 characters. Not stored when authenticated with an API token. |

A successful request returns `200` with `{ "success": true, "data": { "matched": 0, "succeeded": 0, "failed": 0 } }`. An unknown alert ID counts as a failure in `failed`; it does not make the entire request an error.

### Daily silence reset

#### Read the reset settings

```http
GET /api/v1/alerts/silence-reset
```

Returns the daily silence reset configuration.

```bash
curl "https://opsimate.example.com/api/v1/alerts/silence-reset" \
  -H "Authorization: Bearer <your admin JWT>"
```

A successful request returns `200` with the current settings:

```json
{
  "success": true,
  "data": {
    "enabled": true,
    "hour": 0,
    "lastClearedAt": null
  }
}
```

| Field | Description |
| --- | --- |
| `enabled` | Whether the daily reset is enabled. |
| `hour` | The reset hour, from `0` to `23`, in the server's local time zone. |
| `lastClearedAt` | Timestamp of the last reset, or `null` if no reset has occurred. |

#### Update the reset settings

```http
PUT /api/v1/alerts/silence-reset
```

Updates the daily silence reset configuration. You must be an administrator to change these settings. API-token authentication is not permitted for this endpoint.

```bash
curl -X PUT "https://opsimate.example.com/api/v1/alerts/silence-reset" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your JWT>" \
  -d '{
    "enabled": true,
    "hour": 2
  }'
```

| Field | Required | Limits |
| --- | --- | --- |
| `enabled` | no | Boolean. |
| `hour` | no | Integer from `0` to `23`, in the server's local time zone. |

Provide at least one of `enabled` or `hour`. If neither is provided, the API returns `400`. A successful request returns `200` with the updated settings.

### Mute policies

#### List mute policies

```http
GET /api/v1/mute-policies
```

Returns all mute policies.

```bash
curl "https://opsimate.example.com/api/v1/mute-policies" \
  -H "x-api-token: <your API token>"
```

A successful request returns `200` with `{ "success": true, "data": [ ... ] }`, where `data` is an array of mute policies.

#### Create a mute policy

```http
POST /api/v1/mute-policies
```

Creates a mute policy.

```bash
curl -X POST "https://opsimate.example.com/api/v1/mute-policies" \
  -H "Content-Type: application/json" \
  -H "x-api-token: <your API token>" \
  -d '{
    "name": "Nightly maintenance",
    "nameContainsAny": ["database", "worker"],
    "labelMatcherGroups": [
      [
        { "key": "environment", "value": "production", "op": "equals" }
      ]
    ],
    "matchAll": false,
    "schedule": {
      "daysOfWeek": [0, 6],
      "startTime": "22:00",
      "endTime": "23:30"
    },
    "reason": "Scheduled weekend maintenance"
  }'
```

| Field | Required | Limits |
| --- | --- | --- |
| `name` | yes | Maximum 200 characters. |
| `nameContainsAny` | no | Up to 20 name substrings; each substring can contain at most 500 characters. |
| `nameContains` | no | Legacy name-substring field; maximum 500 characters. `nameContainsAny` takes priority when both are supplied. |
| `labelMatcherGroups` | no | Up to 20 groups, each with up to 20 matchers. |
| `labelMatcherGroups[].[].key` | for each matcher | Label key to match; maximum 200 characters. |
| `labelMatcherGroups[].[].value` | depends on `op` | Maximum 500 characters. Required for `equals` and `contains`; omit for `exists`. |
| `labelMatcherGroups[].[].op` | no | `equals` (default), `contains`, or `exists`. |
| `matchAll` | no | Boolean; when `true`, the policy matches all alerts. |
| `startsAt` | no | ISO datetime with a time-zone offset; starts the one-time window. |
| `endsAt` | no | ISO datetime with a time-zone offset; ends the one-time window. |
| `schedule` | no | Recurring schedule with `daysOfWeek`, `startTime`, and `endTime`. |
| `schedule.daysOfWeek` | for a schedule | Days numbered `0` (Sunday) through `6` (Saturday). |
| `schedule.startTime` | for a schedule | `HH:MM`, 24-hour server local time. |
| `schedule.endTime` | for a schedule | `HH:MM`, 24-hour server local time; must be later than `startTime`. |
| `reason` | no | Maximum 1,000 characters. |
`startsAt` must be earlier than `endsAt` when both are provided.
At least one name substring or label matcher is required unless `matchAll` is `true`. A recurring `schedule` cannot be combined with `startsAt` or `endsAt`. Within each label matcher group, all matchers must match; any matching group is sufficient.

A successful create returns `201` with `{ "success": true, "data": ... , "message": ... }`. Invalid input returns `400`.

#### Get a mute policy

```http
GET /api/v1/mute-policies/{id}
```

Returns the mute policy with the specified positive integer ID.

```bash
curl "https://opsimate.example.com/api/v1/mute-policies/12" \
  -H "x-api-token: <your API token>"
```

A successful request returns `200` with `{ "success": true, "data": ... }`. If the policy does not exist, the API returns `404` (`Mute policy not found`).

#### Update a mute policy

```http
PUT /api/v1/mute-policies/{id}
```

Updates an existing mute policy. Send the fields you want to change. Note that `nameContains` and `nameContainsAny` are treated as a pair: updating either field replaces both together. The same applies to the label matcher fields: updating the label matcher configuration replaces the existing configuration rather than updating only one field. The merged policy is validated against the same rules as policy creation. For example, adding `schedule` to a policy that already has `startsAt` and `endsAt` returns `400 Bad Request` unless you also set `startsAt` and `endsAt` to `null`.

```bash
curl -X PUT "https://opsimate.example.com/api/v1/mute-policies/12" \
  -H "Content-Type: application/json" \
  -H "x-api-token: <your API token>" \
  -d '{
    "reason": "Maintenance window extended"
  }'
```

The request accepts the same policy fields described in [Create a mute policy](#create-a-mute-policy). A successful request returns `200` with `{ "success": true, "data": ... , "message": ... }`. If the policy does not exist, the API returns `404` (`Mute policy not found`).

#### Delete a mute policy

```http
DELETE /api/v1/mute-policies/{id}
```

Deletes the mute policy with the specified positive integer ID.

```bash
curl -X DELETE "https://opsimate.example.com/api/v1/mute-policies/12" \
  -H "x-api-token: <your API token>"
```

A successful request returns `200` with `{ "success": true, "message": ... }`. If the policy does not exist, the API returns `404` (`Mute policy not found`).

For alert lifecycle actions, see [Alert Management](./alert-management.md).
