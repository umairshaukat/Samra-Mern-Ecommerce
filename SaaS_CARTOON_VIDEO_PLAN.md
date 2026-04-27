# Cartoon Video SaaS — Complete System Blueprint

## Goal
Build a SaaS where users:
1. Enter a prompt.
2. Generate an animated/cartoon video.
3. Choose from voice presets or upload their own voice sample.
4. Export and share final videos.

## Recommended Architecture
- **Web app:** React/Next.js editor + dashboard
- **Auth/Billing API:** Node.js + PostgreSQL + Stripe
- **Generation orchestrator:** queue-based worker system (BullMQ or SQS)
- **AI services:**
  - LLM for script/storyboard generation
  - video generation APIs/models for scene creation
  - TTS / voice cloning APIs for narration and character voices
- **Render service:** FFmpeg composition (scenes + voice + music + subtitles)
- **Storage/CDN:** S3-compatible object storage + signed delivery links

## Core APIs
- `POST /projects`
- `POST /projects/:id/generate` (prompt + style + duration + language)
- `POST /projects/:id/voice` (preset voice ID or uploaded sample)
- `GET /jobs/:jobId`
- `GET /projects/:id/export`

## Data Model (minimum)
- `users`
- `subscriptions`
- `projects`
- `scenes`
- `voices`
- `jobs`
- `usage_events`

## Safety + Compliance
- Consent capture for uploaded/cloned voice
- Content moderation before render/export
- Abuse controls + rate limits
- Terms for IP ownership of generated media

## MVP Phases
1. **Foundation:** auth, billing, projects, queue.
2. **Generation:** prompt→script→scene video pipeline.
3. **Voice:** marketplace voice selection + custom sample flow.
4. **Rendering:** stitching, subtitles, background music.
5. **Scale:** retries, idempotency, cost controls, analytics.

## Cost Model
Charge by credits based on:
- generated seconds
- render resolution
- premium voices
- regeneration count

## Immediate Next Step
Pick one video provider and one TTS provider first, then build the queue + render pipeline around those fixed contracts.
