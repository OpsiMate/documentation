---
id: playground
title: Playground mode and the version badge
sidebar_position: 1
---

# Playground mode and the version badge

## Try OpsiMate in playground mode

Add `?playground` to any OpsiMate URL to explore the app without connecting it to your own system. In playground mode the client runs entirely against built-in mock data, so you can click through dashboards, alerts and settings freely - nothing you do is sent to a server.

While the playground is active, a banner reads "You are currently inside playground" and offers two shortcuts for when you are ready for the real thing: **Book a demo** and **GitHub repo**.

To leave the playground, open the same URL without the `?playground` parameter.

Deployments can also ship with playground mode always on, through the `VITE_PLAYGROUND_MODE=true` build setting.

## The version badge

The bottom of the sidebar shows which build you are running:

- A **release build** shows its version number, for example `v1.2.3`, and links to that release's notes on GitHub.
- A **development build** shows `dev` - or `dev · <commit>` when the commit is known - and links to the releases page instead, since a development build has no release notes of its own.
