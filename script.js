const PRODUCTS = [
  {
    id: 1,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Чорний",
    colorHex: "#111111",
    desc: "Класичний чорний світшот з фірмовим нашивним патчем. Ідеальний для міського стилю.",
    price: 2000,
    tags: ["black", "new"],
    img: "images/sweatshirt/black/black.webp",
    gallery: [
      "images/sweatshirt/black/1.webp",
      "images/sweatshirt/black/2.webp",
      "images/sweatshirt/black/3.webp",
      "images/sweatshirt/black/4.webp",
    ],
  },
  {
    id: 2,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Синьо-фіолетовий",
    colorHex: "#1a3a8c",
    desc: "Синьо-фіолетовий світшот у морському стилі. Насичений колір, преміальна тканина.",
    price: 2000,
    tags: ["blue", "new"],
    img: "images/sweatshirt/blue/blue.webp",
    gallery: [
      "images/sweatshirt/blue/1.webp",
      "images/sweatshirt/blue/2.webp",
      "images/sweatshirt/blue/3.webp",
      "images/sweatshirt/blue/4.webp",
    ],
  },
  {
    id: 3,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Бежевий",
    colorHex: "#d8dae0",
    desc: "Бежевий — чистота і мінімалізм. Базова річ будь-якого гардеробу.",
    price: 2000,
    tags: ["beige"],
    img: "images/sweatshirt/beige/beige.webp",
    gallery: [
      "images/sweatshirt/beige/1.webp",
      "images/sweatshirt/beige/2.webp",
      "images/sweatshirt/beige/3.webp",
      "images/sweatshirt/beige/4.webp",
    ],
  },
  {
    id: 4,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Ментол",
    colorHex: "#AAF0D1",
    desc: "Ментоловий світшот у мілітарі стилі. Природні відтінки для сучасного образу.",
    price: 2000,
    tags: ["mentol"],
    img: "images/sweatshirt/mentol/mentol.webp",
    gallery: [
      "images/sweatshirt/mentol/1.webp",
      "images/sweatshirt/mentol/2.webp",
      "images/sweatshirt/mentol/3.webp",
      "images/sweatshirt/mentol/4.webp",
    ],
  },
  {
    id: 5,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Лимонний",
    colorHex: "#F4E300",
    desc: "Лимонний світшот — вишуканість і глибина кольору. Новинка сезону.",
    price: 2000,
    tags: ["pudra", "new"],
    img: "images/sweatshirt/lemon/lemon.webp",
    gallery: [
      "images/sweatshirt/lemon/1.webp",
      "images/sweatshirt/lemon/2.webp",
      "images/sweatshirt/lemon/3.webp",
      "images/sweatshirt/lemon/4.webp",
    ],
  },
  {
    id: 6,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Жовтий",
    colorHex: "#e6be00",
    desc: "Жовтий світшот — сонячний настрій весь день. Відмінний вибір для яскравих образів.",
    price: 2000,
    tags: ["yellow", "new"],
    img: "images/sweatshirt/yellow/yellow.webp",
    gallery: [
      "images/sweatshirt/yellow/1.webp",
      "images/sweatshirt/yellow/2.webp",
      "images/sweatshirt/yellow/3.webp",
      "images/sweatshirt/yellow/4.webp",
    ],
  },
  {
    id: 7,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Рожевий",
    colorHex: "#dc508c",
    desc: "Рожевий світшот у трендовому кольорі сезону. Свіжий і сміливий вибір.",
    price: 2000,
    tags: ["pink"],
    img: "images/sweatshirt/pink/pink.webp",
    gallery: [
      "images/sweatshirt/pink/1.webp",
      "images/sweatshirt/pink/2.webp",
      "images/sweatshirt/pink/3.webp",
      "images/sweatshirt/pink/4.webp",
    ],
  },
  {
    id: 8,
    name: "Stone Island Світшот",
    category: "sweatshirt",
    color: "Зелений",
    colorHex: "#1eb464",
    desc: "Зелений світшот лісової палітри. Технологічна тканина поєднана з природним кольором.",
    price: 2000,
    tags: ["green"],
    img: "images/sweatshirt/green/green.webp",
    gallery: [
      "images/sweatshirt/green/1.webp",
      "images/sweatshirt/green/2.webp",
      "images/sweatshirt/green/3.webp",
      "images/sweatshirt/green/4.webp",
    ],
  },
  {
    id: 9,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Помаранчевий",
    colorHex: "#e66e14",
    desc: "Помаранчеве зіп худі — вогонь і енергія. Виділяйся у натовпі щодня.",
    price: 2500,
    tags: ["orange", "new"],
    img: "images/zip-hoodie/orange/orange.webp",
    gallery: [
      "images/zip-hoodie/orange/1.webp",
      "images/zip-hoodie/orange/2.webp",
      "images/zip-hoodie/orange/3.webp",
      "images/zip-hoodie/orange/4.webp",
    ],
  },
  {
    id: 10,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Синій",
    colorHex: "#1E3A8A",
    desc: "Синє зіп худі — глибокий вайб і чистий стиль. Хіт нового сезону для тих, хто любить виділятись.",
    price: 2500,
    tags: ["blue", "new"],
    img: "images/zip-hoodie/blue/blue.webp",
    gallery: [
      "images/zip-hoodie/blue/1.webp",
      "images/zip-hoodie/blue/2.webp",
      "images/zip-hoodie/blue/3.webp",
      "images/zip-hoodie/blue/4.webp",
    ],
  },
  {
    id: 11,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "М'ятний",
    colorHex: "#98FFCC",
    desc: "М'ятне зіп худі — свіжа естетика та легкий вайб. Комфортний фліс і стиль на кожен день.",
    price: 2500,
    tags: ["minty"],
    img: "images/zip-hoodie/minty/minty.webp",
    gallery: [
      "images/zip-hoodie/minty/1.webp",
      "images/zip-hoodie/minty/2.webp",
      "images/zip-hoodie/minty/3.webp",
      "images/zip-hoodie/minty/4.webp",
    ],
  },
  {
    id: 12,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Червоний",
    colorHex: "#C1121F",
    desc: "Червоне зіп худі — яскравий акцент і впевнений стиль. Насичений колір для сміливих образів.",
    price: 2500,
    tags: ["red"],
    img: "images/zip-hoodie/red/red.webp",
    gallery: [
      "images/zip-hoodie/red/1.webp",
      "images/zip-hoodie/red/2.webp",
      "images/zip-hoodie/red/3.webp",
      "images/zip-hoodie/red/4.webp",
    ],
  },
  {
    id: 13,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Білий",
    colorHex: "#FFFFFF",
    desc: "Біле зіп худі — чистий мінімалізм і універсальний стиль.",
    price: 2500,
    tags: ["white"],
    img: "images/zip-hoodie/white/white.webp",
    gallery: [
      "images/zip-hoodie/white/1.webp",
      "images/zip-hoodie/white/2.webp",
      "images/zip-hoodie/white/3.webp",
      "images/zip-hoodie/white/4.webp",
    ],
  },
  {
    id: 14,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Чорний",
    colorHex: "#111111",
    desc: "Чорне зіп худі — класика в сучасному стилі. Універсальний колір, преміальний вигляд.",
    price: 2500,
    tags: ["black"],
    img: "images/zip-hoodie/black/black.webp",
    gallery: [
      "images/zip-hoodie/black/1.webp",
      "images/zip-hoodie/black/2.webp",
      "images/zip-hoodie/black/3.webp",
      "images/zip-hoodie/black/4.webp",
    ],
  },
  {
    id: 15,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Рожевий",
    colorHex: "#EC4899",
    desc: "Рожеве зіп худі — яскравий стиль і трендовий вайб.",
    price: 2500,
    tags: ["pink"],
    img: "images/zip-hoodie/pink/pink.webp",
    gallery: [
      "images/zip-hoodie/pink/1.webp",
      "images/zip-hoodie/pink/2.webp",
      "images/zip-hoodie/pink/3.webp",
      "images/zip-hoodie/pink/4.webp",
    ],
  },
  {
    id: 16,
    name: "Stone Island Зіп Худі",
    category: "zip-hoodie",
    color: "Лимонний",
    colorHex: "#D9F55A",
    desc: "Лимонне зіп худі — свіжий колір і сучасний стиль.",
    price: 2500,
    tags: ["lemon"],
    img: "images/zip-hoodie/lemon/lemon.webp",
    gallery: [
      "images/zip-hoodie/lemon/1.webp",
      "images/zip-hoodie/lemon/2.webp",
      "images/zip-hoodie/lemon/3.webp",
      "images/zip-hoodie/lemon/4.webp",
    ],
  },
  {
    id: 17,
    name: "Stone Island Зіп Світшот",
    category: "zip-sweatshirt",
    color: "Чорний",
    colorHex: "#000000",
    desc: "Чорний зіп світшот — універсальна класика для щоденних образів.",
    price: 2200,
    tags: ["black"],
    img: "images/zip-sweatshirt/black/black.webp",
    gallery: [
      "images/zip-sweatshirt/black/1.webp",
      "images/zip-sweatshirt/black/2.webp",
      "images/zip-sweatshirt/black/3.webp",
      "images/zip-sweatshirt/black/4.webp",
    ],
  },
  {
    id: 18,
    name: "Stone Island Зіп Світшот",
    category: "zip-sweatshirt",
    color: "Бірюзовий",
    colorHex: "#007C91",
    desc: "Бірюзовий зіп світшот — стильне поєднання свіжого кольору та сучасного дизайну.",
    price: 2200,
    tags: ["turquoise"],
    img: "images/zip-sweatshirt/turquoise/turquoise.webp",
    gallery: [
      "images/zip-sweatshirt/turquoise/1.webp",
      "images/zip-sweatshirt/turquoise/2.webp",
      "images/zip-sweatshirt/turquoise/3.webp",
      "images/zip-sweatshirt/turquoise/4.webp",
    ],
  },
  {
    id: 19,
    name: "Stone Island Зіп Світшот",
    category: "zip-sweatshirt",
    color: "Сірий",
    colorHex: "#6B6B6B",
    desc: "Сірий зіп світшот — стриманий стиль і максимальний комфорт на кожен день.",
    price: 2200,
    tags: ["gray"],
    img: "images/zip-sweatshirt/gray/gray.webp",
    gallery: [
      "images/zip-sweatshirt/gray/1.webp",
      "images/zip-sweatshirt/gray/2.webp",
      "images/zip-sweatshirt/gray/3.webp",
      "images/zip-sweatshirt/gray/4.webp",
    ],
  },
  {
    id: 20,
    name: "Stone Island Зіп Світшот",
    category: "zip-sweatshirt",
    color: "Білий",
    colorHex: "#FFFFFF",
    desc: "Білий зіп світшот — чистий мінімалізм і сучасний стиль для будь-якого образу.",
    price: 2200,
    tags: ["white"],
    img: "images/zip-sweatshirt/white/white.webp",
    gallery: [
      "images/zip-sweatshirt/white/1.webp",
      "images/zip-sweatshirt/white/2.webp",
      "images/zip-sweatshirt/white/3.webp",
      "images/zip-sweatshirt/white/4.webp",
    ],
  },
];

// ── Telegram bot config ──────────────────────────────────────────────────────
const TG_BOT_TOKEN = "8877118617:AAFC1j6D3FqJhoRJXYJgNPY-YfQ0-VFPwvc";
const TG_CHAT_ID   = "2129690062";

async function sendToTelegram(orderData) {
  const { name, lastname, phone, city, np, items, total } = orderData;

  const itemLines = items
    .map((i) => `  • ${i.name} (${i.color}), розмір ${i.size} × ${i.qty} — ${(i.price * i.qty).toLocaleString("uk")} грн`)
    .join("\n");

  const message =
    `🛒 <b>Нове замовлення!</b>\n\n` +
    `👤 <b>Клієнт:</b> ${name} ${lastname}\n` +
    `📱 <b>Телефон:</b> ${phone}\n` +
    `🏙 <b>Місто:</b> ${city || "—"}\n` +
    `📦 <b>Нова Пошта:</b> ${np || "—"}\n\n` +
    `🧥 <b>Товари:</b>\n${itemLines}\n\n` +
    `💰 <b>Сума:</b> ${total.toLocaleString("uk")} грн`;

  try {
    await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Telegram send error:", err);
  }
}
// ────────────────────────────────────────────────────────────────────────────

const SIZES = ["S", "M", "L", "XL"];
let cart = [];
let selectedSizes = {};
let wishlist = new Set();
let currentSlide = 0;
let currentFilter = "all";
let searchQuery = "";
let isUserInteracting = false;

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function applyTheme(rgb, hex) {
  const root = document.documentElement;
  const [r, g, b] = hexToRgb(hex);
  root.style.setProperty("--accent", hex);
  root.style.setProperty("--accent-rgb", rgb);
  root.style.setProperty("--accent-tint5", `rgba(${rgb},0.05)`);
  root.style.setProperty("--accent-tint10", `rgba(${rgb},0.10)`);
  root.style.setProperty("--accent-tint20", `rgba(${rgb},0.20)`);
  const hr = Math.min(255, Math.round(r * 0.08 + 4));
  const hg = Math.min(255, Math.round(g * 0.08 + 4));
  const hb = Math.min(255, Math.round(b * 0.08 + 4));
  root.style.setProperty("--header-bg", `rgba(${hr},${hg},${hb},0.97)`);
  const cr = Math.min(255, Math.round(r * 0.1 + 6));
  const cg = Math.min(255, Math.round(g * 0.1 + 6));
  const cb = Math.min(255, Math.round(b * 0.1 + 6));
  root.style.setProperty("--catalog-bg", `rgb(${cr},${cg},${cb})`);
  const fr = Math.min(255, Math.round(r * 0.13 + 8));
  const fg = Math.min(255, Math.round(g * 0.13 + 8));
  const fb = Math.min(255, Math.round(b * 0.13 + 8));
  root.style.setProperty("--features-bg", `rgb(${fr},${fg},${fb})`);
  root.style.setProperty("--about-bg", `rgb(${fr},${fg},${fb})`);
  const vr = Math.min(255, Math.round(r * 0.06 + 3));
  const vg = Math.min(255, Math.round(g * 0.06 + 3));
  const vb = Math.min(255, Math.round(b * 0.06 + 3));
  root.style.setProperty("--about-vis-bg", `rgb(${vr},${vg},${vb})`);
  root.style.setProperty("--order-bg", `rgb(${cr},${cg},${cb})`);
  const bgr = Math.min(255, Math.round(r * 0.07 + 4));
  const bgg = Math.min(255, Math.round(g * 0.07 + 4));
  const bgb = Math.min(255, Math.round(b * 0.07 + 4));
  document.body.style.background = `rgb(${bgr},${bgg},${bgb})`;
}

const slides = document.querySelectorAll(".slide");
const slidesBg = document.getElementById("slides-bg");
const dotsContainer = document.getElementById("dots");
const swatchesContainer = document.getElementById("color-swatches");
let autoplayInterval = null;

function startAutoplay() {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    if (!isUserInteracting) setSlide(currentSlide + 1);
  }, 12500);
}
function stopAutoplay() {
  if (autoplayInterval) { clearInterval(autoplayInterval); autoplayInterval = null; }
}

function setSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  const s = slides[currentSlide];
  s.classList.add("active");
  s.querySelectorAll(".slide-tag,.slide h1,.slide p,.btn-primary").forEach((el, i) => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = `fadeUp 0.6s ${i * 0.1 + 0.05}s both`;
  });
  const rgb = s.dataset.rgb;
  const hex = s.dataset.hex;
  slidesBg.style.background = `linear-gradient(135deg,rgba(0,0,0,0.95) 0%,rgba(${rgb},0.35) 100%)`;
  applyTheme(rgb, hex);
  dotsContainer.querySelectorAll(".dot-btn").forEach((d, i) => d.classList.toggle("active", i === currentSlide));
  swatchesContainer.querySelectorAll(".swatch").forEach((sw, i) => sw.classList.toggle("active", i === currentSlide));
}

slides.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "dot-btn" + (i === 0 ? " active" : "");
  d.onclick = () => { isUserInteracting = true; setSlide(i); startAutoplay(); };
  dotsContainer.appendChild(d);
  const sw = document.createElement("div");
  sw.className = "swatch" + (i === 0 ? " active" : "");
  sw.style.background = slides[i].dataset.hex;
  sw.title = slides[i].dataset.color;
  sw.onclick = () => { isUserInteracting = true; setSlide(i); startAutoplay(); };
  swatchesContainer.appendChild(sw);
});

document.getElementById("prev-btn").onclick = () => { isUserInteracting = true; setSlide(currentSlide - 1); startAutoplay(); };
document.getElementById("next-btn").onclick = () => { isUserInteracting = true; setSlide(currentSlide + 1); startAutoplay(); };
document.getElementById("hero").addEventListener("mouseenter", () => { isUserInteracting = true; });
document.getElementById("hero").addEventListener("mouseleave", () => { isUserInteracting = false; });
setSlide(0);
startAutoplay();

function goTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
}

function getFilteredProducts() {
  let list = PRODUCTS;
  if (currentFilter === "wishlist") {
    list = list.filter((p) => wishlist.has(p.id));
  } else if (currentFilter === "new") {
    list = list.filter((p) => p.tags.includes("new"));
  } else if (currentFilter !== "all") {
    list = list.filter((p) => p.category === currentFilter);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";
  const list = getFilteredProducts();

  if (currentFilter === "wishlist" && list.length === 0) {
    grid.innerHTML = `<div class="wishlist-empty-state">
      <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      <p>Ви ще не додали жодного товару до вподобаних.<br>Натисніть ♥ на картці товару, щоб зберегти.</p>
    </div>`;
    return;
  }

  if (list.length === 0) {
    grid.innerHTML = `<div class="wishlist-empty-state">
      <svg width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <p>Нічого не знайдено за вашим запитом.<br>Спробуйте змінити фільтр або пошуковий запит.</p>
    </div>`;
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.pid = p.id;
    const isWished = wishlist.has(p.id);
    const selSize = selectedSizes[p.id] || null;
    const isNew = p.tags.includes("new");

    const galleryHTML = p.gallery
      .map(
        (src) => `
      <div class="card-gallery-item" data-src="${src}">
        <img src="${src}" alt="${p.color}" loading="lazy">
        <div class="gallery-zoom">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>
        </div>
      </div>`
      )
      .join("");

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="card-img">
            <div class="card-img-corner"></div>
            ${isNew ? '<span class="card-badge-new">NEW</span>' : ""}
            <img src="${p.img}" alt="${p.color}" loading="lazy">
            <button class="wish-btn ${isWished ? "active" : ""}" data-pid="${p.id}" title="Вподобати">
              <svg width="13" height="13" fill="${isWished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </button>
            <div class="flip-hint">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
              ФОТО
            </div>
          </div>
          <div class="card-body">
            <h3>${p.name}</h3>
            <p class="card-color-name">
              <span class="color-dot" style="background:${p.colorHex}"></span>
              ${p.color}
            </p>
            <p class="card-price">${p.price.toLocaleString("uk")} грн</p>
            <p class="size-label">РОЗМІР:</p>
            <div class="sizes" data-pid="${p.id}">
              ${SIZES.map((s) => `<button class="size-btn${selSize === s ? " selected" : ""}" data-size="${s}" data-pid="${p.id}">${s}</button>`).join("")}
            </div>
            <button class="add-to-cart${selSize ? "" : " needs-size"}" data-pid="${p.id}" ${selSize ? "" : "disabled"}>
              ${selSize ? "✓ ДОДАТИ ДО КОШИКА" : "ОБРАТИ РОЗМІР"}
            </button>
          </div>
        </div>

        <div class="card-back">
          <div class="card-back-header">
            <div>
              <div class="card-back-name">${p.name}<br>${p.color}</div>
            </div>
            <div class="card-back-price">${p.price.toLocaleString("uk")} грн</div>
          </div>
          <p class="card-back-label">ФОТО ТОВАРУ</p>
          <div class="card-gallery">${galleryHTML}</div>
          <button class="card-back-flip-back" data-pid="${p.id}">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            НАЗАД ДО ТОВАРУ
          </button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  grid.querySelectorAll(".card-front .card-img").forEach((imgArea) => {
    imgArea.addEventListener("click", (e) => {
      if (e.target.closest(".wish-btn")) return;
      const card = imgArea.closest(".product-card");
      card.classList.add("flipped");
    });
  });

  grid.querySelectorAll(".card-back-flip-back").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.closest(".product-card").classList.remove("flipped");
    });
  });

  grid.querySelectorAll(".card-gallery-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      openGalleryLightbox(item.dataset.src);
    });
  });

  grid.querySelectorAll(".wish-btn").forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const pid = +btn.dataset.pid;
      wishlist.has(pid) ? wishlist.delete(pid) : wishlist.add(pid);
      updateWishlistBadge();
      renderProducts();
    };
  });

  grid.querySelectorAll(".size-btn").forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const pid = +btn.dataset.pid;
      selectedSizes[pid] = btn.dataset.size;
      grid.querySelectorAll(`.sizes[data-pid="${pid}"] .size-btn`).forEach((s) => {
        s.classList.toggle("selected", s.dataset.size === btn.dataset.size);
      });
      const addBtn = grid.querySelector(`.add-to-cart[data-pid="${pid}"]`);
      if (addBtn) {
        addBtn.disabled = false;
        addBtn.classList.remove("needs-size");
        addBtn.textContent = "✓ ДОДАТИ ДО КОШИКА";
      }
    };
  });

  grid.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const pid = +btn.dataset.pid;
      const size = selectedSizes[pid];
      if (!size) return;
      addToCart(pid, size);
    };
  });

  updateWishlistBadge();
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlist-count-badge");
  if (badge) badge.textContent = wishlist.size;
}

renderProducts();

document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.onclick = () => {
    document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    renderProducts();
  };
});

const searchInput = document.getElementById("catalog-search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  searchClearBtn.style.display = searchQuery ? "flex" : "none";
  renderProducts();
});
searchClearBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  searchClearBtn.style.display = "none";
  renderProducts();
});

function openGalleryLightbox(src) {
  const lb = document.getElementById("gallery-lightbox");
  const img = document.getElementById("gallery-lightbox-img");
  img.src = src;
  lb.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeGalleryLightbox(e) {
  if (e.target === document.getElementById("gallery-lightbox")) closeGalleryLightboxBtn();
}
function closeGalleryLightboxBtn() {
  document.getElementById("gallery-lightbox").classList.remove("show");
  document.body.style.overflow = "";
}

function closeLightbox(e) {
  if (e.target === document.getElementById("lightbox-overlay")) closeLightboxBtn();
}
function closeLightboxBtn() {
  document.getElementById("lightbox-overlay").classList.remove("show");
  document.body.style.overflow = "";
}

function addToCart(pid, size) {
  const product = PRODUCTS.find((p) => p.id === pid);
  const existing = cart.find((c) => c.pid === pid && c.size === size);
  if (existing) existing.qty++;
  else cart.push({ pid, size, qty: 1, product });
  renderCart();
  updateBadge();
  showToast(`${product.color} (${size}) — додано до кошика!`);
}

function renderCart() {
  const el = document.getElementById("cart-items");
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty"><p>Ваш кошик порожній.<br>Оберіть товар у каталозі вище.</p></div>';
    updateSummary(0);
    return;
  }
  el.innerHTML = cart
    .map(
      (item, idx) => `
    <div class="cart-item" data-idx="${idx}">
      <div class="cart-item-img"><img src="${item.product.img}" alt="${item.product.color}"></div>
      <div class="cart-item-info">
        <h4>${item.product.name}</h4>
        <div class="cart-item-meta">
          ${item.product.color} ·
          <select class="cart-size-select" data-idx="${idx}">
            ${SIZES.map((s) => `<option${s === item.size ? " selected" : ""}>${s}</option>`).join("")}
          </select>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-idx="${idx}" data-op="-">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" data-idx="${idx}" data-op="+">+</button>
        </div>
      </div>
      <div class="cart-item-price">${(item.product.price * item.qty).toLocaleString("uk")} грн</div>
      <button class="remove-btn" data-idx="${idx}" title="Видалити">
        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`
    )
    .join("");

  el.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.onclick = () => {
      const idx = +btn.dataset.idx;
      if (btn.dataset.op === "+") cart[idx].qty++;
      else {
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
      }
      renderCart();
      updateBadge();
    };
  });
  el.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.onclick = () => {
      cart.splice(+btn.dataset.idx, 1);
      renderCart();
      updateBadge();
    };
  });
  el.querySelectorAll(".cart-size-select").forEach((sel) => {
    sel.onchange = () => {
      cart[+sel.dataset.idx].size = sel.value;
      renderCart();
    };
  });

  const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  updateSummary(total);
}

function updateSummary(goods) {
  document.getElementById("sum-count").textContent = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("sum-goods").textContent = goods.toLocaleString("uk") + " грн";
  // No delivery fee — total equals goods
  document.getElementById("sum-total").textContent = goods.toLocaleString("uk") + " грн";
}

function updateBadge() {
  document.getElementById("cart-badge").textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

function openModal(name) {
  document.getElementById("modal-name-text").textContent = name;
  document.getElementById("order-modal").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("order-modal").classList.remove("show");
  document.body.style.overflow = "";
}
function closeModalOutside(e) {
  if (e.target === document.getElementById("order-modal")) closeModal();
}

async function submitOrder() {
  const name     = document.getElementById("inp-name").value.trim();
  const lastname = document.getElementById("inp-lastname").value.trim();
  const phone    = document.getElementById("inp-phone").value.trim();
  const city     = document.getElementById("inp-city").value.trim();
  const np       = document.getElementById("inp-np").value.trim();

  if (cart.length === 0) { showToast("Додайте товари до кошика!"); return; }
  if (!name || !lastname) { showToast("Заповніть ім'я та прізвище!"); return; }
  if (!phone) { showToast("Заповніть номер телефону!"); return; }

  const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  const items = cart.map((i) => ({
    name:  i.product.name,
    color: i.product.color,
    size:  i.size,
    qty:   i.qty,
    price: i.product.price,
  }));

  // Send to Telegram (non-blocking — don't wait for result to show modal)
  sendToTelegram({ name, lastname, phone, city, np, items, total });

  openModal(`${name} ${lastname}`);

  setTimeout(() => {
    cart = [];
    renderCart();
    updateBadge();
    ["inp-name", "inp-lastname", "inp-phone", "inp-city", "inp-np"].forEach(
      (id) => (document.getElementById(id).value = "")
    );
  }, 800);
}

document.getElementById("show-all-btn").onclick = function () {
  showToast("Всі доступні товари показано");
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeGalleryLightboxBtn();
    closeLightboxBtn();
  }
});