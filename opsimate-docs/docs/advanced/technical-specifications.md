---
sidebar_position: 1
---

# Technical Specifications

## System Architecture

OpsiMate follows a modern microservices architecture designed for scalability, reliability, and maintainability:

- **Frontend**: React-based web application with TypeScript
- **Backend**: Node.js API server with Express
- **Database**: SQLite for data storage (can be replaced with PostgreSQL for production)
- **Communication**: RESTful APIs and WebSockets for real-time updates

## Type Safety

OpsiMate is built with strict type safety in mind:

- **No `any` Types**: The codebase strictly avoids using `any` types
- **Zod Schema Inference**: All types are inferred from Zod validation schemas
- **No Type Casting**: TypeScript's type inference is used instead of manual type casting
- **Discriminated Unions**: Provider types use discriminated unions for type-safe data handling

Example of type-safe provider data handling:

```typescript
// Provider schema with discriminated union
const BaseProviderSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  providerIp: z.string().ip(),
  username: z.string(),
  privateKeyFilename: z.string(),
  SSHPort: z.number().default(22),
});

const VMProviderSchema = BaseProviderSchema.extend({
  providerType: z.literal('VM'),
});

const K8SProviderSchema = BaseProviderSchema.extend({
  providerType: z.literal('K8S'),
});

const ProviderSchema = z.discriminatedUnion('providerType', [
  VMProviderSchema,
  K8SProviderSchema,
]);

// Types inferred from schemas
type Provider = z.infer<typeof ProviderSchema>;
type VMProvider = z.infer<typeof VMProviderSchema>;
type K8SProvider = z.infer<typeof K8SProviderSchema>;
```

## API Endpoints

OpsiMate provides a comprehensive set of RESTful API endpoints:

### Providers

- `GET /api/v1/providers`: List all providers
- `POST /api/v1/providers`: Create a new provider
- `GET /api/v1/providers/:id`: Get provider details
- `PUT /api/v1/providers/:id`: Update a provider
- `DELETE /api/v1/providers/:id`: Delete a provider

### Services

- `GET /api/v1/services`: List all services
- `GET /api/v1/services/:id`: Get service details
- `PUT /api/v1/services/:id`: Update a service
- `POST /api/v1/services/:id/restart`: Restart a service
- `POST /api/v1/services/:id/stop`: Stop a service
- `POST /api/v1/services/:id/start`: Start a service

### Alerts

- `GET /api/v1/alerts`: List all alerts
- `GET /api/v1/alerts/by-tags`: Get alerts by tags
- `PUT /api/v1/alerts/:id/acknowledge`: Acknowledge an alert
- `PUT /api/v1/alerts/:id/resolve`: Resolve an alert
- `PUT /api/v1/alerts/:id/snooze`: Snooze an alert

### Integrations

- `GET /api/v1/integrations`: List all integrations
- `POST /api/v1/integrations`: Create a new integration
- `GET /api/v1/integrations/:id`: Get integration details
- `PUT /api/v1/integrations/:id`: Update an integration
- `DELETE /api/v1/integrations/:id`: Delete an integration

### Views

- `GET /api/v1/views`: List all saved views
- `POST /api/v1/views`: Create a new view
- `GET /api/v1/views/:id`: Get view details
- `PUT /api/v1/views/:id`: Update a view
- `DELETE /api/v1/views/:id`: Delete a view
- `GET /api/v1/views/active`: Get the active view
- `PUT /api/v1/views/active/:id`: Set the active view

## Database Schema

OpsiMate uses SQLite as its default database with the following schema:

### Providers Table

```sql
CREATE TABLE providers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  provider_ip TEXT NOT NULL,
  username TEXT NOT NULL,
  private_key_filename TEXT NOT NULL,
  ssh_port INTEGER DEFAULT 22,
  provider_type TEXT NOT NULL CHECK (provider_type IN ('VM', 'K8S')),
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### Services Table

```sql
CREATE TABLE services (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  service_ip TEXT NOT NULL,
  service_status TEXT NOT NULL,
  provider_id TEXT NOT NULL,
  container_details TEXT,
  tags TEXT,
  FOREIGN KEY (provider_id) REFERENCES providers (id) ON DELETE CASCADE
);
```

### Integrations Table

```sql
CREATE TABLE integrations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Grafana', 'Prometheus', 'Coralogix', 'Kibana')),
  url TEXT NOT NULL,
  api_key TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## Performance Considerations

- **Data Fetching**: Silent background updates for better user experience
- **React Optimization**: React.memo for components that don't need frequent re-renders
- **Controlled Components**: Controlled state for dropdowns and other interactive elements
- **Lazy Loading**: Only fetch data when needed (e.g., when dropdown is opened)
- **Deduplication**: Proper deduplication of alerts and other data to avoid duplicates

## Security Considerations

- **SSH Key Authentication**: Secure provider connections using SSH keys
- **API Key Rotation**: Regular rotation of integration API keys
- **Input Validation**: Strict validation of all user inputs
- **Rate Limiting**: Rate limiting for API endpoints to prevent abuse
- **Audit Logging**: Comprehensive logging of all system actions

## Browser Compatibility

OpsiMate supports the following browsers:

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## System Requirements

- **Node.js**: v18.0.0 or higher
- **NPM**: v8.0.0 or higher
- **Disk Space**: 200MB for application, additional space for database
- **Memory**: 512MB minimum, 1GB recommended
- **CPU**: 1 core minimum, 2 cores recommended
