# Homepage

Custom Chrome new tab page — React 19 + TypeScript + Vite + Tailwind v4 + shadcn/ui.

## Features

- Search bar with engine selector: Google, Yandex, Perplexity, DeepSeek, ChatGPT
- Editable quick links bar with tabler icons (persisted in localStorage)
- Google Calendar embed filling remaining viewport height
- Dark / Light / System theme toggle (also toggled with `D` key)
- Gear icon → settings sheet (theme + quick links management)
- Chrome extension new tab override

## Dev

```bash
npm install
npm run dev
```

> Note: Google Calendar iframe only loads in the extension context (not `localhost`). Search and quick links work fully in dev.

## Build & Install as Chrome Extension

```bash
npm run build
```

1. Open `chrome://extensions`
2. Enable Developer Mode
3. Click **Load unpacked** → select the `dist/` folder
4. Open a new tab

## Quick Links Icons

When adding a custom link, enter a [Tabler icon](https://tabler.io/icons) name in the Icon field (e.g. `IconBrandYoutube`, `IconBrandGithub`). Leave blank for a generic link icon.

Available preset icons: `IconBrandYoutube`, `IconBrandGithub`, `IconBrandReddit`, `IconBrandX`, `IconBrandFigma`, `IconBrandGoogle`, `IconBrandTwitter`, `IconBrandLinkedin`, `IconBrandInstagram`, `IconBrandFacebook`, `IconBrandDiscord`, `IconBrandSlack`, `IconBrandSpotify`, `IconBrandNetflix`, `IconBrandTwitch`, `IconBrandNotion`, `IconBrandTelegram`, `IconBrandWhatsapp`.
