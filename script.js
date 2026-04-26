(function () {
  // Sticky nav border on scroll
  var header = document.querySelector('header');
  if (header) window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // FAQ accordion — one open at a time
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.hasAttribute('data-open');
      document.querySelectorAll('.faq-item[data-open]').forEach(function (i) {
        i.removeAttribute('data-open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) { item.setAttribute('data-open', ''); this.setAttribute('aria-expanded', 'true'); }
    });
  });

  // Mobile nav
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open'); hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('header') && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open'); hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
