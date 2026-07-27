# Hendo Academy

Next.js static site for [hendoacademy.org](https://www.hendoacademy.org/), promoting the study of Syriac and the history of the Nasranies of India.

## Develop

```bash
npm install
npm run dev
```

Local URLs have no prefix: `http://localhost:3000/`, `http://localhost:3000/articles/neo-karshon`.

## Build (static export for GitHub Pages)

```bash
npm run build
```

Output is written to `out/`. Deploy is handled by `.github/workflows/deploy.yml` on push to `master`.

Deploy builds with **no** `basePath` (same as local). Assets use root paths (`/_next/...`, `/assets/...`).

`https://gbinu42.github.io/hendoacademy/` 301-redirects to `https://www.hendoacademy.org/`, so those root paths work on the custom domain. Do **not** set `PAGES_BASE_PATH=/hendoacademy` in CI: that prefixes CSS as `/hendoacademy/_next/...`, which 404s on the domain.

### Pages settings

In [Settings → Pages](https://github.com/gbinu42/hendoacademy/settings/pages):

1. **Source:** GitHub Actions.
2. Remove the custom domain, save, wait a minute, then add **`www.hendoacademy.org`** again (exactly that — not the apex alone).
3. Wait until DNS checks are green, then enable **Enforce HTTPS**.
4. Confirm `https://gbinu42.github.io/hendoacademy/` **301-redirects** to `https://www.hendoacademy.org/`. If it stays on github.io with a 200, the domain still is not bound here.

DNS:

- `www` → CNAME `gbinu42.github.io`
- apex → GitHub Pages A records

`public/CNAME` must match the custom domain field (`www.hendoacademy.org`).
