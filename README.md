# Portfolio — Christian Ågedal

This repository contains a minimal static portfolio site built from a layout inspired by an example site. It is customized with your content and placeholders so you can replace text and images easily.

Files overview:
- `index.html` — Home (hero + nav + latest blocks)
- `current-projects.html` — Current projects (includes garden fence gallery)
- `past-experience.html` — Past experience and study lists
- `art.html` — Art gallery (10 placeholders)
- `contact.html` — Contact & Social (email + LinkedIn)
- `about.html` — About me
- `main.css` — Stylesheet
- `scripts.js` — Small JS utilities (lightbox + active nav highlighting)

Quick notes
- The site currently uses temporary hosted placeholder images so pages display correctly while you provide originals. To use local images, add files with these names to the project root or update the `img src` in each page:
  - `photo.jpg` — portrait (~400×400)
  - `art1.jpg` … `art10.jpg` — artwork (approx. 800×600)
  - `placeholder1.jpg` … `placeholder4.jpg` — project/gallery images (approx. 600×400)
Once you add files with those names, they will appear automatically.

Lightbox & active nav
- I added a lightweight image lightbox: click a gallery image (selectors: `.gallery img`, `.art-card img`, `.project-card img`) to open it; click the overlay or press Esc to close.
- Active nav highlighting is automatic: the script finds the current filename and adds `class="active"` to the matching nav link. You can also add `class="active"` manually to a link if needed.

Next steps I can do for you (pick any):
- Add keyboard gallery navigation (arrow keys) and slide captions.
- Improve visual polish and spacing on a specific page (Home, Projects, Past Experience, Art, Contact, About).
- Add an image lightbox with thumbnails and swipe support for mobile.

Tell me which you want next and I’ll implement it and test responsiveness/behavior. 
