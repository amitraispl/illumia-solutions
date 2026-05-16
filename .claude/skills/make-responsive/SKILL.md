---
name: make-responsive
description: >
  Make any website section or component fully responsive, with deep expertise in split-screen / two-column hero layouts
  (text on one side, image or illustration on the other). Use this skill whenever the user asks to "make responsive",
  "fix mobile layout", "responsive hero", "mobile-friendly", "adapt for mobile", "stack on mobile", "responsive split screen",
  "fix breakpoints", "hero not working on mobile", or shares a screenshot of a broken mobile layout. Also trigger when
  the user pastes a component with side-by-side columns that clearly needs mobile adaptation, or asks about responsive
  best practices for any two-panel / split-content layout. This skill covers the full workflow: audit the current markup,
  identify responsive issues, and apply battle-tested patterns for every breakpoint. It is tailored for Next.js + Tailwind CSS
  projects but the principles apply universally.
---

# Make This Website Responsive

You are a responsive-design specialist. Your job is to take any website section — especially split-screen hero layouts
with text on one side and an image on the other — and make it work beautifully across every screen size, from 320px
phones to ultrawide monitors.

## Philosophy

Mobile traffic often exceeds 60% of all visits. A split-screen layout that looks stunning on a 1440px monitor but
collapses into an unreadable mess on a phone is a failed design. The goal is **graceful degradation with intentional
mobile-first design**: start from the smallest screen and *add* complexity as space becomes available.

The key insight for split-screen heroes: on desktop they create visual balance between emotional imagery and logical
copy. On mobile, that balance shifts — the value proposition (text) must come first, with the image playing a
supporting role below it.

---

## Step 1 — Audit the Current Layout

Before changing anything, understand what you're working with.

1. **Identify the layout pattern.** Is it a two-column hero (text + image)? A multi-column feature grid? A full-bleed
   background with overlay text? Each has different responsive needs.

2. **Check the tech stack.** Look at the project's CSS approach:
   - Tailwind CSS utility classes (look for `flex`, `grid`, `lg:`, `md:` prefixes)
   - Plain CSS / SCSS with media queries
   - CSS-in-JS (styled-components, emotion)
   - A component library (Chakra, MUI, etc.)

3. **Find existing breakpoints.** Most projects already have breakpoint conventions. For Tailwind:
   - `sm:` = 640px
   - `md:` = 768px
   - `lg:` = 1024px
   - `xl:` = 1280px
   - `2xl:` = 1536px

4. **Spot anti-patterns.** Common issues to flag:
   - Fixed pixel widths on containers (e.g., `width: 700px`)
   - Fixed heights on sections that should grow with content
   - Images with hardcoded dimensions that don't scale
   - Text that's too large or too small at certain viewport widths
   - Buttons / CTAs that are too narrow to tap on mobile (minimum 44x44px touch target)
   - Horizontal overflow causing sideways scroll
   - Content hidden on mobile that shouldn't be (or content shown that should be hidden)

---

## Step 2 — Apply the Split-Screen Hero Pattern

This is the core pattern for two-column hero sections. It handles the most common layout: **text on one side,
image on the other**, stacking vertically on mobile.

### The Container

```
Desktop (lg+):  ┌──────────┬──────────┐
                 │   TEXT   │  IMAGE   │
                 │  (52%)   │  (48%)   │
                 └──────────┴──────────┘

Mobile (<lg):    ┌────────────────────┐
                 │       TEXT         │
                 │                    │
                 ├────────────────────┤
                 │       IMAGE        │
                 │   (aspect-ratio    │
                 │    constrained)    │
                 └────────────────────┘
```

### Tailwind CSS Implementation

```tsx
<section className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
  {/* ── Text Column ── */}
  <div className="
    relative z-10
    lg:w-[52%]
    bg-surface
    pt-24 pb-12        /* mobile spacing */
    md:pt-36 md:pb-20  /* tablet spacing */
    px-6 md:px-12      /* horizontal padding scales up */
    lg:pl-12 xl:pl-20  /* desktop left padding */
    lg:pr-12 xl:pr-16  /* desktop right padding */
    flex items-center
  ">
    <div className="w-full max-w-2xl">
      {/* Badge / eyebrow */}
      {/* Headline — fluid sizing */}
      {/* Description */}
      {/* CTA buttons */}
    </div>
  </div>

  {/* ── Image Column ── */}
  <div className="
    relative
    h-[55vw]          /* mobile: viewport-relative height */
    md:h-[42vw]       /* tablet: slightly less tall */
    lg:h-auto          /* desktop: fill container height */
    lg:flex-1          /* desktop: take remaining width */
  ">
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      className="object-cover object-center"
      priority
    />
    {/* Optional: gradient blends at edges */}
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface/30 to-transparent pointer-events-none hidden lg:block" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/60 to-transparent pointer-events-none lg:hidden" />
  </div>
</section>
```

### Why Each Decision Matters

**`flex-col lg:flex-row`** — Mobile-first stacking. The text column comes first in the DOM (which is correct for
both accessibility and mobile UX — users see the value proposition before the hero image). On desktop, it becomes
a side-by-side layout.

**`lg:w-[52%]` + `lg:flex-1`** — The text column gets slightly more than half the space because readability
matters more than symmetry. The image column fills whatever remains. This asymmetry feels intentional and
editorial, not accidental.

**`h-[55vw] md:h-[42vw] lg:h-auto`** — On mobile, the image height scales with viewport width, keeping a
natural aspect ratio. On desktop, the image fills the full height of the section. This prevents the image from
being either comically tall or uselessly thin on any screen size.

**`min-h-screen`** — The hero section fills at least the viewport height on desktop, creating that impactful
full-screen first impression. On mobile, the stacked layout naturally exceeds viewport height, which is fine —
users expect to scroll.

**`pt-24` / `md:pt-36`** — Top padding accounts for the fixed navbar. On mobile, less padding is needed because
the navbar is typically shorter. This prevents content from hiding behind the nav.

**`max-w-2xl`** — Constrains the text content width so lines don't stretch too long on wide screens. Optimal
reading length is 50-75 characters per line.

**Priority loading** — The hero image should always use `priority` (Next.js) or `loading="eager"` to ensure it
loads immediately as part of the Largest Contentful Paint.

---

## Step 3 — Fluid Typography

Hard breakpoints for font sizes create jarring jumps. Use CSS `clamp()` for smooth scaling:

```css
/* Headline: 2.25rem on mobile → 6rem on desktop */
font-size: clamp(2.25rem, 5vw + 1rem, 6rem);

/* Body text: 1rem on mobile → 1.25rem on desktop */
font-size: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
```

In Tailwind, apply fluid type via arbitrary values:

```tsx
<h1 className="text-[clamp(2.25rem,5vw+1rem,6rem)] leading-[0.93] tracking-tighter">
```

Or use Tailwind's responsive prefixes for step-based scaling (simpler but less fluid):

```tsx
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
```

Both approaches are valid. `clamp()` gives smoother transitions; step-based gives more predictable control.

---

## Step 4 — Responsive Images

### The `object-fit` Approach

When an image needs to fill a container without distortion:

```tsx
<div className="relative h-[55vw] md:h-[42vw] lg:h-auto lg:flex-1">
  <Image
    src={src}
    alt={alt}
    fill
    className="object-cover object-center"
  />
</div>
```

**`object-cover`** crops the image to fill the container (like `background-size: cover`).
**`object-center`** centers the crop point. Change to `object-top` for portraits or `object-left` for
left-weighted compositions.

### Art Direction for Different Screens

Sometimes you need genuinely different images at different sizes (e.g., a landscape crop on desktop, a square
crop on mobile). Use the `<picture>` element or conditional rendering:

```tsx
{/* Show different crops at different breakpoints */}
<picture>
  <source media="(min-width: 1024px)" srcSet="/hero-wide.jpg" />
  <source media="(min-width: 640px)" srcSet="/hero-medium.jpg" />
  <img src="/hero-mobile.jpg" alt="..." className="object-cover w-full h-full" />
</picture>
```

### Image Height on Mobile

The single most common mobile issue with split-screen heroes: the image is either too tall (pushing content
off-screen) or too short (looking like a thin strip). The sweet spot:

- **Mobile (< 640px):** `h-[55vw]` to `h-[65vw]` — about half the screen width, creating a comfortable 16:9-ish ratio
- **Tablet (640px–1023px):** `h-[42vw]` to `h-[50vw]` — slightly more contained
- **Desktop (1024px+):** `h-auto` with `flex-1` — fill the remaining space

---

## Step 5 — Responsive Spacing and Padding

### Horizontal Padding

```tsx
className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"
```

This scales from tight mobile gutters (16px) to generous desktop margins (80px). The jumps feel natural because
each breakpoint roughly doubles the available space.

### Vertical Padding (Sections)

```tsx
className="py-12 md:py-20 lg:py-28"
```

Sections need breathing room, but not so much on mobile that users have to scroll through empty space.

### Using `vmin` for Proportional Spacing

For padding that adapts to both width AND height:

```css
padding: 10vmin 2rem;
```

`vmin` uses the smaller of viewport width or height. This means on narrow phones, the padding is small
(because width is small). On wide monitors, it's based on height (preventing excessive spacing). This is
particularly useful for hero sections.

---

## Step 6 — CTA Buttons on Mobile

Buttons must be large enough to tap comfortably. Minimum touch target is 44x44px (WCAG 2.5.5).

```tsx
<div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
  <Link
    href="/contact"
    className="
      bg-primary text-white
      px-8 py-4            /* generous padding */
      rounded-xl
      font-semibold
      text-center           /* critical for flex-col stacking */
      w-full sm:w-auto      /* full-width on mobile, auto on tablet+ */
    "
  >
    Get Started
  </Link>
  <Link
    href="/services"
    className="
      border border-primary/40 text-primary
      px-8 py-4
      rounded-xl
      font-semibold
      text-center
      w-full sm:w-auto
    "
  >
    Learn More
  </Link>
</div>
```

On mobile, buttons stack vertically and span full width — easy to tap. On tablet and up, they sit side-by-side.

---

## Step 7 — Reversed Split Layouts

For sections where the image is on the LEFT and text on the RIGHT (alternating layout):

```tsx
<section className="flex flex-col lg:flex-row-reverse min-h-[70vh] overflow-hidden">
  {/* Text — always first in DOM for accessibility + mobile */}
  <div className="lg:w-[52%] ...">
    {/* content */}
  </div>
  {/* Image */}
  <div className="relative h-[55vw] md:h-[42vw] lg:h-auto lg:flex-1">
    {/* image */}
  </div>
</section>
```

`lg:flex-row-reverse` flips the visual order on desktop while keeping the text first in the DOM.
On mobile, both variants stack identically: text on top, image below.

---

## Step 8 — Edge Cases and Polish

### Gradient Overlays That Adapt

On desktop, a subtle left-edge gradient blends the text column into the image. On mobile, switch to a
bottom-to-top gradient since the image is now below the text:

```tsx
{/* Desktop: left-edge blend */}
<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface/30 to-transparent hidden lg:block" />

{/* Mobile: bottom fade */}
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/60 to-transparent lg:hidden" />
```

Use CSS custom properties for the gradient direction so it's easy to switch:

```css
:root { --gradient-dir: to top; }
@media (min-width: 1024px) { :root { --gradient-dir: to right; } }

.hero-gradient {
  background: linear-gradient(var(--gradient-dir), rgba(0,0,0,0.8) 0%, transparent 100%);
}
```

### Content That Overflows

Always test with more content than the design shows. Add `min-h-screen` (not `h-screen`) so the section
grows if the text is longer than expected. Never use fixed heights on text containers.

### Navigation Overlap

If the site has a fixed/sticky navbar, account for it with top padding:

```tsx
className="pt-24 md:pt-36"  /* navbar is ~64px on mobile, ~80px on desktop */
```

Or use the modern approach with `scroll-padding-top` on the html element.

### Stats / Badges Below CTA

On mobile, stat rows should collapse from 4 columns to 2:

```tsx
<div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
  {stats.map(stat => (
    <div key={stat.label}>
      <span className="text-3xl sm:text-4xl font-bold">{stat.value}</span>
      <span className="text-xs uppercase tracking-wider">{stat.label}</span>
    </div>
  ))}
</div>
```

### Tag / Badge Rows

Tag rows that wrap nicely on desktop might cause horizontal overflow on mobile. Use `flex-wrap`:

```tsx
<div className="flex flex-wrap gap-2">
  {tags.map(tag => (
    <span key={tag} className="px-3 py-1 text-xs border rounded-full">{tag}</span>
  ))}
</div>
```

---

## Step 9 — Testing Checklist

After making changes, verify at these widths:

1. **320px** — Smallest common phone (iPhone SE). Nothing should overflow horizontally.
2. **375px** — Standard iPhone. Text should be readable without zooming.
3. **428px** — Larger phones (iPhone Pro Max). Layout should still feel intentional, not stretched.
4. **768px** — iPad portrait. This is where `md:` breakpoint kicks in. Two-column grids may start here.
5. **1024px** — iPad landscape / small laptop. This is typically where the split-screen hero activates (`lg:`).
6. **1440px** — Standard desktop. The primary design target.
7. **1920px+** — Large monitors. Content should be constrained by `max-w-screen-2xl` or similar, not stretching edge-to-edge.

For each width, check:
- No horizontal scrollbar
- Text is readable (not too small on mobile, not too wide on desktop)
- Images maintain aspect ratio and don't look distorted
- Buttons are tappable (44px minimum touch target)
- Spacing feels proportional (not too cramped on mobile, not too spacious on desktop)
- Navigation works (hamburger menu on mobile, full nav on desktop)

---

## Step 10 — Accessibility Considerations

Responsive design and accessibility go hand in hand:

- **Source order = visual order.** Screen readers follow DOM order. If you use CSS to reorder elements visually
  (`order`, `flex-direction: row-reverse`), make sure the DOM order still makes logical sense.
- **Touch targets.** All interactive elements need at least 44x44px tap area on mobile. Use padding, not just
  font size, to achieve this.
- **Reduced motion.** Wrap animations in `@media (prefers-reduced-motion: reduce)` and provide static fallbacks.
  In Tailwind: `motion-reduce:transition-none motion-reduce:animate-none`.
- **Focus visibility.** Ensure `:focus-visible` outlines are visible on all screen sizes.
  Don't let `overflow-hidden` on containers clip focus rings.
- **Zoom.** The layout should remain usable at 200% zoom (WCAG 1.4.4). This essentially tests your smallest
  breakpoint at double the viewport width.

---

## Quick-Reference: Common Responsive Patterns

| Pattern | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Split hero | Stack (text first) | Stack or side-by-side | Side-by-side 52/48 |
| Feature grid | 1 column | 2 columns | 3 columns |
| Nav | Hamburger menu | Hamburger or horizontal | Horizontal |
| CTA buttons | Full-width stacked | Side-by-side | Side-by-side |
| Stats row | 2x2 grid | 4 columns | 4 columns |
| Footer | Stacked sections | 2-col grid | 4-col grid |
| Card grid | 1 column | 2 columns | 3-4 columns |
| Section padding | py-12 px-4 | py-20 px-12 | py-28 px-20 |

---

## Illumia Solutions-Specific Notes

This section applies to the Illumia Solutions website (Next.js 14+ / Tailwind CSS v4 / Framer Motion).

### Design Tokens

- **Primary:** `#b31c33` (crimson red)
- **Surface:** `#fcf9f8` (warm off-white)
- **On-surface:** `#1c1b1b`
- **On-surface-variant:** `#5a4040`
- **Outline-variant:** `#e2bebd`
- **Headline font:** Newsreader (serif, variable `--font-newsreader`)
- **Body font:** Inter (sans-serif, variable `--font-sans`)

### Existing Responsive Component: `PageHero`

Located at `src/components/PageHero.tsx`. This is the primary split-screen hero used across 38+ service pages.
Current responsive behavior:
- `flex-col lg:flex-row` for stacking
- Text column: `lg:w-[52%]` with responsive padding
- Image column: `h-[55vw] md:h-[42vw] lg:h-auto lg:flex-1`
- Gradient overlays switch between mobile (bottom-to-top) and desktop (left-to-right)
- CTA buttons stack via `flex-col sm:flex-row`

When making other sections responsive on this site, match these conventions for consistency.

### Template Components

- `RichServicePageTemplate.tsx` — wraps `PageHero` with feature grid and closing CTA
- `ServicePageTemplate.tsx` — simpler variant
- Feature grids use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Closing CTA sections use `lg:grid-cols-2` with a vertical divider that hides on mobile

### Animation Considerations

The site uses Framer Motion (`motion/react`). Ensure responsive changes don't break animation triggers.
Common pattern used: `whileInView` with `viewport={{ once: true, margin: "-60px" }}`. The margin may need
adjustment if you change section padding significantly.
