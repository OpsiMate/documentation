---
sidebar_position: 5
---

# Automated Actions

## Overview

OpsiMate's Automated Actions feature allows you to define and execute automated responses to specific events or conditions. These actions can help you automate routine tasks, respond to incidents quickly, and maintain system health without manual intervention.

## Key Capabilities

### Action Templates

Action templates define what operations should be performed when an action is triggered. OpsiMate supports various action types:

- **Service Operations**: Restart, stop, or start services
- **Script Execution**: Run custom scripts on target providers
- **API Calls**: Make HTTP requests to external APIs
- **Notifications**: Send notifications to various channels

### Action Triggers

Actions can be triggered by:

- **Alerts**: Automatically respond to specific alerts
- **Schedules**: Run actions on a defined schedule
- **Manual Execution**: Execute actions on-demand
- **API**: Trigger actions via the OpsiMate API

### Conditional Execution

Actions can include conditions to determine when they should be executed:

- **Alert Severity**: Only execute for alerts of specific severity
- **Service Status**: Only execute when a service is in a specific state
- **Time Windows**: Only execute during defined time windows
- **Custom Conditions**: Define custom conditions using JavaScript expressions

## Action Template Example

```json
{
  "name": "Restart Service",
  "description": "Restart a service when it becomes unresponsive",
  "trigger": {
    "type": "alert",
    "conditions": {
      "alertName": "Service Unresponsive",
      "severity": "critical"
    }
  },
  "steps": [
    {
      "type": "serviceOperation",
      "operation": "restart",
      "target": "${service.name}"
    },
    {
      "type": "notification",
      "channel": "slack",
      "message": "Service ${service.name} was restarted due to unresponsive alert"
    }
  ]
}
```

## Action Execution Flow

1. **Trigger Detection**: OpsiMate detects a trigger event (alert, schedule, etc.)
2. **Condition Evaluation**: The system evaluates if conditions for execution are met
3. **Parameter Resolution**: Dynamic parameters in the action template are resolved
4. **Step Execution**: Each step in the action is executed in sequence
5. **Result Tracking**: The execution result is recorded for auditing and review

## Best Practices

- **Start Simple**: Begin with simple actions and gradually add complexity
- **Test Thoroughly**: Test actions in a non-production environment first
- **Include Notifications**: Always include notifications in your actions
- **Document Purpose**: Add clear descriptions to your action templates
- **Review Regularly**: Regularly review and update your action templates

## Security Considerations

- **Least Privilege**: Actions should use credentials with the minimum necessary permissions
- **Audit Logging**: All action executions are logged for audit purposes
- **Approval Workflows**: Critical actions can require approval before execution
- **Rate Limiting**: Actions have built-in rate limiting to prevent abuse

## Next Steps

- [Create your first action template](../advanced/actions)
- [Set up incident response workflows](../features/incident-response)
- [Configure action notifications](../advanced/incident-response)
