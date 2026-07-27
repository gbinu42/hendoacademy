# Hendo Academy

Next.js static site for [hendoacademy.org](https://www.hendoacademy.org/), promoting the study of Syriac and the history of the Nasranies of India.

## Develop

```bash
npm install
npm run dev
```

## Build (static export for GitHub Pages)

```bash
npm run build
```

Output is written to `out/`. Deploy is handled by `.github/workflows/deploy.yml` on push to `master`.

### Pages settings (required)

In [repo Settings → Pages](https://github.com/gbinu42/hendoacademy/settings/pages):

1. **Source:** GitHub Actions (not “Deploy from a branch”).
2. **Custom domain:** `www.hendoacademy.org` (must match `public/CNAME`).
3. Enable **Enforce HTTPS**.
4. Prefer verifying the domain under the account’s Pages domain settings so another repo cannot claim it.

DNS (already expected):

- `www` → CNAME `gbinu42.github.io`
- apex `hendoacademy.org` → GitHub Pages A records

After changing Source/domain, re-run **Deploy to GitHub Pages** (Actions → workflow → Run workflow), then confirm:

- Working project URL: https://gbinu42.github.io/hendoacademy/
- Custom domain should show the same site (not a bare Jekyll “11414” page)
