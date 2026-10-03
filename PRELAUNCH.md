# AuBonPainMenu.us pre-launch checklist

## Search and SEO

- [ ] Verify the production domain in Google Search Console.
- [ ] Submit `https://aubonpainmenu.us/sitemap.xml`.
- [ ] Confirm `robots.txt`, canonical URLs, Open Graph previews, and the favicon/brand presentation.
- [ ] Test representative home, category, item, FAQ, and policy pages in Rich Results Test.
- [ ] Confirm all official links point to the intended current Au Bon Pain pages.

## AdSense and privacy

- [ ] Replace `pub-0000000000000000` in `public/ads.txt` and the AdSense account meta placeholder with the real publisher ID.
- [ ] Complete the Google-certified CMP configuration for EEA/UK consent before enabling personalized ads.
- [ ] Confirm no ads load on Privacy, Terms, Contact, or Disclaimer pages.
- [ ] Keep ad slots below the main heading, with no more than three per page and reserved height.
- [ ] Publish a final Privacy Policy that matches the actual analytics, AdSense, cookie, and retention setup.
- [ ] Submit the site for AdSense review only after original content, navigation, contact details, and policies are complete.

## Manual verification required

- [ ] Compare every item name and ingredient list against the current official menu.
- [ ] Add calories and prices to `data/menu.json` only from a current official source; leave fields empty when unavailable.
- [ ] Re-check `lastVerified` dates after each menu review.
- [ ] Verify nutrition links and the official nutrition PDF URL.
- [ ] Verify the official location/store-locator URL.
- [ ] Verify café-specific hours; do not add addresses or state pages without verified data.
- [ ] Confirm seasonal and limited-time availability at representative cafés.
- [ ] Review vegetarian and allergen notes with the current ingredient information.
- [ ] Replace placeholder publisher IDs and confirm the live domain, email address, and HTTPS certificate.
- [ ] Test keyboard navigation, focus states, contrast, mobile layouts, and a slow mobile connection.
- [ ] Run Lighthouse and PageSpeed Insights; inspect LCP, CLS, INP, image behavior, and ad-induced layout changes.
