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

The deploy workflow sets `PAGES_BASE_PATH=/hendoacademy` so assets resolve under the project Pages path on `github.io`. Local and custom-domain builds leave `basePath` unset.

### Why CSS breaks on github.io without basePath

This is a **project** site (`/hendoacademy`). Without `basePath`, CSS would load from `https://gbinu42.github.io/_next/...` (404) instead of `.../hendoacademy/_next/...`.

With a **working** custom domain, GitHub 301s `github.io/hendoacademy` → the domain (see [hudra.day](https://hudra.day/)), so root `/_next` paths are fine on the domain. Once that redirect works, remove `PAGES_BASE_PATH` from the workflow and redeploy.

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
