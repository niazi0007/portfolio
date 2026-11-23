# Muhammad Ibrar Khan: Portfolio Website

My personal portfolio, with a built-in store that can be switched on later.

## How to change things (no coding needed)

| I want to… | Open this file |
|---|---|
| Change my text, experience, projects, skills | `src/data/site.js` |
| Show the **Store** button in the menu | `src/data/site.js` → set `SHOW_STORE_IN_MENU = true` |
| Add or edit store products | `src/data/products.js` |
| Add my photo | Put `photo.jpg` in `public/`, then set `photo: "/photo.jpg"` in `site.js` |
| Update my CV | Replace the PDF in `public/` |

The store always works at **/store**, even when the menu button is hidden.

## Run it on your computer

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Run it with Docker

```bash
docker build -t portfolio .
docker run -p 8080:8080 portfolio
```
Open http://localhost:8080

## Built with
Next.js · React · Docker · (CI/CD to Azure coming next)
