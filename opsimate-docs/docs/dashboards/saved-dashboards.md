---
sidebar_position: 4
---

# Saved Dashboards

Saved Dashboards lets you store and reuse a dashboard configuration so you can quickly return to the same view.

A saved dashboard includes:
- **Name and description**
- **Filters** (the sidebar filters) and the **search query**
- **Visible columns**, **column order**, and **column widths**
- **Group by**
- **Time range**: Quick presets such as "Last 24 hours" stay a rolling window when reopened later; custom date ranges retain their fixed dates.
- Toolbar toggles: **Split by owner** and **Severity colors**

:::note
**Tags** are managed on the **Dashboards** page per row and are not part of a dashboard's saved configuration. Similarly, the **Expand rows** toggle is a per-browser setting and is not saved to the server.
:::

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/saved-dashboards.png" alt="Saved Dashboards" style={{width: '900px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>Saved Dashboards page with favorites, tags, search, and actions</p>
</div>

### How to Save a Dashboard

1. Click **New Dashboard** on the Dashboards page or in the Alerts header.
2. The new dashboard opens as a **Draft** on the **Alerts** screen (indicated by the **Draft** badge in the header, kept in your browser until saved).
3. Set your sidebar filters, search query, visible columns, group by, and time range.
4. Name the dashboard by clicking the name in the header to edit it.
5. Click the **Save** icon in the header.

**Notes on dashboard controls:**
- The **Save** icon only appears in the header when there are unsaved changes. On a draft it creates the new dashboard; on an existing saved dashboard it overwrites that dashboard.
- Clicking the dashboard name allows inline renaming: pressing Enter or clicking outside the field saves the changed name immediately.
- The **Settings** gear icon opens **Dashboard Settings**, where you can edit the Name, Description, or click **Delete Dashboard** (the delete button only shows for an already saved dashboard). Edits made in the settings drawer are saved using the Save icon.
- Opening another dashboard or starting a new one while you have unsaved changes prompts you for confirmation first so you don't lose progress.

### Save as New Dashboard

When viewing an already saved dashboard, clicking **Save as new dashboard** in the header saves the current view (including any unsaved changes) as a brand new dashboard:
- The original dashboard remains unchanged at its last saved version.
- The dialog suggests `<name> (copy)` (or `(copy 2)`, and so on) and keeps the existing description.
- Duplicate dashboard names are refused (case-insensitive), and names cannot be empty.
- Once saved, the new dashboard becomes the currently active view.

### The Dashboards Page

On the **Dashboards** page, you can:
- **Search** across dashboards by name.
- **Filter by tag** or add and remove tags directly on any dashboard row.
- **Star** dashboards to mark them as favorites for quick access. Favorites are stored locally in your browser.
