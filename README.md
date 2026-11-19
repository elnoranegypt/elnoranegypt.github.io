# ElNoranEgypt — EL NORAN for Trade & Export

Corporate website for **EL NORAN for Trade & Export**, an Egyptian exporter of fresh and frozen fruits and vegetables (Cairo, est. 2013).

Expected URL once deployed: **https://shahdgamil.github.io/ElNoranEgypt/**

| | |
|---|---|
| Frontend | React 18 + Vite, Framer Motion, Lucide icons, plain CSS (one stylesheet per component) |
| Contact email | Serverless function in [`server/email-api`](server/email-api) (Vercel) using Resend or Brevo |
| Hosting | GitHub Pages via GitHub Actions |

---

## 1. Run it locally

Requires **Node.js 20+**.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build at http://localhost:4173/ElNoranEgypt/
```

To test the email form locally, create a `.env.local` file (see [`.env.example`](.env.example)):

```bash
VITE_EMAIL_API_URL=https://<your-email-api>.vercel.app/api/send-email
```

---

## 2. Project structure

```
ElNoranEgypt/
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/
│   ├── favicon/                   # generated from the company logo
│   └── images/
│       ├── logo/                  # logo extracted from the company profile PDF
│       ├── fruits/  vegetables/  frozen/   # one image per product (22)
│       ├── gallery/               # 23 genuine photographs from the company profile
│       └── backgrounds/           # section backgrounds + dotted world map
├── scripts/generate-map.mjs       # regenerates the world map SVG
├── server/email-api/              # serverless email backend (deployed separately)
├── src/
│   ├── components/                # Navbar, Hero, About, Statistics, ProductCatalog, ProductCard,
│   │                              # ProductModal, WhyChooseUs, MissionVision, QualityStandards,
│   │                              # Gallery, GlobalPresence, Contact, Footer, Loader, Marquee, common/
│   ├── config/site.js             # ← contact details (emails, WhatsApp, address) live here
│   ├── data/                      # products.js, gallery.js, imageCredits.json, mapPins.json
│   ├── hooks/  utils/  styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html                     # SEO metadata, Open Graph, structured data
└── vite.config.js                 # base path for GitHub Pages
```

### Updating content

- **Contact details:** edit [`src/config/site.js`](src/config/site.js). The email *recipients that actually receive form submissions* are set on the backend (`MAIL_TO`, see section 4).
- **Products:** edit [`src/data/products.js`](src/data/products.js). Images go in `public/images/<category>/`.
- **Gallery:** edit [`src/data/gallery.js`](src/data/gallery.js).

### Images

- Gallery photographs, the logo, and the lemon, orange, pomegranate, strawberry and sweet-potato product images come from the **EL NORAN company profile PDF**.
- The other product images are freely licensed photographs from **Wikimedia Commons** (CC0 / CC BY / CC BY-SA / public domain). Attribution is listed in [`src/data/imageCredits.json`](src/data/imageCredits.json) and shown on the site under **Footer → Image credits**. When EL NORAN has its own photographs of these products, replace the files in `public/images/...` (keeping the same filenames) and remove the matching entries from `imageCredits.json`.
- All images are optimised WebP files and are lazy-loaded below the fold.

---

## 3. Contact form: how it works

| Button | What happens |
|---|---|
| **Send via Email** | The form is validated, then sent to the email API, which sends **one email addressed to both** `shahd.rafat@elnoranegypt.com` and `Mahmoud.ElGazar@elnoranegypt.com` (Reply-To is set to the visitor). The page shows loading, success and error states. |
| **Send via WhatsApp** | The form is validated, then the visitor chooses **Contact Shahd** (+20 115 600 2078) or **Contact Mahmoud** (+20 100 585 7878). WhatsApp opens with the message already filled in. |

> **About WhatsApp:** a `wa.me` link opens a chat with **one** person, and the visitor still has to press *Send*. A web page cannot deliver one message to two WhatsApp numbers by itself. For automatic delivery to **both** numbers, the email API includes an optional **WhatsApp Business Cloud API** integration that alerts both representatives on every inquiry. It needs a Meta Business account and an approved message template. See [`server/email-api/README.md`](server/email-api/README.md#optional-whatsapp-business-cloud-api).

> **Phone number note:** the second WhatsApp number was supplied as `+20100585787`, which is one digit short for an Egyptian mobile number. The company profile PDF lists **`+201005857878`**, so the site uses that. To change it, edit `whatsappContacts` in `src/config/site.js`.

If `VITE_EMAIL_API_URL` is not set, the email button shows a clear "not configured" message and a link that opens the visitor's own email app instead of failing silently.

---

## 4. Set up the email backend (one time)

GitHub Pages only hosts static files. It cannot run server code or keep API keys secret, so the email API is deployed separately on **Vercel** (free tier is fine). Full steps are in [`server/email-api/README.md`](server/email-api/README.md). In short:

1. Create a **Resend** account (or Brevo) and **verify the `elnoranegypt.com` domain** (add the DNS records it gives you).
2. Deploy `server/email-api` to Vercel and set these environment variables:
   `EMAIL_PROVIDER`, `RESEND_API_KEY` (or `BREVO_API_KEY`), `MAIL_FROM`, `MAIL_TO`, `ALLOWED_ORIGINS`.
3. Copy the deployed endpoint URL, e.g. `https://elnoran-email-api.vercel.app/api/send-email`.
4. In GitHub, go to **Settings → Secrets and variables → Actions → Variables** and add `VITE_EMAIL_API_URL` with that URL. Re-run the deploy workflow.

---

## 5. Deploy to GitHub Pages

### a) Create the repository
1. Sign in to GitHub as **shahdgamil**, then go to **New repository**.
2. Name it **`ElNoranEgypt`** (the name must match exactly, because the site is served from `/ElNoranEgypt/`), set it to **Public**, and don't add a README.

### b) Push the project
From this folder:

```bash
git init
git add .
git commit -m "EL NORAN website"
git branch -M main
git remote add origin https://github.com/shahdgamil/ElNoranEgypt.git
git push -u origin main
```

(`node_modules`, `dist` and `.env` files are excluded by `.gitignore`.)

### c) Turn on GitHub Pages with Actions
1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. (Optional, for email) add the `VITE_EMAIL_API_URL` variable described in section 4.

### d) Deploy
- Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs, builds and publishes the site.
- To redeploy manually, open **Actions → Deploy to GitHub Pages → Run workflow**.
- Follow progress in the **Actions** tab. When the run is green, the URL appears in the run summary and under **Settings → Pages**:
  **https://shahdgamil.github.io/ElNoranEgypt/**

**Alternative (no Actions):** run `npm run deploy`. This builds and pushes `dist/` to a `gh-pages` branch. Then set **Settings → Pages → Source** to *Deploy from a branch* → `gh-pages` / root. Set `VITE_EMAIL_API_URL` in `.env.production.local` before running it.

### Base path
`vite.config.js` uses `/ElNoranEgypt/` for production builds. All asset URLs go through `import.meta.env.BASE_URL`, so images keep working under the sub-path.

---

## 6. Custom domain (later)

To serve the site from, for example, `www.elnoranegypt.com`:

1. In your DNS provider, add a **CNAME** record `www` → `shahdgamil.github.io`. For the apex domain (`elnoranegypt.com`), add **A** records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
2. In GitHub, go to **Settings → Pages → Custom domain**, enter the domain, save, and tick **Enforce HTTPS** once it's available.
3. Add a repository variable **`VITE_BASE_PATH` = `/`** (the site now lives at the domain root), then re-run the workflow.
4. Add the new domain to `ALLOWED_ORIGINS` on the email API (e.g. `https://www.elnoranegypt.com`).
5. Optional: update the `homepage` field in `package.json`.

---

## 7. Content principles

The website uses only information from the EL NORAN company profile: background, vision, mission, the 22 products, standards (GlobalG.A.P., Fairtrade), markets (Europe, Africa, Asia, Arab countries) and contact details. No certificate numbers, export volumes, customer counts or specific destination countries have been invented. The "At a glance" counters show only figures from the profile (founded 2013, 14 fresh and 8 frozen products, 4 market regions, 2 standards). Standards are shown as text seals, not official logos.

## 8. Testing checklist (verified before handover)

- All 22 products render, and the filters show 7 / 7 / 8 / 22.
- All product and gallery images load. No failed network requests.
- Product modal: open, previous/next (buttons and arrow keys), Escape to close, "Request Information" pre-fills the contact form.
- Gallery: filters, "show more", lightbox with keyboard and swipe navigation.
- Contact form: required-field and email validation. WhatsApp links go to `wa.me/201156002078` and `wa.me/201005857878` with the specified message template. The email request reaches the API and is addressed to both recipients (tested against the real handler with the provider call mocked).
- Mobile menu, no horizontal overflow at 390 px or 1440 px, no console errors, production build succeeds.
- Respects the `prefers-reduced-motion` setting.
