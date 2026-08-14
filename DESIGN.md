---
name: JorKa
description: Dark lacquered-wood identity for a Buenos Aires wood-floor workshop.
colors:
  ink: "#16110D"
  ink-2: "#1C1611"
  walnut: "#241B14"
  oak: "#C98A3C"
  oak-soft: "#E4B36E"
  oak-ink: "#1a120a"
  sheen: "#F4ECDE"
  sheen-dim: "#C7B7A2"
  line: "rgba(244, 236, 222, 0.10)"
  line-strong: "rgba(244, 236, 222, 0.18)"
  error: "#E8A090"
  error-border: "#C46B5A"
  placeholder: "#8c7c6a"
  shadow-action: "rgba(0, 0, 0, 0.7)"
  shadow-island: "rgba(0, 0, 0, 0.85)"
typography:
  display:
    fontFamily: "Marcellus, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Marcellus, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 4vw, 2.85rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Marcellus, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.35rem, 2vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.01em"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  subtitle:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.65
  wordmark:
    fontFamily: "Marcellus, Georgia, Times New Roman, serif"
    fontSize: "1.2rem"
    fontWeight: 400
  button:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 600
  nav:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
  nav-wa:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 600
  body-sm:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-tight:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
  caption:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
  status:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
  micro:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  micro-sm:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
  lede-max:
    fontSize: "1.18rem"
  thanks:
    fontFamily: "Marcellus, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.1rem, 5vw, 3.1rem)"
    fontWeight: 400
  thanks-min:
    fontSize: "2.1rem"
  thanks-max:
    fontSize: "3.1rem"
  nav-mobile:
    fontFamily: "Marcellus, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 5vw, 1.9rem)"
    fontWeight: 400
  nav-mobile-min:
    fontSize: "1.5rem"
  nav-mobile-max:
    fontSize: "1.9rem"
rounded:
  hairline: "2px"
  mark: "7px"
  mark-lg: "10px"
  control: "12px"
  surface: "20px"
  pill: "999px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "40px"
  space-5: "64px"
components:
  button-primary:
    backgroundColor: "{colors.oak}"
    textColor: "{colors.oak-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 18px 14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.oak-soft}"
    textColor: "{colors.oak-ink}"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.sheen}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-ghost-hover:
    backgroundColor: "rgba(244, 236, 222, 0.05)"
    textColor: "{colors.sheen}"
    rounded: "{rounded.pill}"
  nav-island:
    backgroundColor: "rgba(22, 17, 13, 0.58)"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 16px"
  nav-link:
    textColor: "{colors.sheen-dim}"
    rounded: "{rounded.pill}"
    padding: "9px 12px"
  nav-whatsapp:
    backgroundColor: "{colors.oak}"
    textColor: "{colors.oak-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  input:
    backgroundColor: "rgba(22, 17, 13, 0.55)"
    textColor: "{colors.sheen}"
    rounded: "{rounded.control}"
    padding: "13px 14px"
    typography: "{typography.body}"
  media:
    backgroundColor: "{colors.walnut}"
    rounded: "{rounded.surface}"
  process-step:
    backgroundColor: "{colors.ink}"
    padding: "28px 24px 36px"
  ba-tag:
    backgroundColor: "rgba(22, 17, 13, 0.7)"
    textColor: "{colors.sheen}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
---

# Design System: JorKa

## Overview

**Creative North Star: "Taller de Autor"**

JorKa looks like a dark lacquered workshop after hours: walnut walls, a single oak highlight, and paper-warm sheen for the words. The site is a persuasion surface for a carpentry house in Buenos Aires, so the craft has to feel physical — varnish, grain, quiet hands — not like a SaaS dashboard with a wood stock photo. Density is generous. Type is large. Chrome is scarce. The visitor should feel they have entered a taller, not a template.

The pairing is intentional restraint. Marcellus carries the names of things (the brand, the promises, the services). Hanken Grotesk carries everything that explains. Photography does the proving: before/after sliders are the signature, not a gallery gimmick. Motion is a single ease, slow enough to feel like a finish curing. Confirmed visual rejections: light Scandinavian furniture sites, generic “startup dark” (navy, purple, electric teal), stacked white cards, and a second accent color.

**Key Characteristics:**
- Near-black lacquer ground (`ink` / `ink-2` / `walnut`) with warm sheen type
- One saturated voice: oak varnish, used for action and almost nothing else
- Display serif + grotesque body; never a third family
- Pill chrome (nav, buttons, tags) against 20px media frames
- Depth by tone and hairline, not by drop shadow
- Real restoration photography as the primary artifact

## Colors

A closed wood-shop palette: dark lacquer, one varnish accent, paper sheen. No cool neutrals, no second hue except clay for errors.

### Primary
- **Oak** (`oak`): The varnish. Primary buttons, the nav WhatsApp chip, process step numbers, input focus, footer WhatsApp, and text selection. It is the only color that means “act.”
- **Oak Soft** (`oak-soft`): The same varnish in lamplight. Hover on oak actions, and the global `:focus-visible` ring. Never a fill for large surfaces.
- **Oak Ink** (`oak-ink`): The dark brown that sits on oak fills (buttons, skip-link, selection text). Slightly warmer than page `ink` so type on varnish doesn’t go dead.

### Neutral
- **Ink** (`ink`): Page ground, footer, open mobile nav. The lacquered room.
- **Ink Two** (`ink-2`): Alternate section ground (Servicios, Contacto). A half-step up so long pages don’t read as one slab.
- **Walnut** (`walnut`): Media wells, process-step hover, before/after slider fallback. The recessed wood of a picture frame.
- **Sheen** (`sheen`): Primary type, headings, captions, handle line. Warm paper, never white.
- **Sheen Dim** (`sheen-dim`): Secondary type — ledes, body in about/process, nav links at rest, footer copy. Readable, quieter.
- **Line** (`line`): Hairline seams, gallery and media borders, service-list rules, form wrap. Sheen at 10% — a varnish edge, not a UI stroke.
- **Line Strong** (`line-strong`): Ghost-button border, input border, nav island edge, BA tags. Sheen at 18%.
- **Placeholder** (`placeholder`): Form placeholder type only.
- **Error** (`error`) / **Error Border** (`error-border`): The only non-wood hue. Clay for invalid fields and form-status errors — never used as decoration.

### Named Rules
**The Oak Voice Rule.** Oak is used on ≤10% of any screen, and only to mark action, focus, or a step number. Filling a hero, a card, or a section with oak breaks the taller.

**The No-White Rule.** Surfaces and type stay in the ink–walnut–sheen family. `#ffffff` and cool greys are out of gamut for this world.

## Typography

**Display Font:** Marcellus (with Georgia, Times New Roman)
**Body Font:** Hanken Grotesk (with system-ui)
**Label/Mono Font:** Hanken Grotesk at smaller sizes — no separate mono face

**Character:** A Roman inscription serif against a contemporary grotesque. Marcellus is the shop sign; Hanken is the conversation. The pairing should feel considered and local, not “luxury template.”

### Hierarchy
- **Display** (400, `clamp(2.5rem, 6.5vw, 4.5rem)`, 1.12 / −0.015em): Hero headline and the thanks-page title (slightly smaller clamp there). One sentence, balanced, never all-caps.
- **Headline** (400, `clamp(2rem, 4vw, 2.85rem)`, 1.12): Section titles. Same serif, same tracking. Lives in a `section__head` that maxes at 36rem.
- **Title** (400, `clamp(1.35rem, 2vw, 1.6rem)`, 1.12): Service and process names, service-list strong, card titles. Still Marcellus; still regular weight.
- **Body** (400, 1.05rem typical / 1rem floor, 1.7 / 0.01em): Explanatory copy. Max measure ~38–42ch. Color is `sheen-dim` for paragraphs, `sheen` for headings.
- **Label** (500, 0.8rem, 0.02em): Form labels, BA tags (those also uppercase + 0.1em tracking), skip-link and small UI. Buttons run a nearby cut: ~0.98rem / 600 on Hanken, not Marcellus.

### Named Rules
**The Two-Voice Rule.** Marcellus names; Hanken explains. Do not set body copy in Marcellus, and do not set a headline in Hanken except the desktop nav links (those are Hanken) and the mobile overlay links (those switch to Marcellus at display size).

**The Measure Rule.** Running text stays inside ~38–42ch. Display and headlines use `text-wrap: balance`. No justified type.

## Layout

A single centered column, max 1080px (`--max-width`), gutters `clamp(18px, 4vw, 32px)`. Sections pad `clamp(80px, 12vw, 144px)` vertically — tall, gallery-like breathing, not a compact marketing stack. Horizontal rhythm is the five-step space scale (8 / 16 / 24 / 40 / 64).

Grids are few and specific:
- **About:** 1.05fr / 1fr, collapsing to one column at 940px
- **Process:** 4 equal columns divided by 1px `line` gutters; 2 columns at 940px; 1 at 560px
- **Service pair:** two columns, stacking at 560px
- **Gallery:** 4-column mosaic with a tall span-2 feature; 2 columns at 940px; 1 at 560px
- **Contact:** a 560px centered stack, not a split form/info layout

Breakpoints in use: **940px** (nav overlay, hero stacks, most grids) and **560px** (process/services/gallery to one column, full-width hero CTAs). Scroll margin on in-page sections is 96px to clear the island. Safe-area insets are respected on the nav.

**The One-Column Rule.** Do not add a 12-column app grid or a sticky sidebar. New surfaces inherit the 1080px column and the two breakpoints.

## Elevation & Depth

This system is tonal first. The room recedes through `ink` → `ink-2` → `walnut`; photography sits in a walnut well; hairline sheen edges catch light the way varnish does. Shadows are scarce and only under floating chrome — never under cards, process steps, or gallery tiles.

Hero type on the desktop overlay uses a soft ink text-shadow so Marcellus stays readable on the photograph; that shadow is dropped on small screens once the copy sits on solid `ink`.

### Shadow Vocabulary
- **Island rest** (`box-shadow: 0 16px 40px -28px rgba(0, 0, 0, 0.85)`): The floating nav pill. Almost a contact shadow; it should not read as a material card.
- **Oak action** (`box-shadow: 0 10px 24px -16px rgba(0, 0, 0, 0.7)`): Primary buttons only, at rest.
- **Hero type** (`text-shadow: 0 2px 16px rgba(22, 17, 13, 0.7)`): Desktop hero copy over photography; omit when copy is on a solid ground.
- **Input focus** (`box-shadow: 0 0 0 3px rgba(201, 138, 60, 0.22)`): Oak glow on focused fields. Global `:focus-visible` is a 2px `oak-soft` outline with 3px offset instead.

### Named Rules
**The Lacquer-Not-Lift Rule.** Surfaces are flat at rest. If a new element needs depth, step its fill (`ink` / `ink-2` / `walnut`) or add a `line` hairline. Do not introduce a third shadow recipe.

## Shapes

Two families, no in-between fashion radii:
- **Surfaces clip at 20px** (`--radius`): media frames, process cluster, gallery tiles, contact form wrap. Overflow hidden, hairline `line` border, walnut or ink fill.
- **Chrome goes fully pill** (999px): nav island, buttons, skip-link, BA tags, BA grip, thanks mark, nav links.
- **Controls sit at 12px:** text inputs, textarea, the contact `<summary>` hover well.

The process block is one 20px rounded cluster sliced by 1px seams — a single object, not four cards. The nav island can un-round to a full-viewport sheet when the mobile menu opens (radius 0, no blur, no border). Logo thumbnails use a tighter clip (7–10px) because they are marks, not surfaces.

**The Two-Radius Rule.** New UI is either a 20px workshop frame or a pill. 4px “app” rounding and 16px card-kit rounding are foreign.

## Components

Quiet, tactile, few. Primary actions are oak pills with a trailing circular icon that nudges 2px on hover; press scales to 0.98. Ghost is a sheen hairline. Nothing is outlined in oak except focus.

### Buttons
- **Shape:** Fully pill (999px). Primary includes a 32px circular icon well on the trailing edge (`rgba(22, 17, 13, 0.16)`).
- **Primary:** Oak fill, oak-ink type, padding 14px 18px 14px 24px, weight 600. Hover shifts fill to oak-soft. Used for WhatsApp conversion on hero, contacto, and gracias.
- **Ghost:** Transparent, sheen type, `line-strong` border, padding 14px 26px. Hover is 5% sheen wash and a stronger border. Used for “Ver servicios,” form submit, and “Volver al inicio.”
- **Block:** Full width, space-between — default for stacked mobile CTAs and the form submit.
- **Hover / Focus:** 0.35–0.4s on `--ease` (`cubic-bezier(0.32, 0.72, 0, 1)`). `:focus-visible` uses the global oak-soft ring. Loading drops opacity to 0.72 and disables pointer events.
- **Active:** `scale(0.98)`.

### Chips
- **BA tags (“Antes” / “Después”):** Uppercase, 0.72rem, 0.1em tracking, pill, ink wash at 70% plus `line-strong`. Anchored 14px from the corners of the slider. The only all-caps type in the system.
- **Hero drag hint:** Same family as tags (pill, ink wash) but sentence case, 0.78rem, 0.06em tracking.

### Cards / Containers
- **Corner Style:** 20px on media, gallery, process cluster, form wrap. Not on the page itself.
- **Background:** Walnut for media wells; ink for process steps (walnut on hover); `rgba(22, 17, 13, 0.35)` for the form wrap.
- **Shadow Strategy:** None. See Lacquer-Not-Lift.
- **Border:** 1px `line` (media, gallery, form wrap) or the 1px seam grid (process).
- **Internal Padding:** Process steps 28px 24px 36px; form wrap `clamp(20px, 3vw, 28px)`; gallery captions 14px 16px over a gradient scrim.
- **Single surface:** Media is one frame. Do not nest a card inside a card.

### Inputs / Fields
- **Style:** 12px radius, `line-strong` border, ink at 55% fill, sheen type, 13px 14px padding, Hanken 1rem. Labels above, 0.8rem / 500 / sheen-dim. 6px gap in the field stack; 14px between fields.
- **Focus:** Border to oak, 3px oak glow, no extra outline.
- **Error:** Border to `error-border`; message in `error` at 0.8rem. Form status uses oak-soft when idle/success and `error` when failed.
- **Disabled / loading:** The submit button takes `.is-loading` (opacity 0.72). Placeholders use `placeholder`.

### Navigation
- **Style:** A floating pill island, `width: min(1040px, 100%)`, 16px from the top (plus safe-area). Fill is ink at 58% with `blur(22px) saturate(1.25)` so the photograph reads through as lacquer, not as a solid bar. On scroll past 20px, fill goes to 76% — still frosted, never opaque. Without `backdrop-filter`, fill falls back to 94%. Wordmark is Marcellus 1.2rem beside a 32px rounded logo.
- **Links:** Hanken 0.9rem / 500 / sheen-dim, pill padding 9px 12px. Hover: sheen type + 5% sheen wash.
- **WhatsApp chip:** Oak pill, oak-ink, 10px 16px, 0.88rem / 600. Hover to oak-soft. Stays visible in the island on small screens (truncated); the overlay menu is for in-page links.
- **Mobile (≤940px):** Hamburger (44×44, two 20×2 sheen bars). Open state fills the viewport with solid ink, no blur; links become Marcellus at `clamp(1.5rem, 5vw, 1.9rem)`, centered. Escape and link-click close it.

### Before / After slider (signature)
The proof engine of the brand. Full-bleed in the desktop hero (with a top-to-bottom ink scrim so type can sit on it); framed in `.media` elsewhere. After-image is the base; before-image is clipped from the right via `clip-path`. A 2px sheen hairline and 40px circular grip (ink at 60%, 1.5px sheen ring, chevron ticks) ride the split. Range input is visually hidden but remains the control. Focus-within draws an oak-soft outline. Respect `prefers-reduced-motion` (no auto-sweep). Tags are “Antes” / “Después,” never English.

### Thanks mark
A 56px pill with oak hairline and 12% oak fill, oak check. Same world as the buttons — a quiet confirmation, not a celebration illustration.

## Do's and Don'ts

### Do:
- **Do** keep oak for actions, numbers, and focus — and let photography plus sheen type do the rest.
- **Do** set names in Marcellus and explanations in Hanken Grotesk, with body measure around 38–42ch.
- **Do** clip images in a 20px walnut frame with a 1px `line` hairline; use the before/after slider when the story is restoration.
- **Do** use the pill island nav, the 1080px column, and the 8/16/24/40/64 space scale.
- **Do** honor `prefers-reduced-motion`: snap reveals, skip auto-sweep, keep scroll instant.
- **Do** write UI in Rioplatense Spanish; English is for this spec, not for the visitor.

### Don't:
- **Don't** introduce a second accent (teal, WhatsApp green, gold leaf, cool grey). WhatsApp is oak, not brand-green.
- **Don't** use white, Inter, or a light paper background. The taller is dark.
- **Don't** nest cards, add drop shadows under content, or round surfaces to 4–8px.
- **Don't** uppercase body copy or headlines. Caps are reserved for BA tags.
- **Don't** replace real job photography with illustration, 3D wood, or stock luxury interiors.
- **Don't** add a third type family, a kicker/eyebrow above headlines, or a 12-column dashboard grid.
