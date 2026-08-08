(function () {
  var nav = document.getElementById('nav');
  var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 24); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Side drawer — always starts collapsed; closes on link, backdrop, close button, or Esc.
  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('drawer');
  var backdrop = document.getElementById('drawerBackdrop');
  var closeBtn = document.getElementById('drawerClose');

  function setOpen(open) {
    drawer.classList.toggle('open', open);
    backdrop.classList.toggle('show', open);
    toggle.setAttribute('aria-expanded', open);
  }
  toggle.addEventListener('click', function () {
    setOpen(!drawer.classList.contains('open'));
  });
  closeBtn.addEventListener('click', function () { setOpen(false); });
  backdrop.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  // Newsletter signup forms
  document.querySelectorAll('[data-news-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var msg = form.parentElement.querySelector('.news-msg');
      var btn = form.querySelector('button');
      btn.disabled = true;
      if (msg) msg.textContent = 'Signing you up…';
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: input.value })
      })
        .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok) {
            if (msg) msg.textContent = "Thanks — you're on the list.";
            input.value = '';
          } else if (msg) {
            msg.textContent = res.d.error || 'Something went wrong — please try again.';
          }
        })
        .catch(function () {
          if (msg) msg.textContent = 'Network error — please try again.';
        })
        .finally(function () { btn.disabled = false; });
    });
  });

  var reveals = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function (el) { io.observe(el); });
})();
