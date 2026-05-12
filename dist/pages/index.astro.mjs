import { c as createComponent, a as renderTemplate, d as defineScriptVars, b as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_M3v4ytU4.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CLB-v0vH.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Contact } from '../chunks/Contact_DxOdnhlA.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL = "https://kreatu-api-1tdb.vercel.app/api/create_preference";
  const planes = [
    {
      id: "starter",
      name: "Esencial",
      tag: "Una sola p\xE1gina, lista para conectar.",
      price: "$999",
      cents: ".99",
      pago: "MXN + IVA \xB7 pago \xFAnico",
      featured: false,
      cta: "Empezar con Esencial",
      features: [
        "Landing de una p\xE1gina",
        "Dise\xF1o a tu marca",
        "Formulario + WhatsApp",
        "Dominio el primer a\xF1o incluido",
        "SSL incluido",
        "Entrega en 7 d\xEDas"
      ],
      mpTitle: "Plan Starter KreatuSitioWeb",
      mpAmount: 999.99
    },
    {
      id: "pro",
      name: "Profesional",
      tag: "El sitio completo de tu consultorio o despacho.",
      price: "$1,999",
      cents: ".99",
      pago: "MXN + IVA \xB7 pago \xFAnico",
      featured: false,
      cta: "Quiero Profesional",
      features: [
        "Hasta 5 secciones completas",
        "Servicios, blog y contacto",
        "SEO local optimizado",
        "Agenda en l\xEDnea (Calendly)",
        "Dominio el primer a\xF1o incluido",
        "Soporte 30 d\xEDas"
      ],
      mpTitle: "Plan Pro KreatuSitioWeb",
      mpAmount: 1999.99
    },
    {
      id: "proplus",
      name: "Pro Plus",
      tag: "Sitio completo con tienda y panel de admin.",
      price: "$3,499",
      cents: ".99",
      pago: "MXN + IVA \xB7 pago \xFAnico",
      featured: true,
      cta: "Quiero Pro Plus",
      features: [
        "Todo lo del Plan Pro",
        "Blog o cat\xE1logo de productos",
        "Panel de administraci\xF3n (Sanity)",
        "Google Analytics incluido",
        "Dominio el primer a\xF1o incluido",
        "Soporte prioritario 60 d\xEDas"
      ],
      mpTitle: "Plan Pro Plus KreatuSitioWeb",
      mpAmount: 3499.99
    },
    {
      id: "ecommerce",
      name: "Ecommerce",
      tag: "Tu tienda en l\xEDnea completa, lista para vender.",
      price: "$7,499",
      cents: ".99",
      pago: "MXN + IVA \xB7 pago \xFAnico",
      featured: false,
      cta: "Lanzar mi tienda",
      features: [
        "Hasta 100 productos",
        "Pagos en MXN (MercadoPago)",
        "Env\xEDos, cupones y descuentos",
        "Panel para subir stock",
        "Dominio el primer a\xF1o incluido",
        "Soporte prioritario 90 d\xEDas"
      ],
      mpTitle: "Plan Ecommerce KreatuSitioWeb",
      mpAmount: 7499.99
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="kt-precios" id="precios" data-astro-cid-hkoc4sea> <div class="kt-shell" data-astro-cid-hkoc4sea> <div class="kt-section__head" data-astro-cid-hkoc4sea> <div class="kt-eyebrow" data-astro-cid-hkoc4sea> <span class="kt-eyebrow__dot" data-astro-cid-hkoc4sea></span> <span class="kt-mono" data-astro-cid-hkoc4sea>05 / Precios</span> </div> <h2 class="kt-section__title" data-astro-cid-hkoc4sea>\nPrecios <em class="kt-italic" data-astro-cid-hkoc4sea>claros</em>.\n        Sin renta mensual escondida.\n</h2> <p class="kt-section__lede" data-astro-cid-hkoc4sea>\nPagas una vez. Dominio incluido el primer a\xF1o en todos los planes. Si m\xE1s adelante necesitas mantenimiento, desde $349/mes.\n</p> </div> <div class="kt-planes__grid" data-astro-cid-hkoc4sea> ', ' </div> <div class="kt-precios__foot" data-astro-cid-hkoc4sea> <span class="kt-mono" data-astro-cid-hkoc4sea>// \xBFNecesitas algo a medida? Hablemos. Cotizamos sin compromiso.</span> </div> </div> </section> <!-- MercadoPago integration \u2014 NO TOCAR --> <script>(function(){', "\n  // Espera a que el DOM est\xE9 listo antes de buscar los botones\n  document.addEventListener('DOMContentLoaded', () => {\n    document.querySelectorAll('.btn-plan').forEach(btn => {\n      btn.addEventListener('click', async () => {\n        const title  = btn.dataset.title;\n        const amount = parseFloat(btn.dataset.amount);\n        const orig   = btn.textContent;\n \n        btn.textContent = 'Procesando\u2026';\n        btn.disabled = true;\n \n        try {\n          const res = await fetch(API_URL, {\n            method:  'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body:    JSON.stringify({ title, unit_price: amount, quantity: 1 }),\n          });\n \n          if (!res.ok) throw new Error(`HTTP ${res.status}`);\n \n          const data = await res.json();\n \n          if (data.init_point) {\n            window.location.href = data.init_point;\n          } else {\n            throw new Error('Sin init_point en la respuesta');\n          }\n        } catch (err) {\n          console.error('MercadoPago error:', err);\n          btn.textContent = orig;\n          btn.disabled = false;\n          alert('Hubo un problema. Por favor intenta de nuevo o escr\xEDbenos por WhatsApp.');\n        }\n      });\n    });\n  });\n})();<\/script> "], ["", '<section class="kt-precios" id="precios" data-astro-cid-hkoc4sea> <div class="kt-shell" data-astro-cid-hkoc4sea> <div class="kt-section__head" data-astro-cid-hkoc4sea> <div class="kt-eyebrow" data-astro-cid-hkoc4sea> <span class="kt-eyebrow__dot" data-astro-cid-hkoc4sea></span> <span class="kt-mono" data-astro-cid-hkoc4sea>05 / Precios</span> </div> <h2 class="kt-section__title" data-astro-cid-hkoc4sea>\nPrecios <em class="kt-italic" data-astro-cid-hkoc4sea>claros</em>.\n        Sin renta mensual escondida.\n</h2> <p class="kt-section__lede" data-astro-cid-hkoc4sea>\nPagas una vez. Dominio incluido el primer a\xF1o en todos los planes. Si m\xE1s adelante necesitas mantenimiento, desde $349/mes.\n</p> </div> <div class="kt-planes__grid" data-astro-cid-hkoc4sea> ', ' </div> <div class="kt-precios__foot" data-astro-cid-hkoc4sea> <span class="kt-mono" data-astro-cid-hkoc4sea>// \xBFNecesitas algo a medida? Hablemos. Cotizamos sin compromiso.</span> </div> </div> </section> <!-- MercadoPago integration \u2014 NO TOCAR --> <script>(function(){', "\n  // Espera a que el DOM est\xE9 listo antes de buscar los botones\n  document.addEventListener('DOMContentLoaded', () => {\n    document.querySelectorAll('.btn-plan').forEach(btn => {\n      btn.addEventListener('click', async () => {\n        const title  = btn.dataset.title;\n        const amount = parseFloat(btn.dataset.amount);\n        const orig   = btn.textContent;\n \n        btn.textContent = 'Procesando\u2026';\n        btn.disabled = true;\n \n        try {\n          const res = await fetch(API_URL, {\n            method:  'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body:    JSON.stringify({ title, unit_price: amount, quantity: 1 }),\n          });\n \n          if (!res.ok) throw new Error(\\`HTTP \\${res.status}\\`);\n \n          const data = await res.json();\n \n          if (data.init_point) {\n            window.location.href = data.init_point;\n          } else {\n            throw new Error('Sin init_point en la respuesta');\n          }\n        } catch (err) {\n          console.error('MercadoPago error:', err);\n          btn.textContent = orig;\n          btn.disabled = false;\n          alert('Hubo un problema. Por favor intenta de nuevo o escr\xEDbenos por WhatsApp.');\n        }\n      });\n    });\n  });\n})();<\/script> "])), maybeRenderHead(), planes.map((p) => renderTemplate`<article${addAttribute(["kt-plan2", { "kt-plan2--hi": p.featured }], "class:list")} data-astro-cid-hkoc4sea> ${p.featured && renderTemplate`<div class="kt-plan2__ribbon kt-mono" data-astro-cid-hkoc4sea>★ Más vendido</div>`} <div class="kt-plan2__head" data-astro-cid-hkoc4sea> <h3 data-astro-cid-hkoc4sea>${p.name}</h3> <p data-astro-cid-hkoc4sea>${p.tag}</p> </div> <div class="kt-plan2__price" data-astro-cid-hkoc4sea> <span class="kt-plan2__big" data-astro-cid-hkoc4sea>${p.price}</span> <span class="kt-plan2__cents" data-astro-cid-hkoc4sea>${p.cents}</span> </div> <div class="kt-plan2__pago kt-mono" data-astro-cid-hkoc4sea>${p.pago}</div> <ul class="kt-plan2__feats" data-astro-cid-hkoc4sea> ${p.features.map((f) => renderTemplate`<li data-astro-cid-hkoc4sea> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-hkoc4sea> <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hkoc4sea></path> </svg> ${f} </li>`)} </ul> <button${addAttribute(["btn-plan", { "btn-plan--hi": p.featured }], "class:list")}${addAttribute(p.mpTitle, "data-title")}${addAttribute(p.mpAmount, "data-amount")} data-astro-cid-hkoc4sea> ${p.cta} </button> </article>`), defineScriptVars({ API_URL }));
}, "C:/Users/ECO/Link-de-trabajo/src/components/Pricing.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const NICHES = [
    {
      id: "medico",
      label: "M\xE9dicos",
      name: "Dra. Marina Vega",
      sub: "Cardiolog\xEDa \xB7 CDMX",
      bg: "#F4F7FB",
      primary: "#0E5BA8",
      soft: "#E2ECFA",
      ink: "#0B2447",
      headline: "Cuidamos tu coraz\xF3n con la ciencia m\xE1s actual.",
      cta: "Agendar consulta",
      services: ["Ecocardiograma", "Holter 24h", "Prueba de esfuerzo", "Consulta general"],
      badge: "C\xE9dula 4582901"
    },
    {
      id: "dental",
      label: "Dentistas",
      name: "Sonrisa Cl\xEDnica",
      sub: "Odontolog\xEDa integral",
      bg: "#F2F8F8",
      primary: "#0E9E96",
      soft: "#DDEEEC",
      ink: "#0A3F3D",
      headline: "Sonrisas que cambian la manera en que ves el mundo.",
      cta: "Reservar limpieza",
      services: ["Blanqueamiento", "Ortodoncia", "Implantes", "Dise\xF1o de sonrisa"],
      badge: "Tecnolog\xEDa 3D"
    },
    {
      id: "legal",
      label: "Abogados",
      name: "Herrera & Asociados",
      sub: "Derecho corporativo",
      bg: "#F6F4EE",
      primary: "#1B2236",
      soft: "#E8E2D2",
      ink: "#10162A",
      headline: "Defendemos tu negocio como si fuera el nuestro.",
      cta: "Solicitar consulta",
      services: ["Mercantil", "Familiar", "Penal", "Migratorio"],
      badge: "20 a\xF1os de pr\xE1ctica"
    },
    {
      id: "shop",
      label: "Ecommerce",
      name: "Botanique Tienda",
      sub: "Belleza natural",
      bg: "#FAF4EC",
      primary: "#7A4B2A",
      soft: "#F0E2CC",
      ink: "#3A2614",
      headline: "Cosm\xE9tica artesanal para sentirte como t\xFA.",
      cta: "Comprar ahora",
      services: ["Skincare", "Aromaterapia", "Cabello", "Cuerpo"],
      badge: "Env\xEDo gratis $899"
    }
  ];
  const PASOS = [
    { n: "01", t: "Te escuchamos", b: "Una llamada de 30 minutos. Nos cuentas tu negocio, tu cliente y a d\xF3nde quieres llegar.", icon: "\u{1F4AC}" },
    { n: "02", t: "Dise\xF1amos la idea", b: "Recibes un primer concepto en 48 horas. Lo ajustamos juntos hasta que sientas que es tuyo.", icon: "\u2736" },
    { n: "03", t: "Construimos r\xE1pido", b: "Programamos tu sitio con c\xF3digo limpio, optimizado para Google y listo para escalar.", icon: "\u2699" },
    { n: "04", t: "Publicamos y cuidamos", b: "Lo lanzamos en tu dominio, te ense\xF1amos a editarlo y seguimos contigo el primer mes sin costo.", icon: "\u2713" }
  ];
  const TESTIMONIOS = [
    { q: "Pas\xE9 de no aparecer en Google a recibir 3 pacientes nuevos por semana. Mi cl\xEDnica creci\xF3 sin que yo gastara en publicidad cada mes.", a: "Dra. Marina V.", r: "Cardi\xF3loga \xB7 CDMX" },
    { q: "Antes peleaba con plantillas que no entend\xEDan lo que vendo. Kreatu se sent\xF3 conmigo, entendi\xF3 mi marca y la p\xE1gina qued\xF3 tal cual la imagin\xE9.", a: "Carla M.", r: "Botanique Tienda" },
    { q: "Levantamos el sitio de la firma en 8 d\xEDas. Profesional, limpio, y nuestros clientes corporativos lo notaron de inmediato.", a: "Lic. Ricardo H.", r: "Herrera & Asociados" },
    { q: "El soporte por WhatsApp es lo que m\xE1s valoro. Cualquier ajuste lo resuelven el mismo d\xEDa.", a: "Dr. \xC1ngel S.", r: "Sonrisa Cl\xEDnica" }
  ];
  const FAQ_ITEMS = [
    { q: "\xBFEn cu\xE1nto tiempo entregan mi p\xE1gina?", a: "Entre 5 y 10 d\xEDas para Starter y Pro. Pro Plus normalmente toma 2 a 3 semanas, dependiendo de los productos y m\xE9todos de pago." },
    { q: "\xBFPuedo editar el sitio yo despu\xE9s?", a: "S\xED. Te dejamos un editor visual y una gu\xEDa corta en video. Si prefieres, nosotros lo seguimos manteniendo." },
    { q: "\xBFEl precio incluye dominio y hosting?", a: "Incluimos el dominio el primer a\xF1o y SSL. El hosting tiene un costo desde $149/mes seg\xFAn el tipo de sitio. Te explicamos antes de empezar." },
    { q: "\xBFQu\xE9 pasa si no me gusta el primer dise\xF1o?", a: "Est\xE1 incluido: ajustamos hasta que sientas que es tuyo. La mayor\xEDa de nuestros clientes lo aprueba en la segunda revisi\xF3n." },
    { q: "\xBFHacen sitios solo para estos 4 nichos?", a: "Estos son los m\xE1s frecuentes, pero tambi\xE9n trabajamos con est\xE9tica, restaurantes, coaches, inmobiliarias y m\xE1s. Escr\xEDbenos." },
    { q: "\xBFPueden migrar mi p\xE1gina actual?", a: "S\xED. Auditamos lo que tienes, conservamos lo que sirve y redise\xF1amos lo dem\xE1s. El SEO no se pierde \u2014 lo cuidamos." }
  ];
  return renderTemplate(_a || (_a = __template(["", " <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SCRIPTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <script>(function(){", `

  /* \u2500\u2500 Render niche preview \u2500\u2500 */
  function renderNiche(n) {
    return \`<div style="width:100%;height:100%;background:\${n.bg};color:\${n.ink};display:flex;flex-direction:column;font-family:sans-serif;position:relative">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 22px;border-bottom:1px solid rgba(0,0,0,0.06)">
        <div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px">
          <div style="width:18px;height:18px;border-radius:4px;background:\${n.primary}"></div>\${n.name}
        </div>
        <div style="display:flex;gap:16px;font-size:12px;opacity:0.6"><span>Inicio</span><span>Servicios</span><span>Contacto</span></div>
        <div style="background:\${n.primary};color:#fff;padding:6px 12px;border-radius:999px;font-size:11px;font-weight:500">\${n.cta}</div>
      </div>
      <div style="padding:28px 22px 14px">
        <div style="font-size:10px;color:\${n.primary};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">\${n.sub}</div>
        <div style="font-size:22px;line-height:1.1;max-width:90%;margin-bottom:14px">\${n.headline}</div>
        <div style="display:flex;gap:8px">
          <div style="background:\${n.primary};color:#fff;padding:7px 14px;border-radius:999px;font-size:11px">\${n.cta}</div>
          <div style="background:#fff;border:1px solid rgba(0,0,0,0.1);padding:7px 14px;border-radius:999px;font-size:11px">Ver m\xE1s</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 22px">
        \${n.services.map(s => \`<div style="background:#fff;border-radius:10px;padding:10px;border:1px solid rgba(0,0,0,0.05)">
          <div style="height:36px;border-radius:6px;background:\${n.soft};margin-bottom:8px"></div>
          <div style="font-size:11px;font-weight:600;margin-bottom:4px">\${s}</div>
          <div style="height:3px;background:rgba(0,0,0,0.06);border-radius:2px;margin-bottom:3px"></div>
          <div style="height:3px;width:60%;background:rgba(0,0,0,0.06);border-radius:2px"></div>
        </div>\`).join('')}
      </div>
      <div style="position:absolute;bottom:14px;right:16px;background:#fff;padding:6px 10px;border-radius:999px;font-size:10px;color:\${n.primary};border:1px solid rgba(0,0,0,0.06)">\${n.badge}</div>
    </div>\`;
  }

  /* \u2500\u2500 Hero demo switcher \u2500\u2500 */
  let activeNiche = 0;
  let paused = false;
  const viewport  = document.getElementById('demo-viewport');
  const urlEl     = document.getElementById('demo-url');
  const tabs      = document.querySelectorAll('.kt-demoSwitcher__tab');

  function setNiche(i) {
    activeNiche = i;
    if (viewport) viewport.innerHTML = renderNiche(NICHES[i]);
    if (urlEl) urlEl.textContent = NICHES[i].id + '.kreatusitioweb.com';
    tabs.forEach((t, idx) => t.classList.toggle('is-on', idx === i));
  }
  setNiche(0);
  tabs.forEach((t, i) => t.addEventListener('click', () => { setNiche(i); paused = true; }));
  setInterval(() => { if (!paused) setNiche((activeNiche + 1) % NICHES.length); }, 4200);

  /* \u2500\u2500 Demo Lab \u2500\u2500 */
  const labName     = document.getElementById('lab-name');
  const labTag      = document.getElementById('lab-tag');
  const labViewport = document.getElementById('lab-viewport');
  const labUrl      = document.getElementById('lab-url');
  const labSeg      = document.getElementById('lab-seg');
  let labNiche = 0;

  function updateLab() {
    const n    = NICHES[labNiche];
    const name = labName?.value || 'Tu Negocio';
    const tag  = labTag?.value  || 'Lo que haces, dicho con claridad.';
    if (labUrl) labUrl.textContent = name.toLowerCase().replace(/\\s+/g, '') + '.kreatusitioweb.com';
    if (labViewport) labViewport.innerHTML = renderNiche({ ...n, name, headline: tag });
  }

  labName?.addEventListener('input', updateLab);
  labTag?.addEventListener('input', updateLab);
  labSeg?.querySelectorAll('.kt-segmented__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      labSeg.querySelectorAll('.kt-segmented__btn').forEach(b => b.classList.remove('is-on'));
      btn.classList.add('is-on');
      labNiche = parseInt(btn.dataset.niche);
      updateLab();
    });
  });
  updateLab();

  /* \u2500\u2500 FAQ accordion \u2500\u2500 */
  document.querySelectorAll('.kt-faqItem').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('is-open');
      document.querySelectorAll('.kt-faqItem').forEach(b => b.classList.remove('is-open'));
      if (!isOpen) btn.classList.add('is-open');
    });
  });

})();<\/script> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ESTILOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> `], ["", " <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SCRIPTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <script>(function(){", `

  /* \u2500\u2500 Render niche preview \u2500\u2500 */
  function renderNiche(n) {
    return \\\`<div style="width:100%;height:100%;background:\\\${n.bg};color:\\\${n.ink};display:flex;flex-direction:column;font-family:sans-serif;position:relative">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 22px;border-bottom:1px solid rgba(0,0,0,0.06)">
        <div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px">
          <div style="width:18px;height:18px;border-radius:4px;background:\\\${n.primary}"></div>\\\${n.name}
        </div>
        <div style="display:flex;gap:16px;font-size:12px;opacity:0.6"><span>Inicio</span><span>Servicios</span><span>Contacto</span></div>
        <div style="background:\\\${n.primary};color:#fff;padding:6px 12px;border-radius:999px;font-size:11px;font-weight:500">\\\${n.cta}</div>
      </div>
      <div style="padding:28px 22px 14px">
        <div style="font-size:10px;color:\\\${n.primary};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">\\\${n.sub}</div>
        <div style="font-size:22px;line-height:1.1;max-width:90%;margin-bottom:14px">\\\${n.headline}</div>
        <div style="display:flex;gap:8px">
          <div style="background:\\\${n.primary};color:#fff;padding:7px 14px;border-radius:999px;font-size:11px">\\\${n.cta}</div>
          <div style="background:#fff;border:1px solid rgba(0,0,0,0.1);padding:7px 14px;border-radius:999px;font-size:11px">Ver m\xE1s</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 22px">
        \\\${n.services.map(s => \\\`<div style="background:#fff;border-radius:10px;padding:10px;border:1px solid rgba(0,0,0,0.05)">
          <div style="height:36px;border-radius:6px;background:\\\${n.soft};margin-bottom:8px"></div>
          <div style="font-size:11px;font-weight:600;margin-bottom:4px">\\\${s}</div>
          <div style="height:3px;background:rgba(0,0,0,0.06);border-radius:2px;margin-bottom:3px"></div>
          <div style="height:3px;width:60%;background:rgba(0,0,0,0.06);border-radius:2px"></div>
        </div>\\\`).join('')}
      </div>
      <div style="position:absolute;bottom:14px;right:16px;background:#fff;padding:6px 10px;border-radius:999px;font-size:10px;color:\\\${n.primary};border:1px solid rgba(0,0,0,0.06)">\\\${n.badge}</div>
    </div>\\\`;
  }

  /* \u2500\u2500 Hero demo switcher \u2500\u2500 */
  let activeNiche = 0;
  let paused = false;
  const viewport  = document.getElementById('demo-viewport');
  const urlEl     = document.getElementById('demo-url');
  const tabs      = document.querySelectorAll('.kt-demoSwitcher__tab');

  function setNiche(i) {
    activeNiche = i;
    if (viewport) viewport.innerHTML = renderNiche(NICHES[i]);
    if (urlEl) urlEl.textContent = NICHES[i].id + '.kreatusitioweb.com';
    tabs.forEach((t, idx) => t.classList.toggle('is-on', idx === i));
  }
  setNiche(0);
  tabs.forEach((t, i) => t.addEventListener('click', () => { setNiche(i); paused = true; }));
  setInterval(() => { if (!paused) setNiche((activeNiche + 1) % NICHES.length); }, 4200);

  /* \u2500\u2500 Demo Lab \u2500\u2500 */
  const labName     = document.getElementById('lab-name');
  const labTag      = document.getElementById('lab-tag');
  const labViewport = document.getElementById('lab-viewport');
  const labUrl      = document.getElementById('lab-url');
  const labSeg      = document.getElementById('lab-seg');
  let labNiche = 0;

  function updateLab() {
    const n    = NICHES[labNiche];
    const name = labName?.value || 'Tu Negocio';
    const tag  = labTag?.value  || 'Lo que haces, dicho con claridad.';
    if (labUrl) labUrl.textContent = name.toLowerCase().replace(/\\\\s+/g, '') + '.kreatusitioweb.com';
    if (labViewport) labViewport.innerHTML = renderNiche({ ...n, name, headline: tag });
  }

  labName?.addEventListener('input', updateLab);
  labTag?.addEventListener('input', updateLab);
  labSeg?.querySelectorAll('.kt-segmented__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      labSeg.querySelectorAll('.kt-segmented__btn').forEach(b => b.classList.remove('is-on'));
      btn.classList.add('is-on');
      labNiche = parseInt(btn.dataset.niche);
      updateLab();
    });
  });
  updateLab();

  /* \u2500\u2500 FAQ accordion \u2500\u2500 */
  document.querySelectorAll('.kt-faqItem').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('is-open');
      document.querySelectorAll('.kt-faqItem').forEach(b => b.classList.remove('is-open'));
      if (!isOpen) btn.classList.add('is-open');
    });
  });

})();<\/script> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ESTILOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> `])), renderComponent($$result, "Layout", $$Layout, { "title": "Dise\xF1o de P\xE1gina Web Profesional y Econ\xF3mica en M\xE9xico | KreatuSitioWeb", "description": "Dise\xF1amos p\xE1ginas web profesionales para m\xE9dicos, dentistas, abogados y tiendas en M\xE9xico. Desde $999.99 MXN, entrega en 7 d\xEDas, SSL incluido." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="kt-hero" id="top"> <div class="kt-hero__bg" aria-hidden="true"> <div class="kt-hero__grid"></div> <div class="kt-hero__glow"></div> </div> <div class="kt-shell kt-hero__inner"> <div class="kt-hero__copy"> <div class="kt-eyebrow"> <span class="kt-eyebrow__dot"></span> <span>Estudio de páginas web · MX</span> <span class="kt-eyebrow__sep">/</span> <span class="kt-mono">desde $999.99</span> </div> <h1 class="kt-hero__title">
Páginas web<br>
que <em class="kt-italic">trabajan</em><br>
por ti, <span class="kt-underline">no al revés.</span> </h1> <p class="kt-hero__lede">
Diseñamos sitios profesionales para <em>doctores, dentistas, abogados</em> y <em>tiendas en línea</em>.
        Escuchamos tu negocio, lo entendemos y lo convertimos en una página que vende — sin plantillas, sin complicaciones.
</p> <div class="kt-hero__ctas"> <a href="#contacto" class="kt-btn kt-btn--primary kt-btn--lg">
Quiero mi página
<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> </a> <a href="#demo" class="kt-btn kt-btn--ghost kt-btn--lg">Ver demo en vivo</a> </div> <ul class="kt-hero__proof"> <li><strong>+120</strong> sitios entregados</li> <li><strong>7 días</strong> en promedio</li> <li><strong>100%</strong> responsive</li> <li><strong>SSL</strong> incluido</li> </ul> </div> <div class="kt-hero__demo"> <div class="kt-demoFrame"> <div class="kt-demoFrame__chrome"> <div class="kt-demoFrame__dots"><i></i><i></i><i></i></div> <div class="kt-demoFrame__url"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="currentColor"></path></svg> <span id="demo-url">medico.kreatusitioweb.com</span> </div> <div class="kt-demoFrame__live"><span class="kt-pulse"></span> en vivo</div> </div> <div class="kt-demoFrame__viewport" id="demo-viewport"></div> </div> <div class="kt-demoSwitcher" role="tablist"> ${NICHES.map((n, i) => renderTemplate`<button role="tab"${addAttribute(i, "data-niche")}${addAttribute(["kt-demoSwitcher__tab", { "is-on": i === 0 }], "class:list")}> <span class="kt-demoSwitcher__bar"></span> ${n.label} </button>`)} </div> <div class="kt-demoCaption"> <span class="kt-mono">// el mismo equipo · 4 industrias · 4 mundos visuales</span> </div> </div> </div> <!-- Marquee --> <div class="kt-marquee" aria-hidden="true"> <div class="kt-marquee__track"> ${["Doctores", "Dentistas", "Abogados", "Ecommerce", "Est\xE9tica", "Restaurantes", "Coaches", "Inmobiliarias", "Veterinarias", "Contadores", "Doctores", "Dentistas", "Abogados", "Ecommerce", "Est\xE9tica", "Restaurantes", "Coaches", "Inmobiliarias", "Veterinarias", "Contadores"].map((it) => renderTemplate`<span class="kt-marquee__item"><span class="kt-marquee__star">✦</span>${it}</span>`)} </div> </div> </section>  <section class="kt-nichos" id="nichos"> <div class="kt-shell"> <div class="kt-section__head"> <div class="kt-eyebrow"><span class="kt-eyebrow__dot"></span><span class="kt-mono">01 / Nichos</span></div> <h2 class="kt-section__title">Una página <em class="kt-italic">hecha para tu industria</em>, no una plantilla genérica.</h2> <p class="kt-section__lede">Cada profesión vende distinto. Por eso adaptamos estructura, copy y diseño al lenguaje que tus pacientes, clientes o compradores ya conocen.</p> </div> <div class="kt-nichos__grid"> ${[
    { emoji: "\u{1FA7A}", title: "Para m\xE9dicos", body: "Agenda en l\xEDnea, perfil profesional, blog de salud y p\xE1gina de servicios optimizada para b\xFAsqueda local.", tag: "Cardiolog\xEDa, dermatolog\xEDa, pediatr\xEDa\u2026" },
    { emoji: "\u{1F9B7}", title: "Para dentistas", body: "Antes y despu\xE9s, planes de tratamiento, facilidades de pago y reservas integradas a WhatsApp.", tag: "Ortodoncia, est\xE9tica, integral\u2026" },
    { emoji: "\u2696\uFE0F", title: "Para abogados", body: "Casos de \xE9xito, \xE1reas de pr\xE1ctica, primer contacto confidencial y formularios con encriptaci\xF3n.", tag: "Mercantil, familiar, penal\u2026" },
    { emoji: "\u{1F6CD}", title: "Para tu tienda", body: "Cat\xE1logo, carrito, m\xE9todos de pago en MXN, env\xEDos y panel para subir productos sin programar.", tag: "Belleza, moda, comida, joyer\xEDa\u2026" }
  ].map((c) => renderTemplate`<a href="#demo" class="kt-nicho"> <div class="kt-nicho__num">${c.emoji}</div> <h3 class="kt-nicho__title">${c.title}</h3> <p class="kt-nicho__body">${c.body}</p> <div class="kt-nicho__tag kt-mono">${c.tag}</div> <div class="kt-nicho__arrow"> <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> </a>`)} </div> </div> </section>  <section class="kt-bento" id="beneficios"> <div class="kt-shell"> <div class="kt-section__head kt-section__head--row"> <div> <div class="kt-eyebrow"><span class="kt-eyebrow__dot"></span><span class="kt-mono">02 / Beneficios</span></div> <h2 class="kt-section__title">Profesional sin ser <em class="kt-italic">complicado</em>.</h2> </div> <p class="kt-section__lede kt-section__lede--side">Diseño que se ve serio, código que carga rápido, copy que vende. Y un equipo humano que entiende lo que haces.</p> </div> <div class="kt-bento__grid"> <div class="kt-bento__cell kt-bento__cell--big"> <div class="kt-bento__head"><span class="kt-mono">// rendimiento</span><h3>Carga en menos de <em>2 segundos</em>.</h3></div> <div class="kt-perf"> <div class="kt-perf__row"><span>LCP</span><div class="kt-perf__bar"><i style="width:22%"></i></div><span class="kt-mono">1.4s</span></div> <div class="kt-perf__row"><span>CLS</span><div class="kt-perf__bar"><i style="width:6%"></i></div><span class="kt-mono">0.02</span></div> <div class="kt-perf__row"><span>FID</span><div class="kt-perf__bar"><i style="width:12%"></i></div><span class="kt-mono">12ms</span></div> <div class="kt-perf__row"><span>SEO</span><div class="kt-perf__bar"><i style="width:96%"></i></div><span class="kt-mono">98/100</span></div> </div> </div> <div class="kt-bento__cell"> <span class="kt-mono">// SEO</span> <h3>Te encuentran en Google.</h3> <p>Estructura, metadatos y velocidad pensados para que aparezcas cuando alguien busca tu servicio cerca.</p> <div class="kt-search"> <div class="kt-search__bar">🔍 dentista en guadalajara</div> <div class="kt-search__result"><strong>Sonrisa Clínica</strong><span> · kreatu</span></div> </div> </div> <div class="kt-bento__cell"> <span class="kt-mono">// móvil</span> <h3>Se ve perfecto en cualquier pantalla.</h3> <div class="kt-devices"> <div class="kt-devices__phone"><div></div><div class="kt-devices__line"></div><div class="kt-devices__line short"></div></div> <div class="kt-devices__tablet"><div></div><div></div><div></div></div> </div> </div> <div class="kt-bento__cell kt-bento__cell--accent"> <span class="kt-mono">// soporte</span> <h3>Hablamos contigo, no con un bot.</h3> <p>Acompañamiento por WhatsApp y reuniones cuando lo necesites. Cambios incluidos los primeros 30 días.</p> <div class="kt-chat"> <div class="kt-chat__msg kt-chat__msg--in">¿Puedo cambiar la foto del banner?</div> <div class="kt-chat__msg kt-chat__msg--out">Claro 👋 mándame la nueva y queda hoy mismo.</div> </div> </div> <div class="kt-bento__cell kt-bento__cell--wide"> <div class="kt-bento__head"><span class="kt-mono">// resultados</span><h3>Más visitas, más llamadas, más ventas.</h3></div> <div class="kt-stats"> <div class="kt-stat"><div class="kt-stat__num">3.4×</div><div class="kt-stat__lbl">más leads en 60 días</div></div> <div class="kt-stat"><div class="kt-stat__num">68%</div><div class="kt-stat__lbl">tráfico desde móvil</div></div> <div class="kt-stat"><div class="kt-stat__num">7d</div><div class="kt-stat__lbl">tu sitio publicado</div></div> <div class="kt-stat"><div class="kt-stat__num">$0</div><div class="kt-stat__lbl">costos ocultos</div></div> </div> </div> </div> </div> </section>  <section class="kt-proc" id="proceso"> <div class="kt-shell"> <div class="kt-section__head"> <div class="kt-eyebrow"><span class="kt-eyebrow__dot"></span><span class="kt-mono">03 / Proceso</span></div> <h2 class="kt-section__title">De la idea a <em class="kt-italic">tu primer cliente</em> en internet, en 4 pasos.</h2> </div> <div class="kt-proc__rail"> <div class="kt-proc__line"></div> ${PASOS.map((p) => renderTemplate`<div class="kt-procStep"> <div class="kt-procStep__node"><span class="kt-procStep__icon">${p.icon}</span></div> <div class="kt-procStep__num kt-mono">${p.n}</div> <h3 class="kt-procStep__title">${p.t}</h3> <p class="kt-procStep__body">${p.b}</p> </div>`)} </div> </div> </section>  <section class="kt-demo" id="demo"> <div class="kt-shell"> <div class="kt-section__head"> <div class="kt-eyebrow"><span class="kt-eyebrow__dot"></span><span class="kt-mono">04 / Demo en vivo</span></div> <h2 class="kt-section__title">Escribe <em class="kt-italic">tu nombre</em>. Mira cómo se vería tu página.</h2> <p class="kt-section__lede">Es un anticipo de cómo trabajamos: tú nos das el contexto, nosotros lo convertimos en diseño.</p> </div> <div class="kt-demoLab"> <div class="kt-demoLab__panel"> <label class="kt-field"> <span class="kt-field__lbl kt-mono">// nombre del negocio</span> <input id="lab-name" type="text" maxlength="32" value="Tu Negocio"> </label> <label class="kt-field"> <span class="kt-field__lbl kt-mono">// frase principal</span> <textarea id="lab-tag" rows="3" maxlength="120">Lo que haces, dicho con claridad.</textarea> </label> <div class="kt-field"> <span class="kt-field__lbl kt-mono">// industria</span> <div class="kt-segmented" id="lab-seg"> <button class="kt-segmented__btn is-on" data-niche="0">Médicos</button> <button class="kt-segmented__btn" data-niche="1">Dentistas</button> <button class="kt-segmented__btn" data-niche="2">Abogados</button> <button class="kt-segmented__btn" data-niche="3">Ecommerce</button> </div> </div> <div class="kt-demoLab__hint"> <span>✨ Esto es solo un boceto.</span> <span>Tu sitio real lo dibujamos nosotros, contigo.</span> </div> <a href="#contacto" class="kt-btn kt-btn--primary">Quiero la versión real →</a> </div> <div class="kt-demoLab__preview"> <div class="kt-demoFrame"> <div class="kt-demoFrame__chrome"> <div class="kt-demoFrame__dots"><i></i><i></i><i></i></div> <div class="kt-demoFrame__url"><span id="lab-url">tunegocio.kreatusitioweb.com</span></div> <div class="kt-demoFrame__live"><span class="kt-pulse"></span> previsualización</div> </div> <div class="kt-demoFrame__viewport" id="lab-viewport" style="height:420px"></div> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "Pricing", $$Pricing, {})}  <section class="kt-test" id="testimonios"> <div class="kt-shell"> <div class="kt-section__head"> <div class="kt-eyebrow"><span class="kt-eyebrow__dot"></span><span class="kt-mono">06 / Testimonios</span></div> <h2 class="kt-section__title">Lo que dicen quienes <em class="kt-italic">ya están en línea</em>.</h2> </div> <div class="kt-test__grid"> ${TESTIMONIOS.map((t, i) => renderTemplate`<figure${addAttribute(["kt-quote", `kt-quote--${i % 3}`], "class:list")}> <div class="kt-quote__mark">"</div> <blockquote>${t.q}</blockquote> <figcaption> <span class="kt-quote__avatar"></span> <span><strong>${t.a}</strong><br>${t.r}</span> </figcaption> </figure>`)} </div> </div> </section>  <section class="kt-faq" id="faq"> <div class="kt-shell kt-faq__shell"> <div class="kt-faq__intro"> <div class="kt-eyebrow"><span class="kt-eyebrow__dot"></span><span class="kt-mono">07 / FAQ</span></div> <h2 class="kt-section__title">Lo que <em class="kt-italic">siempre nos preguntan</em>.</h2> <p class="kt-section__lede">¿No ves tu duda? Escríbenos por WhatsApp y te respondemos en minutos.</p> <a href="#contacto" class="kt-btn kt-btn--ghost kt-btn--lg" style="margin-top:16px">Hablar con un humano →</a> </div> <div class="kt-faq__list"> ${FAQ_ITEMS.map((it, i) => renderTemplate`<button class="kt-faqItem"${addAttribute(i, "data-faq")}> <span class="kt-faqItem__num kt-mono">${String(i + 1).padStart(2, "0")}</span> <span class="kt-faqItem__q">${it.q}</span> <span class="kt-faqItem__icon" aria-hidden="true"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg> </span> <span class="kt-faqItem__a">${it.a}</span> </button>`)} </div> </div> </section>  ${renderComponent($$result2, "Contact", $$Contact, {})} ` }), defineScriptVars({ NICHES }));
}, "C:/Users/ECO/Link-de-trabajo/src/pages/index.astro", void 0);

const $$file = "C:/Users/ECO/Link-de-trabajo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
