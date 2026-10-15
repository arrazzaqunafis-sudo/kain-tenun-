/* =========================================================
   motifs.js -- Generator motif tenun tradisional (SVG)
   Semua gambar kain pada situs ini digambar langsung sebagai
   SVG oleh kode, tanpa file gambar eksternal.
   Motif bersifat stilisasi/reinterpretasi edukatif.
   ========================================================= */
(function (global) {
  "use strict";

  var counter = 0;
  function uid() { return "m" + (++counter); }

  /* ---------- 1. PALET WARNA ALAM ---------- */
  var PALETTES = {
    sumba:   { label: "Sumba",        bg: "#1C1418", p1: "#1D3352", p2: "#E9DFC8", p3: "#B25C27", p4: "#C9A227" },
    flores:  { label: "Flores",       bg: "#241318", p1: "#8E2B24", p2: "#EFE0BE", p3: "#2A3A5C", p4: "#D4A017" },
    batak:   { label: "Batak",        bg: "#F0E4CC", p1: "#8E2B24", p2: "#20161A", p3: "#C9A227", p4: "#2F5B3C" },
    karo:    { label: "Karo",         bg: "#1B1418", p1: "#A8342A", p2: "#EADFC4", p3: "#C9A227", p4: "#3E6B3E" },
    palembang:{label: "Palembang",    bg: "#3A0E18", p1: "#7A1F2B", p2: "#C9A227", p3: "#E7D6A8", p4: "#2C5A44" },
    bali:    { label: "Bali",         bg: "#2A1A12", p1: "#9C3D28", p2: "#E6D6B4", p3: "#2B3A57", p4: "#C9A227" },
    jawa:    { label: "Jawa",         bg: "#EFE7D6", p1: "#274060", p2: "#F7F2E6", p3: "#9C3D28", p4: "#4A5C6E" },
    banten:  { label: "Banten",       bg: "#221A24", p1: "#2F4870", p2: "#E6D8B8", p3: "#8A2B34", p4: "#B08A2A" },
    sulsel:  { label: "Sulawesi",     bg: "#171412", p1: "#C9A227", p2: "#EDE0C4", p3: "#9C3D28", p4: "#3E6B3E" },
    ntt:     { label: "NTT",          bg: "#1A1418", p1: "#A8342A", p2: "#E8DCC0", p3: "#C9A227", p4: "#26405F" },
    fuji:    { label: "Fuji",         bg: "#20161A", p1: "#E6DCC4", p2: "#8E2B24", p3: "#1D3352", p4: "#C9A227" },
    timor:   { label: "Timor",        bg: "#241A14", p1: "#C0762C", p2: "#EFE3C6", p3: "#5A2A2A", p4: "#2F5B4C" }
  };

  /* ---------- 2. HELPER GEOMETRI ---------- */
  function starPoints(cx, cy, tips, rOut, rIn, rotDeg) {
    var pts = [], n = tips * 2, i, ang, rad, x, y;
    var rot = ((rotDeg || 0) * Math.PI) / 180;
    for (i = 0; i < n; i++) {
      rad = (Math.PI * 2 * i) / n;
      var v = i % 2 === 0 ? rOut : rIn;
      x = Math.cos(rad + rot) * v;
      y = Math.sin(rad + rot) * v;
      pts.push((cx + x).toFixed(2) + "," + (cy + y).toFixed(2));
    }
    return pts.join(" ");
  }

  function diamond(cx, cy, r, hFactor) {
    var ry = r * (hFactor || 1);
    return "M" + cx + " " + (cy - ry) + "L" + (cx + r) + " " + cy +
           "L" + cx + " " + (cy + ry) + "L" + (cx - r) + " " + cy + "Z";
  }

  /* ---------- 3. MOTIF (selain motif -> pattern tile) ---------- */
  var PATTERNS = {

    /* Kawung: buah pitula bertumpuk, melambangkan siklus hidup dan kesuburan */
    kawung: function (c) {
      return {
        w: 20, h: 20,
        body:
          '<g fill="' + c.p1 + '">' +
          '<ellipse cx="0" cy="0" rx="11" ry="5.6"/>' +
          '<ellipse cx="20" cy="0" rx="11" ry="5.6"/>' +
          '<ellipse cx="0" cy="20" rx="11" ry="5.6"/>' +
          '<ellipse cx="20" cy="20" rx="11" ry="5.6"/>' +
          "</g>" +
          '<g fill="none" stroke="' + c.p4 + '" stroke-width="0.7" opacity="0.75">' +
          '<ellipse cx="0" cy="0" rx="11" ry="5.6"/>' +
          '<ellipse cx="20" cy="0" rx="11" ry="5.6"/>' +
          "</g>" +
          '<circle cx="10" cy="10" r="3.1" fill="' + c.p2 + '"/>' +
          '<circle cx="10" cy="10" r="1.2" fill="' + c.p3 + '"/>'
      };
    },

    /* Poleng: dua warna yang bergantian, lambang keseimbangan */
    poleng: function (c) {
      return {
        w: 24, h: 24,
        body:
          '<rect width="24" height="24" fill="' + c.p2 + '"/>' +
          '<rect x="0" y="0" width="12" height="12" fill="' + c.p1 + '"/>' +
          '<rect x="12" y="12" width="12" height="12" fill="' + c.p1 + '"/>' +
          '<g stroke="' + c.p2 + '" stroke-width="1.9" stroke-linecap="round">' +
          '<path d="M6 3.4v5.2M3.4 6h5.2"/>' +
          '<path d="M18 15.4v5.2M15.4 18h5.2"/>' +
          "</g>" +
          '<g fill="' + c.p4 + '"><rect x="10" y="10" width="4" height="4"/>' +
          '<rect x="22" y="22" width="4" height="4"/></g>'
      };
    },

    /* Bilah ketupat -- motif utama tenun ikat Nusa Tenggara Timur */
    ketupat: function (c) {
      return {
        w: 40, h: 40,
        body:
          '<g stroke-linejoin="miter">' +
          '<path d="' + diamond(20, 20, 20, 1) + '" fill="' + c.p1 + '"/>' +
          '<path d="' + diamond(20, 20, 15, 1) + '" fill="' + c.p3 + '"/>' +
          '<path d="' + diamond(20, 20, 10, 1) + '" fill="' + c.p2 + '"/>' +
          '<path d="' + diamond(20, 20, 5, 1) + '" fill="' + c.p4 + '"/>' +
          "</g>" +
          '<g fill="' + c.p1 + '" opacity="0.9">' +
          '<path d="' + diamond(0, 0, 9, 1) + '"/>' +
          '<path d="' + diamond(40, 0, 9, 1) + '"/>' +
          '<path d="' + diamond(0, 40, 9, 1) + '"/>' +
          '<path d="' + diamond(40, 40, 9, 1) + '"/>' +
          "</g>"
      };
    },

    /* Ulos: pita horizontal bersusun dengan rantai belah ketupat */
    ulos: function (c) {
      return {
        w: 34, h: 96,
        body:
          '<rect x="0" y="0" width="7" height="96" fill="' + c.p1 + '"/>' +
          '<rect x="7" y="0" width="2.5" height="96" fill="' + c.p3 + '"/>' +
          '<rect x="9.5" y="0" width="15" height="96" fill="' + c.p2 + '"/>' +
          '<rect x="24.5" y="0" width="2.5" height="96" fill="' + c.p3 + '"/>' +
          '<rect x="27" y="0" width="7" height="96" fill="' + c.p2 + '"/>' +
          '<g fill="' + c.p1 + '">' +
          '<path d="' + diamond(17, 12, 7, 1.35) + '"/>' +
          '<path d="' + diamond(17, 36, 7, 1.35) + '"/>' +
          '<path d="' + diamond(17, 60, 7, 1.35) + '"/>' +
          '<path d="' + diamond(17, 84, 7, 1.35) + '"/>' +
          "</g>" +
          '<g fill="' + c.p3 + '">' +
          '<path d="' + diamond(3.5, 24, 2.6, 1.35) + '"/>' +
          '<path d="' + diamond(3.5, 48, 2.6, 1.35) + '"/>' +
          '<path d="' + diamond(3.5, 72, 2.6, 1.35) + '"/>' +
          '<path d="' + diamond(30.5, 24, 2.6, 1.35) + '"/>' +
          '<path d="' + diamond(30.5, 48, 2.6, 1.35) + '"/>' +
          '<path d="' + diamond(30.5, 72, 2.6, 1.35) + '"/>' +
          "</g>"
      };
    },

    /* Songket / beskap: baris permata kecil menyerupai sisik ikan */
    beskap: function (c) {
      return {
        w: 20, h: 24,
        body:
          '<rect width="20" height="24" fill="' + c.bg + '"/>' +
          '<path d="M0 24L10 9L20 24Z" fill="' + c.p1 + '"/>' +
          '<path d="M0 12L10 -3L20 12Z" fill="' + c.p1 + '"/>' +
          '<path d="M0 24L10 15L20 24Z" fill="' + c.p2 + '"/>' +
          '<path d="M0 12L10 3L20 12Z" fill="' + c.p2 + '"/>' +
          '<g fill="' + c.p4 + '">' +
          '<circle cx="10" cy="9" r="1.5"/><circle cx="10" cy="21" r="1.5"/>' +
          '<circle cx="0" cy="12" r="1.5"/><circle cx="20" cy="12" r="1.5"/>' +
          '<circle cx="0" cy="24" r="1.5"/><circle cx="20" cy="24" r="1.5"/>' +
          "</g>"
      };
    },

    /* Lurik: garis halus vertikal tanpa bentuk, ciri khas Jawa */
    lurik: function (c) {
      return {
        w: 20, h: 20,
        body:
          '<rect width="20" height="20" fill="' + c.p2 + '"/>' +
          '<rect x="0" y="0" width="4" height="20" fill="' + c.p1 + '"/>' +
          '<rect x="4" y="0" width="1.2" height="20" fill="' + c.p3 + '"/>' +
          '<rect x="5.2" y="0" width="2.4" height="20" fill="' + c.p4 + '"/>' +
          '<rect x="7.6" y="0" width="1.2" height="20" fill="' + c.p3 + '"/>' +
          '<rect x="8.8" y="0" width="5" height="20" fill="' + c.p2 + '"/>' +
          '<rect x="13.8" y="0" width="1.2" height="20" fill="' + c.p1 + '"/>' +
          '<rect x="15" y="0" width="3.4" height="20" fill="' + c.p1 + '"/>' +
          '<path d="M0 10h20" stroke="' + c.p1 + '" stroke-width="0.6" opacity="0.35"/>'
      };
    },

    /* Sasag: pelepah daun, lambang kesuburan dan kehidupan baru */
    sasag: function (c) {
      return {
        w: 40, h: 20,
        body:
          '<rect width="40" height="20" fill="' + c.bg + '"/>' +
          '<g fill="none" stroke-linecap="square">' +
          '<path d="M0 18L20 2L40 18" stroke="' + c.p1 + '" stroke-width="3"/>' +
          '<path d="M0 8L20 -8L40 8" stroke="' + c.p2 + '" stroke-width="2.4"/>' +
          '<path d="M0 28L20 12L40 28" stroke="' + c.p2 + '" stroke-width="2.4"/>' +
          "</g>" +
          '<g fill="' + c.p3 + '" opacity="0.95">' +
          '<circle cx="20" cy="10" r="1.7"/>' +
          '<circle cx="0" cy="10" r="1.7"/><circle cx="40" cy="10" r="1.7"/>' +
          "</g>"
      };
    },

    /* Jlamprang: pola meander berputar, ciri Bugis dan Makassar */
    jlamprang: function (c) {
      return {
        w: 40, h: 40,
        body:
          '<rect width="40" height="40" fill="' + c.p1 + '"/>' +
          '<g fill="none" stroke="' + c.p2 + '" stroke-width="3" stroke-linejoin="miter" stroke-linecap="square">' +
          '<path d="M4 36V14H16V26H27V6H36"/>' +
          '<path d="M4 4V14M4 4h0" opacity="0"/>' +
          "</g>" +
          '<g fill="' + c.p3 + '">' +
          '<path d="' + diamond(30, 30, 5, 1) + '"/>' +
          '<path d="' + diamond(10, 30, 5, 1) + '"/>' +
          '<path d="' + diamond(30, 10, 5, 1) + '"/>' +
          "</g>"
      };
    },

    /* Ceplok: bunga bintang delapan, pusat yang menyatukan */
    ceplok: function (c) {
      return {
        w: 40, h: 40,
        body:
          '<rect width="40" height="40" fill="' + c.p2 + '"/>' +
          '<g fill="' + c.p1 + '">' +
          '<polygon points="' + starPoints(20, 20, 8, 19, 8.5, -90) + '"/>' +
          "</g>" +
          '<g fill="' + c.p3 + '">' +
          '<polygon points="' + starPoints(20, 20, 8, 12, 5.2, -67.5) + '"/>' +
          "</g>" +
          '<circle cx="20" cy="20" r="3.4" fill="' + c.p4 + '"/>' +
          '<g fill="' + c.p1 + '"><path d="' + diamond(0, 0, 7, 1) + '"/>' +
          '<path d="' + diamond(40, 0, 7, 1) + '"/>' +
          '<path d="' + diamond(0, 40, 7, 1) + '"/>' +
          '<path d="' + diamond(40, 40, 7, 1) + '"/>' +
          '<path d="' + diamond(40, 20, 5, 1) + '"/>' +
          '<path d="' + diamond(0, 20, 5, 1) + '"/>' +
          '<path d="' + diamond(20, 0, 5, 1) + '"/>' +
          '<path d="' + diamond(20, 40, 5, 1) + '"/>' +
          "</g>"
      };
    },

    /* Sulur: sulur tumbuhan yang merambat, lambang kesuburan */
    sulur: function (c) {
      return {
        w: 40, h: 40,
        body:
          '<rect width="40" height="40" fill="' + c.bg + '"/>' +
          '<g fill="none" stroke-linecap="round">' +
          '<path d="M-2 20C6 6 18 6 20 20s14 14 22 0" stroke="' + c.p1 + '" stroke-width="3"/>' +
          '<path d="M20 -2C34 6 34 18 20 20S6 34 -2 20" stroke="' + c.p2 + '" stroke-width="2.4"/>' +
          '<path d="M20 42C6 34 6 22 20 20S34 6 42 20" stroke="' + c.p3 + '" stroke-width="2"/>' +
          "</g>" +
          '<circle cx="20" cy="20" r="3.6" fill="' + c.p4 + '"/>' +
          '<g fill="' + c.p2 + '" opacity="0.9">' +
          '<circle cx="0" cy="20" r="2.2"/><circle cx="40" cy="20" r="2.2"/>' +
          '<circle cx="20" cy="0" r="2.2"/><circle cx="20" cy="40" r="2.2"/>' +
          "</g>"
      };
    },

    /* Typeeh: kotak-kotak bersusun diagonal, ciri Tanimbar */
    typeeh: function (c) {
      return {
        w: 32, h: 32,
        body:
          '<rect width="32" height="32" fill="' + c.p2 + '"/>' +
          '<g fill="' + c.p1 + '">' +
          '<rect x="2" y="2" width="12" height="12"/>' +
          '<rect x="18" y="18" width="12" height="12"/>' +
          '<path d="M18 2h12v12H18Z" fill="' + c.p3 + '"/>' +
          '<path d="M2 18h12v12H2Z" fill="' + c.p3 + '"/>' +
          "</g>" +
          '<g fill="' + c.p4 + '">' +
          '<rect x="6" y="6" width="4" height="4"/>' +
          '<rect x="22" y="22" width="4" height="4"/>' +
          "</g>"
      };
    },

    /* Tenun ikat bergaris dan berpelintir: tepi benang yang bergelombang */
    ikat: function (c) {
      return {
        w: 40, h: 40,
        body:
          '<rect width="40" height="40" fill="' + c.p1 + '"/>' +
          '<g fill="none" stroke-linecap="round">' +
          '<path d="M0 10h40M0 30h40" stroke="' + c.p2 + '" stroke-width="5" opacity="0.95"/>' +
          '<path d="M0 10h40M0 30h40" stroke="' + c.p3 + '" stroke-width="2" opacity="0.8" stroke-dasharray="3 4"/>' +
          "</g>" +
          '<g fill="' + c.p4 + '">' +
          '<path d="' + diamond(20, 20, 11, 0.8) + '"/>' +
          '<path d="' + diamond(0, 0, 7, 0.8) + '"/>' +
          '<path d="' + diamond(40, 0, 7, 0.8) + '"/>' +
          '<path d="' + diamond(0, 40, 7, 0.8) + '"/>' +
          '<path d="' + diamond(40, 40, 7, 0.8) + '"/>' +
          "</g>" +
          '<g stroke="' + c.p2 + '" stroke-width="1.4" opacity="0.6">' +
          '<path d="M20 3v6M20 31v6M3 20h6M31 20h6"/>' +
          "</g>"
      };
    }
  };

  /* ---------- 4. PEMBANGUN KAIN ---------- */
  /**
   * fabric({ type, palette, soft, border, size })
   * -> string SVG lengkap
   */
  function fabric(opts) {
    opts = opts || {};
    var key = opts.palette || "sumba";
    var c = PALETTES[key] || PALETTES.sumba;
    var type = PATTERNS[opts.type] ? opts.type : "ketupat";
    var tile = PATTERNS[type](c);
    var id = uid();
    var S = 200;

    var defs = "";

    // motif utama
    defs +=
      '<pattern id="p' + id + '" width="' + tile.w + '" height="' + tile.h +
      '" patternUnits="userSpaceOnUse">' + tile.body + "</pattern>";

    // tekstur anyaman (warp + weft)
    defs +=
      '<pattern id="w' + id + '" width="4" height="4" patternUnits="userSpaceOnUse">' +
      '<path d="M0 0V4" stroke="#000" stroke-opacity=".11" stroke-width="1.3"/>' +
      '<path d="M0 0H4" stroke="#FFF" stroke-opacity=".09" stroke-width="1.3"/>' +
      "</pattern>";

    // vignette
    defs +=
      '<radialGradient id="v' + id + '" cx="50%" cy="40%" r="75%">' +
      '<stop offset="52%" stop-color="#000" stop-opacity="0"/>' +
      '<stop offset="100%" stop-color="#180F09" stop-opacity=".45"/>' +
      "</radialGradient>";

    // cahaya
    defs +=
      '<linearGradient id="l' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#FFF3DC" stop-opacity=".20"/>' +
      '<stop offset="42%" stop-color="#FFF3DC" stop-opacity="0"/>' +
      '<stop offset="100%" stop-color="#000" stop-opacity=".14"/>' +
      "</linearGradient>";

    var body = '<rect width="' + S + '" height="' + S + '" fill="' + c.bg + '"/>';
    body += '<rect width="' + S + '" height="' + S + '" fill="url(#p' + id + ')"/>';

    // efek "bleed" khas ikat: gambar motif digeser sedikit dan ditumpuk
    if (opts.soft !== false) {
      body +=
        '<g opacity="0.34" style="mix-blend-mode:multiply">' +
        '<rect x="1.6" y="1.1" width="' + S + '" height="' + S + '" fill="url(#p' + id + ')"/>' +
        '<rect x="-1.4" y="1.8" width="' + S + '" height="' + S + '" fill="url(#p' + id + ')"/>' +
        "</g>";
    }

    // pinggan (bordo)
    if (opts.border) {
      body +=
        '<g fill="none">' +
        '<rect x="2" y="2" width="196" height="196" stroke="' + c.p3 + '" stroke-width="6"/>' +
        '<rect x="9" y="9" width="182" height="182" stroke="' + c.p2 + '" stroke-width="2.5"/>' +
        '<rect x="13" y="13" width="174" height="174" stroke="' + c.p4 + '" stroke-width="1.2" opacity="0.9"/>' +
        "</g>";
    }

    body += '<rect width="' + S + '" height="' + S + '" fill="url(#w' + id + ')"/>';
    body += '<rect width="' + S + '" height="' + S + '" fill="url(#v' + id + ')"/>';
    body += '<rect width="' + S + '" height="' + S + '" fill="url(#l' + id + ')"/>';

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + S + " " + S +
      '" preserveAspectRatio="xMidYMid slice" role="presentation" focusable="false">' +
      "<defs>" + defs + "</defs>" + body + "</svg>"
    );
  }

  /* ---------- 5. MOTIF RUMPI (fringe / tassel) ---------- */
  function fringe(palette, count) {
    var c = PALETTES[palette] || PALETTES.sumba;
    var n = count || 16, i, out = "", x;
    for (i = 0; i < n; i++) {
      x = 4 + i * (192 / n);
      out +=
        '<path d="M' + x.toFixed(1) + ' 0v' + (14 + (i % 3) * 5) + '" stroke="' +
        (i % 2 ? c.p2 : c.p1) + '" stroke-width="1.8" stroke-linecap="round" opacity="0.9"/>';
    }
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 34" preserveAspectRatio="none" ' +
      'role="presentation" focusable="false">' + out + "</svg>"
    );
  }

  global.MotifLib = {
    palettes: PALETTES,
    patterns: Object.keys(PATTERNS),
    fabric: fabric,
    fringe: fringe
  };
})(window);
