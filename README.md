# realestateprototype — Legacy One Universal Content Platform

An omni-channel, AI-powered content generation and scheduling platform. Initially scoped to real estate, it was designed to handle any business type (E-Commerce, Restaurant, General Business) — users build their "authority footprint" by automating social media strategy, market reporting, and listing syndication. Built as part of the RealEstateCRM project family for Excel Legacy Realty Group.

## Status

**Parked / superseded.** Version 1.26.0 (per `VERSION.md` and `CHANGELOG.md`). Last commit 2026-10-05 (Express error-handler and event-validation fixes). No activity since — including no update for the Nov 12 org transfer to RealEstateCRMLLC.

**This repo's code was merged into [socialmediacontentplanner](https://github.com/RealEstateCRMLLC/socialmediacontentplanner) in Sep 2026** (socialmediacontentplanner v6.1.0, "Legacy One Universal Content Platform" merge). The universal business-type switching, AI persona customization, Canva deep links, drag-to-select calendar, and AI draft review now live there. This repo is the pre-merge original; it is not the active home for these features.

## What it does

- **Universal business types** — data schemas, API endpoints, and UI components adjust to the user's selected industry (Real Estate, E-Commerce, Restaurant, General Business)
- **AI content generation** — OpenAI-powered post generation with brand-voice settings (stored per user in SQLite)
- **Bulk scheduling** — schedule content over weeks or months for consistent presence
- **Omni-channel publishing** — background worker dispatches scheduled content to the user's connected platforms
- **Command Center dashboard** — KPIs (reach, engagement, sync status) tailored to the user's industry
- **Social platform stubs** — backend service stubs for Facebook, Instagram, LinkedIn, and Twitter (v1.23.0) prepare for real Graph API interactions; they are stubs, not live integrations

## Architecture

- **Client:** Next.js 14 (App Router) in `client-next/` (migrated from Vite/React in Sep 2026, v1.25.0–1.26.0; port 3012)
- **Server:** Node.js / Express in `server/` (TypeScript)
- **Database:** SQLite (`database.sqlite`) tracking users and AI settings (brand voices)
- **Auth:** OAuth stub integrations (not live OAuth flows)
- **Tests:** Vitest

## What's working / what's not

- The content generation, scheduling, bulk dispatch, and dashboard are implemented through Phase 6 (Next.js migration), per the changelog (v1.22.0–1.26.0). The Oct 2026 commits fixed server error handling and event validation.
- The social platform integrations are **stubs** — the backend has service stubs for Facebook, Instagram, LinkedIn, and Twitter, but no live Graph API publishing. OAuth connections are stubs too.
- No production deployment is documented in this repo — `DEPLOY.md` exists and the app is containerized (Dockerfile), but there is no live URL, uptime, or user evidence in the repo itself. Unlike the other RealEstateCRM satellites, this repo is not built by the main CRM's CI.
- Housekeeping: `package.json` says version `0.0.0` (stale placeholder; the real version is 1.26.0); `database.sqlite` (~36 KB) is committed to the repo. The old README described the Vite/React stack — the UI has since moved to Next.js (`client-next/`).

## Relationship to RealEstateCRM

This was a satellite of [RealEstateCRM](https://github.com/RealEstateCRMLLC/RealEstateCRM) — the universal content platform. Its features now live in [socialmediacontentplanner](https://github.com/RealEstateCRMLLC/socialmediacontentplanner) (ContentCommand AI), which is the active home. This repo is preserved as the pre-merge original.

## Running it

```bash
# Server + client (concurrently)
npm install
npm run dev        # server + client-next (port 3012)
```

Or with Docker: `docker build -t app .` then `docker run` (see `DEPLOY.md`). Requires Node.js 22.x. The server reads its own `package.json` in `server/`.

## Links

- Active home (ContentCommand AI): https://github.com/RealEstateCRMLLC/socialmediacontentplanner
- Main CRM: https://github.com/RealEstateCRMLLC/RealEstateCRM
- Org: https://github.com/RealEstateCRMLLC
