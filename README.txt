GANIYAT GRAPHICS STUDIO — WEBSITE
==================================

WHAT'S INSIDE
  index.html               Home
  case-study.html          Case studies hub ("blog block" — 6 preview cards)
  case-study-detail.html   Reusable template for ONE full case study
  about.html                About / tools / design process
  testimonials.html        Client reviews + FAQ
  services.html            Services, packages, and the "Work with me" form
  css/style.css             All styling (one shared stylesheet)
  js/script.js               Mobile nav, FAQ accordion, video preview modal

HOW TO VIEW IT
  Just double-click index.html to open it in a browser, then click through
  the nav. No build step or install needed — it's plain HTML/CSS/JS.
  To publish it, upload the whole folder to any static host (Netlify,
  Vercel, GitHub Pages, or your existing hosting).

THINGS TO REPLACE BEFORE LAUNCH
  1. Tally form — in services.html, find YOUR_FORM_ID inside the
     data-tally-src attribute and swap in your real Tally form ID
     (Tally dashboard → your form → Embed tab → copy the ID from the URL).

  2. Social links — every "#" next to the X / Instagram / LinkedIn icons
     in each page's footer. Find-and-replace "#" won't work (too generic),
     so just search for aria-label="X (Twitter)" etc. and update the href
     on each page.

  3. Real photos — about.html's photo block and any "slide-frame" mockups
     are built with plain CSS/SVG placeholders (no stock or AI images used)
     so nothing looks broken before you add real assets. Swap the
     .about-photo div for a real <img>, and swap any .slide-frame's inner
     .mock div for a real screenshot when you have one.

  4. Video previews — the 4 cards in the home page gallery open a modal
     when clicked. To play a real clip, add a data-src="videos/yourfile.mp4"
     attribute to that .video-card div; until then they show a clean
     placeholder message instead of a broken video.

  5. Case studies — case-study.html is the grid/index page. Duplicate
     case-study-detail.html once per real project (e.g. case-study-01.html)
     and point that project's card in case-study.html to the new file.

  6. Testimonials — all reviews use placeholder quotes and first-name +
     last-initial only, per your request. Swap in real quotes as you
     collect them.

  7. Pricing — services.html shows the three packages you'd finalized
     (Presentation Design $400, Executive Deck Design $800, Retainer
     $1,500/month). Update anytime your pricing changes.

DESIGN SYSTEM NOTE
  The signature visual device across the site is the "slide frame" — a
  16:9 box with crop-mark corners and a small mono label, standing in for
  real slide/deck thumbnails everywhere a mockup is needed. It's built
  entirely in CSS so it never looks like a broken image, and it's easy to
  swap for a real screenshot later (see #3 above).

  From Suliyat
  Testimony.html is the Client Review Page
  Case-Study-Detail.html is for the first case study
  dont change the name for any of the files as it will affect its link to others, if you do, you will have to edit the "href="
