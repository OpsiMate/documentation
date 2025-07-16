---
sidebar_position: 2
---

# Actions

OpsiMate's Actions feature allows you to automate responses to incidents and perform routine tasks across your services with minimal manual intervention.

## Understanding Actions

Actions in OpsiMate are predefined sequences of steps that can be executed manually or triggered automatically in response to alerts or other events. They help you:

- **Automate routine tasks**: Restart services, clean up disk space, etc.
- **Respond to incidents**: Execute recovery procedures when issues occur
- **Gather diagnostic information**: Collect logs and metrics for troubleshooting
- **Perform maintenance**: Schedule regular maintenance tasks

## Action Components

Each action in OpsiMate consists of:

- **Basic Information**: Name, description, category, and estimated duration
- **Steps**: Individual commands or operations to execute
- **Execution Settings**: When and how the action should run
- **Conditions**: Requirements that must be met for the action to execute

## Creating Actions

### Step 1: Navigate to the Actions Page

1. Log in to OpsiMate
2. Click on the **Actions** tab in the main navigation

### Step 2: Create a New Action

1. Click the **Create Action** button
2. Fill in the basic information:
   - **Name**: A descriptive name for your action
   - **Description**: What the action does
   - **Category**: Group similar actions together (e.g., "Maintenance", "Recovery")
   - **Estimated Duration**: How long the action typically takes to execute

<!-- Image placeholder: Create Action form with basic information -->

### Step 3: Add Action Steps

1. In the action creation form, scroll to the **Steps** section
2. Click **Add Step**
3. Configure each step:
   - **Provider**: Select which provider this step runs on
   - **Command**: The command to execute
   - **Timeout**: Maximum time for step execution
   - **Retries**: Number of retry attempts if the step fails
   - **Conditions**: When this step should run

<!-- Image placeholder: Adding steps to an action -->

4. Add additional steps as needed
5. Arrange steps in the correct execution order

### Step 4: Configure Execution Settings

1. In the **Execution Settings** section, configure:
   - **Execution Mode**: Manual, Scheduled, or Triggered
   - **Schedule**: If scheduled, set the frequency
   - **Triggers**: If triggered, select the events that trigger the action
   - **Approval Required**: Whether manual approval is needed before execution

2. Click **Save** to create the action

## Using Action Templates

OpsiMate provides pre-built action templates for common scenarios:

### Step 1: Access Templates

1. Navigate to the **Actions** page
2. Click **Use Template**
3. Browse the available templates

<!-- Image placeholder: List of action templates -->

### Step 2: Select and Customize a Template

1. Click on a template to view its details
2. Review the template's steps and settings
3. Click **Use This Template**
4. Customize the template as needed for your environment
5. Click **Save** to create the action from the template

## Available Action Templates

OpsiMate includes several built-in templates:

### Service Management

- **Service Restart**: Restart a failed service
- **Service Status Check**: Verify if services are running correctly
- **Service Log Collection**: Gather logs from a specific service

### System Maintenance

- **Disk Cleanup**: Free up disk space by removing temporary files
- **Memory Management**: Clear cache and optimize memory usage
- **Update System Packages**: Update system packages safely

### Diagnostics

- **Health Check**: Run comprehensive diagnostics on a service
- **Network Diagnostics**: Check network connectivity and performance
- **Performance Analysis**: Collect and analyze performance metrics

### Recovery

- **Database Recovery**: Restore database from backup
- **Application Reset**: Reset application to a known good state
- **Failover Activation**: Activate failover mechanisms

## Running Actions Manually

To execute an action manually:

1. Navigate to the **Actions** page
2. Find the action you want to run
3. Click the **Run** button
4. Confirm any parameters or settings
5. Click **Execute** to start the action

<!-- Image placeholder: Running an action manually -->

## Monitoring Action Execution

While an action is running:

1. The action card will show the current status
2. A progress bar indicates completion percentage
3. Current step is highlighted
4. Logs are generated in real-time

<!-- Image placeholder: Action execution progress -->

## Viewing Action History

To view the history of action executions:

1. Navigate to the **Actions** page
2. Click on the **Execution History** tab
3. Browse the list of past executions
4. Click on any execution to view details:
   - Start and end time
   - Duration
   - Success or failure status
   - Step-by-step results
   - Logs generated during execution

<!-- Image placeholder: Action execution history -->

## Linking Actions to Alerts

Actions can be automatically triggered by alerts:

1. Navigate to the **Monitoring** page
2. Select an existing alert or create a new one
3. In the alert configuration, find the **Automated Response** section
4. Click **Add Action**
5. Select an action from your saved actions
6. Configure when the action should trigger:
   - **Immediately**: Run as soon as the alert fires
   - **After Delay**: Wait a specified time before running
   - **After Approval**: Require manual approval before running
7. Click **Save** to link the action to the alert

## Scheduling Actions

For routine maintenance and checks:

1. Navigate to the **Actions** page
2. Find the action you want to schedule
3. Click the **Edit** button
4. In the **Execution Settings** section, set:
   - **Execution Mode**: Scheduled
   - **Schedule**: Configure the schedule:
     - Frequency: Daily, Weekly, Monthly
     - Time: When the action should run
     - Days: Which days of the week (if weekly)
5. Click **Save** to update the action

## Action Categories

Organize your actions with categories:

1. When creating or editing an action, select a category
2. Use the category filter on the Actions page to find related actions
3. Standard categories include:
   - **Maintenance**: Routine upkeep tasks
   - **Recovery**: Actions that restore service
   - **Diagnostics**: Information gathering
   - **Security**: Security-related actions
   - **Custom**: User-defined categories

## Favorites and Quick Access

Mark frequently used actions as favorites:

1. On the Actions page, click the star icon on any action card
2. Access your favorite actions quickly from the **Favorites** tab
3. Favorite actions also appear in the quick access section of the dashboard

## Best Practices for Actions

- **Start Simple**: Begin with basic actions before creating complex workflows
- **Test Thoroughly**: Test actions in non-production environments first
- **Document Purpose**: Add clear descriptions to all actions
- **Use Parameters**: Make actions flexible with parameters
- **Include Error Handling**: Add retry logic and error handling to steps
- **Review Regularly**: Periodically review and update your actions
- **Limit Permissions**: Ensure actions run with appropriate permissions

## Next Steps

After setting up actions:

1. [[Create incident response workflows](/docs/](/advanced/incident-response) that utilize your actions
2. [[Set up monitoring](/docs/](/monitoring/setting-up-alerts) to trigger your actions
3. [[Configure notifications](/docs/](/advanced/notifications) for action results
