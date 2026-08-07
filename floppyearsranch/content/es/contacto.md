# PAQUETE DE CONTENIDO — CONTACTO

**URL:** `/es/contacto/`
**Equivalente en inglés:** `/contact/`
**Palabra clave principal:** contacto entrenador de perros Corona
**Implementar tal cual.** `[PHONE]`, `[EMAIL]` y `[HOURS]` son tokens de configuración.

**⚠️ EL NÚMERO DE TELÉFONO ES UN BLOQUEADOR DE LANZAMIENTO.** Hay dos números en
circulación y `business-facts.md` lo marca como NO CONFIRMADO. Nada se publica hasta que
se confirme uno. Mismo bloqueo que en `/contact/`.

**⚠️ ESTA PÁGINA ES EL PUNTO DE CONVERSIÓN DE TODO EL ÁRBOL `/es/`.** No existe una
versión en español de `/book-evaluation/`, así que todos los CTA en español llegan aquí.
El formulario de esta página debe estar completamente en español.

> Texto escrito directamente en español, registro **usted**.

---

## META

**Title:** `Contacto — Floppy Ears Ranch, Entrenamiento de Perros en Corona, CA`

**Meta description:** `Llame, mande mensaje o escríbanos. Floppy Ears Ranch, 21761 Knabe Rd, Corona, CA 92883. Cómo llegar desde la 91 y la 15, horarios y un formulario que sí se contesta.`

**OG title:** `Contacto — Floppy Ears Ranch, Corona CA`
**OG description:** `21761 Knabe Rd, Corona, CA 92883. Llame, mande mensaje de texto o llene el formulario. Le contestamos en un día hábil o menos.`

**Breadcrumb:** Inicio › Contacto

---

## SECCIÓN 1 — H1 + RESPUESTA DIRECTA

**H1**
# Contacto — Floppy Ears Ranch

**Respuesta directa** *(estilo `--t-lead`)*

Floppy Ears Ranch está en 21761 Knabe Rd, Corona, CA 92883, en el área de Temescal Valley del condado de Riverside. Llame o mande mensaje de texto al [PHONE], escríbanos a [EMAIL], o llene el formulario de abajo. La entrada y salida de perros es de 8:00am a 8:00pm. Contestamos en un día hábil o menos, normalmente el mismo día: somos tres personas y una de nosotros le va a responder personalmente.

**CTA principal:** Llame al [PHONE] → `tel:[PHONE]`
**CTA secundario:** Mándenos un mensaje → `sms:[PHONE]`

---

## SECCIÓN 2 — CÓMO CONTACTARNOS

**H2**
## Cómo contactarnos

**Cuatro tarjetas, misma altura. Todos los datos como texto real, seleccionable y con enlace.**

**Llamar**
[PHONE]
La forma más rápida de tener una respuesta. Contesta una persona.
→ `tel:[PHONE]`

**Mensaje de texto**
[PHONE]
El mismo número. Bueno para preguntas rápidas, fotos de su perro y agendar.
→ `sms:[PHONE]`

**Correo electrónico**
[EMAIL]
Lo mejor para cartillas de vacunas y cualquier cosa con archivo adjunto.
→ `mailto:[EMAIL]`

**Formulario**
Cuéntenos de su perro y le regresamos una recomendación.
→ formulario en esta misma página

⚠️ **TODO — el correo electrónico no está confirmado.** `business-facts.md` lo marca como NO CONFIRMADO. Debe existir una dirección real y monitoreada antes del lanzamiento.

---

## SECCIÓN 3 — ⚠️ ATENCIÓN EN ESPAÑOL

**H2**
## ¿Hay alguien que hable español?

> ⚠️ **TODO — BLOQUEADOR DE LANZAMIENTO PARA TODO EL ÁRBOL `/es/`.**
>
> **Alguien tiene que poder contestar el teléfono en español, o esta página tiene que decir
> exactamente cuándo hay personal que habla español.**
>
> Una página en español que termina en una línea telefónica que solo habla inglés es peor
> que no tener página en español. El usuario invierte confianza, marca, se topa con una
> barrera de idioma y se va con una impresión peor de la que tenía antes de entrar. Eso
> también aplica al chat, al buzón de voz y al sistema de reservaciones.
>
> **Confirmar con Chad y Kyla cuál de estas tres es la verdad y publicar esa:**
>
> 1. **Hay atención en español en todo el horario.** Publicar: *"Contestamos en español."*
> 2. **Hay atención en español en ciertos horarios o con cierta persona.** Publicar los
>    horarios exactos, por ejemplo: *"Atendemos en español de lunes a viernes, de 9:00am a
>    5:00pm. Fuera de ese horario, mándenos un mensaje de texto o llene el formulario en
>    español y le regresamos la llamada."*
> 3. **No hay nadie que hable español todavía.** Entonces el árbol `/es/` se lanza como
>    **primero por escrito**: el formulario y el mensaje de texto en español son los canales
>    principales, el teléfono baja a CTA secundario, y esta sección dice la verdad —
>    *"Atendemos por mensaje de texto y por el formulario en español; las llamadas se
>    atienden en inglés."* Y se agenda contratar o capacitar a alguien bilingüe.
>
> **Ninguna de las tres es vergonzosa. Fingir la primera sí.**
> No publicar esta sección con texto genérico. No borrarla sin resolverla.

**Texto provisional para maquetar, no para publicar:**
`[Aquí va la respuesta confirmada sobre atención en español, con horarios específicos.]`

---

## SECCIÓN 4 — DÓNDE ESTAMOS

**H2**
## Dónde estamos

**Floppy Ears Ranch**
**21761 Knabe Rd**
**Corona, CA 92883**
Temescal Valley · Condado de Riverside

*Razón social: Team Floppy Ears, LLC*

**Mapa incrustado**, con carga diferida y una imagen estática de fachada para que no le cueste la velocidad de la página.

**Botones debajo del mapa:**
Cómo llegar en Google Maps · Abrir en Apple Maps · Copiar dirección

**Imagen:** La entrada del rancho y el letrero desde la calle.
*Alt: "Entrada y letrero de Floppy Ears Ranch en 21761 Knabe Rd, Corona, California"*

---

## SECCIÓN 5 — HORARIOS

**H2**
## Horarios

| | |
|---|---|
| **Entrada y salida de perros** | 8:00am – 8:00pm |
| **Guardería** | 12 horas al día, 7 días a la semana |
| **Oficina y teléfono** | [HOURS] |
| **Recorridos** | Gratis, como 20 minutos, casi todos los días. Llame antes para que alguien esté libre para acompañarlo. |

⚠️ **TODO — los horarios generales no están confirmados.** `business-facts.md` señala que la ventana de 8:00am a 8:00pm para entrada y salida es lo único publicado. Confirmar los horarios reales de oficina y teléfono antes del lanzamiento: alimentan `openingHoursSpecification` en el esquema y el perfil de Google, que deben coincidir exactamente.

---

## SECCIÓN 6 — CÓMO LLEGAR

**H2**
## Cómo llegar

Estamos en el área de Temescal Valley en Corona, junto a la 15 y al sur del cruce con la 91. Si usted solo ha pasado por Corona sobre la 91, esto queda unos minutos más al sur de lo que se imagina.

**Desde la 91** (Riverside, Norco, Eastvale, condado de Orange): tome la **91 hacia la 15 sur**, siga por la 15 sur pasando Corona y las salidas de Cajalco Road hacia Temescal Valley, y salga en Knabe Rd. Desde Yorba Linda, Anaheim Hills, Brea o Fullerton son de 25 a 40 minutos. Desde Riverside o Norco, de 15 a 25.

**Desde la 15** (Ontario, Rancho Cucamonga, Fontana, Chino): tome la **15 sur** por Corona, pase el cruce con la 91 y siga al sur hasta Temescal Valley. Salga en Knabe Rd. Desde Ontario o Rancho Cucamonga, normalmente de 30 a 45 minutos.

**Desde el sur** (Lake Elsinore, Murrieta, Temecula): tome la **15 norte** por Lake Elsinore hacia Temescal Valley y salga en Knabe Rd. De 15 a 20 minutos desde Lake Elsinore, de 35 a 45 desde Temecula.

**Al llegar:** quédese en su vehículo hasta que alguien salga a recibirlo, sobre todo si trae a su perro. **La correa se pone antes de abrir la puerta.** El estacionamiento es donde se sueltan los perros, y es la única parte de la visita en la que somos rígidos.

⚠️ **TODO — confirmar con los dueños la salida exacta, la última vuelta a Knabe Rd y el procedimiento de llegada.** Las rutas de autopista son correctas a nivel condado; el tramo final y los tiempos deben verificarse.

---

## SECCIÓN 7 — QUÉ PASA DESPUÉS

**H2**
## Qué pasa después de que nos contacta

Le respondemos en un día hábil o menos, normalmente el mismo día. Aquí no hay call center ni servicio que reparte contactos: es Chad, Kyla o Jose.

Si pregunta por entrenamiento, el siguiente paso es una **consulta gratis de 30 minutos** por teléfono o video. En esa llamada no se contrata nada y no se cobra nada. Si su perro mordió a una persona o a otro perro, dígalo desde el primer contacto: esos casos van a una fila prioritaria.

**Formulario en español, en esta misma página.** Botón: **"Obtener mi recomendación"**

---

## SECCIÓN 8 — CTA FINAL

**H2**
## Cuéntenos sobre su perro

Sea lo que sea que esté pasando, empiece contándonoslo. La primera conversación es gratis y no lo compromete a nada.

**CTA principal:** Cuéntenos sobre su perro → formulario en esta página
**CTA secundario:** Llame al [PHONE] → `tel:[PHONE]`

**Debajo:** Floppy Ears Ranch · Team Floppy Ears, LLC · 21761 Knabe Rd, Corona, CA 92883 · Entrada y salida de 8:00am a 8:00pm · [HOURS]

---

## BUILD NOTES

*(Developer instructions — English.)*

- One `<h1>`. Everything else H2/H3. `<html lang="es">`.
- **NAP must be byte-identical** to `business-facts.md` and to `/contact/`. The business
  name, street, city, state, and ZIP are **never translated or reformatted**. Do not
  translate "Rd", do not write "Corona, California 92883", do not reorder the address.
- Address, phone, and hours render as **selectable plain text** — never inside an image,
  never behind a form, never JavaScript-only.
- `ContactPage` + `LocalBusiness` (reference `#business`) + `BreadcrumbList` schema with
  `"inLanguage": "es"`. `telephone`, `email`, `address`, `geo`, and
  `openingHoursSpecification` populated from confirmed values only. Both language versions
  reference the **same** `LocalBusiness` node — do not create a second business entity for
  Spanish.
- Map is a static-image facade that loads the real embed on click.
- `tel:` and `sms:` links work on mobile and fire GA4 `tel_click` / `sms_click` with a
  `language: es` parameter so Spanish-lead volume is measurable separately.
- **Five ⚠️ TODO blockers before launch:** the phone number (hard blocker, sitewide), the
  email address (§2), **Spanish-language phone coverage (§3 — blocks the entire `/es/`
  tree)**, business hours (§5), and the final approach and arrival procedure (§6).
- Every social icon points at a real profile URL or is removed. No dead icons ship.
- Sticky mobile call bar, as on every page.

### hreflang

```html
<link rel="alternate" hreflang="en-US"    href="https://floppyearsranch.com/contact/" />
<link rel="alternate" hreflang="es-US"    href="https://floppyearsranch.com/es/contacto/" />
<link rel="alternate" hreflang="x-default" href="https://floppyearsranch.com/contact/" />
```

Reciprocal — `/contact/` carries the identical three tags. Both URLs in the sitemap with
`xhtml:link` alternates.

### Language switcher

On this page the switcher links to **`/contact/`**. Never to `/es/` or `/`. Driven by the
URL pair map in `/es/index.md`.

### Spanish form labels and error messages

This page carries the **primary Spanish lead form** — there is no `/es/book-evaluation/`.
It must be fully Spanish, and it must post to the same CRM pipeline as the English form
with a `language: es` field so nobody calls a Spanish-speaking lead back in English.

| Field | Label (es) | Error (es) |
|---|---|---|
| Nombre | `Nombre` | `Escriba su nombre.` |
| Teléfono | `Teléfono` | `Escriba un número de teléfono de 10 dígitos.` |
| Correo electrónico | `Correo electrónico` | `Escriba un correo electrónico válido.` |
| Preferencia de contacto | `¿Cómo prefiere que lo contactemos?` | `Escoja una opción.` |
| Idioma | `¿En qué idioma prefiere que le respondamos?` | `Escoja una opción.` |
| Nombre del perro | `Nombre de su perro` | `Escriba el nombre de su perro.` |
| Raza | `Raza` | — |
| Edad | `Edad de su perro` | `Indique la edad de su perro.` |
| Servicio | `¿Qué le interesa?` | `Escoja una opción.` |
| Mordidas | `¿Su perro ha mordido a alguien?` | `Escoja una opción.` |
| Mensaje | `Cuéntenos qué está pasando` | `Cuéntenos brevemente qué está pasando.` |
| Consentimiento SMS | `Acepto recibir mensajes de texto sobre mi solicitud.` | `Marque la casilla para continuar.` |

- Submit button: **"Obtener mi recomendación"**
- Success: **"Recibimos su mensaje. Le respondemos en un día hábil o menos."**
- Failure: **"No se pudo enviar. Intente de nuevo o llámenos al [PHONE]."**
- Required fields announced to screen readers as `obligatorio`, not `*`.
- `lang="es"` on the `<form>` element.
- Accept accented characters and `ñ` in every text field. Validate on Unicode letters, not
  `[A-Za-z]` — a regex that rejects "Muñoz" or "José" is the most common way a Spanish
  form silently fails.
- Phone validation accepts 10-digit US numbers with or without formatting. Do not require
  a country code.
- No CAPTCHA. Honeypot only.
- Autoresponder email and SMS are in Spanish when `language: es`.
