# REALTECH CYBERSECURITY CONSULTANTS (K) LTD — Website

This is a lightweight static website scaffold for REALTECH CYBERSECURITY CONSULTANTS (K) LTD.

Structure
- index.html — Home
- about.html — About / Mission / Team
- services.html — Services pages
- contact.html — Contact form (uses Formspree by default; see below)
- assets/css/style.css — styles
- assets/js/main.js — small JS helpers
- assets/images/* — placeholder logo & illustrations
- CNAME — (contains realtechcyber.co.ke) — useful if deploying to GitHub Pages

Contact info (updated)
- Website: https://realtechcyber.co.ke
- Phone: +254 720 523 242
- Email shown in templates: info@realtech.co.ke (replace with your preferred address if needed)

Customization
1. Replace the logo: swap `assets/images/logo.svg` with your SVG or PNG.
2. Update contact details: edit phone & email in footer and contact page if you want a different email address.
3. Replace text with your official company copy (mission, bios, services details).
4. Connect the contact form:
   - Option A (Formspree): create a form on https://formspree.io and replace the `action` URL in `contact.html` with your Formspree form URL.
   - Option B (Netlify Forms): add `data-netlify="true"` attribute to the form and deploy to Netlify.
   - Option C: point form `action` to your backend endpoint.

Accessibility & Security Notes
- Ensure HTTPS on your hosting.
- If you collect personal data via the contact form, add a privacy notice and ensure data handling complies with applicable laws (Kenya Data Protection Act / GDPR if you handle EU data).

Deploy
- GitHub Pages: push to a repository and enable Pages from the repository settings (branch: main or gh-pages). Because the repo contains a `CNAME` file set to `realtechcyber.co.ke`, GitHub Pages can be configured to serve this domain.
- Netlify: drag & drop the folder or connect your Git repo and deploy; Netlify also supports form handling if you add `data-netlify="true"`.

Next steps I can help with
- Replace the placeholder email (info@realtech.co.ke) with a specific realtechcyber.co.ke address.
- Create the GitHub repository and push these files, then enable GitHub Pages and configure DNS (if you want me to prepare the commit and PR).
- Connect the contact form to Formspree, Netlify Forms, or your own backend.

Tell me which of the above you want next and I'll do it.