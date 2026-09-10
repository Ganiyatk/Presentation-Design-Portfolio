// ---------- mobile nav ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const open = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
        q.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---------- video preview modal ----------
  // Each .video-card carries data-title / data-tag / data-note describing the
  // clip that should live at the referenced src. Swap in a real .mp4 and the
  // <video> tag will play it automatically — until then we show a labeled
  // placeholder so the gallery never looks "broken".
  const modal = document.getElementById('video-modal');
  if (modal) {
    const frame = modal.querySelector('.modal-frame');
    const noteEl = modal.querySelector('.modal-note');
    const closeBtn = modal.querySelector('.modal-close');

    document.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.dataset.title || 'Project preview';
        const src = card.dataset.src || '';
        frame.innerHTML = '';
        if (src) {
          const v = document.createElement('video');
          v.src = src; v.controls = true; v.autoplay = true; v.playsInline = true;
          frame.appendChild(v);
        } else {
          const holder = document.createElement('div');
          holder.className = 'mock ' + (card.dataset.mock || 'mock-title');
          holder.innerHTML = card.querySelector('.mock')?.innerHTML || '';
          holder.style.position = 'absolute'; holder.style.inset = '0';
          frame.appendChild(holder);
        }
        noteEl.textContent = `${title} — drop your walkthrough clip into /videos/ and set data-src on this card to replace this preview.`;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; frame.innerHTML=''; };
    closeBtn?.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
});
