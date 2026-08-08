# ChatGPTSpeak.com

The product website for **ChatGPT Speak** — intelligence that lives with you.

## Features

- **Multi-page structure** — five consolidated sections: Overview, Conversation (incl. Memory), Actions (incl. Work), Everyday (incl. The Home), and Design (incl. Privacy) — reached through an always-collapsed side drawer menu, with Previous/Next pagination; old URLs redirect to their merged pages
- **Full-bleed hero** — edge-to-edge coastal product photography stretched to the top and sides, with the minimal nav bar over it; the nav gains a blurred glass background on scroll; tab pages get their own cinematic page heroes
- **Editorial design system** — light, high-contrast palette in a clean ChatGPT-inspired style with dark cinematic photography heroes, self-hosted Cormorant Garamond display serif paired with Jost, amber and glow accents, chat-style dialogue vignettes, quote pills, contrast pairs, and a CSS-drawn device ring with a pulsing light
- **Complete product narrative** — every section of the launch copy: conversation, household memory, multi-user permissions, actions and agents, kitchen, travel, family, smart home, work, spatial awareness, privacy, language, hardware design, and the closing "Don't open AI. Live with it."
- **Scroll-reveal animations** — respectful of `prefers-reduced-motion`
- **Responsive** — from phones to large desktop displays

## Newsletter signups & admin

- Visitors can **sign up for news** on the Overview page and in every footer. Signups POST to `/api/subscribe`.
- **`/admin.html`** shows all signups behind a single password (no email login) with a CSV download.

One-time setup in Vercel:

1. In the project, go to **Storage → Create Database → Upstash for Redis** (free tier is fine). This injects the `KV_REST_API_URL` / `KV_REST_API_TOKEN` environment variables the API uses.
2. In **Settings → Environment Variables**, add `ADMIN_PASSWORD` with the password you want for `/admin.html`.
3. Redeploy. Until both are set, the signup form shows a friendly "not open yet" message and the admin page tells you what's missing.

## Running

A single static page — no build step. Open `index.html` in a browser, or serve it:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Structure

- `index.html` + eight tab pages — generated markup sharing one design system
- `assets/css/style.css` — the design system
- `assets/js/site.js` — nav, mobile menu, scroll-reveal
- `assets/fonts/` — self-hosted Cormorant Garamond and Jost (variable woff2)
- `assets/hero-coast.jpg` — coastal deck render: Overview hero, closing, and the Actions/Work/Design page heroes (`assets/hero-coast-original.png` is the original)
- `assets/hero-dining.jpg` — dining-room render: Conversation, Memory, Everyday, and Home page heroes (`assets/hero-dining-original.png` is the original)
- `assets/hero-bath.jpg` — bathroom render: Privacy page hero (`assets/hero-bath-original.png` is the original)
- `assets/hero-device.jpg` — studio render of the device (`assets/device-studio-original.png` is the original)
- `assets/carry.jpg`, `clip.jpg`, `place.jpg`, `dock.jpg`, `features-strip.jpg`, `exploded.jpg`, `dimensions.jpg`, `how-it-works.jpg`, `finishes.jpg`, `included.jpg` — Design-page panels cropped from `assets/product-sheet.png`
