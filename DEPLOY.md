# Guía de Deploy — KreatuPágina en Hostinger

Instrucciones para subir el sitio a tu hosting sin experiencia en servidores.

---

## Requisitos previos

- Tener Node.js instalado en tu computadora → https://nodejs.org (descarga la versión LTS)
- Tener acceso a tu cuenta de Hostinger
- Tener el dominio `kreatupagina.com` registrado en Hostinger

---

## Paso 1 — Instalar dependencias del proyecto

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto descarga Astro y todo lo necesario. Solo se hace una vez.

---

## Paso 2 — Generar los archivos del sitio

```bash
npm run build
```

Astro genera una carpeta llamada **`dist/`** con todos los archivos
listos para subir al servidor (HTML, CSS, JS, imágenes, etc.).

> Si ves algún error en este paso, revisa que hayas ejecutado
> `npm install` primero.

---

## Paso 3 — Subir los archivos a Hostinger

### Opción A — File Manager (más fácil, sin programas extra)

1. Entra a **hPanel** → [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Ve a **Archivos → Administrador de archivos**
3. Entra a la carpeta `public_html/`
4. **Elimina** cualquier archivo que esté ahí (index.html de ejemplo, etc.)
5. Haz clic en **Subir** y selecciona **todos** los archivos y carpetas
   que están dentro de tu carpeta `dist/`
   - No subas la carpeta `dist/` en sí, sino su **contenido**
6. Espera a que termine la carga

### Opción B — FTP con FileZilla (para archivos pesados)

1. Descarga FileZilla → https://filezilla-project.org
2. En Hostinger, ve a **Archivos → Cuentas FTP** y copia los datos de conexión
3. En FileZilla ingresa: Host, Usuario, Contraseña y Puerto (21)
4. En el panel derecho navega a `public_html/`
5. Arrastra el **contenido** de tu carpeta `dist/` hacia `public_html/`

---

## Paso 4 — Conectar el dominio kreatupagina.com

> Si compraste el dominio en Hostinger, probablemente ya está conectado.
> Si lo compraste en otro lugar, sigue estos pasos.

1. En hPanel ve a **Dominios → DNS / Nameservers**
2. Cambia los nameservers a los de Hostinger:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
3. O crea un registro **A** apuntando a la IP de tu hosting
   (la encuentras en hPanel → **Información del hosting**)
4. Los cambios de DNS pueden tardar entre 1 y 24 horas en propagarse

---

## Paso 5 — Activar SSL (candado de seguridad)

1. En hPanel ve a **SSL → Certificados SSL**
2. Selecciona tu dominio `kreatupagina.com`
3. Haz clic en **Instalar** junto a la opción **Let's Encrypt (gratis)**
4. Espera unos minutos y recarga tu sitio — debería mostrar `https://`

> Si el SSL no aparece activo de inmediato, espera 10 minutos y vuelve
> a intentarlo. A veces tarda mientras el dominio termina de propagarse.

---

## Paso 6 — Verificar que todo funciona

Abre tu navegador y entra a:

- `https://kreatupagina.com` → debe cargar la página
- `https://kreatupagina.com/robots.txt` → debe mostrar el texto del archivo
- `https://kreatupagina.com/sitemap.xml` → debe mostrar el XML

---

## Pendientes antes de publicar

- [ ] Reemplazar `XXXXXXXX` en `src/components/Contact.astro`
      con tu ID real de Formspree → https://formspree.io
- [ ] Reemplazar `52XXXXXXXXXX` en `src/layouts/Layout.astro`
      con tu número de WhatsApp real (sin espacios ni guiones)
      Ejemplo: `5215512345678`
- [ ] Agregar imagen `public/og-image.jpg` (1200×630 px)
      para que se vea bien al compartir en redes sociales
- [ ] Actualizar el año del copyright si es necesario

---

## Actualizar el sitio en el futuro

Cada vez que hagas cambios al proyecto:

```bash
npm run build
```

Luego sube de nuevo el contenido de `dist/` a `public_html/`,
reemplazando los archivos anteriores.

---

## ¿Problemas?

- Soporte Hostinger (chat 24/7): https://www.hostinger.mx/contacto
- Documentación Astro: https://docs.astro.build
