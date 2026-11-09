---
sidebar_position: 5
---

# Actions

An action is a configured integration (Slack webhook, Teams webhook, Jira, generic HTTP) that is fired against an Alert. 

## Creating an action

1. In the left sidebar, open **Actions**, then select **New action**.
2. Enter a **Name** and choose a **Type** (Slack, Teams, Jira or HTTP).
3. Fill in the **Configuration** for that type. See [Action types and what they need](#action-types-and-what-they-need).
4. Optionally, limit where the action is offered under **Show on alerts**. See [Show on alerts](#show-on-alerts).
5. Select **Send test** to check the configuration. See [Send test](#send-test).
6. Select **Create action**.

On the Actions page, the pencil on a row edits that action. It opens the same dialog, and the button reads **Save changes**. The trash icon deletes the action after you confirm.

## Show on alerts

**Show on alerts** controls which alerts an action is offered on in the alert view. It has two kinds of criteria:

| Criteria | How it matches |
| --- | --- |
| Alert name substrings | Any one substring may match. Matching is case-insensitive. |
| Label matcher groups | Any one group may match. Every matcher inside a group must match. |
| Name and labels together | Both must match: the name condition AND a label group. |

**An action with no criteria shows on every alert.** The dialog says so: "Leave empty to show this action on every alert." On the Actions page, such an action shows **All alerts** in its **Applies to** column.

This is not a permission. It only decides where the action is offered in the alert view. Mute policies and enrichments treat an empty rule the opposite way: with no criteria they match nothing. See [Match criteria](./enrichments.md#match-criteria).

## Action types and what they need

| Type | Required | Optional |
| --- | --- | --- |
| Slack | Webhook URL | Channel, Message template |
| Teams | Webhook URL | Title template, Message template |
| Jira | Base URL, Email, API token, Project key, Issue type | Summary template, Description template |
| HTTP | URL, Method | Headers, Body template, Don't wait for a response |

### HTTP: Don't wait for a response

By default an HTTP action waits for the receiver's answer (up to 10 seconds) and reports its status code. Switch on **Don't wait for a response** for endpoints that answer only once their work is done, for example a job runner that keeps the connection open until the job finishes.

With the switch on:

- The run is reported as **sent** as soon as the request has been handed to the network. The receiver's status code is not waited for; when it arrives, it is only written to the server log.
- Anything that fails before that point still fails the run: a wrong host, a refused port, a TLS error or a connection that does not open within 10 seconds.
- **Send test** behaves the same way: it confirms the request went out, not what the receiver answered.
- OpsiMate keeps the connection open for the answer for up to 5 minutes, then drops it. Each run opens its own connection.
- Redirects are not followed in this mode; a 3xx answer is logged with its `Location`.
- In metrics, these runs count as `opsimate_actions_run_total{outcome="sent"}` instead of `success`.

In the API this is `config.fireAndForget: true` on an action of type `http`.

## Send test

**Send test** runs the action with sample alert data and reports **Test succeeded** or **Test failed** with a message. Nothing is saved. The play button on each row of the Actions page runs the same test for an existing action.

The sample alert has these values:

| Field | Value |
| --- | --- |
| Name | `Test alert from OpsiMate` |
| ID | `test-alert-1` |
| Severity | `critical` |
| Service | `demo-service` |
| Tags | `env=prod`, `team=platform` |

:::warning
A test is a real request. A Slack or Teams action posts a real message, and a Jira action creates a real issue. Point the action at a test channel or project first.
:::

## Variable substitution in action payloads
Templates use: `{{name}}`

### Alert fields

Every field is available under a short name and an `alert.` prefixed alias. Both forms
resolve to the same value.

| Variable | Description |
| --- | --- |
| `{{name}}` | Alert name |
| `{{id}}` | Alert ID |
| `{{status}}` | e.g. `firing` |
| `{{type}}` | Alert type |
| `{{severity}}` | Alert severity |
| `{{summary}}` | Alert summary |
| `{{service}}` | Service the alert relates to |
| `{{startsAt}}` | When the alert started |
| `{{createdAt}}` | When the alert was created |
| `{{updatedAt}}` | When the alert was last updated |
| `{{url}}` | Link to the alert in OpsiMate |
| `{{runbookUrl}}` | Link to the runbook, if set |

### Tags
Tag values are available under three prefixes, all equivalent. Replace `env` with your tag's name:

| Variable | Description |
| --- | --- |
| `{{label.env}}` | Tag value, `label.` prefix |
| `{{tag.env}}` | Tag value, `tag.` prefix |
| `{{alert.tags.env}}` | Tag value, full path |

## Running an action from an alert
In the alert details panel there's a collapsible Actions section (with a count). Expanding it shows a button per action. Clicking one opens a dialog. The dialog builds a preview, lets you edit the fields, and you hit Send. Success or failure appears as a notification. There's also a Manage link to the Actions page, and if nothing's configured you get a prompt to create one.

## API

All routes are under `/api/v1/actions`. Every route needs a logged-in user or the API token (`x-api-token` header), as on the other API pages.

| Method & path | What it does |
| --- | --- |
| `GET /` | List actions |
| `GET /:actionId` | Get one action (404 if missing) |
| `POST /` | Create: `name`, `type` (`slack`, `teams`, `jira`, `http`), `config`, optional `nameContainsAny`, `labelMatcherGroups` |
| `PUT /:actionId` | Replace the whole action (same body as create, not a partial update) |
| `DELETE /:actionId` | Delete |
| `POST /test` | Send a test with sample alert data. Same body as create, nothing is saved. Returns `data.ok` and `data.message` |
| `POST /:actionId/preview` | Render the action for an alert without sending it |
| `POST /:actionId/run` | Run it against an alert, with optional overrides |

A logged-in Viewer gets `403` on every `POST`, `PUT` and `DELETE` above, including `test`, `preview` and `run`.

The `config` fields for each type are the ones in the [types table](#action-types-and-what-they-need).

## Alert History Timeline
Each entry is labelled as Action run with a description line and the timestamp followed by who ran it.

Action-run entries land on the Activity side rail, not the main lifecycle rail. So filtering to Activity isolates them.
