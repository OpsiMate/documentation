---
sidebar_position: 5
---

# Actions

An action is a configured integration (Slack webhook, Teams webhook, Jira, generic HTTP) that is fired against an Alert. 

## Scope
Each action can be limited to certain alerts by name or criteria. 

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
- In [metrics](../getting-started/metrics.md), these runs count as `opsimate_actions_run_total{outcome="sent"}` instead of `success`.

In the API this is `config.fireAndForget: true` on an action of type `http`.

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

## Alert History Timeline
Each entry is labelled as Action run with a description line and the timestamp followed by who ran it.

Action-run entries land on the Activity side rail, not the main lifecycle rail. So filtering to Activity isolates them.
