# Aureon — Performance Marketing Agency Website

Responsive, static website built with HTML, CSS and JavaScript. No build step, package installation or paid services required.

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Upload to GitHub
1. Create a new GitHub repository (e.g. `aureon-website`).
2. Select **Add file → Upload files** and upload `index.html`, `styles.css`, `script.js`, the `assets` folder and this README (unzip first).
3. Commit changes.

## Publish on Vercel
1. Go to Vercel → Add New → Project.
2. Import the GitHub repository.
3. Set framework preset to **Other**, leave build command empty, and deploy.
4. Connect your domain when ready.

For GitHub Pages, enable **Settings → Pages → Deploy from a branch** with the root of `main`.

## IMPORTANT: What to customise before going live
- Replace `hello@aureon.example` in **both `index.html` and `script.js`** with an actual Aureon inbox.
- This demo form uses `mailto:` (opens the visitor's email app). For submissions directly from the site, connect Formspree, Netlify Forms or a backend; do not claim it currently stores/sends form entries automatically.
- Replace the deliberately labeled testimonial placeholder with a **real, client-approved quote**, client name and attribution. Never publish fabricated testimonials.
- Work examples are illustrative capability showcases, **not verified client case studies**. Add genuine client stories and verified metrics once available.
- Update services, region, company/legal details, links, privacy policy and branding after approval.
- Fonts load from Google Fonts, so connection is needed for their exact appearance (system sans-serif fallbacks are provided).

## Structure
- `index.html` — content and SEO metadata
- `styles.css` — responsive design
- `script.js` — mobile navigation, copyright year and basic mailto enquiry
- `assets/favicon.svg` — simple Aureon monogram

All website graphics are made with CSS/SVG and are included in this repository. No stock image licensing is required.


## New visual assets
Five original, self-hosted SVG art assets in `assets/` power the hero, process band and portfolio. These are illustrative Aureon-created design concepts (not stock photos or real client deliverables), so they need no external image hosting.

## Authenticity and launch checklist
- The portfolio consists of fictional **concept projects**, not completed client projects. Replace them with permissioned work before presenting them as case studies.
- The testimonials section is intentionally not populated with fictional quotes. Add real approved reviews and identify their authors accurately.
- Contact details have not been invented: set `CONTACT_EMAIL` in `script.js` and add your real business address/social links, if desired. The contact form currently uses `mailto:` after configuration; for guaranteed inbound capture connect a form backend.
- Never invent ROAS, revenue, client names, certifications, or success metrics.
