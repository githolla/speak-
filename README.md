# ChatGPTSpeak.com

The product website for **ChatGPT Speak** — intelligence that lives with you.

## Features

- **Full-bleed hero** — edge-to-edge product photography with the navigation tabs integrated over it; the nav gains a blurred glass background on scroll
- **Integrated top tabs** — Conversation, Memory, Actions, Everyday, Home, Work, Privacy, Design — with scrollspy highlighting and smooth anchor scrolling; collapses to a hamburger menu on mobile
- **Editorial design system** — dark luxury palette, Fraunces serif display type paired with Inter, amber and glow accents, chat-style dialogue vignettes, quote pills, contrast pairs, and a CSS-drawn device ring with a pulsing light
- **Complete product narrative** — every section of the launch copy: conversation, household memory, multi-user permissions, actions and agents, kitchen, travel, family, smart home, work, spatial awareness, privacy, language, hardware design, and the closing "Don't open AI. Live with it."
- **Scroll-reveal animations** — respectful of `prefers-reduced-motion`
- **Responsive** — from phones to large desktop displays

## Running

A single static page — no build step. Open `index.html` in a browser, or serve it:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Assets

- `assets/hero.jpg` — web-optimized hero photograph (used by the page)
- `assets/hero-original.png` — original full-resolution image
