---
name: Illumia Solutions
description: Enterprise IT consultancy — editorial precision meets crimson authority
colors:
  crimson-authority: "#b31c33"
  crimson-deep: "#920022"
  crimson-container: "#d63849"
  crimson-pale: "#ffdad9"
  warm-vellum: "#fcf9f8"
  warm-vellum-low: "#f6f3f2"
  warm-vellum-container: "#f0edec"
  warm-vellum-high: "#ebe7e7"
  warm-vellum-pure: "#ffffff"
  ink-primary: "#1c1b1b"
  ink-warm: "#5a4040"
  ink-muted: "#5c5c5c"
  outline-blush: "#e2bebd"
  outline-rose: "#8e706f"
  obsidian-ink: "#140c0c"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.25rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.22em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.crimson-authority}"
    textColor: "{colors.warm-vellum-pure}"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.crimson-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.crimson-authority}"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
  button-ghost-hover:
    backgroundColor: "{colors.crimson-authority}"
    textColor: "{colors.warm-vellum-pure}"
  button-sm:
    backgroundColor: "{colors.crimson-authority}"
    textColor: "{colors.warm-vellum-pure}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-sm-hover:
    backgroundColor: "{colors.crimson-deep}"
---

# Design System: Illumia Solutions

## 1. Overview

**Creative North Star: "The Illuminated Dispatch"**

Illumia Solutions operates in a field where every competitor defaults to dark navy surfaces and neon threat-pulse graphics. This system refuses that reflex entirely. Instead it models the aesthetic grammar of a prestigious international publication — think the Financial Times or Monocle — adapted for enterprise IT procurement. The buyer encountering this system is a C-suite decision-maker evaluating technical capability across compliance, cloud, and security domains. They are readers, not spectators. The design earns trust through editorial precision, not visual pyrotechnics.

The surface is warm vellum, not clinical white. The accent is a single crimson used with the editorial discipline of a masthead — appearing on eyebrows, active states, and critical calls to action, never decorating for its own sake. Newsreader, a contemporary editorial serif with classical proportions, carries all headlines and display type; Inter handles body text and labels with the precision of a caption typeface. The system is typography-first: the grid, spacing, and components exist to serve the text, not the reverse.

This system explicitly rejects the cybersecurity dark-mode aesthetic (navy, neon, threat dashboards), the SaaS-cream template (gradient text, glassmorphism, hero metrics row), and the generic MSP checklist website. It operates in a premium register where restraint is the proof of confidence.

**Key Characteristics:**
- Typography-first hierarchy: serif display weight dominates every opening surface
- Single-accent discipline: Crimson Authority (#b31c33) used on no more than 10% of any given surface
- Tactile surface depth: flat at rest, depth earned on interaction
- Dual-register surfaces: warm light pages for content, obsidian footer as a distinct closing register
- Motion reinforces confidence: ease-out curves, no bounce, no choreography for its own sake

## 2. Colors: The Dispatch Palette

A restrained two-temperature palette built around one commanding accent and a warm neutral family. The warmth is the point — every surface, divider, and neutral carries a subtle red undertone that ties the system together without announcing itself.

### Primary
- **Crimson Authority** (#b31c33): The masthead color. Used on eyebrow labels, active nav states, CTA backgrounds, focus rings, and the footer accent strip. Never used as background for large content surfaces. Its scarcity is what makes it commanding.
- **Crimson Deep** (#920022): Hover and pressed state for Crimson Authority. Never appears at rest — only under cursor or active press.
- **Crimson Pale** (#ffdad9): Tinted highlight for Crimson on dark (Obsidian Ink) surfaces. Appears as italic numerals on dark feature cards and as selection backgrounds.

### Neutral
- **Warm Vellum** (#fcf9f8): Primary page background. Slightly warm, never sterile. The paper the dispatch is printed on.
- **Warm Vellum Low** (#f6f3f2): Secondary section backgrounds. Slightly deeper than Vellum to create visual pacing without borders.
- **Warm Vellum Container** (#f0edec): Card and container surfaces. The third tonal step.
- **Warm Vellum High** (#ebe7e7): Strong surface separation where tonal contrast is required.
- **Warm Vellum Pure** (#ffffff): Pure white reserved for partner strips and bordered feature cards. Used intentionally, not as a default.
- **Ink Primary** (#1c1b1b): All primary body text and headlines on light surfaces. Not pure black — warm undertone prevents harshness.
- **Ink Warm** (#5a4040): Secondary body text, description copy, supporting narrative. Reads as slightly warm charcoal.
- **Ink Muted** (#5c5c5c): Tertiary text, labels, fine print.
- **Outline Blush** (#e2bebd): Signature divider and border color. The subtle rose tone echoes the primary red at low opacity — every divider in the system whispers the brand.
- **Outline Rose** (#8e706f): Medium-weight outlines and form borders.
- **Obsidian Ink** (#140c0c): Footer background only. Near-black with a deep warm undertone. The closing register of the publication.

### Named Rules
**The One Voice Rule.** Crimson Authority appears on no more than 10% of any given screen. Its rarity is the point. Do not use it as a section background, as body text color, or as decorative fill. When it appears, it commands attention precisely because it has not appeared before.

**The Whisper Divider Rule.** Use Outline Blush (#e2bebd) for all dividers and borders, at full opacity or with 20–40% alpha. Never use Ink Primary or neutral grey as a divider — every structural line in the system carries the brand's warmth.

## 3. Typography

**Display Font:** Newsreader (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** Newsreader's classical proportions and slightly bracketed serifs read as authoritative without feeling dated — it is the typeface equivalent of a byline in a respected publication. Inter's geometric neutrality creates clean contrast, making Newsreader's character stand out more by comparison. The pairing rewards both the skimmer and the deep reader.

### Hierarchy
- **Display** (weight 700, clamp 2.25rem–5rem, line-height 0.93, tracking -0.04em): Reserved for hero H1 headlines only. The italic variant in Crimson Authority is used for emphasis phrases within display text — a visual signature appearing on every major landing surface.
- **Headline** (weight 600, clamp 1.875rem–3rem, line-height 1.15, tracking -0.02em): Section headings (H2), mega menu category titles, card section titles. Always Newsreader.
- **Title** (weight 500, clamp 1.25rem–1.5rem, line-height 1.25): Feature card headings (H3), sub-section labels, footer column headings — italic variant for warmth.
- **Body** (weight 400, 1rem–1.25rem, line-height 1.65, max-width 65ch): Primary descriptive text. Inter throughout. Max line length 65ch enforced on all description blocks.
- **Label** (weight 700, 0.6875rem, letter-spacing 0.22em–0.30em, UPPERCASE): Eyebrow labels above section titles and hero badges. Always Crimson Authority. Always Inter. The eyebrow pattern is: label first, then headline — no section opens with a raw headline.

### Named Rules
**The Italic Signature Rule.** Every major headline surface contains at least one Newsreader italic phrase in Crimson Authority. This is not decoration — it is the visual equivalent of the byline ink. Reserved for hero H1s; never applied to body text or subheadings.

**The Eyebrow Obligation Rule.** No section or card headline appears without an eyebrow label (Inter, uppercase, tracked, Crimson Authority). The eyebrow orients the reader before the headline lands. Prohibited: leading with a Newsreader headline on a white surface with no eyebrow context.

## 4. Elevation

This system is flat-by-default. Surfaces rest without shadows. Depth appears as a response to interaction or structural hierarchy, never as ambient decoration.

Three exceptions apply at structural level: the navigation bar carries a micro-shadow (1px, 4% opacity) to separate it from page content; mega menu dropdowns carry a large diffuse shadow to lift them clearly above all content; the primary CTA button carries a crimson-tinted radiance shadow that reinforces its temperature rather than its z-position. The footer uses atmospheric radial glows in Crimson Authority — a painting technique that creates warmth in the dark register without adding UI depth cues.

Tonal layering replaces elevation for most content: Warm Vellum, Warm Vellum Low, Warm Vellum Container, and Warm Vellum Pure create four steps of perceived depth without a single box-shadow.

### Shadow Vocabulary
- **Navigation micro** (`box-shadow: 0 1px 4px rgba(0,0,0,0.05)`): Navbar at rest. Structural separator only.
- **Mega drop** (`box-shadow: 0 25px 50px rgba(0,0,0,0.10)`): Mega menu dropdowns. Unambiguous lift above page content.
- **Card hover** (`box-shadow: 0 20px 40px rgba(0,0,0,0.08)`): Feature cards on hover only. Never at rest.
- **CTA glow** (`box-shadow: 0 20px 40px rgba(179,28,51,0.20)`): Primary button only. Crimson-temperature radiance at rest.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only in response to state (hover, mega-menu open, structural layer). A shadow on a resting content card is a mistake.

## 5. Components

Components in this system are typography carriers: they establish a frame and then recede. Buttons have physical weight. Cards earn depth only under interaction.

### Buttons
- **Shape:** Generously rounded at 12px (`rounded-xl`). Confident, not playful.
- **Primary:** Crimson Authority background (#b31c33), white text, `px-8 py-4`, semibold Inter, wide tracking. CTA glow shadow at rest. Hover transitions to Crimson Deep (#920022). Active state compresses to 95% scale — physical press feedback.
- **Ghost:** Transparent background, 40% Crimson Authority border, Crimson Authority text. On hover: fills solid with Crimson Authority, text inverts to white. Transition: 200ms ease-out.
- **Small (inline):** Rounded-lg (8px), `px-5 py-2.5`, text-xs semibold. Same color logic as Primary. Used inside mega menus and card-level CTAs.

### Feature Cards
- **Shape:** `rounded-2xl` (16px). Generous internal padding: `p-6 sm:p-8 lg:p-10`.
- **Surface (default):** Warm Vellum Low background, no border at rest. On hover: transitions to Warm Vellum Pure with Outline Blush border and card hover shadow. The card wakes on interaction, sleeps at rest.
- **Featured (Crimson):** Crimson Authority background, white text. Used as visual anchor at position 0 (and occasionally position 3) in feature grids. Headline inverts to white; body copy at 80% white opacity.
- **Dark (Obsidian):** Obsidian Ink background, white headlines, stone-400 body text. Appears as the terminal card in a grid sequence.
- **Bordered:** Warm Vellum Pure background with always-visible Outline Blush border. Static; no hover state. Used for neutral informational cards.
- **Numbering:** Italic Newsreader numerals in Crimson Authority ("01.", "02.") serve as section markers inside all card types. These replace decorative icons as the primary orientation device.

### Navigation
- **Bar:** Fixed, full-width. Warm Vellum at 90% opacity with `backdrop-blur-xl`. Outline Blush bottom border at 20% opacity. Navigation micro-shadow.
- **Links:** Newsreader serif, text-sm, `tracking-widest`, UPPERCASE. Active: Crimson Authority + font-bold. Hover: Crimson Authority. Default: stone-600. No underlines.
- **Mega Menu:** Full-width dropdown with two-column layout. Left column: category/study selector with a 2px left-border active state in Crimson Authority (structural navigation affordance, not a decorative stripe). Right column: content grid or detail panel. Shadow-2xl. Framer Motion fade + slide-down at 380ms.
- **Mobile:** Accordion structure. Same typography. White/95 surface with backdrop blur.

### Footer
- **Background:** Obsidian Ink (#140c0c). The publication's back cover — a distinct register, not a dark-mode variant of the page.
- **Atmospheric Glows:** Radial gradients in Crimson Authority at 38%, 32%, and 8% opacity create ambient warmth. This is temperature, not UI chrome.
- **Column Headings:** Italic Newsreader title-weight in white, prefixed with a tracked crimson numeral label ("01", "02", "03"). The numbering language from the feature cards repeats here as a system-wide pattern.
- **Links:** stone-400 at rest. Hover: white text with a 5px Crimson Authority line that slides in from the left using width animation. The reveal is directional — always left-to-right.
- **Social Icons:** 44x44px rounded squares (10px radius) with white/8 background and white/18 border. Hover: fills with Crimson Authority, CTA glow shadow.

### Eyebrow Badge
A typographic pattern appearing above every major headline on the site: Inter, 11px, weight 700, letter-spacing 0.22–0.30em, UPPERCASE, Crimson Authority. Rendered as a block-level `<span>`. Never styled as a pill, chip, or bordered tag — purely typographic, purely functional.

## 6. Do's and Don'ts

### Do:
- **Do** use Newsreader italic in Crimson Authority for one emphasized phrase per major display headline. This is the system's visual signature and must appear on every hero surface.
- **Do** prefix every section and card heading with an eyebrow label (Inter, uppercase, tracked, Crimson Authority). No headline stands alone.
- **Do** use Outline Blush (#e2bebd) for all dividers, borders, and separators — at full or reduced opacity. Warm rose runs through every structural line.
- **Do** keep feature card grids asymmetric: vary card widths (2-column-wide vs 1-column) and place the Crimson Authority card as a visual anchor at grid position 0.
- **Do** use tonal surface steps (Warm Vellum → Warm Vellum Low → Warm Vellum Container) to create section pacing without adding visible borders.
- **Do** animate with fade + translate-Y at 200–700ms. Use the custom ease `[0.22, 1, 0.36, 1]` for entrances and `cubic-bezier(0.4, 0, 0.2, 1)` for state transitions.
- **Do** constrain body text to max 65ch line length on all description blocks.
- **Do** use italic Newsreader for footer column headings to carry the warmth of the serif into the dark register.

### Don't:
- **Don't** use dark navy with neon accents (the Crowdstrike/Palo Alto aesthetic). This is the category's first reflex. The system exists to refuse it.
- **Don't** use gradient text (`background-clip: text` with a gradient background). Single solid Crimson Authority is the only color emphasis permitted on type.
- **Don't** use glassmorphism as default. The `.glass-header` class is limited to the navbar and uses warm vellum, not frosted dark glass.
- **Don't** deploy the hero-metric template (large number, small label, gradient accent row below the CTA). The stats row in the Illumia hero uses Newsreader numerals in Crimson Authority on Warm Vellum — a typographic treatment, not a dashboard widget.
- **Don't** use identical card grids (same size, same icon + heading + text repeated across all positions). The system's card language is asymmetric by design: wide anchor cards, colored positions, numbered hierarchy.
- **Don't** use `border-left` greater than 2px as a decorative colored stripe on resting cards, list items, or callouts. The 2px active border in the mega menu is a structural navigation signal that transitions from transparent — not a side-stripe pattern.
- **Don't** use `#000` or `#fff` for any text or background value. Every neutral is warm-tinted: Ink Primary (#1c1b1b) for text, Warm Vellum (#fcf9f8) for backgrounds.
- **Don't** produce any surface that could pass for a 2024 SaaS landing page template. If it loads fast, has a card grid, and could have been built with any free Tailwind kit, it has failed the system.
