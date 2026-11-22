/* =========================================================
   AREPAS MONIK — MENÚ INTERACTIVO
   ---------------------------------------------------------
   CÓMO EDITAR EL MENÚ
   Todo el menú está en el objeto MENU (justo aquí abajo).
   - n: nombre del producto
   - d: descripción / ingredientes (opcional)
   - p: precio en pesos, solo números (ej. 12000). Si p es null
        se muestra "Consultar".
   - v: variantes con su propio precio, en vez de p
        (ej. v: [{ l: "Personal", p: 3500 }, { l: "Caja", p: 5000 }])
   - sep: true  → dibuja una línea separadora encima del producto
   ========================================================= */

// Hora (0-23) a partir de la cual se abre por defecto el "Menú noche".
// Antes de esa hora (y desde las 5 a. m.) se abre el "Menú día".
const HORA_NOCHE = 16;

const MENU = {
  dia: {
    titulo: "Menú día",
    nota: "Desayunos, arepas, bebidas y adicionales",
    categorias: [
      {
        id: "desayunos",
        nombre: "Desayunos",
        items: [
          { n: "Caldo de costilla", p: 7000 },
          { n: "Sudado de albóndigas", p: 11000 },
          { n: "Carne encebollada", d: "+ arroz + arepa + café", p: 11000 },
          { n: "Hígado encebollado", d: "+ arroz + arepa + café", p: 11000 },
          { n: "Calentado", p: 13000 },
          { n: "Perico", d: "+ arroz + arepa + café", p: 8000 },
          { n: "Huevos revueltos", d: "+ arroz + arepa + café", p: 8000 },
          { n: "Cacerola", d: "+ arroz + arepa + café", p: 8000 },
          { n: "Rancheros", d: "+ arroz + arepa + café", p: 11000 },
          { n: "Patacones + huevos", p: 10000 },
          { n: "Patacones + carne encebollada", p: 11000 },
          { n: "Patacones + arroz", p: 13000 },
          { n: "Patacones + carne o hígado", p: 11000 },
          {
            n: "Omelette",
            d: "Pollo, queso, tocineta, guiso de cebolla blanca y tomate, champiñones. Acompañado de una arepa",
            p: 15000
          }
        ]
      },
      {
        id: "arepas-dia",
        nombre: "Arepas con",
        items: [
          { n: "Pollo", p: 9000 },
          { n: "Carne", p: 9000 },
          { n: "Con todo", d: "Pollo, carne, chicharrón, huevos", p: 13000 },
          { n: "Perico", p: 3500 },
          { n: "Queso", p: 3000 },
          { n: "Jamón, queso", p: 4500 },
          { n: "Chorizo", p: 8000 },
          { n: "Chicharrón", p: 7000 },
          { n: "Carne hamburguesa", p: 9000 },
          { n: "Huevo revuelto rancheros", d: "Huevo, queso, salchicha", p: 9000 },
          { n: "Huevos revueltos", p: 5000 },
          { n: "Huevos cacerola", p: 5000 },
          { n: "Huevos cacerola y salchichas", p: 10000 },
          { n: "Huevos pericos", p: 5000 }
        ]
      },
      {
        id: "bebidas-dia",
        nombre: "Bebidas",
        items: [
          { n: "Café negro", p: 1500 },
          { n: "Milo", p: 4000 },
          { n: "Chocolate", p: 4000 },
          { n: "Chocolisto", p: 4000 },
          { n: "Jugo de naranja", p: 4000 },
          { n: "Jugos naturales", v: [{ l: "En agua", p: 4000 }, { l: "En leche", p: 8000 }] },
          { n: "Gaseosa", p: 4000 },
          { n: "Pony malta", p: 3500 },
          { n: "Jugo Hit", v: [{ l: "Personal", p: 3500 }, { l: "Caja", p: 5000 }] },
          { n: "Tisanas", p: 1500 },
          { n: "Agua de panela", p: 2000 },
          { n: "Agua de panela con queso", p: 6000 }
        ]
      },
      {
        id: "adicionales",
        nombre: "Adicionales",
        items: [
          { n: "Queso", p: 2000 },
          { n: "Salchicha", p: 2500 },
          { n: "Jamón", p: 1500 },
          { n: "Chorizo", p: 8000 },
          { n: "Chicharrón", p: 9000 },
          { n: "Chicharrón + queso", p: 9000 }
        ]
      }
    ]
  },

  noche: {
    titulo: "Menú noche",
    nota: "Arepas, comidas rápidas y bebidas",
    categorias: [
      {
        id: "arepas-noche",
        nombre: "Arepas con",
        items: [
          { n: "Con todo", d: "Pollo, carne, chicharrón, huevos", p: 12000 },
          { n: "Pollo + chicharrón", p: 11000 },
          { n: "Pollo + carne", p: 11000 },
          { n: "Carne + chicharrón", p: 11000 },
          { n: "Arepa ranchera", d: "Salchicha, cebolla, queso, tocineta", p: 15000 },
          { n: "Queso", p: 3000, sep: true },
          { n: "Jamón queso", p: 4500 },
          { n: "Chorizo", p: 8000 },
          { n: "Chicharrón", p: 9000 },
          { n: "Chicharrón + queso", p: 9000 }
        ]
      },
      {
        id: "especiales",
        nombre: "Especiales",
        items: [
          { n: "Costiarepa", d: "Costilla BBQ, queso, lechuga, tomate", p: 15000 },
          { n: "Arepaburguer", d: "Arepa, carne, lechuga, tomate, cebolla, tocineta", p: 15000 },
          { n: "Choriárepa", d: "Chorizo, queso, ripio", p: 10000 }
        ]
      },
      {
        id: "rapidas",
        nombre: "Comidas rápidas",
        items: [
          { n: "Hamburguesa", p: 17000 },
          { n: "Salchipapa", v: [{ l: "Sencilla", p: 16000 }, { l: "Con todo", p: 20000 }] }
        ]
      },
      {
        id: "bebidas-noche",
        nombre: "Bebidas",
        items: [
          { n: "Gaseosa", p: 1500 },
          { n: "Gaseosa 1/4", p: 7000 },
          { n: "Jugo Hit", v: [{ l: "Personal", p: 3500 }, { l: "Caja", p: 5000 }] },
          { n: "Pony malta", p: 3500 },
          { n: "Jugos naturales", v: [{ l: "En agua", p: 4000 }, { l: "En leche", p: 8000 }] },
          { n: "Jugo de naranja", p: 4000 },
          { n: "Café negro", p: 1500 },
          { n: "Leche", p: 2500 },
          { n: "Tisanas", p: 1500 },
          { n: "Agua de panela", p: 2000 },
          { n: "Agua de panela con leche", p: 3000 }
        ]
      }
    ]
  }
};

/* =========================================================
   LÓGICA (no hace falta tocar nada de aquí para editar precios)
   ========================================================= */
(() => {
  "use strict";

  const ORDER = ["dia", "noche"];
  const $ = (s, r = document) => r.querySelector(s);

  const el = {
    body: document.body,
    sticky: $("#sticky"),
    tabs: $("#tabs"),
    tabBtns: Array.from(document.querySelectorAll(".tab")),
    chips: $("#chips"),
    panel: $("#panel"),
    title: $("#menuTitle"),
    note: $("#menuNote"),
    q: $("#q"),
    qClear: $("#qClear"),
    empty: $("#empty"),
    emptyQ: $("#emptyQ"),
    emptyClear: $("#emptyClear"),
    cross: $("#crossHint"),
    toTop: $("#toTop")
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let current = "dia";
  let query = "";
  let sections = [];

  /* ---------- utilidades ---------- */
  const norm = (s) =>
    String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const money = (n) => "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Marca las coincidencias de la búsqueda sin importar tildes/mayúsculas.
  function hl(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const chars = Array.from(text);
    const nt = chars
      .map((c) => {
        const r = c.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
        return r.length === 1 ? r : c.toLowerCase();
      })
      .join("");
    if (nt.length !== chars.length) return safe;
    let out = "";
    let i = 0;
    while (i < chars.length) {
      const at = nt.indexOf(q, i);
      if (at === -1) { out += esc(chars.slice(i).join("")); break; }
      out += esc(chars.slice(i, at).join("")) + "<mark>" + esc(chars.slice(at, at + q.length).join("")) + "</mark>";
      i = at + q.length;
    }
    return out;
  }

  function itemMatches(item, cat, q) {
    if (!q) return true;
    const hay = [cat.nombre, item.n, item.d || "", ...(item.v ? item.v.map((v) => v.l) : [])]
      .map(norm)
      .join(" ");
    return hay.includes(q);
  }

  // Devuelve las categorías con los productos que pasan el filtro.
  function filtered(menuKey, q) {
    return MENU[menuKey].categorias
      .map((cat) => {
        const catHit = q && norm(cat.nombre).includes(q);
        const items = cat.items.filter((it) => catHit || itemMatches(it, cat, q));
        return { cat, items };
      })
      .filter((x) => x.items.length);
  }

  const countItems = (list) => list.reduce((n, x) => n + x.items.length, 0);

  /* ---------- render ---------- */
  function priceHTML(p, small) {
    const cls = "price" + (small ? " price--sm" : "") + (p == null ? " price--ask" : "");
    return `<span class="${cls}">${p == null ? "Consultar" : money(p)}</span>`;
  }

  function itemHTML(it, q) {
    const sep = it.sep ? " item--sep" : "";
    if (it.v) {
      const rows = it.v
        .map(
          (v) => `<div class="row row--var"><span class="vlabel">${hl(v.l, q)}</span><span class="leader"></span>${priceHTML(v.p, true)}</div>`
        )
        .join("");
      return `<li class="item${sep}"><div class="name">${hl(it.n, q)}</div>${it.d ? `<p class="desc">${hl(it.d, q)}</p>` : ""}<div class="variants">${rows}</div></li>`;
    }
    return `<li class="item${sep}"><div class="row"><span class="name">${hl(it.n, q)}</span><span class="leader"></span>${priceHTML(it.p)}</div>${it.d ? `<p class="desc">${hl(it.d, q)}</p>` : ""}</li>`;
  }

  function render(direction) {
    const q = norm(query);
    const data = MENU[current];
    const list = filtered(current, q);
    const total = countItems(list);

    el.title.textContent = data.titulo;
    el.note.textContent = q
      ? total
        ? `${total} ${total === 1 ? "resultado" : "resultados"} para “${query.trim()}”`
        : ""
      : data.nota;
    document.title = `${data.titulo} · Arepas Monik`;

    el.panel.innerHTML = list
      .map(
        ({ cat, items }, i) => `
      <article class="card" id="cat-${esc(cat.id)}" data-cat="${esc(cat.id)}" style="--i:${i}">
        <h3 class="card-title"><span>${hl(cat.nombre, q)}</span></h3>
        <ul class="items">${items.map((it) => itemHTML(it, q)).join("")}</ul>
      </article>`
      )
      .join("");

    el.chips.innerHTML = list
      .map(({ cat }) => `<button class="chip" type="button" data-target="cat-${esc(cat.id)}">${esc(cat.nombre)}</button>`)
      .join("");
    el.chips.hidden = list.length === 0;

    sections = Array.from(el.panel.querySelectorAll(".card"));

    // estado vacío + aviso del otro menú
    el.empty.hidden = total !== 0 || !q;
    el.emptyQ.textContent = query.trim();
    el.panel.hidden = total === 0 && !!q;

    const other = ORDER.find((k) => k !== current);
    if (q) {
      const otherTotal = countItems(filtered(other, q));
      if (otherTotal) {
        el.cross.hidden = false;
        el.cross.innerHTML = `También hay ${otherTotal} ${otherTotal === 1 ? "resultado" : "resultados"} en el <button type="button" class="link" data-go="${other}">${esc(MENU[other].titulo)}</button>`;
      } else {
        el.cross.hidden = true;
      }
    } else {
      el.cross.hidden = true;
    }

    if (direction && !reduceMotion) {
      el.panel.classList.remove("enter-left", "enter-right");
      void el.panel.offsetWidth;
      el.panel.classList.add(direction > 0 ? "enter-right" : "enter-left");
    }
    updateSpy();
  }

  /* ---------- pestañas ---------- */
  function setMenu(key, { push = true, scroll = true } = {}) {
    if (!MENU[key]) return;
    if (key === current && el.panel.childElementCount) return;
    const dir = ORDER.indexOf(key) - ORDER.indexOf(current);
    current = key;
    el.body.dataset.menu = key;
    el.tabs.dataset.active = String(ORDER.indexOf(key));
    el.tabBtns.forEach((b) => {
      const on = b.dataset.menu === key;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });
    el.panel.setAttribute("aria-labelledby", "tab-" + key);
    if (push) {
      try { history.replaceState(null, "", "#" + key); } catch (e) { /* file:// u otros */ }
    }
    render(dir);
    if (scroll) scrollToContentTop();
  }

  function scrollToContentTop() {
    const head = $(".menu-head");
    const top = head.getBoundingClientRect().top + window.scrollY - stickyH() - 8;
    if (window.scrollY > top) window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  }

  el.tabBtns.forEach((b, i) => {
    b.addEventListener("click", () => setMenu(b.dataset.menu));
    b.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const next = el.tabBtns[(i + (e.key === "ArrowRight" ? 1 : -1) + ORDER.length) % ORDER.length];
        next.focus();
        setMenu(next.dataset.menu);
      }
    });
  });

  window.addEventListener("hashchange", () => {
    const k = location.hash.replace("#", "");
    if (MENU[k]) setMenu(k, { push: false });
  });

  /* ---------- buscador ---------- */
  let qTimer;
  el.q.addEventListener("input", () => {
    el.qClear.hidden = !el.q.value;
    clearTimeout(qTimer);
    qTimer = setTimeout(() => {
      query = el.q.value;
      render();
    }, 120);
  });

  function clearSearch() {
    el.q.value = "";
    query = "";
    el.qClear.hidden = true;
    render();
  }
  el.qClear.addEventListener("click", () => { clearSearch(); el.q.focus(); });
  el.emptyClear.addEventListener("click", clearSearch);
  el.q.addEventListener("keydown", (e) => { if (e.key === "Escape") clearSearch(); });

  el.cross.addEventListener("click", (e) => {
    const b = e.target.closest("[data-go]");
    if (b) setMenu(b.dataset.go);
  });

  /* ---------- chips + scroll-spy ---------- */
  // En celulares horizontales (pantalla muy baja) la barra no se queda fija, así que no resta espacio.
  const stickyH = () => (getComputedStyle(el.sticky).position === "sticky" ? el.sticky.offsetHeight : 0);

  function syncStickyVar() {
    document.documentElement.style.setProperty("--sticky-h", stickyH() + "px");
  }

  el.chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    const target = document.getElementById(b.dataset.target);
    if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  let spyId = null;
  function updateSpy() {
    if (!sections.length) return;
    const line = stickyH() + 40;
    let active = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= line) active = s;
    }
    // al llegar al final de la página, activa la última categoría
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }
    if (active.id === spyId) return;
    spyId = active.id;
    el.chips.querySelectorAll(".chip").forEach((c) => {
      const on = c.dataset.target === spyId;
      c.classList.toggle("is-active", on);
      if (on) {
        const box = el.chips;
        const left = c.offsetLeft - box.clientWidth / 2 + c.offsetWidth / 2;
        box.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateSpy();
        el.toTop.hidden = window.scrollY < 700;
        ticking = false;
      });
    },
    { passive: true }
  );

  el.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  window.addEventListener("resize", () => { syncStickyVar(); updateSpy(); });
  if ("ResizeObserver" in window) new ResizeObserver(syncStickyVar).observe(el.sticky);

  /* ---------- inicio ---------- */
  function initialMenu() {
    const h = location.hash.replace("#", "");
    if (MENU[h]) return h;
    const hour = new Date().getHours();
    return hour >= HORA_NOCHE || hour < 5 ? "noche" : "dia";
  }

  // Dibuja el menú inicial sin animación de pestaña
  current = initialMenu() === "dia" ? "noche" : "dia"; // fuerza el cambio en setMenu
  setMenu(initialMenu(), { push: false, scroll: false });
  el.panel.classList.remove("enter-left", "enter-right");
  syncStickyVar();
})();
