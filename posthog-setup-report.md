<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the portfolio site. PostHog is initialized via a client-side `PostHogProvider` component (correct for Next.js 14; `instrumentation-client.ts` requires 15.3+). A reverse proxy is configured in `next.config.mjs` so all analytics requests route through `/ingest` to reduce tracker-blocker interference. Environment variables (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`) are stored in `.env.local`. Session recording and error tracking (`capture_exceptions: true`) are enabled by default.

| Event | Description | File |
|---|---|---|
| `cv_downloaded` | User clicks the CV/resume download button | `app/page.tsx` |
| `contact_clicked` | User clicks email, Telegram, or WhatsApp to reach out (with `method` and `location` properties) | `app/components/contact-section.tsx`, `app/page.tsx` |
| `project_clicked` | User opens a project card detail dialog (with `project_title`, `project_category`) | `app/components/project-grid.tsx` |
| `project_link_opened` | User opens live site, GitHub repo, or App Store link from a project dialog (with `project_title`, `link_type`) | `app/components/project-grid.tsx` |
| `project_filter_changed` | User changes the project category filter (with `filter`) | `app/components/project-grid.tsx` |
| `hackathon_clicked` | User opens a hackathon card detail dialog (with `hackathon_name`, `achievement`) | `app/components/hackathon-grid.tsx` |
| `hackathon_link_opened` | User opens an external hackathon link (with `hackathon_name`) | `app/components/hackathon-grid.tsx` |
| `social_link_clicked` | User clicks LinkedIn, GitHub, or Portfolio link (with `platform`) | `app/components/online-presence.tsx` |
| `language_switched` | User switches portfolio language (with `language`, `previous_language`) | `app/page.tsx` |
| `blog_post_opened` | User clicks a blog post from the listing page (with `post_id`, `post_title`) | `app/blog/page.tsx` |
| `certificate_viewed` | User switches certificate tabs (with `certificate_title`, `issuer`) | `app/components/certificates-viewer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/454289/dashboard/1669130)
- [Contact clicks by method](https://us.posthog.com/project/454289/insights/FE04MQpz) — tracks how visitors prefer to get in touch
- [CV downloads](https://us.posthog.com/project/454289/insights/EoZxxXk1) — total resume downloads (top conversion metric)
- [Project engagement funnel](https://us.posthog.com/project/454289/insights/Um2tI7we) — conversion from project card click to opening the live/GitHub link
- [Most viewed projects](https://us.posthog.com/project/454289/insights/jAVhNTHd) — which projects attract the most interest
- [Social link clicks by platform](https://us.posthog.com/project/454289/insights/QWXDE4dT) — which social profiles visitors navigate to

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
