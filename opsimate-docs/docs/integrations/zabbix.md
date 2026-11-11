---
sidebar_position: 6
tags: [Alerts]
---

# Zabbix Integration

The **Zabbix integration** lets you send alerts from Zabbix into OpsiMate using **webhook-based push notifications**.

Instead of OpsiMate pulling alerts from Zabbix, your Zabbix media type **pushes alerts** directly to OpsiMate.

## Webhook URL

Configure your Zabbix media type to send alerts to your OpsiMate server:

```text
http://localhost:3001/api/v1/alerts/custom/zabbix?api_token={your_api_token}
```

Replace `{your_api_token}` with the API token configured in your OpsiMate server (default: `opsimate`).

## API Token Configuration

:::info Where the API token comes from

- **With a config file** (`CONFIG_FILE` points to an existing file): the token is `security.api_token` in `config.yml`, and the `API_TOKEN` environment variable is ignored. The shipped `docker-compose.yml`, the Helm chart and the all-in-one image all run this way. The `default-config.yml` they start from sets it to `opsimate`.
- **Without a config file**: the token comes from the `API_TOKEN` environment variable, and falls back to `opsimate`.

Change the default for anything that is not a demo. See [Configuration](/docs/getting-started/configuration).

Send the token in either of these ways:

- the `api_token` query parameter: `?api_token=YOUR_TOKEN`
- the `X-API-Token` header: `X-API-Token: YOUR_TOKEN`

:::

Use the same value in the Zabbix webhook URL.

## Setting Up the Webhook in Zabbix

The quickest way is to import the ready-made media type. Writing it by hand is described below as an alternative.

### Option A: Import the OpsiMate media type (recommended)

The OpsiMate repository ships an official-style Zabbix media type: [`infrastructure/zabbix/media_opsimate.yaml`](https://github.com/OpsiMate/OpsiMate/blob/main/infrastructure/zabbix/media_opsimate.yaml) (Zabbix 7.0 and later). Its [README](https://github.com/OpsiMate/OpsiMate/blob/main/infrastructure/zabbix/README.md) documents every parameter.

1. Download the file: [media_opsimate.yaml](https://raw.githubusercontent.com/OpsiMate/OpsiMate/main/infrastructure/zabbix/media_opsimate.yaml).
2. In **Zabbix**, go to **Alerts → Media types** (**Administration → Media types** on older versions) and click **Import**. Select the file and import.
3. Open the imported **OpsiMate** media type and set two parameters:

   | Parameter | Value |
   |---|---|
   | `opsimate_url` | Your OpsiMate server base URL, for example `http://opsimate.example.com:3001`. The webhook path is appended automatically. |
   | `opsimate_token` | The value of your server's `API_TOKEN` (default `opsimate`). Sent as the `x-api-token` header, not in the URL. |

   `zabbix_url` defaults to the `{$ZABBIX.URL}` global macro; set that macro to your Zabbix frontend URL so alerts in OpsiMate link back to the problem.
4. Enable the media type (it is imported disabled), then continue with [assigning it to a user](#step-4-assign-media-type-to-users) and [creating an action](#step-5-create-an-action) below.

What the media type does for you: it validates the two parameters before sending, drops any macro Zabbix left unexpanded, skips acknowledgement updates (they would otherwise overwrite the alert summary), and turns HTTP errors into readable messages in the Zabbix action log (for example a 401 says the token was rejected). Use the **Test** button on the media type to check the connection: it creates a firing **Test Alert** in OpsiMate, which you resolve by hand.

### Option B: Create the media type by hand

#### Step 1: Create a New Media Type

1. In **Zabbix**, go to **Administration → Media types**.
2. Click **Create media type**.
3. Set the following:
   - **Name**: `OpsiMate`
   - **Type**: `Webhook`

#### Step 2: Add the Webhook Script

Copy this JavaScript code into the **Script** field:

```javascript
try {
    var params = JSON.parse(value);
    var req = new HttpRequest();
    req.addHeader('Content-Type: application/json');
    req.addHeader('x-api-token: ' + params.token);

    var payload = {
        event_id: params.event_id,
        event_name: params.event_name,
        host_name: params.host_name,
        host_ip: params.host_ip,
        trigger_id: params.trigger_id,
        trigger_name: params.trigger_name,
        trigger_severity: params.trigger_severity,
        trigger_status: params.trigger_status,
        event_date: params.event_date,
        event_time: params.event_time,
        event_value: params.event_value,
        event_tags: params.event_tags,
        item_name: params.item_name,
        item_value: params.item_value,
        alert_message: params.alert_message,
        event_recovery_date: params.event_recovery_date,
        event_recovery_time: params.event_recovery_time,
        zabbix_url: params.zabbix_url,
        trigger_url: params.trigger_url
    };

    var response = req.post(params.URL, JSON.stringify(payload));

    if (req.getStatus() != 200) {
        throw 'HTTP error: ' + req.getStatus() + ' ' + response;
    }

    return 'OK';
} catch (error) {
    throw 'OpsiMate webhook error: ' + error;
}
```

#### Step 3: Add Parameters

Add the following parameters in the **Parameters** section of the media type:

| Parameter Name | Value (Zabbix Macro) |
|----------------|----------------------|
| `URL` | `http://localhost:3001/api/v1/alerts/custom/zabbix` |
| `token` | `{your_api_token}` |
| `event_id` | `{EVENT.ID}` |
| `event_name` | `{EVENT.NAME}` |
| `host_name` | `{HOST.NAME}` |
| `host_ip` | `{HOST.IP}` |
| `trigger_id` | `{TRIGGER.ID}` |
| `trigger_name` | `{TRIGGER.NAME}` |
| `trigger_severity` | `{TRIGGER.SEVERITY}` |
| `trigger_status` | `{TRIGGER.STATUS}` |
| `event_date` | `{EVENT.DATE}` |
| `event_time` | `{EVENT.TIME}` |
| `event_value` | `{EVENT.VALUE}` |
| `event_tags` | `{EVENT.TAGS}` |
| `item_name` | `{ITEM.NAME}` |
| `item_value` | `{ITEM.VALUE}` |
| `alert_message` | `{ALERT.MESSAGE}` |
| `event_recovery_date` | `{EVENT.RECOVERY.DATE}` |
| `event_recovery_time` | `{EVENT.RECOVERY.TIME}` |
| `zabbix_url` | `https://your-zabbix-server.com` |
| `trigger_url` | `{TRIGGER.URL}` |

:::important
Set `zabbix_url` to your actual Zabbix server URL so alerts in OpsiMate can link back to Zabbix.
:::

### Step 4: Assign Media Type to Users

1. Go to **Administration → Users**.
2. Select the user that should receive notifications.
3. Go to the **Media** tab.
4. Click **Add** and select **OpsiMate** as the media type.
5. Set **Send to** to any value (e.g., `opsimate`).
6. Configure the severity levels you want to forward.
7. Save the user.

### Step 5: Create an Action

1. Go to **Configuration → Actions → Trigger actions**.
2. Create or edit an action.
3. In the **Operations** tab, add an operation that sends a message via the **OpsiMate** media type, and a **Recovery operation** that does the same, so OpsiMate resolves the alert when the problem clears.
4. Save the action.

## Features

- **Auto-resolve**: Alerts are automatically archived when resolved in Zabbix
- **Deep links**: Click alerts in OpsiMate to jump directly to Zabbix
- **Rich tags**: Host, severity, and custom tags are preserved

## Important Disclaimer

Zabbix sends webhooks to **HTTP endpoints that must be reachable from the Zabbix server**.

- If you are running OpsiMate locally (for example at `http://localhost:3001`), Zabbix running on a different machine may **not** be able to call this URL directly.
- For production use, deploy OpsiMate behind a **reachable URL** (or expose it securely via tunneling / reverse proxy) so that Zabbix can reach the webhook endpoint.

Once configured, alerts pushed from Zabbix will appear in the **alerts table** in OpsiMate with the **Zabbix integration icon**, so you can easily identify their source.
