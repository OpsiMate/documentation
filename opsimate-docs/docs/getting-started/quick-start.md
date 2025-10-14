## 🐳 Quick Docker Setup

You can now start OpsiMate instantly using Docker Compose with a single command.

```bash
curl -fsSL https://raw.githubusercontent.com/OpsiMate/OpsiMate/main/scripts/start-docker.sh | sh
```

This command downloads and runs the OpsiMate Docker environment automatically.
It fetches the necessary Docker Compose configuration files from the official repository and starts all required services (backend, database, and frontend).

### What This Script Does:
- Checks if Docker and Docker Compose are installed.
- Pulls the latest OpsiMate Docker images.
- Creates and starts the containers defined in the docker-compose.yml.
- Sets up OpsiMate so you can access it at http://localhost:3000 .

💡 Tip: This one-line setup is ideal for new users who want to try OpsiMate quickly without manual configuration steps.

After running the command, you can view OpsiMate’s logs using:

```bash
docker compose logs -f
```
To stop OpsiMate:

```bash
docker compose down
```


