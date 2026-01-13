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
- To replace the portrait: add `photo.jpg` to the project root.
- Replace artwork images `art1.jpg` through `art10.jpg` in the repo and they will show on the Art page.
- Garden fence and kjøleteknikk galleries use placeholders (`placeholder1.jpg`, ...). Replace them with your images.

Lightbox & active nav
- I added a lightweight image lightbox: click a gallery image (selectors: `.gallery img`, `.art-card img`, `.project-card img`) to open it; click the overlay or press Esc to close.
- Active nav highlighting is automatic: the script finds the current filename and adds `class="active"` to the matching nav link. You can also add `class="active"` manually to a link if needed.

Next steps I can do for you (pick any):
- Add keyboard gallery navigation (arrow keys) and slide captions.
- Improve visual polish and spacing on a specific page (Home, Projects, Past Experience, Art, Contact, About).
- Add an image lightbox with thumbnails and swipe support for mobile.

Tell me which you want next and I’ll implement it and test responsiveness/behavior. 
