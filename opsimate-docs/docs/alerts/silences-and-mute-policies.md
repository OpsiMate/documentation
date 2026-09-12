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

Label equality compares the complete value and is case-sensitive. A label
`contains` condition compares a substring case-insensitively. A missing label does
not satisfy a matcher. An empty policy does not match everything: supply criteria
or explicitly select **Apply to all alerts**.

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

For alert lifecycle actions, see [Alert Management](./alert-management.md).
