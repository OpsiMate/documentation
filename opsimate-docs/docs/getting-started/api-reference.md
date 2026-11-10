---
id: api-reference
title: API reference
sidebar_position: 4
---

# API reference

Every OpsiMate server serves its own interactive API reference. It lives on the API server, which listens on port `3001` by default (`server.port`, or `PORT`), not on the `8080` UI port.

| URL | What it is |
| --- | --- |
| `http://localhost:3001/api/docs/` | Swagger UI. `/api/docs` redirects here. |
| `http://localhost:3001/api/openapi.json` | The OpenAPI 3.1 document. Import it into Postman or use it to generate a client. |

The server bundles the Swagger UI files instead of loading them from a CDN, so the page also works on installs with no internet access.

Both URLs are public. The document lists routes and request and response shapes, never data, and every call you make from the page still needs a valid token.

## Try it out

1. Open `http://localhost:3001/api/docs/`.
2. Click **Authorize** and paste the instance API token, or a JWT from `POST /api/v1/users/login` under **bearerAuth**.
3. Open a route, click **Try it out**, then **Execute**.

Requests go to the server you opened the page from. The page does not remember the token, so you paste it again after closing the tab.

## Authentication

Protected routes accept either of these:

- **API token.** The instance token, `security.api_token` from your [configuration](configuration.md#key-reference). Send it as the `x-api-token` header, or as `?api_token=` for senders that can only call a URL. Use it for webhooks, scripts and automation.
- **Bearer JWT.** The token returned by `POST /api/v1/users/login`, sent as `Authorization: Bearer <token>`. The request acts as that user, with their role.

If a request carries both, the server uses the API token. Admin-only routes need the JWT of a signed-in admin, because the API token has no user behind it. Routes that act as a person, such as commenting on an alert, also need a JWT.

Every JSON response is `{ "success": true, "data": ... }` or `{ "success": false, "error": "..." }`.

## Turn it off

Set the environment variable `API_DOCS_ENABLED=false` on the server to turn off both `/api/docs/` and `/api/openapi.json`. Any other value, or leaving it unset, keeps them on. The server reads it from the environment even when a configuration file is loaded.

## What it covers

The reference covers these groups today:

- **Authentication.** Sign in, create the first admin, and check whether any user exists.
- **Webhooks.** The custom alert webhook and the Grafana, Datadog, Google Cloud Monitoring, Uptime Kuma and Zabbix webhooks.
- **Alerts.** List firing and resolved alerts, get one alert, resolve, silence and unsilence, mark as read, set the owner, and read and add comments.
- **Integrations.** List, add, update, remove and test integrations, and get deep links for a set of tags.

Other parts of the API, such as incidents, users, dashboards, tags and secrets, are not in the reference yet.
