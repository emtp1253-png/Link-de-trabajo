import { e as createAstro, c as createComponent, a as renderTemplate, f as renderSlot, b as addAttribute, g as renderHead, u as unescapeHTML } from './astro/server_M3v4ytU4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kreatusitioweb.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Dise\xF1o de P\xE1gina Web Profesional y Econ\xF3mica en M\xE9xico | KreatuSitioWeb",
    description = "Crea tu sitio web profesional desde $999.99 MXN. Dise\xF1o de p\xE1gina web econ\xF3mico, responsivo y con SEO incluido. Entrega en 7 d\xEDas."
  } = Astro2.props;
  const siteUrl = "https://kreatusitioweb.com";
  const navLinks = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#proceso", label: "C\xF3mo funciona" },
    { href: "#demo", label: "Demo" },
    { href: "/kreatubot", label: "KreatuBot" },
    { href: "#precios", label: "Precios" },
    { href: "#contacto", label: "Contacto" }
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KreatuSitioWeb",
    description: "Dise\xF1o de p\xE1ginas web profesionales y econ\xF3micas en M\xE9xico.",
    url: siteUrl,
    email: "projectmannager@kreatusitioweb.com",
    areaServed: "MX",
    priceRange: "$",
    serviceType: "Dise\xF1o y desarrollo de p\xE1ginas web",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de dise\xF1o web",
      itemListElement: [
        { "@type": "Offer", name: "Plan Starter", price: "999.99", priceCurrency: "MXN" },
        { "@type": "Offer", name: "Plan Pro", price: "1999.99", priceCurrency: "MXN" },
        { "@type": "Offer", name: "Plan Pro Plus", price: "3499.99", priceCurrency: "MXN" }
      ]
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png"><link rel="manifest" href="/site.webmanifest"><title>', '</title><meta name="description"', '><meta name="keywords" content="dise\xF1o de p\xE1gina web, dise\xF1o de pagina web profesional, dise\xF1o de pagina web economico, crear sitio web, pagina web, sitio web, dise\xF1o web M\xE9xico"><meta name="robots" content="index, follow"><meta name="geo.region" content="MX"><link rel="canonical"', '><meta name="google-site-verification" content="Zx7xJA_eWDfVg2U-RfloA7B_87rW-SXGD0SpiI99tO4"><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale" content="es_MX"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">', '<\/script><script type="application/ld+json">{\n      "@context": "https://schema.org",\n      "@type": "Organization",\n      "name": "KreatuSitioWeb",\n      "url": "https://kreatusitioweb.com",\n      "logo": "https://kreatusitioweb.com/favicon-180.png"\n    }<\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">', '</head> <body> <nav> <div class="nav-inner"> <a href="/" class="kt-logo" aria-label="KreatuSitioWeb inicio"> <span class="kt-logo__mark" aria-hidden="true"> <span class="kt-logo__dot"></span> <span class="kt-logo__bar"></span> </span> <span class="kt-logo__text"> <strong>Kreatu</strong><span>SitioWeb</span> </span> </a> <ul class="nav-links"> ', ' </ul> <a href="#contacto" class="btn-nav">Empezar ahora</a> <button class="hamburger" id="hamburger-btn" aria-label="Abrir men\xFA"> <span></span><span></span><span></span> </button> </div> </nav> <main>', '</main> <footer> <div class="footer-inner"> <a href="/" class="kt-logo kt-logo--footer"> <span class="kt-logo__mark" aria-hidden="true"> <span class="kt-logo__dot" style="background:#1D9E75"></span> <span class="kt-logo__bar" style="background:#1D9E75"></span> </span> <span class="kt-logo__text"> <strong style="color:#1D9E75">Kreatu</strong><span style="color:#fff">SitioWeb</span> </span> </a> <span class="footer-copy">\xA9 ', ' KreatuSitioWeb \xB7 Dise\xF1o de p\xE1ginas web en M\xE9xico</span> <ul class="footer-links"> <li><a href="#">Aviso de privacidad</a></li> <li><a href="#">T\xE9rminos</a></li> <li><a href="#contacto">Contacto</a></li> </ul> </div> </footer> <!-- TODO: reemplaza 52XXXXXXXXXX con tu n\xFAmero real de WhatsApp --> <a href="https://wa.me/522298735788" class="kt-fab" target="_blank" rel="noopener noreferrer" aria-label="Hablar por WhatsApp"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.5 3.5A11.7 11.7 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 22a9.9 9.9 0 01-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 012 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.2-.7.2-1.3.1-1.5z"></path> </svg> <span>Hablar ahora</span> </a>  </body></html>'])), title, addAttribute(description, "content"), addAttribute(siteUrl, "href"), addAttribute(siteUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify(jsonLd)), renderHead(), navLinks.map(({ href, label }) => renderTemplate`<li><a${addAttribute(href, "href")}${addAttribute([{ "nav-demo": href === "#demo" }], "class:list")}>${label}</a></li>`), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/ECO/Link-de-trabajo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
