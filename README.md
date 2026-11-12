# Aureon — Website (red & black identity)

A responsive, static performance-marketing agency website made from HTML, CSS, JavaScript and bundled local assets. No build tool needed.

## Deploy to GitHub + Vercel
1. Extract this ZIP; upload the files **inside** this directory to the root of your GitHub repository (you should see `index.html`, `styles.css`, `script.js`, `assets/` at repository root).
2. On Vercel, choose **Add New → Project → Import Git Repository**.
3. Choose framework preset **Other**, root directory `./`, no build command, deploy.
4. Changes made to `main` should trigger deployments once the repo is connected.

## Contact
- Floating WhatsApp, main CTA and contact button open `https://wa.me/923354903317`.
- The form gathers contact information locally in the browser and opens a pre-filled WhatsApp message. It does **not** store enquiries or transmit them to a backend; the visitor must press Send in WhatsApp.
- No unverified email address is published.

## Portfolio and testimonials
- Portfolio images are **original illustrative concept graphics** produced for this demo, not a licensed claim to any third-party brand's actual campaign.
- Example testimonial statements are conspicuously labelled **illustrative**; they are not authentic client reviews. Replace these with approved client text and attribution before claiming they are real.
- There are no fictitious performance numbers, brand endorsements, client logos or paid-work assertions.

## Assets and edits
- `assets/aureon-mark.svg`: vector approximation of the angular mark shown in the user's supplied brand reference. Replace with the official brand SVG/PNG when available for pixel-exact fidelity.
- `assets/*.jpg`: bundled illustrative website imagery. No Pinterest hotlinks that might break or infringe rights.
- Fonts load from Google Fonts; fallbacks are defined for offline usage.
- Change the phone in `index.html` and `script.js` if needed.

## Local preview
Open `index.html` directly, or run `python -m http.server 8000` and visit http://localhost:8000.
