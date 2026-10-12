---
sidebar_position: 5
---

# AI (beta)

OpsiMate's AI features are **bring your own**: you put an Amazon Bedrock API key in your own server settings, and OpsiMate uses it — nothing is sent to any other provider, and no alert data moves until somebody actually uses an AI feature.

Today one feature uses it: **AI search** in the alerts toolbar. The same settings tab also holds the guide for pushing your own [root cause analyses](#the-root-cause-guide-on-this-tab).

## Setup (admin)

Open **Settings → AI (Beta)**. The page has four fields, then a switch and two buttons.

| Field | What to put in it |
| --- | --- |
| **AWS region** | Free text, with suggestions: `us-east-1`, `us-west-2`, `eu-west-1`, `eu-central-1`, `ap-southeast-1`, `ap-northeast-1`. |
| **Model id** | Free text, with suggestions for Claude Sonnet, Claude Haiku, Amazon Nova Pro / Lite and Llama 3.3 70B. Any inference-profile id Bedrock accepts works. |
| **Endpoint URL (optional)** | Leave empty to call the normal Bedrock runtime for your region. Set it only for a proxy such as LiteLLM — see [Custom endpoint rules](#custom-endpoint-rules). |
| **Bedrock API key** | Generated in the AWS console under **Bedrock → API keys**. The field is a password field and the key is never shown again after saving. |

Then press **Save**.

**About the key.** It is stored encrypted on the OpsiMate server (AES-256-GCM, derived from your `ENCRYPTION_KEY`) and is never returned to the browser — the API only reports whether one is saved. Leaving the field empty on a later save keeps the stored key; typing a new value replaces it. **Remove key** deletes it and turns AI off at the same time, and OpsiMate logs the change without the key material. Because the encryption derives from `ENCRYPTION_KEY`, set that variable explicitly in production — see the [configuration guide](../getting-started/configuration.md).

**Test connection** sends one tiny request ("Reply with the single word: ok", capped at 16 tokens, 15-second timeout) and reports `Connected — <model id> answered in <n>ms`, or `Connection failed` with the reason Bedrock gave. It runs with the **saved** settings, so save first — the button stays disabled while there are unsaved changes, and the page says so.

**The switch** turns AI on and off ("AI features enabled" / "AI features disabled"). It only works once a key is saved; asking the server to enable AI without a key is rejected with `Cannot enable AI without an API key.` AI is usable only when it is enabled **and** a key and a model id are both present.

## AI search (everyone)

When AI is enabled, a sparkle button appears next to the alerts search box. Switch to it (**Ask AI to filter**), type what you want in plain language, and press Enter (or **Apply**):

> critical alerts from Grafana in the last hour, not silenced

OpsiMate sends that to your model and applies what comes back: the filter panel, the search text and the time range are **replaced** by the interpretation, any row selection is cleared, and a **Filters applied** toast shows how the request was read. If the model can't make sense of it, you get a **Could not translate that** toast and your view is left alone.

The button only appears when AI is enabled — with it off, the toolbar is a normal search box.

**Limits**: a request is 2–400 characters, and each user gets **15 AI requests per minute**; exceeding that returns `429 Too many AI requests — try again in a minute.`

## What is sent to the model

This is the part to check with your security team before turning AI on.

A filter request sends the model:

- your **request text**, verbatim;
- the **filter vocabulary** — the status and severity values OpsiMate knows, plus the current distinct values for status, severity, integration type, owner and every tag column, at most 60 values per field.

It does **not** send alert names, alert contents, summaries, labels or any other alert payload. The footer under the AI box states it the same way: *Your request and the filter vocabulary are sent — no alert content.* The vocabulary is computed over the dataset as a whole, so the model can match "grafana" to your `Type` values without seeing any alert.

The key and the request go to the endpoint you configured — the Bedrock runtime for your region (`https://bedrock-runtime.<region>.amazonaws.com/...`) or your custom endpoint — and nowhere else. Nothing is sent until someone uses an AI feature.

## Custom endpoint rules

A custom **Endpoint URL** is validated when you save it and re-checked, including a DNS resolution of the hostname, before every request. It must be:

- an absolute `https` URL with no embedded credentials, query string or fragment;
- not `localhost`, `.localhost`, `.local`, `.internal`;
- not an address in a blocked range: `0.0.0.0/8`, `10.0.0.0/8`, `127.0.0.0/8`, `169.254.0.0/16` (cloud metadata), `172.16.0.0–172.31.255.255`, `192.168.0.0/16`, CGNAT `100.64.0.0–100.127.255.255`, IPv6 `::1`, `::`, unique-local `fc00::/7` and link-local `fe80::/10`, including IPv4-mapped forms.

In other words: a public proxy hostname, or a private name resolving to a public address. A local proxy on `127.0.0.1` is refused by design. Expected failures: `Endpoint must use https.`, `Endpoint host is not allowed.`, `Endpoint must be a valid absolute URL.`

## Errors

| Situation | What you get |
| --- | --- |
| AI is off, or no key/model id | `409` — `AI features are not enabled. Configure a Bedrock key in Settings → AI.` |
| Bedrock rejects or can't reach the model | `502` with Bedrock's reason, or `Timed out after 15s — check the region.` |
| More than 15 requests in a minute | `429` — `Too many AI requests — try again in a minute.` |

## The root cause guide on this tab

The same tab documents how to push your own root-cause analyses onto alerts with your API token, so operators can rate them and the verdict comes back to your system. That flow does not use the Bedrock key at all — it is a plain API contract, covered on the Root cause API page under Alerts.

OpsiMate does not generate an analysis for you yet; there is no "generate" action in the product.

## API

| Endpoint | Method | Who |
| --- | --- | --- |
| `/api/v1/ai/config` | `GET`, `PUT` | Admin — read and write region, model id, endpoint and key. |
| `/api/v1/ai/test` | `POST` | Admin — the test-connection call above. |
| `/api/v1/ai/status` | `GET` | Any signed-in user — whether to show the sparkle button. |
| `/api/v1/ai/filter` | `POST` | Any signed-in user — body `{ "query": "..." }`. |

`GET /api/v1/ai/config` returns `hasApiKey`, never the key itself.

## Next steps

- [Alert Management](../alerts/alert-management.md) — the search box, filter panel and time filter AI search writes to
- [Configuration](../getting-started/configuration.md) — setting `ENCRYPTION_KEY`
