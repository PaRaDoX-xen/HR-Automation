(function () {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const serviceFilters = Array.from(document.querySelectorAll('[data-filter]'));
  const serviceCards = Array.from(document.querySelectorAll('.service-card'));
  const contactForm = document.getElementById('contact-form');
  const formWrap = document.getElementById('contact-form-wrap');
  const year = document.getElementById('current-year') || document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  const scrollToContact = () => {
    nav?.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    const icon = menuButton?.querySelector('.menu-icon');
    if (icon) icon.textContent = '☰';
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  document.querySelectorAll('[data-scroll-contact]').forEach((button) => {
    button.addEventListener('click', scrollToContact);
  });

  menuButton?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('nav-open') ?? false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    const icon = menuButton.querySelector('.menu-icon');
    if (icon) icon.textContent = isOpen ? '✕' : '☰';
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open navigation');
      const icon = menuButton?.querySelector('.menu-icon');
      if (icon) icon.textContent = '☰';
    });
  });

  serviceFilters.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      serviceFilters.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let visibleCount = 0;
      serviceCards.forEach((card) => {
        const visible = filter === 'all' || card.dataset.category === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      serviceFilters.forEach((item) => {
        const count = item.querySelector('.filter-count');
        if (item === button) {
          if (count) count.textContent = String(visibleCount);
          else {
            const badge = document.createElement('span');
            badge.className = 'filter-count';
            badge.textContent = String(visibleCount);
            item.appendChild(badge);
          }
        } else if (count) {
          count.remove();
        }
      });
    });
  });

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    if (!formWrap) return;
    formWrap.innerHTML = `
      <div class="success-state" role="status" aria-live="polite">
        <div class="success-icon" aria-hidden="true">✓</div>
        <span class="micro-label">DEMO FORM SUBMISSION</span>
        <h3>Thanks for reaching out.</h3>
        <p>This demo does not send or store enquiries yet. Connect a form endpoint, email service, or CRM before publishing for real leads.</p>
        <button class="button button-primary" type="button" id="send-another">Send another enquiry <span aria-hidden="true">→</span></button>
      </div>`;
    document.getElementById('send-another')?.addEventListener('click', () => window.location.reload());
  });
})();