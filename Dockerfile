FROM node:24-alpine

WORKDIR /app

# Build from the repo root, not from opsimate-docs/. This is an npm workspace,
# so the root package-lock.json is the only lockfile -- it is what CI installs
# and what Dependabot maintains. Building from the subdirectory previously used
# a second, unmaintained lockfile that had drifted out of sync with
# package.json and broke `npm ci` outright.
COPY package.json package-lock.json ./
COPY opsimate-docs/package.json ./opsimate-docs/

RUN npm ci

COPY . .

EXPOSE 3000

# --host 0.0.0.0 so the server is reachable from outside the container;
# Docusaurus binds to localhost by default, which `docker run -p` cannot reach.
CMD ["npm", "run", "start", "--workspace=opsimate-docs", "--", "--host", "0.0.0.0"]
