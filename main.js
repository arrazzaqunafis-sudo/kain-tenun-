/* =========================================================
   main.js -- interaksi situs Benang Pusaka
   ========================================================= */
(function () {
  "use strict";

  var M = window.MotifLib;
  var D = window.DATA;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  /* =======================================================
     1. HERO
     ======================================================= */
  function renderHero() {
    var hf = $("#heroFabric");
    if (hf) hf.innerHTML = M.fabric({ type: "ketupat", palette: "sumba", border: true });

    var tass = $("#heroTassels");
    if (tass) {
      var html = "";
      for (var i = 0; i < 7; i++) {
        html += '<i style="animation-delay:' + (i * 0.22).toFixed(2) + 's"></i>';
      }
      tass.innerHTML = html;
    }

    var track = $("#marqueeTrack");
    if (track) {
      var words = ["Ulos Batak", "Tenun Ikat", "Songket Palembang", "Lurik Jawa",
        "Kawung Bali", "Sasag Karo", "Tais Timor", "Nitto Rote", "Kain Senggang"];
      var line = words.map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("");
      track.innerHTML = line + line;
    }
  }

  /* =======================================================
     2. BENTO WILAYAH
     ======================================================= */
  var filterZona = "Semua";
  var searchTerm = "";

  function zonaList() {
    var z = ["Semua"];
    D.wilayah.forEach(function (w) {
      if (z.indexOf(w.zona) === -1) z.push(w.zona);
    });
    return z;
  }

  function renderZonaChips() {
    var host = $("#regionFilters");
    if (!host) return;
    host.innerHTML = zonaList().map(function (z) {
      return '<button type="button" data-zona="' + esc(z) + '"' +
        (z === filterZona ? ' class="is-on"' : "") + ">" + esc(z) + "</button>";
    }).join("");
  }

  function passFilter(w) {
    var okZona = filterZona === "Semua" || w.zona === filterZona;
    var q = searchTerm.trim().toLowerCase();
    var hay = [w.nama, w.sub, w.daerah, w.motif, w.zona, w.teknik, w.warna, w.palet].join(" ").toLowerCase();
    return okZona && (!q || hay.indexOf(q) > -1);
  }

  function renderBento() {
    var grid = $("#regionGrid");
    if (!grid) return;
    var list = D.wilayah.filter(passFilter);

    grid.innerHTML = list.map(function (w, i) {
      return (
        '<button class="bento__cell reveal" data-delay="' + (i % 3) + '" data-id="' + w.id +
        '" type="button" aria-label="Buka lembar ' + esc(w.nama) + '">' +
          M.fabric({ type: w.motifType, palette: w.palet, border: w.border }) +
          '<span class="bento__veil"></span>' +
          '<span class="bento__top">' +
            '<span class="chip">' + esc(w.daerah) + "</span>" +
            '<span class="bento__no">' + pad(i + 1) + "</span>" +
          "</span>" +
          '<span class="bento__body">' +
            '<span class="bento__name">' + esc(w.nama) + "<em>" + esc(w.sub) + "</em></span>" +
            '<span class="bento__meta">' +
              "<span>" + esc(w.teknik) + "</span>" +
              "<span>" + esc(w.warna.split(",")[0]) + "</span>" +
            "</span>" +
            '<span class="bento__cue">Baca lembar ' +
              '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            "</span>" +
          "</span>" +
        "</button>"
      );
    }).join("");

    var empty = $("#regionEmpty");
    if (empty) empty.hidden = list.length !== 0;
    observeReveal(grid);
  }

  /* =======================================================
     3. FILOSOFI
     ======================================================= */
  function renderStory() {
    var host = $("#storyList");
    if (!host) return;
    host.innerHTML = D.filosofi.map(function (f, i) {
      var flip = i % 2 === 1 ? " story__item--flip" : "";
      return (
        '<article class="story__item' + flip + '">' +
          '<figure class="story__figure">' +
            '<span class="story__index" aria-hidden="true">' + f.no + "</span>" +
            '<div class="story__swatch">' + M.fabric({ type: f.motifType, palette: f.palet, border: true }) + "</div>" +
            "<figcaption><span>" + esc(f.asal) + "</span><strong>" + esc(f.label) + "</strong></figcaption>" +
          "</figure>" +
          '<div class="story__text">' +
            '<p class="eyebrow"><span class="eyebrow__dot"></span>' + esc(f.kicker) + "</p>" +
            "<h3>" + esc(f.judul) + "</h3>" +
            "<p>" + esc(f.paragraf) + "</p>" +
            '<blockquote class="story__pull">' + esc(f.pull) + "<cite>" + esc(f.cite) + "</cite></blockquote>" +
            '<ul class="story__list">' +
              f.poin.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") +
            "</ul>" +
          "</div>" +
        "</article>"
      );
    }).join("");
    observeReveal(host);
  }

  function renderProses() {
    var host = $("#prosesList");
    if (!host) return;
    host.innerHTML = D.proses.map(function (p) {
      return (
        "<li>" +
          "<h4>" + esc(p.judul) + "</h4>" +
          "<p>" + esc(p.teks) + "</p>" +
          "<i>" + esc(p.durasi) + "</i>" +
        "</li>"
      );
    }).join("");
    observeReveal(host);
  }

  /* =======================================================
     4. GALERI
     ======================================================= */
  var galFilter = "Semua";

  function renderGalZona() {
    var host = $("#galleryFilters");
    if (!host) return;
    var z = [];
    D.galeri.forEach(function (g) {
      if (z.indexOf(g.zona) === -1) z.push(g.zona);
    });
    var all = ['<button type="button" data-gzona="Semua" class="is-on">Semua</button>'];
    var rest = z.map(function (v) {
      return '<button type="button" data-gzona="' + esc(v) + '">' + esc(v) + "</button>";
    });
    host.innerHTML = all.concat(rest).join("");
  }

  function renderGallery() {
    var grid = $("#galleryGrid");
    if (!grid) return;
    var list = D.galeri.filter(function (g) {
      return galFilter === "Semua" || g.zona === galFilter;
    });

    grid.innerHTML = list.map(function (g) {
      var idx = D.galeri.indexOf(g);
      return (
        '<button class="gcard' + (g.span ? " gcard--big" : "") + '" type="button" data-idx="' + idx +
        '" aria-label="Perbesar ' + esc(g.nama) + '">' +
          '<span class="gcard__fabric">' + M.fabric({ type: g.motifType, palette: g.palet, border: true }) + "</span>" +
          '<span class="gcard__veil"></span>' +
          '<span class="gcard__zoom" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" width="16" height="16"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11 8.5v5M8.5 11h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' +
          "</span>" +
          '<span class="gcard__body">' +
            '<strong class="gcard__title">' + esc(g.nama) + "</strong>" +
            '<span class="gcard__where">' + esc(g.daerah) + "</span>" +
          "</span>" +
        "</button>"
      );
    }).join("");
    observeReveal(grid);
  }

  function renderCta() {
    var host = $("#ctaWays");
    if (!host) return;
    host.innerHTML = D.cara.map(function (c) {
      return (
        "<li>" +
          '<svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">' + c.icon + "</svg>" +
          "<h4>" + esc(c.judul) + "</h4>" +
          "<p>" + esc(c.teks) + "</p>" +
        "</li>"
      );
    }).join("");
    observeReveal(host);
  }

  /* =======================================================
     5. NAVBAR + SCROLL
     ======================================================= */
  function initNav() {
    var nav = $("#nav");
    var toggle = $("#navToggle");
    var links = $("#navLinks");
    var progress = $("#scrollProgress span");
    var toTop = $("#toTop");

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    function onScroll() {
      var y = window.pageYOffset;
      nav.classList.toggle("is-stuck", y > 30);
      toTop.classList.toggle("is-on", y > 700);
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });

    var navA = $$("#navLinks a[href^='#']");
    if ("IntersectionObserver" in window && navA.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = en.target.id;
          navA.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      $$("section[id], .proses[id]").forEach(function (s) { spy.observe(s); });
    }
  }

  /* =======================================================
     6. REVEAL ON SCROLL
     ======================================================= */
  var revealObs = null;

  function observeReveal(scope) {
    var items = $$(".reveal", scope || document);
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            revealObs.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    }
    items.forEach(function (el) { revealObs.observe(el); });
  }

  /* =======================================================
     7. COUNTER
     ======================================================= */
  function initCounters() {
    var nodes = $$("[data-count]");
    if (!nodes.length) return;

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.textContent = n.dataset.count + (n.dataset.suffix || ""); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        obs.unobserve(el);
        var target = parseInt(el.dataset.count, 10) || 0;
        var suffix = el.dataset.suffix || "";
        var start = performance.now();
        var dur = 1400;
        (function step(now) {
          var t = Math.min(1, (now - start) / dur);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.5 });

    nodes.forEach(function (n) { obs.observe(n); });
  }

  /* =======================================================
     8. FILTER
     ======================================================= */
  function initFilters() {
    var zoneHost = $("#regionFilters");
    var galHost = $("#galleryFilters");
    var search = $("#regionSearch");

    zoneHost.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-zona]");
      if (!b) return;
      filterZona = b.dataset.zona;
      $$("button", zoneHost).forEach(function (x) { x.classList.remove("is-on"); });
      b.classList.add("is-on");
      renderBento();
    });

    var t = null;
    search.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        searchTerm = search.value;
        renderBento();
      }, 180);
    });

    galHost.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-gzona]");
      if (!b) return;
      galFilter = b.dataset.gzona;
      $$("button", galHost).forEach(function (x) { x.classList.remove("is-on"); });
      b.classList.add("is-on");
      renderGallery();
    });
  }

  /* =======================================================
     9. DRAWER / LEMBAR ENSIKLOPEDI
     ======================================================= */
  var drawer, drawerPanel, lastFocus = null;

  function openDrawer(id) {
    var w = null;
    for (var i = 0; i < D.wilayah.length; i++) {
      if (D.wilayah[i].id === id) w = D.wilayah[i];
    }
    if (!w) return;

    lastFocus = document.activeElement;

    drawerPanel.innerHTML =
      '<div class="dr__hero">' +
        M.fabric({ type: w.motifType, palette: w.palet, border: w.border }) +
        '<span class="dr__heroTag">' + esc(w.daerah) + "</span>" +
        '<button class="dr__close" type="button" data-close aria-label="Tutup lembar">' +
          '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' +
        "</button>" +
      "</div>" +
      '<div class="dr__body">' +
        '<p class="dr__kicker">Lembar ' + esc(w.id.toUpperCase()) + " dari Ensiklopedi Tenun Nusantara</p>" +
        '<h2 class="dr__title">' + esc(w.nama) + "</h2>" +
        '<p class="dr__sub">' + esc(w.sub) + " &middot; " + esc(w.daerah) + "</p>" +
        '<p class="dr__lead">' + esc(w.lead) + "</p>" +
        '<dl class="dr__specs">' +
          "<div><dt>Teknik</dt><dd>" + esc(w.teknik) + "</dd></div>" +
          "<div><dt>Bahan</dt><dd>" + esc(w.bahan) + "</dd></div>" +
          "<div><dt>Palet warna</dt><dd>" + esc(w.warna) + "</dd></div>" +
          "<div><dt>Catatan</dt><dd>" + esc(w.tahun) + "</dd></div>" +
        "</dl>" +
        '<div class="dr__mean"><h4>Makna motif</h4><p>' + esc(w.makna) + "</p></div>" +
        '<ul class="dr__list">' +
          w.poin.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") +
        "</ul>" +
        '<div class="dr__foot">' +
          '<button class="btn btn--primary" type="button" data-dr-toast="Permintaan info dikirim ke pengrajin ' + esc(w.nama) + '">Tertarik dengan ' + esc(w.nama) + "?" + "</button>" +
          '<button class="btn btn--ghost" type="button" data-dr-toast="Tautan lembar ' + esc(w.id) + ' disalin">Salin tautan lembar</button>' +
        "</div>" +
      "</div>";

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    drawerPanel.scrollTop = 0;
    var c = $(".dr__close", drawerPanel);
    if (c) c.focus();
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function initDrawer() {
    drawer = $("#drawer");
    drawerPanel = $("#drawerPanel");

    $("#regionGrid").addEventListener("click", function (e) {
      var cell = e.target.closest(".bento__cell");
      if (cell) openDrawer(cell.dataset.id);
    });

    drawer.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) { closeDrawer(); return; }
      var t = e.target.closest("[data-dr-toast]");
      if (t) showToast(t.dataset.drToast);
    });

    drawer.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var f = $$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', drawerPanel)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    });
  }

  /* =======================================================
     10. LIGHTBOX
     ======================================================= */
  var lb, lbFabric, lbCap, lbIndex = 0, lbLast = null;

  function lbShow(i) {
    var g = D.galeri[i];
    if (!g) return;
    lbIndex = (i + D.galeri.length) % D.galeri.length;
    lbFabric.innerHTML = M.fabric({ type: g.motifType, palette: g.palet, border: true });
    lbCap.innerHTML =
      "<h3>" + esc(g.nama) + "</h3>" +
      '<span class="lb__where">' + esc(g.daerah) + " &middot; " + esc(g.motif) + "</span>" +
      "<p>" + esc(g.ket) + "</p>";
  }

  function lbOpen(i) {
    lbLast = document.activeElement;
    lbShow(i);
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    $(".lightbox__close").focus();
  }

  function lbClose() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (lbLast && lbLast.focus) lbLast.focus();
  }

  function initLightbox() {
    lb = $("#lightbox");
    lbFabric = $("#lightboxFabric");
    lbCap = $("#lightboxCaption");

    $("#galleryGrid").addEventListener("click", function (e) {
      var card = e.target.closest(".gcard");
      if (card) lbOpen(parseInt(card.dataset.idx, 10));
    });

    lb.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) { lbClose(); return; }
      if (e.target.closest("[data-lb-prev]")) { lbShow(lbIndex - 1); return; }
      if (e.target.closest("[data-lb-next]")) { lbShow(lbIndex + 1); }
    });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") lbClose();
      if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
      if (e.key === "ArrowRight") lbShow(lbIndex + 1);
    });

    var x0 = null;
    lb.addEventListener("touchstart", function (e) {
      x0 = e.changedTouches[0].clientX;
    }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
  }

  /* =======================================================
     11. TOAST
     ======================================================= */
  var toastTimer = null;

  function showToast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-on"); }, 3200);
  }

  function initToastTriggers() {
    $$("[data-action]").forEach(function (b) {
      b.addEventListener("click", function () {
        showToast(b.dataset.action === "beli"
          ? "Terima kasih. Pada versi nyata, kamu akan diarahkan ke daftar pengrajin mitra."
          : "Kelas tenun online sedang disiapkan. Nyalakan pengingat agar tidak terlewat.");
      });
    });
  }

  /* =======================================================
     12. TIL HALUS PADA BENTO
     ======================================================= */
  function initTilt() {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var grid = $("#regionGrid");
    if (!grid) return;

    grid.addEventListener("mousemove", function (e) {
      var cell = e.target.closest(".bento__cell");
      if (!cell) return;
      var r = cell.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      cell.style.transform =
        "scale(1.028) translateY(-4px) rotateX(" + (-py * 4).toFixed(2) + "deg) rotateY(" +
        (px * 5).toFixed(2) + "deg)";
    });

    grid.addEventListener("mouseleave", function () {
      $$(".bento__cell", grid).forEach(function (c) { c.style.transform = ""; });
    });
  }

  /* =======================================================
     INIT
     ======================================================= */
  function init() {
    renderHero();
    renderZonaChips();
    renderBento();
    renderStory();
    renderProses();
    renderGalZona();
    renderGallery();
    renderCta();

    initNav();
    initCounters();
    initFilters();
    initDrawer();
    initLightbox();
    initToastTriggers();
    initTilt();

    observeReveal(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
