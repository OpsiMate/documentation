# OpsiMate Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment to Vercel

This documentation site is configured for seamless deployment on Vercel. Follow these steps to deploy:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Documentation ready for deployment"
   git push
   ```

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com/new)
   - Import your GitHub repository
   - Select the repository containing this documentation

3. **Configure the project**
   - Framework Preset: Select "Docusaurus"
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Environment Variables**
   No additional environment variables are required for basic deployment.

5. **Deploy**
   Click "Deploy" and Vercel will build and deploy your documentation site.

## Features

- **Multi-page Documentation**: Organized into logical sections
- **Responsive Design**: Works on mobile and desktop
- **Search**: Built-in search functionality
- **Versioning**: Support for multiple versions of documentation
- **Community Links**: Integration with Slack and GitHub

## Community

- [GitHub Repository](https://github.com/Fifaboyz/OpsiMate)
- [Slack Community](https://join.slack.com/t/opsimate/shared_invite/zt-39bq3x6et-NrVCZzH7xuBGIXmOjJM7gA)
