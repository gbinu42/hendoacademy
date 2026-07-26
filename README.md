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

Output is written to `out/`. Deploy is handled by `.github/workflows/deploy.yml` on push to `master` (Pages source must be **GitHub Actions**).
