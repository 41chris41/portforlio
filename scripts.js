// Lightweight image lightbox and active nav highlighting
(function(){
  // Active nav highlighting
  function setActiveNav(){
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.top-nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
      if (!href) return;
      if (href === current || (href === 'index.html' && (current === '' || current === 'index.html'))){
        a.classList.add('active');
      }
    });
  }

  // Lightbox
  function openLightbox(src, alt){
    if (!src) return;
    // Prevent multiple
    if (document.querySelector('.lightbox')) return;
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.tabIndex = 0;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    box.appendChild(img);

    if (alt){
      const caption = document.createElement('div');
      caption.className = 'caption';
      caption.textContent = alt;
      box.appendChild(caption);
    }

    box.addEventListener('click', () => box.remove());
    box.addEventListener('keydown', (e) => { if(e.key === 'Escape') box.remove(); });
    document.body.appendChild(box);
    img.focus && img.focus();
  }

  document.addEventListener('click', (e) => {
    const el = e.target;
    if (el && el.matches('.gallery img, .art-card img, .project-card img')){
      e.preventDefault();
      openLightbox(el.src, el.alt || '');
    }
  });

  // Init
  document.addEventListener('DOMContentLoaded', () => setActiveNav());
})();