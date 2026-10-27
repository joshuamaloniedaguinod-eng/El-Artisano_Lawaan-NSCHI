# El Artisano PWA starter

A responsive, static PWA starter for the online publication of Lawaan National School of Craftsmanship and Home Industries.

## Included
- Home page, Feature Stories, Editorial Cartooning, About Us, and Admin CMS views
- Responsive desktop/mobile layout, Poppins typography, maroon/cream/gold branding
- Sample placeholder stories and cartoons
- Add, edit, and delete content in the browser
- JSON content backup export and reset to sample content
- PWA manifest and service worker starter

## Run locally
Because service workers and installable PWA behavior require a local web server or HTTPS, do not simply double-click the HTML for final testing. From this folder, run one of these commands:

- Python: `python -m http.server 8000`
- Then open `http://localhost:8000`

## Important CMS note
The included CMS is a browser-only demo. Content is stored in the current browser's localStorage and is not shared with other editors or devices. It has no authentication, role management, server database, or secure publishing workflow. Before public launch, connect it to a secure backend/CMS, add editor/adviser authentication, validation, image uploads, backups, and moderation/approval.

## Content and imagery
All story copy is sample placeholder text. Replace it with verified, school-approved content and images. Image URL fields accept publicly accessible image URLs. The publication logo was cropped from the supplied mockup image; replace `assets/el-artisano-logo.jpg` with the original high-resolution logo file if available.
