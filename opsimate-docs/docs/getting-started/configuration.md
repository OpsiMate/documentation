---
id: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

OpsiMate uses a YAML configuration file to manage application settings. This guide covers all available configuration options.

## Basic Configuration

### Minimal Configuration

```yaml title="configfile.yml"
# OpsiMate Configuration
# Simple configuration file with essential settings

# Server configuration
server:
  port: 3001  # Backend API server port
  host: "localhost"  # Use "0.0.0.0" for Docker

# Client configuration  
client:
  port: 8080  # Frontend development server port
  api_url: "http://localhost:3001/api/v1"  # Backend API URL

# Database configuration
database:
  path: "/app/data/database/opsimate.db"  # SQLite database file path (mounted volume)

# Security configuration
security:
  private_keys_path: "/app/data/private-keys"  # SSH private keys directory (mounted volume)

```

## Email (SMTP) Configuration

Email is disabled by default. To enable welcome and password-reset emails, add a top-level `mailer` section to the YAML file selected by the server's `CONFIG_FILE` environment variable. Keep the existing server, database, and security sections.

```yaml title="configfile.yml"
mailer:
  enabled: true
  host: "smtp.example.com"
  port: 587
  secure: false
  from: "OpsiMate <opsimate@example.com>"
  mailLinkBaseUrl: "https://opsimate.example.com"
  auth:
    user: "your-smtp-username"
    pass: "your-smtp-password"
```

Replace the example values with your SMTP provider's settings. Set `from` to a sender address your provider allows, and set `mailLinkBaseUrl` to the public URL of your OpsiMate frontend, without a trailing slash. Password-reset emails require this URL to build the reset link.

Use `secure: false` with port 587 for STARTTLS, or `secure: true` with port 465 for TLS from the start, according to your provider's instructions. See the [Nodemailer SMTP options](https://nodemailer.com/smtp#general-options) for details.

Email requires `enabled: true`, a host, a port, and both authentication fields. When a loaded YAML file enables email but omits any of those SMTP fields, OpsiMate disables email and logs a warning. Keep credentials out of version control, and restart the server after changing its configuration.

### Environment Variables

When `CONFIG_FILE` is unset or points to a file that does not exist, the server uses its default configuration and reads these environment variables:

| Variable | Purpose |
| --- | --- |
| `EMAIL_ENABLED` | Set to the literal value `true` to enable email. |
| `SMTP_HOST` | SMTP server hostname. |
| `SMTP_PORT` | SMTP port number, for example `587`. |
| `SMTP_USER` | SMTP authentication username. |
| `SMTP_PASS` | SMTP authentication password. |
| `SMTP_FROM` | Sender address, equivalent to `mailer.from`. |
| `APP_BASE_URL` | Public frontend URL, equivalent to `mailer.mailLinkBaseUrl`. |

These variables do **not** override a loaded YAML configuration. If your deployment sets `CONFIG_FILE` to an existing file, configure `mailer` in that file instead. There is no SMTP environment variable for `secure`; use YAML when your provider requires `secure: true`.

### Check the Connection

After restarting, check the server logs for `MailClient: SMTP transporter is ready to send emails`. If SMTP verification fails, check your provider's host, port, credentials, and network access. A successful connection check confirms SMTP connectivity; it does not guarantee that a message will reach a recipient's inbox.

## Next Steps

After configuring OpsiMate:

1. **Restart the container** to apply changes
2. **Add providers** - [Learn how](../providers-services/providers/add-provider)
3. **Set up monitoring** - [Configure alerts](../alerts/adding-alerts.md)
4. **Start discovering services** - [Quick start guide](../providers-services/services/add-services)

## Support

If you need help with configuration:

- Check the [deployment guide](deploy) for basic setup
- Join our [community discussions](https://github.com/opsimate/opsimate/discussions)
- Report configuration issues on [GitHub](https://github.com/opsimate/opsimate/issues)
