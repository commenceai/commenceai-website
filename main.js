/* Commence AI - small progressive enhancements.
   Written in ES5 (no arrow functions, let/const, optional chaining, etc.)
   so it runs on older Android and iOS browsers. The page works fully without it. */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function closeMenu() {
    if (!header || !toggle) { return; }
    header.className = header.className.replace(/\s*nav-open/g, '');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (header && toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = header.className.indexOf('nav-open') !== -1;
      if (isOpen) {
        closeMenu();
      } else {
        header.className += ' nav-open';
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close the mobile menu after tapping a link
    var links = nav.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) { closeMenu(); }
    });
  }

  // Keep the copyright year current
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
