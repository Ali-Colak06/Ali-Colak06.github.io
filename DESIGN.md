# Ali Çolak Portfolio — Design Specification

## 1. Document status

### Owner-approved contrast correction — 2026-11-22

Use the existing secondary text token for desktop footer text and Education
dates. In light theme this changes #8B8E93 to #6B6E73 on #FBFAF9, improving
normal-text contrast from 3.15:1 to 4.91:1. The owner reviewed the before/after
preview and approved the darker option. Dark theme remains #A4A9B1 and mobile
already uses the secondary token. This supersedes earlier muted-footer/date
reference values and their pending contrast concern; no new palette is added.
This correction alone is not a claim of complete WCAG conformance.

### Owner refinements — 2026-09-29

- Keep the Navbar visible while scrolling: sticky at the viewport top, with an
  opaque theme surface and no added shadow. Preserve keyboard/anchor visibility.
- Home Contact CTA now uses the same filled primary appearance and interaction
  states as About Me in both themes; this supersedes the outlined Home CTA rule.
- Currently and Education section headings become subtitle-like: 22px mobile,
  26px desktop, weight 600, line-height 1.35, normal casing, -0.01em tracking and
  the existing secondary text color. This supersedes their 13px uppercase labels.

### Responsive implementation decision — 2026-09-23

The owner authorized using commonly adopted responsive values. For the global
shell, use a mobile-first 64rem (1024px at the default browser size) breakpoint:
below it retain the approved two-row Navbar and stacked footer; at and above it
use the desktop single-row Navbar and horizontal footer. This gives the Turkish
navigation and 44px controls enough room. No separate tablet composition is added.
Use a centered, fluid-width shell capped at the approved reference's 1240px,
with 24px horizontal gutters below the breakpoint and 72px above it.
This supersedes earlier shell breakpoint/container deferrals in this document.
The breakpoint follows a common convention (for example Tailwind's `lg`);
Tailwind is not a project dependency. Photo decisions remain deferred.

**Page-section implementation — 2026-09-29:** the owner's authorization to use
conventional responsive values also applies to page sections. Use the same
64rem transition for the approved mobile/desktop type scales, section spacing,
Currently columns, Education dates and Contact rows. Below it keep the mobile
composition with existing readable content-width caps; do not add a separate
tablet design. Photo presentation remains excluded from this decision.

Global CSS variables map the existing approved colors to the corresponding
reference elements; they do not introduce a new palette. No separate visited
link color is introduced in this milestone. Full contrast acceptance remains
pending; reference desktop muted text is retained for review.

**Status: desktop/light and mobile/light references plus dark palette A approved; remaining design decisions not fully locked**

This document records the current UI direction derived from the supplied `Portfolio UI v1` mockup and the design discussions.

It must distinguish between:

- **locked** decisions,
- **current direction**,
- **unresolved** decisions.

AI coding agents must not interpret a draft visual value as immutable unless it is marked locked.

---

## 2. Design goal

The portfolio should feel:

- clean,
- intentional,
- technical without becoming a developer cliché,
- modern without looking like a generic AI-generated landing page,
- restrained,
- readable,
- personal,
- engineering-oriented through precision and structure rather than decorative gimmicks.

The design should not need to visually shout "engineering".

The engineering character should come from:

- order,
- hierarchy,
- spacing,
- restrained typography,
- precise alignment,
- functional structure.

---

## 3. Anti-goals

Avoid default "AI portfolio" aesthetics such as:

- purple/blue gradient backgrounds used without purpose,
- glowing gradient orbs,
- excessive glassmorphism,
- every piece of content inside rounded cards,
- decorative bento grids used only because they are fashionable,
- fake terminal windows,
- Matrix/code backgrounds,
- neon cyberpunk styling,
- fake system-status labels,
- excessive pills/badges,
- large decorative tech icons with no information value,
- unnecessarily huge border radii,
- animation that exists only to look impressive.

---

## 4. Current visual direction

Current direction combines:

```text
minimal / editorial structure
+
engineering precision
+
restrained modern typography
```

The supplied UI v1 mockup is a **design reference**, not production code.

The mockup explicitly represents:

- static layout,
- type scale,
- neutral light palette,
- spacing rhythm,
- repeated Navbar/Footer behavior.

---

## 5. Current UI reference status

Reference:

```text
Portfolio UI v1
```

Local reference: `UI_demos/Portfolio UI v1.dc.html`.

**Owner approval — 2026-09-22:** use this reference as-is for its existing
desktop/light visual treatment. This approves its Instrument Sans typography,
desktop type scale, light colors, section spacing, dividers, Navbar/Footer
composition and button appearance. The two intended profile-image locations
are clarified in section 27.

This approval does not define missing mobile/tablet layouts, dark theme,
interaction states, 404 or detailed photo presentation. Reference copy and
sample contact values do not override `CONTENT.md`. Accessibility contrast
verification remains necessary; any resulting visual changes must be surfaced
for approval rather than silently applied.

Current reference covers:

- Home desktop/light,
- About desktop/light,
- Contact desktop/light.

It does **not** fully define:

- mobile,
- tablet,
- dark theme,
- hover/focus/active motion,
- Navbar breakpoint, spacing and tablet behavior (mobile two-row structure is approved in section 17),
- Turkish typography edge cases,
- accessibility contrast verification,
- reduced-motion behavior.

The desktop reference alone does not resolve these topics. Mobile/light layout
is approved separately below, and dark palette A is approved in section 9;
other missing topics remain unresolved.

### Approved mobile/light reference — 2026-09-22

Local reference: `UI_demos/Portfolio Mobile UI v1.html`.

The owner approved the three-page mobile preview (Home, About and Contact)
after reviewing the two-row navigation and proposed stacked content layouts.
Use the default **comfortable** presentation as the mobile/light baseline:
its typography, spacing, dividers, visible navigation states and component
appearance are approved. The optional compact spacing alternative was not
selected. Numeric values are recorded in section 28.

The reference is a design demo, not production code. Its in-place page/language
switching does not authorize a SPA or replace the agreed physical Astro routes.
The preview width and surrounding frame are presentation aids, not a fixed
production viewport. `CONTENT.md` remains the source of actual site copy.

This approval does not resolve photo placement or remove the required portrait.
Contact placeholders are not approved contact data. The moon only shows the
theme control's location. Dark colors are approved separately in section 9;
theme states are approved separately in section 31 and the 404 visual in section 36;
tablet layouts and breakpoints remain open. Accessibility
verification remains required.

---

## 6. Typography

### Current direction

Primary typeface:

```text
Instrument Sans
```

Current reference weights:

```text
400
500
600
```

Fallback direction:

```text
Helvetica Neue
Helvetica
Arial
sans-serif
```

**Status: approved from the desktop/light reference on 2026-09-22.**

---

## 7. Current type scale from UI v1

The current desktop reference uses approximately:

### Home Hero H1

```text
68px
line-height: 1.05
font-weight: 600
letter-spacing: -0.03em
```

### Internal page H1

```text
54px
line-height: 1.08
font-weight: 600
letter-spacing: -0.025em
```

### Home Contact CTA H2

```text
40px
font-weight: 600
letter-spacing: -0.02em
```

### Large body/intro copy

```text
21px
line-height: ~1.6–1.65
```

### Secondary body copy

```text
17–19px
```

### Navigation

```text
~16px
```

### Section eyebrow/label

```text
13px
font-weight: 600
uppercase
letter-spacing: 0.12em
```

The desktop-reference type scale is approved. The approved mobile scale is
recorded in section 28; tablet scaling and transitions between sizes remain open.

---

## 8. Light theme — current palette

Current UI v1 uses:

### Outer canvas

```text
#EFEEEC
```

### Page/surface

```text
#FBFAF9
```

### Primary text

```text
#17181A
```

### Strong secondary text

```text
#4E5155
```

### Secondary text

```text
#6B6E73
```

### Muted text

```text
#8B8E93
```

### Very muted language separator/reference text

```text
#B5B7BA
```

### Primary accent/link

```text
#2F6DB5
```

### Border

Current reference uses neutral light borders around:

```text
#DFDCD7
#E2E0DC
#EBE9E5
```

**Status: reference light colors approved. Token mapping and contrast checks are pending.**

---

## 9. Dark theme

**Status: palette A (neutral anthracite) and interaction reference approved; full implementation verification pending**

**Owner approval — 2026-09-22:** the owner selected **A — Nötr antrasit**
after comparing two small samples with identical content and layout.
The warm dark-gray alternative B was not selected.

Comparison reference: `UI_demos/Portfolio Dark Theme Options.html`.
Only sample A is approved. Use its palette for the site's dark theme:

| Role | Approved color |
| --- | --- |
| Page/surface | `#181A1D` |
| Primary text | `#F1F2F4` |
| Body/intro text | `#C5C8CD` |
| Secondary/muted text | `#A4A9B1` |
| Borders/dividers | `#35393F` |
| Blue accent | `#83B7EF` |
| Primary CTA fill | `#F1F2F4` |
| Primary CTA text | `#181A1D` |

The lighter blue shown in A is approved for dark-mode accent use. The existing
light-mode accent remains `#2F6DB5`.

This was a palette comparison, not a replacement page layout: its shortened
header/footer, omitted navigation and compact section padding do not override
the approved desktop/mobile compositions. The sun was a placement illustration;
it does not finalize the theme control's icon rendering or interaction states.

The later interaction approval in sections 30–31 defines secondary CTA,
hover/focus/pressed and theme-control states. Visited-link treatment and any
additional component-specific tokens not shown remain unresolved.
Do not invent extra surfaces or effects from this palette approval.

Contrast check: the four approved text/accent colors against `#181A1D` have
a minimum calculated ratio of approximately **7.38:1**. The primary CTA uses
the same primary-text/surface pair in reverse. This checks those color pairs,
not full-site accessibility, control boundaries or every interaction state.

Dark theme must preserve the same character as the light theme:

- restrained,
- high readability,
- minimal accent use,
- no unnecessary glowing effects,
- consistent border hierarchy.

---

## 10. Layout character

Current desktop direction:

- generous whitespace,
- strong left alignment,
- relatively narrow reading columns,
- large section padding,
- subtle horizontal dividers,
- flat surfaces rather than floating cards,
- content hierarchy through spacing and type rather than decoration.

---

## 11. Desktop reference width

Current UI reference frame:

```text
1240px
```

with major horizontal content padding approximately:

```text
72px
```

This is a reference composition width, not yet a finalized CSS max-width/breakpoint contract.

Responsive container behavior must be designed before implementation is considered visually complete.

---

## 12. Spacing rhythm — current reference

Examples from UI v1:

### Navbar

```text
24px vertical
72px horizontal
```

### Home Hero

```text
128px top
116px bottom
72px horizontal
```

### Currently section

```text
68px vertical
72px horizontal
```

### Contact CTA section

```text
84px vertical
72px horizontal
```

### Footer

```text
40–44px vertical
72px horizontal
```

These values establish a current rhythm:

```text
large section breathing room
+
compact internal component spacing
```

Reference desktop spacing and the mobile spacing in section 28 are approved.
Shared token mapping and tablet spacing remain to be defined.

---

## 13. Borders

Borders/dividers are a major part of the current visual language.

Current direction:

- thin 1px neutral dividers,
- horizontal separators between major page sections,
- thin top borders for repeated list/grid items,
- no heavy drop shadows.

Borders create structure without turning every section into a card.

---

## 14. Border radius

Current CTA/button reference:

```text
4px
```

Current design direction favors:

```text
small radius
```

rather than large rounded "soft SaaS" shapes.

**Status: 4px approved for the reference CTA/buttons and profile-image frames (section 27); treatment of any other components is not yet locked.**

---

## 15. Shadows

Current UI direction uses no meaningful drop-shadow system.

Default:

```text
No shadow unless a real visual/interaction need appears.
```

Do not introduce floating card shadows automatically.

---

## 16. Accent color usage

The blue accent is currently used selectively for:

- professional title,
- links/contact values.

The accent should remain restrained.

Do not turn entire sections or backgrounds blue merely because an accent color exists.

---

## 17. Navbar — desktop current direction

Current structure:

```text
Ali Çolak                         Home  About  Contact  |  EN / TR  moon
```

Characteristics:

- name on the left,
- navigation/actions on the right,
- clean horizontal alignment,
- active page indicated through stronger text color/weight,
- subtle divider before language/theme controls,
- bottom border separating Navbar from page content.

Current reference navigation gap:

```text
~32px
```

### Approved mobile structure — 2026-09-22

The owner approved the two-row mobile Navbar after reviewing an interactive
example:

- first row: Ali Çolak on the left; language and theme controls on the right,
- second row: Home, About and Contact links, always visible in the current language,
- no hamburger menu or collapsed navigation for this mobile structure.

Language switching preserves the equivalent current page, as required by
`PROJECT_SPEC.md`. The desktop Navbar remains the approved single-row reference.

The later three-page mobile/light approval also locks the visible Navbar
styling and spacing recorded in section 28, including links distributed across
the second row. Active page/language text uses stronger color and weight;
navigation hover uses an underline. Keyboard focus and working theme-control
states are approved in section 31. The breakpoint and tablet treatment remain open.

---

## 18. Home Hero

Current direction:

- large greeting as the primary hierarchy,
- professional title immediately below using accent color,
- description below,
- single primary CTA,
- approved profile image in the blank area to the right of the Hero introduction text on desktop (see section 27),
- no background illustration,
- no decorative hero art.

This section relies on typography and whitespace.

---

## 19. Primary CTA

Current light-theme Home Hero CTA direction:

```text
dark filled button
light text
small radius
```

Reference padding:

```text
15px 28px
```

No gradient.

No large pill radius.

In dark mode, use the approved light fill and dark text from section 9.

---

## 20. Secondary CTA

Current light-theme Contact CTA uses an outlined button:

```text
light surface
thin neutral border
dark text
small radius
```

This creates a visual hierarchy below the Hero primary CTA.

---

## 21. Currently section

Current desktop layout:

```text
3 equal columns
```

Each item uses:

- top divider,
- label,
- descriptive text,
- no surrounding card.

Concept:

```text
Studying       Learning        Working on
---------      ---------       ----------
content        content         content
```

Current reference gap:

```text
~44px
```

**Approved mobile layout — 2026-09-22:** a single column, in the existing
Studying / Learning / Working on order. Each item keeps its top divider,
label and description; no surrounding cards or horizontal carousel.

---

## 22. About page

Current direction:

### Introduction

- large `About` heading,
- approved profile image in the blank area to the right of the `About` heading on desktop (see section 27),
- readable text column around 660px reference width,
- generous top/bottom spacing.

### Education

- section eyebrow,
- list/table-like structure,
- institution and program on the left,
- years aligned to the right on desktop,
- horizontal dividers between entries,
- no education cards.

Current reference Education content width:

```text
~820px
```

**Approved mobile layout — 2026-09-22:** institution, program and date range
stack in that order, all left-aligned. Keep the entry dividers; no cards.

---

## 23. Contact page

Current direction:

- large `Contact` heading,
- short introduction,
- contact methods in a structured list,
- labels left,
- values/links right,
- thin separators,
- no contact form.

Current contact-list reference width:

```text
~520px
```

Mockup contact values are placeholders and are not part of the design specification.

**Approved mobile layout — 2026-09-22:** each contact label appears above its
value/link, all left-aligned, with thin separators between entries. Long real
values must wrap without horizontal overflow.

---

## 24. Footer

Current desktop direction:

Left:

```text
Ali Çolak
Built with Astro & Sanity
```

Right:

```text
© current year Ali Çolak
```

Footer uses muted typography with the name slightly stronger.

No social icons/links are repeated here in V0.

**Approved mobile layout — 2026-09-22:** name, build credit and copyright stack
in that order, all left-aligned. Copyright keeps the dynamic current year.

---

## 25. Content width

The current direction avoids using the full screen width for text paragraphs.

Long-form/intro text should remain within readable line lengths.

Do not stretch About introduction or Contact description across the entire viewport.

---

## 26. Cards

Current design direction is specifically **not card-heavy**.

Use:

- sections,
- rows,
- dividers,
- grid alignment

before reaching for cards.

Cards should only appear if future content, such as Projects, genuinely benefits from them.

---

## 27. Images

A real profile image is now part of V0.

**Current owner instruction — 2026-11-22:** continue using the temporary `AÇ`
placeholder on Home and About. The owner removed the real photograph. Preserve
the existing 240px mobile / 320px desktop square layout and 4px radius. The
placeholder uses the existing theme hover surface, divider border and secondary
text color. The following real-photo rules are retained for a future photo swap,
not as an instruction to restore the deleted file.

**Historical photo approval — 2026-09-29**

Use `public/images/profile.jpg` on Home and About. The owner approved:

- Desktop: 320 × 320px, right of the introduction, top-aligned with its heading.
- Below the existing 1024px breakpoint: 240 × 240px, left-aligned after the
  heading group (including the Home professional title), before the description.
- Centered square crop (`object-fit: cover`); 4px radius; no border or filter.
- Identical photo in both themes. Alternative text: `Ali Çolak` in both locales.
- Keep the original 1117 × 1142 JPEG (201819 bytes); crop only in CSS, not the file.

These decisions supersede the historical photo deferrals elsewhere in this
document. The shared layout uses existing 24px mobile spacing and desktop
26px/28px text spacing, with 48px minimum between text and portrait columns.

### Approved desktop locations — 2026-09-22

- **Home:** the blank area to the right of the Hero introduction text.
- **About:** the blank area to the right of the `About` heading, within the introduction section.

The profile image appears in **both** locations. The owner confirmed that these
blank areas in `UI_demos/Portfolio UI v1.dc.html` were intended as image
placeholders, even though the exported HTML does not explicitly mark them as
such. This clarification supersedes the earlier "no portrait image" Hero rule.

These decisions identify the intended desktop areas; they do not define exact
coordinates, dimensions or alignment against the surrounding text.

### Approved frame — 2026-09-22

In both Home and About, the profile image uses a **square (1:1) frame** with
**4px corner rounding**. This does not decide the crop/focal point or a border.

### Historical deferral — resolved by the 2026-09-29 approval above

**Discussion deferred by the owner — 2026-09-22:** keep the approved locations,
square frame, 4px radius and static storage decision. Return to the remaining
photo details later; they remain unresolved and must not be invented during
implementation. Continue other design decisions without requiring the photo now.

- mobile placement,
- crop,
- border treatment,
- visual size,
- interaction with surrounding typography,
- dark-theme treatment if relevant,
- accessibility treatment/alt behavior.

Storage is locked as a static repository asset under `public/`, as recorded in
`SANITY.md` / `ARCHITECTURE.md`. No CMS image field will be added.
Do not infer the remaining presentation choices from these approved decisions.

Do not substitute:

- stock photography,
- AI-generated portraits,
- unrelated decorative imagery.

Project imagery remains deferred until Projects is implemented.

---

## 28. Responsive design

**Status: mobile/light baseline approved; breakpoints, tablet and desktop container behavior unresolved**

### Approved mobile baseline — 2026-09-22

The accepted demo opens at 390px and was checked at 320px, 390px and 430px in
EN and TR. These are preview/check widths, not responsive breakpoint decisions.

| Element | Approved mobile reference |
| --- | --- |
| Font | Instrument Sans; weights 400, 500 and 600 |
| Page gutters | 24px on each side |
| Standard sections | 48px top and bottom |
| Home Hero | 60px top, 56px bottom |
| Home H1 | 44px / 1.1, weight 600, letter spacing -1.1px; reference text max-width 310px |
| About / Contact H1 | 40px / 1.1, weight 600, letter spacing -1.1px |
| Professional title | 18px / 1.5; 14px below H1; blue accent |
| Intro paragraphs | 18px / 1.7; 24px below heading/title group |
| Home Contact CTA heading | 32px / 1.15, weight 600, letter spacing -0.6px |
| CTA description | 17px / 1.65; 18px below heading |
| Section labels | 13px / 1.5, weight 600, uppercase, 1.5px letter spacing; 26px bottom gap |
| Currently / Education items | 22px vertical padding; title 18px / 1.45 at weight 600; body 17px / 1.65 with 8px top gap |
| Education dates | 15px; 12px below program |
| Contact list | 32px above list; rows 22px top/bottom; label 18px at weight 600; value 17px with 6px top gap |
| CTA buttons | 16px / 1.4, weight 500; 12px vertical and 24px horizontal padding; minimum height 48px; radius 4px; 28px top gap |
| Navbar | 8px top padding; first row minimum height 56px; second row 8px bottom padding; links distributed across width |
| Navbar type | Name 19px at weight 600; links 16px / 1.4; EN/TR 14px |
| Navbar targets | Links minimum height 44px; language buttons minimum 44px by 44px |
| Footer | 32px top, 36px bottom; name 16px at weight 600; supporting text 14px / 1.6; credit gap 4px; copyright gap 20px |

Mobile reference colors: surface `#FBFAF9`, primary text `#17181A`, intro text
`#4E5155`, secondary text (including section labels, dates and footer) `#6B6E73`,
accent `#2F6DB5`, dividers `#E2E0DC`, outlined CTA border `#DFDCD7`, decorative
language separator `#B5B7BA`. Preserve the filled primary and outlined secondary
CTA hierarchy. The last Currently item has no bottom padding; the final
Education entry retains 22px bottom padding and a bottom divider.

### Still to define

- **Discussion deferred by the owner — 2026-09-22:** tablet layout and
  mobile/desktop transition rules (including breakpoints) will be revisited
  later. Continue with the 404 proposal now; do not infer these responsive rules
  from a preview width or implement them as final decisions.
- desktop container behavior and maximum width,
- tablet layout, type and spacing,
- breakpoints and transitions between approved mobile and desktop layouts,
- photo dimensions and mobile placement (deferred in section 27),
- remaining accessibility verification and any interaction states not covered in section 31.

The mobile demo's 38px-wide moon placeholder is superseded by the approved
44px minimum theme-control target and state design in section 31.

Do not simply allow desktop CSS to wrap accidentally.

---

## 29. Mobile design principle

Mobile should be an intentional adaptation of the same design language, not a separate style.

Preserve:

- typography hierarchy,
- dividers,
- restrained palette,
- reading comfort,
- clear navigation.

Avoid turning every desktop row into a generic rounded mobile card unless deliberately designed.

---

## 30. Motion

**Status: interaction color transitions approved — 2026-09-22**

Reference: `UI_demos/Portfolio Interaction UI v1.html`.

Use **150ms ease** transitions on links/buttons for `color`,
`background-color` and `border-color`. Focus outlines appear immediately.
The owner's approval selects the default blue-focus, 150ms configuration;
the neutral-focus and no-transition alternatives were not selected.

When `prefers-reduced-motion: reduce` applies, disable these transitions.
The theme surface changes directly; no page fade, wipe or animated layout
transition is introduced. Existing control color transitions remain as shown.

Do not add:

- scroll-jacking,
- large entrance sequences,
- parallax for decoration,
- constant floating animation,
- animated gradients.

---

## 31. Interaction states

**Status: shown light/dark interactions approved — 2026-09-22**

Reference: `UI_demos/Portfolio Interaction UI v1.html`.

- Keyboard focus: `:focus-visible`, 2px solid blue outline, 4px offset.
  Use `#2F6DB5` in light mode and `#83B7EF` in dark mode.
- Navigation hover: primary text color and a 1px underline with 5px offset.
  Current-page text uses primary color and weight 600, with `aria-current="page"`.
- Text-link hover: keep the blue accent and add the same underline.
- Primary CTA: retain its theme-specific foreground/background pairing;
  hover and pressed fill/border values are listed below.
- Secondary CTA: transparent at rest, primary text color, 1px outline.
  On hover, use the subtle fill below and primary-text-colored border.
- Language/theme controls: minimum 44px by 44px target, 4px radius;
  subtle fill on hover/press. Active language uses primary color and weight 600.
- Theme icon: moon in light mode (action: switch to dark), sun in dark mode
  (action: switch to light), with a localized accessible action label.
  Retain the small, unfilled glyph appearance shown in the reference.

| State token | Light | Dark |
| --- | --- | --- |
| Primary CTA hover fill/border | `#35393F` | `#D9DEE5` |
| Primary CTA pressed fill/border | `#4E5155` | `#C5C8CD` |
| Secondary CTA resting border | `#DFDCD7` | `#767D87` |
| Secondary CTA / control hover fill | `#EFEEEC` | `#262A30` |
| Secondary CTA / control pressed fill | `#E2E0DC` | `#35393F` |
| Secondary CTA pressed border | `#4E5155` | `#C5C8CD` |

The name remains a Home link. Language switching preserves the current page.
The preview's component labels, selected-page readout, side-by-side CTA samples
and local page switching are demonstration aids, not public-page content or
production routing. Site theme initialization/persistence still follows
`PROJECT_SPEC.md`; the preview does not replace that behavior.

Visited-link differentiation was not demonstrated and remains unresolved.
Final accessibility/contrast checks must cover these states in the actual site.

Keyboard focus must not be removed merely for visual cleanliness.

---

## 32. Accessibility visual rules

Final implementation should preserve:

- readable contrast,
- visible focus,
- sufficient text sizing,
- reasonable line length,
- non-color-only active state where needed,
- touch-friendly controls.

The approved dark text/accent pairs were checked as recorded in section 9.
Full contrast verification remains pending for the light palette, remaining
component states and the eventual implementation.

---

## 33. Design source-of-truth policy

When design implementation begins:

- `DESIGN.md` controls visual decisions.
- `CONTENT.md` controls copy.
- `PROJECT_SPEC.md` controls scope.
- `ARCHITECTURE.md` controls implementation constraints.

Coding agents must not redesign the site based on their own aesthetic defaults.

If a design detail is missing, it should be surfaced as an unresolved decision rather than silently invented when the choice materially affects the visual identity.

---

## 34. Current unresolved design checklist

**Discussion deferred by the owner — 2026-09-23:** postpone the remaining
color/readability review, visited-link discussion and shared CSS token mapping
for now. These checks and decisions remain pending; this does not approve
unresolved values or remove the final accessibility checks. Earlier tablet,
breakpoint and photo deferrals remain in effect.

Before `DESIGN.md` can be considered locked, decide:

- light-token mapping and contrast verification for the approved palette,
- remaining token mapping and contrast verification for the approved dark palette and interaction states,
- tablet typography and transitions between approved desktop/mobile scales,
- responsive breakpoints/container behavior,
- Navbar breakpoint and tablet treatment (mobile layout and spacing approved),
- profile image size, precise alignment, crop and mobile/responsive treatment (desktop locations are locked in section 27),
- visited-link treatment and any states not shown in the approved interaction reference,
- radius treatment beyond the approved 4px CTA/buttons, language/theme controls and profile-image frames.

---

## 35. Status summary

```text
Overall visual direction        → established
Desktop light mockup            → approved reference
Mobile light mockup             → approved reference; default comfortable spacing
Typography                     → desktop/mobile references approved; tablet scaling unresolved
Light palette                   → approved; contrast verification pending
Section layout                  → desktop/mobile references approved; tablet layout unresolved
Profile image                   → desktop locations, 1:1 frame and 4px radius locked; other presentation details unresolved
Dark theme                      → neutral anthracite palette A and shown interaction states approved
Responsive system               → mobile baseline approved; breakpoints and tablet/container rules unresolved
Mobile Navbar                   → two-row layout and visible styling approved; breakpoint/tablet unresolved
Interaction states              → shown light/dark states approved; visited links and final verification pending
Motion                          → 150ms color transitions approved; disabled for reduced motion
Global 404                      → language-selectable visual approved; English on initial load
Final design system             → not locked yet
```

## 36. Global 404 — language selection

**Owner decision — 2026-09-22:** show EN/TR controls and display only the
selected language's 404 heading, description and Home action. Do not show
both language blocks simultaneously. Use the exact copy from `CONTENT.md`.

Language switching keeps the user in the same global 404 experience and
updates its language metadata. The Home action targets `/` for EN and `/tr`
for TR. This does not introduce a separate locale-specific 404 route.

### Approved visual — 2026-09-22

The owner approved the revised language-selectable, left-aligned 404 preview.
Reference: `UI_demos/Portfolio 404 UI v1.html`.

- Simplified header: Ali Çolak on the left; EN/TR and theme controls on the
  right. No Home/About/Contact navigation row on this error page.
- One visible heading, description and filled Home CTA in the selected language.
- Header name also links to the selected language's Home page.
- Preserve the approved light palette, dark palette A and blue keyboard focus.
- Header padding: 12px vertical, 24px horizontal; controls at least 44px square.
- Content padding: 48px vertical, 24px horizontal; left-aligned.
- Heading: 32px / 1.2, weight 600, letter spacing -0.7px.
- Description: 18px / 1.7, with 18px top gap.
- CTA: 24px top gap, 12px by 24px padding, 48px minimum height, 4px radius,
  16px / 1.4 at weight 500; approved primary-button theme/hover/pressed colors.
- Stacked, left-aligned footer: name, build credit and current-year copyright;
  32px top / 36px bottom / 24px horizontal padding, as in the mobile reference.

The 430px demo width is a preview size, not a production max-width or breakpoint.
The centered alternative was not selected. The preview-only destination output
is not part of the website. Keep one global 404 output; production links must
navigate normally rather than showing that output.

### Approved initial language — 2026-09-22

The global 404 initially opens in **English**, with EN selected, English copy,
`lang="en"` and a Home destination of `/`. The user can explicitly select TR
to show Turkish copy, update language metadata and target `/tr` instead.
Do not automatically choose Turkish from the browser language or missing URL.
Restored conversation-preview state is not a production initialization rule.
