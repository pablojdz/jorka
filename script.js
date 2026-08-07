(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Floating island nav: scroll state + mobile morphing menu */
  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    }
    document.body.style.removeProperty("overflow");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) closeMenu();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* Before/after sliders (hero + service cards) */
  var sliders = document.querySelectorAll(".ba-slider");
  sliders.forEach(function (slider) {
    var range = slider.querySelector(".ba-slider__range");
    var afterLayer = slider.querySelector(".ba-slider__after");
    var handle = slider.querySelector(".ba-slider__handle");
    if (!range || !afterLayer || !handle) return;

    var apply = function () {
      var v = range.value;
      afterLayer.style.clipPath = "inset(0 " + (100 - v) + "% 0 0)";
      handle.style.left = v + "%";
    };
    range.addEventListener("input", apply);
    apply();

    /* One gentle auto-sweep on the hero to invite interaction */
    if (slider.hasAttribute("data-autosweep") && !reduceMotion) {
      var keyframes = [50, 68, 32, 50];
      var start = null;
      var duration = 1900;
      var swept = false;

      var step = function (ts) {
        if (start === null) start = ts;
        var t = Math.min((ts - start) / duration, 1);
        var eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        var seg = eased * (keyframes.length - 1);
        var i = Math.min(Math.floor(seg), keyframes.length - 2);
        var frac = seg - i;
        range.value = keyframes[i] + (keyframes[i + 1] - keyframes[i]) * frac;
        apply();
        if (t < 1) requestAnimationFrame(step);
      };

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !swept) {
            swept = true;
            setTimeout(function () { requestAnimationFrame(step); }, 650);
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(slider);
    }
  });

  /* Scroll reveals */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { revealIO.observe(el); });
  }
})();
