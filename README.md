# ChatGPTSpeak.com

The product website for **ChatGPT Speak** — intelligence that lives with you.

## Features

- **Multi-page structure** — each top tab is its own page: Overview, Conversation, Memory, Actions, Everyday, Home, Work, Privacy, Design — with Previous/Next pagination between them
- **Full-bleed hero** — edge-to-edge product photography with the navigation tabs integrated over it; the nav gains a blurred glass background on scroll; tab pages get their own cinematic page heroes
- **Editorial design system** — light, high-contrast palette in a clean ChatGPT-inspired style with dark cinematic photography heroes, self-hosted Cormorant Garamond display serif paired with Jost, amber and glow accents, chat-style dialogue vignettes, quote pills, contrast pairs, and a CSS-drawn device ring with a pulsing light
- **Complete product narrative** — every section of the launch copy: conversation, household memory, multi-user permissions, actions and agents, kitchen, travel, family, smart home, work, spatial awareness, privacy, language, hardware design, and the closing "Don't open AI. Live with it."
- **Scroll-reveal animations** — respectful of `prefers-reduced-motion`
- **Responsive** — from phones to large desktop displays

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
- `assets/hero-device.jpg` — studio render of the device used in the Overview hero (`assets/device-studio-original.png` is the original)
- `assets/hero.jpg` — dark lifestyle photograph used for page heroes and the closing (`assets/hero-original.png` is the original)
- `assets/carry.jpg`, `clip.jpg`, `place.jpg`, `dock.jpg` — lifestyle panels on the Design page, cropped from `assets/product-sheet.png`
