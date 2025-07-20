---
sidebar_position: 3
tags: [Monitoring Data, Alerts]
---

# Prometheus Integration

**Prometheus** is an open-source monitoring system with a dimensional data model, flexible query language, and powerful alerting capabilities.

**Integration Capabilities:**
- 📊 **Monitoring Data**: Import metrics and time-series data
- 🚨 **Alerts**: Receive Prometheus alerts in OpsiMate

## Configuration Parameters

Required credentials to connect to Prometheus:

- **Prometheus URL**: Your Prometheus server URL (e.g., `https://prometheus.company.com:9090`)
- **Username**: Basic auth username (if authentication enabled)
- **Password**: Basic auth password (if authentication enabled)
- **Bearer Token**: Alternative authentication token (optional)

## Functionality

### Metrics Import
- Query Prometheus metrics using PromQL
- Import custom metrics for service monitoring
- Historical data analysis and trending
- Real-time metric visualization

### Alert Integration
- Import Prometheus alerting rules
- Receive alert notifications in OpsiMate
- Correlate alerts with service health status
- Unified alert management interface

## Official Resources

- **Prometheus Website**: [https://prometheus.io](https://prometheus.io)
- **Documentation**: [https://prometheus.io/docs](https://prometheus.io/docs)
- **Query Language**: [https://prometheus.io/docs/prometheus/latest/querying](https://prometheus.io/docs/prometheus/latest/querying)
