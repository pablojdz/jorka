(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

  /* Logo → top of page (hero / portada) */
  var logo = document.getElementById("navLogo");
  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      closeMenu();
      var top = document.getElementById("inicio");
      if (top && typeof top.scrollIntoView === "function") {
        top.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }
      if (history.replaceState) history.replaceState(null, "", "#inicio");
    });
  }

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

  /* Contact form: Spanish validation + submitting state */
  var form = document.querySelector(".contact__form");
  if (form) {
    var statusEl = document.getElementById("formStatus");
    var submitBtn = document.getElementById("formSubmit");
    var labelEl = submitBtn ? submitBtn.querySelector(".btn__label") : null;

    var messages = {
      nombre: "Escribí tu nombre para que sepamos a quién responder.",
      correo: "Necesitamos un correo válido (con @) para contactarte.",
      mensaje: "Contanos un poco sobre el piso, deck o proyecto."
    };

    function clearErrors() {
      form.querySelectorAll(".field").forEach(function (field) {
        field.classList.remove("is-invalid");
      });
      form.querySelectorAll(".field__error").forEach(function (el) {
        el.textContent = "";
      });
      if (statusEl) {
        statusEl.textContent = "";
        statusEl.classList.remove("is-error");
      }
    }

    function showFieldError(name, msg) {
      var input = form.elements[name];
      if (!input) return;
      var field = input.closest(".field");
      var err = field ? field.querySelector('.field__error[data-for="' + name + '"]') : null;
      if (field) field.classList.add("is-invalid");
      if (err) err.textContent = msg;
    }

    form.addEventListener("submit", function (e) {
      clearErrors();
      var firstInvalid = null;

      ["nombre", "correo", "mensaje"].forEach(function (name) {
        var input = form.elements[name];
        if (!input) return;
        if (!input.checkValidity()) {
          showFieldError(name, messages[name]);
          if (!firstInvalid) firstInvalid = input;
        }
      });

      if (firstInvalid) {
        e.preventDefault();
        if (statusEl) {
          statusEl.textContent = "Revisá los campos marcados e intentá de nuevo.";
          statusEl.classList.add("is-error");
        }
        firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.classList.add("is-loading");
        submitBtn.setAttribute("aria-disabled", "true");
        if (labelEl) labelEl.textContent = "Enviando…";
      }
      if (statusEl) {
        statusEl.textContent = "Enviando tu mensaje…";
        statusEl.classList.remove("is-error");
      }
    });

    form.addEventListener("input", function (e) {
      var field = e.target.closest(".field");
      if (!field || !field.classList.contains("is-invalid")) return;
      if (e.target.checkValidity()) {
        field.classList.remove("is-invalid");
        var err = field.querySelector(".field__error");
        if (err) err.textContent = "";
      }
    });
  }
})();
