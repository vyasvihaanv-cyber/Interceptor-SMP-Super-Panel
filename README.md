# Interceptor SMP Super Panel

The official website for **Interceptor SMP**, a Minecraft survival multiplayer server.

**Server IP:** `play.interceptor.dpdns.org`

The site gives players everything they need to get in: a one-click copy button for the server address, a live online/offline status with player count, step-by-step join instructions, and the server rules.

## Features

- Click-to-copy server address
- Live server status and player count (via the public [mcsrvstat.us](https://mcsrvstat.us) API)
- How-to-join guide
- Editable rules section
- Responsive layout, keyboard-accessible, respects reduced-motion settings
- Custom 404 page, favicon, security headers and caching rules for Cloudflare

## Tech

Plain HTML, CSS and JavaScript. There is **no build step and no dependencies**, so it deploys to Cloudflare Pages as-is.

## Project structure

```
index.html    Page content (text, join steps, rules)
style.css     Design (colors and fonts are variables at the top)
script.js     Copy button and live server status
404.html      Not-found page
favicon.svg   Site icon
_headers      Cloudflare Pages security and cache headers
robots.txt    Search engine rules
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub, with these files at the repository root.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Import an existing Git repository**.
3. Select the repository and use these settings:
   - **Framework preset:** None
   - **Build command:** leave empty
   - **Build output directory:** `/` (or leave empty)
4. Select **Save and Deploy**. The site is live at `<project-name>.pages.dev` within a minute.

Every push to the `main` branch redeploys automatically.

### Custom domain (optional)

In your Pages project, open **Custom domains → Set up a custom domain** and follow the prompts.

## Customize

- **Text and rules:** edit `index.html`
- **Colors and fonts:** edit the variables at the top of `style.css`
- **Server address:** change `HOST` in `script.js` and the address text in `index.html`

## Troubleshooting

- **Blank page or 404 on deploy:** the output directory is wrong, or the files are inside a subfolder. `index.html` must be at the repository root.
- **Status shows "Status unavailable":** the mcsrvstat.us API is unreachable or rate limiting. The rest of the site still works.
- **Status shows offline but the server is up:** the server may block status queries. Check that it's reachable on its public IP.

## Disclaimer

Interceptor SMP is not affiliated with Mojang or Microsoft.
