# ChatGPTSpeak.com

A ChatGPT-style chat interface for Chatgptspeak.com.

## Features

- **ChatGPT-like layout** — centered chat box with a "What can I help with?" welcome state that docks to the bottom once a conversation starts
- **Collapsible left sidebar** — hamburger menu toggles the sidebar with New chat, chat history, and a profile footer
- **Chat sessions** — start new chats and switch between them from the sidebar
- **Mobile responsive** — sidebar becomes a slide-in drawer with a backdrop on small screens
- **Placeholder assistant** — a typing indicator and simulated streaming reply, ready to be swapped for a real AI backend

## Running

It's a single static page — no build step needed. Open `index.html` in a browser, or serve it:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.
