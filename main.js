/* Scroll reveal shared by every page */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var sel = [
    '.hero h1', '.meta p', '.statement p', '.statement .mono', '.sec-head', '.index li',
    '.photo', '.ab-grid > div > *', '.adv li', '.stats div',
    '.contact > .mono', '.contact h2', '.c-info', '#hello',
    '.p-hero > *', '.film', '.poster', '.p-cta > *', '.svc', '.client'
  ].join(',');

  function init() {
    if (!('IntersectionObserver' in window)) { root.classList.remove('js'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('in', e.isIntersecting); });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    document.querySelectorAll(sel).forEach(function (el) {
      var group = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.matches(sel); });
      el.style.setProperty('--d', Math.min(group.indexOf(el), 6) * 90 + 'ms');
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
