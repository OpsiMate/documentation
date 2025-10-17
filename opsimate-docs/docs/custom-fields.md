# ⚙️ OpsiMate Custom Fields Documentation

Custom Fields are a powerful feature in OpsiMate, the open-source infrastructure management platform, allowing you to attach flexible, user-defined metadata to all your managed services (systemd, Docker, Kubernetes, etc.) (). This ensures your Service Catalog is deeply integrated with your internal processes and organizational structure.

-----

## 💡 What Are Custom Fields?

Custom Fields are standardized **key-value pairs** that you define globally and then populate individually on service records. They enable you to extend the core OpsiMate service model with any operational or business-specific data you need.

### Purpose

  * **Contextualization:** Add critical details that OpsiMate doesn't track by default, such as team ownership, specific environment variables, or cost allocation codes.
  * **Standardized Tagging:** Enforce consistent metadata across diverse infrastructure types. Instead of using free-form tags, you ensure that everyone uses the same `Key` (e.g., `billing_cost_center`).
  * **External Integration:** Serve as dynamic links or IDs to external management systems, linking OpsiMate services to tickets, documentation, or monitoring dashboards.
  * **Advanced Filtering:** Use business-specific metadata to create granular views of your infrastructure in the Service Catalog.

### Use Case Examples

| Field Label | Key (for API) | Data Type | Example Value | Scenario |
| :--- | :--- | :--- | :--- | :--- |
| **Team Owner** | `team_owner` | Dropdown | `DevOps-Platform` | Incident routing and accountability for services. |
| **Grafana URL** | `monitoring_dashboard` | URL | `https://grafana.corp/d/web-metrics` | Quick access to observability dashboards from the OpsiMate service page. |
| **Compliance Tier**| `compliance_tier`| Text | `PCI-L1` | Tracking services that handle sensitive data for audit purposes. |
| **Auto-Restart Enabled** | `auto_restart` | Boolean | `True` | Managing which services are eligible for automated recovery workflows. |

-----

## 🛠️ Managing Custom Fields

Custom Field management is a two-step process in OpsiMate: first, defining the field globally, and second, applying values to services.

### Step 1: Defining the Custom Field (Global Settings)

This step establishes the field's structure and makes it available throughout your platform.

1.  **Navigate to Settings:** Access the **Settings** menu.
2.  **Access Management:** Select the **Custom Fields Management** tab.
3.  **Create New:** Click the **+ New Custom Field** button.
4.  **Configure:**
      * **Label:** The user-friendly name (e.g., **"Jira Project ID"**).
      * **Key:** The unique, machine-readable key (e.g., **`jira_project_id`**). This is crucial for API interaction.
      * **Type:** Select the data type (`Text`, `Number`, `Boolean`, `URL`, `Dropdown`).
      * **Applies To:** Specify which service types (e.g., *All Services*, *Kubernetes Only*, *Systemd Only*) should display this field.
5.  Click **Save Definition**.

### Step 2: Applying Values to a Service (Configuration)

Once defined, the field appears in the configuration of all applicable services, ready to receive a unique value.

1.  **Select Service:** Go to the **Service Catalog** and open the service you want to edit (e.g., a specific `systemd` unit).
2.  **Edit Configuration:** Click the **Edit** or **Configuration** button.
3.  **Locate Section:** Scroll down to the dedicated **Custom Fields** panel.
4.  **Populate Value:** Enter the specific data for this service (e.g., enter `PRJ-42` for the `Jira Project ID` field). The input field will automatically respect the defined **Type** (e.g., show a toggle for Boolean, or a validated input for URL).
5.  Click **Apply Changes** to save the metadata to the service record.

-----

## 🔌 API Interaction

Custom Fields are fully integrated into the OpsiMate REST API, enabling Infrastructure as Code (IaC) workflows and seamless integration with external tools.

### 1\. Retrieving Custom Fields (GET Request)

Custom Field data is nested under the `custom_fields` attribute when fetching a service object.

```bash
GET /api/v1/services/svc-kafka-consumer-003
```

**Example JSON Snippet:**

```json
{
  "id": "svc-kafka-consumer-003",
  "name": "Kafka Consumer Prod",
  "status": "Running",
  "custom_fields": {
    "team_owner": "Data-Engineering",
    "compliance_tier": "None",
    "monitoring_dashboard": "https://grafana.corp/d/kafka-lag",
    "deployment_sha": "a2b3c4d5e6f7"
  },
  "created_at": "2025-01-20T..."
}
```

### 2\. Updating Custom Field Values (PATCH Request)

To update custom field values, use a `PATCH` request to the service endpoint. You only need to send the `custom_fields` object containing the keys you wish to change.

```bash
PATCH /api/v1/services/svc-kafka-consumer-003
```

**Request Body Example:**

```json
{
  "custom_fields": {
    // Update the team ownership
    "team_owner": "Data-Ops", 
    
    // Disable auto-restart for maintenance
    "auto_restart_enabled": false 
  }
}
```

> ❗ **Note:** You can only set values for Custom Field keys that have been **globally defined** in Step 1.

-----

## 🔎 Searching and Filtering

Custom Fields are fully indexed by OpsiMate, turning your custom metadata into powerful search criteria.

### Service Catalog Filtering

On the main **Service Catalog** view, use the advanced filtering options:

1.  Click the **Filter** button.
2.  Add a new rule based on **Custom Field**.
3.  Select the **Key** (e.g., `Team Owner`), the operator (e.g., `is equal to`), and the **Value** (e.g., `Data-Engineering`).
4.  You can combine this with core filters like `Status: Not Running` to quickly isolate problematic services by team ownership.

### API Filtering

Use query parameters on the service list endpoint to retrieve filtered results:

**Goal:** Retrieve all services marked as `PCI-L1` compliance tier.

```bash
GET /api/v1/services?filter[custom_fields.compliance_tier]=PCI-L1
```

-----

## ⚠️ Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Field is not visible in the Service UI** | The field's **Applies To** scope in global settings is incorrect. | Re-check **Settings** $\rightarrow$ **Custom Fields Management** and ensure the scope covers the service type you are trying to edit (e.g., Kubernetes services). |
| **`400 Bad Request` on API update** | You are sending a key (e.g., `security_contact`) in the API request that was never defined in **Custom Fields Management**. | The field must be globally defined first. If it is defined, check the data type—you might be sending a string to a `Number` field. |
| **Search results are missing services** | Inconsistent spelling or capitalization in the custom field values across services. | Use the **Dropdown** field type during definition to force all users to select from a predefined list, ensuring consistency and accuracy in filtering. |