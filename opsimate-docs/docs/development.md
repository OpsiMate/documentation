---
sidebar_position: 10
---

# Development

Learn how to set up and run the OpsiMate project locally for development.

## Prerequisites

- **Node.js** (v22 or higher — the pre-commit hook needs 22.22.1+; CI runs 24, the Docker images 26)
- **pnpm** (the repo is a pnpm workspace; enable it with `corepack enable`)
- **Git**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/OpsiMate/OpsiMate.git
cd OpsiMate
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Build the Project

```bash
pnpm run build
```

### 4. Start the app

```bash
pnpm run dev
```

`pnpm run dev` starts three processes:

- the Client, available at `http://localhost:8080`
- the Server, available at `http://localhost:3001`
- the background worker

The Server also serves the interactive API reference (Swagger UI) at `http://localhost:3001/api/docs`.

## Development Commands

- `pnpm run test` - Run test suite
- `pnpm run lint` - Check code quality
- `pnpm run check` - Run the same format and lint checks as CI
- `pnpm run fix` - Fix formatting and auto-fixable lint issues
