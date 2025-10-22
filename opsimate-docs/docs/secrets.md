---
id: secrets
title: Managing Secrets
sidebar_position: 5
---

# Managing Secrets

Learn how to securely store and use sensitive credentials like API keys, passwords, and tokens within OpsiMate.

## Overview

OpsiMate often needs to connect to your infrastructure, external providers, and integrations. To do this securely, it requires sensitive credentials.

Instead of hardcoding this data in configuration files (which is a major security risk), you should store them in OpsiMate's built-in secrets manager. OpsiMate encrypts and stores these secrets, allowing you to reference them safely in your configurations.

:::info Before You Begin
Only users with **Admin** privileges can add, update, or delete secrets.
:::

## Adding a New Secret

The easiest way to add a secret is through the OpsiMate dashboard.

1.  Navigate to **Settings** → **Secrets** from the main menu.
2.  Click the **"Add New Secret"** button.
3.  Provide a **Name** for the secret. This is a unique, human-readable name you will use to reference it (e.g., `MY_GRAFANA_KEY`).
4.  Paste the **Value** of your secret (your API key, password, etc.) into the value field.
5.  Click **"Save"**. The secret is now encrypted and available for use.

<img src="/img/add-secret-ui.png" alt="Adding a secret in OpsiMate UI" style={{width: '600px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />

## Using Secrets in Configurations

Once a secret is saved, you can reference it by its name in any configuration file where a sensitive value is required. OpsiMate will automatically inject the secret's value at runtime.

Secrets can be used in:

* **Providers**: When setting up a cloud provider (e.g., AWS, Azure) that requires an access key.
* **Integrations**: For connecting to external tools like Grafana, Prometheus, or PagerDuty.
* **Services**: To provide runtime credentials (e.g., a database password) to a monitored service.

### Example: Referencing a Secret

Instead of hardcoding a key in a YAML configuration, you reference the secret by its name using the `${secret.NAME}` syntax.

**BEFORE (Insecure):**
```yaml
integrations:
  grafana:
    url: "[http://my-grafana.com](http://my-grafana.com)"
    api_key: "gl_THIS_IS_A_VERY_LONG_AND_SECRET_API_KEY_abc123"

AFTER (Secure):

First, add a secret in the OpsiMate UI with the name GRAFANA_API_KEY.

Then, reference it in your configuration:
integrations:
  grafana:
    url: "[http://my-grafana.com](http://my-grafana.com)"
    api_key: "${secret.GRAFANA_API_KEY}"

OpsiMate will resolve ${secret.GRAFANA_API_KEY} to its stored, encrypted value when the integration is used.

Security Best Practices
Never Hardcode Secrets: Always use the secret management system for credentials. Never commit passwords or API keys to Git.

Use Specific Names: Give secrets clear, specific names (e.g., PROD_DB_PASSWORD instead of MY_PASS) to avoid confusion.

Principle of Least Privilege: Create secrets that have only the minimum permissions necessary for their intended task.

Rotate Keys: Regularly update your external API keys and passwords, and then update their values in the OpsiMate secrets manager.