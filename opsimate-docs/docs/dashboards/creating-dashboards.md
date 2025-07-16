---
sidebar_position: 1
---

# Creating Dashboards

OpsiMate allows you to create custom dashboards to visualize your services and their performance in a way that makes sense for your organization.

## Understanding Dashboard Views

In OpsiMate, dashboards are organized as "views" that can be customized and saved for future use. Each view can display different services, metrics, and visualizations based on your needs.

## Creating a New Dashboard View

### Step 1: Navigate to the Dashboard

1. Log in to OpsiMate
2. Click on the **Dashboard** option in the main navigation

### Step 2: Create a New View

1. In the dashboard, locate the **Views** dropdown in the top navigation bar
2. Click on the **+ New View** button
3. Enter a name for your new view (e.g., "Production Services")
4. Click **Create** to generate the new view

<!-- Image placeholder: Creating a new dashboard view -->

### Step 3: Customize Your Dashboard

Once your new view is created, you can customize it:

1. **Add Filters**:
   - Click the **Filter** button in the dashboard toolbar
   - Select filter criteria (e.g., provider, service status, tags)
   - Apply filters to show only relevant services

2. **Arrange Services**:
   - Click the **Layout** button
   - Choose a layout option:
     - **Grid**: Services displayed in a grid format
     - **List**: Services displayed in a detailed list
     - **Compact**: Minimalist view showing only essential information

3. **Sort Services**:
   - Click the **Sort** button
   - Choose a sorting option:
     - By name
     - By status
     - By provider
     - By alert count

4. **Group Services**:
   - Click the **Group** button
   - Group services by:
     - Provider
     - Status
     - Tags
     - Custom groups

<!-- Image placeholder: Dashboard customization options -->

### Step 4: Save Your Dashboard View

After customizing your dashboard:

1. Click the **Save View** button
2. Confirm the name or modify it
3. Click **Save** to store your custom view

## Managing Dashboard Views

### Setting a Default View

To set a view as your default dashboard:

1. Create or select the view you want to make default
2. Click the **More Options** (three dots) next to the view name
3. Select **Set as Default**

The selected view will now load automatically when you access the dashboard.

### Sharing Views

To share a view with other team members:

1. Select the view you want to share
2. Click the **Share** button
3. Choose sharing options:
   - **Team**: Share with specific team members
   - **Public**: Make available to all OpsiMate users
4. Click **Share** to confirm

### Editing Existing Views

To modify an existing view:

1. Select the view from the Views dropdown
2. Make your desired changes to filters, layout, sorting, or grouping
3. Click **Save View** to update the existing view
   - Or click **Save As** to create a new view based on your changes

### Deleting Views

To remove a view you no longer need:

1. Select the view from the Views dropdown
2. Click the **More Options** (three dots) next to the view name
3. Select **Delete View**
4. Confirm deletion when prompted

## Adding Widgets to Dashboards

OpsiMate allows you to add various widgets to your dashboard for enhanced visualization:

### Step 1: Enter Edit Mode

1. Select the view you want to enhance
2. Click the **Edit Layout** button to enter edit mode

### Step 2: Add Widgets

1. Click the **+ Add Widget** button
2. Choose from available widget types:
   - **Status Summary**: Overview of service statuses
   - **Alert Summary**: Summary of active alerts
   - **Metric Chart**: Line, bar, or pie charts of key metrics
   - **Service List**: Filtered list of specific services
   - **External Dashboard**: Embedded view from integrated tools

<!-- Image placeholder: Adding widgets to a dashboard -->

### Step 3: Configure the Widget

1. Set the widget title
2. Configure data sources and parameters
3. Set refresh interval
4. Choose visualization options
5. Click **Save** to add the widget to your dashboard

### Step 4: Arrange Widgets

1. Drag and drop widgets to position them
2. Resize widgets by dragging the corners
3. Click **Save Layout** when finished

## Creating Service-Specific Dashboards

To create a dashboard focused on specific services:

1. Create a new view
2. Apply filters to show only the services you're interested in
3. Add relevant widgets that display metrics for these services
4. Save the view with an appropriate name

## Using Tags for Dynamic Dashboards

Tags provide a powerful way to create dynamic dashboards:

1. Ensure your services are properly tagged
2. Create a new view
3. Add a filter based on tags
4. Save the view

As you add or remove tags from services, your dashboard will automatically update to include or exclude those services.

## Best Practices for Dashboards

- **Keep It Focused**: Create separate views for different purposes
- **Use Consistent Naming**: Adopt a naming convention for your views
- **Leverage Tags**: Use tags to create dynamic, self-updating views
- **Prioritize Information**: Place the most important widgets at the top
- **Review and Refine**: Regularly update your views as your needs change
- **Create Role-Based Views**: Design different views for different team roles

## Next Steps

After creating your custom dashboards:

1. [[Set up alerts](/docs/](/monitoring/setting-up-alerts) for critical services
2. [[Configure integrations](/docs/](/integrations/overview) to enhance your dashboards
3. [[Share your views](/docs/](/dashboards/sharing-dashboards) with your team
