---
sidebar_position: 4
---

# Saved Dashboards

Saved Dashboards lets you store and reuse a dashboard configuration so you can quickly return to the same view.

A saved dashboard includes:
- **Name and description**
- **Filters (sidebar) and search query**
- **Visible columns, column order, and column widths**
- **Group by**
- **Time range** (presets like "Last 24 hours" stay rolling; only a custom range keeps fixed dates)
- **Toolbar toggles**: Split by owner and Severity colors

:::note
- **Tags** are not part of a save; they are managed per row on the Dashboards page.
- The **Expand rows** toggle is not saved (it is a per-browser setting).
:::

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/saved-dashboards.png" alt="Saved Dashboards" style={{width: '900px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>Saved Dashboards page with favorites, tags, search, and actions</p>
</div>

### How to Save a Dashboard

1. Click **New Dashboard** (from the Dashboards page or Alerts header). It opens as a **Draft** on the Alerts screen.
2. Set your filters, search query, columns, group by, and time range.
3. Name the dashboard.
4. Click the **Save** icon.

:::note
- **Draft badge**: Indicates the dashboard has never been saved (kept in the browser until saved).
- **Save icon**: Only shows when there are unsaved changes (creates on a draft, overwrites on a saved dashboard).
- **Renaming**: Click the name to edit it. When you leave the field or press Enter, a changed name saves the dashboard right away.
- **Settings gear**: Opens Dashboard Settings (Name, Description, and Delete Dashboard for saved ones; edits there need the Save icon).
- **Unsaved changes**: Opening another dashboard or a new one with unsaved changes prompts first.
:::

### Save as new dashboard

- Only shown while a saved dashboard is open.
- Saves the current view, including unsaved changes, as a new dashboard.
- The original dashboard keeps its last saved version.
- The suggested name adds " (copy)", then "(copy 2)", etc.
- The description is kept.
- Empty names and names already used by another dashboard (case-insensitive) are refused.
- The new dashboard becomes the open one.

### Dashboards page

- **Search**: Search the list of dashboards.
- **Filter by tag**: Filter the list by tags.
- **Manage tags**: Add or remove tags per row.
- **Favorites**: Click the star icon to mark favorites (stored in your browser, not on the server).
