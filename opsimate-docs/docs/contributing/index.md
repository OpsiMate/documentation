---
title: Contributing Guide
sidebar_position: 1
---

# Contributing to Opsimate

We welcome contributions to the Opsimate documentation. Whether you are fixing typos, adding new guides, or improving existing content, your contributions help make Opsimate better for everyone.

## Add Documentation

To contribute new documentation to Opsimate, follow these steps:

1. **Identify your audience and purpose**  
   Consider who will read your content and what they need to know. This will guide the scope, depth, and style of your contribution.

2. **Select a content type**  
   - **Concepts**: Explain key Opsimate principles, features, or workflows. Link to related guides when needed.  
   - **Guides**: Provide step-by-step instructions for a task, such as setting up alerts or configuring pipelines.  
   - **Setup pages**: Focus on installing, configuring, and deploying Opsimate.  
   - **Reference pages**: Detailed technical information, like API references or configuration parameters.  
   - **FAQs**: Quick answers to common questions.

3. **Plan your file structure**  
   - All files are written in **Markdown or MDX**.  
   - Use lowercase, hyphen-separated filenames (e.g., `external-auth.md`).  
   - Add front matter at the top of each file:

```yaml
---
title: Your Page Title
sidebar_label: Your Page Title
---
```
4. **Write your content**

Follow the Opsimate style guide (see below) for language, tone, and formatting. Use Docusaurus MDX components for rich content, for example:

```mdx
import Callout from '@site/src/components/Callout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Callout type="info">
This is an important note.
</Callout>
```
## Preview and Build Locally

Before submitting a contribution, preview your changes locally to ensure everything looks correct.
**Using npm**
```bash
npm install
npm run build
npm run dev
```
- The documentation will be available at http://localhost:8080

**Using Docker**
You can also use Docker for a clean, reproducible environment:
1. Build the Docker image:
```bash
cd opsimate-docs
docker build -t opsimate-docs .
```
2. Run the container:
```bash
docker run -p 3000:3000 --env-file .env opsimate-docs
```
- The documentation will be accessible at http://localhost:3000.

## Audience and Intended Use

Effective documentation starts with understanding your audience:

- **Task-focused**: Provide steps for completing a task.
- **Concept-focused**: Explain prerequisites or conceptual information before the task.
- **Decision-making**: Provide the context and options to help users choose the correct approach.
- **Complex features**: Use diagrams or visual aids rather than long text explanations.

## Style Guide

Follow these guidelines when writing content:

- **Language**: English only.
- **Sentence case** for body text.
- **Title case** for front matter titles.
- **Simple, present tense**.
- **Active voice**.
- Avoid “I” or “we”; address the user in the second person.
- Use **callouts** for warnings, notes, or tips.
- Clearly mark experimental or beta features.

## Docusaurus Components and Tools

Opsimate uses Docusaurus MDX components for rich content:

- **Tabs**: Show multiple options in tabbed content.  
- **Callouts**: Highlight important information.  
- **Code blocks**: Syntax-highlighted examples.  
- **Links**: Use relative linking between docs pages.  

Refer to existing Opsimate docs for examples of MDX usage.

## Support and Community

If you need help contributing or have questions:

- **[Documentation](https://opsimate.vercel.app/)** – Comprehensive guides and API references.  
- **[GitHub Issues](https://github.com/OpsiMate/documentation/issues)** – Bug reports and feature requests.  
- **[Slack Community](https://opsimate.slack.com/ssb/redirect)** – Join discussions and get help.  
- **[Website](https://www.opsimate.com/)** – Learn more about Opsimate.

## Review Process

All contributions are reviewed by Opsimate documentation maintainers to ensure clarity, accuracy, and consistency. Once reviewed and approved, your changes will be merged and appear on the documentation site.

## Generated Docs

Some content, like API references, may be automatically generated. Check the repository for details on contributing to these sections.

