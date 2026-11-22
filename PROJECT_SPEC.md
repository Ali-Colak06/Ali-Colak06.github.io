# PROJECT_SPEC.md

# Ali Çolak Portfolio — Project Specification

## 1. Document purpose

This document defines **what the portfolio website is, what V0 includes, and what is intentionally outside the current scope**.

It is a product/scope specification, not an implementation guide.

Technical architecture belongs in `ARCHITECTURE.md`.
Sanity-specific content modeling belongs in `SANITY.md`.
Exact website copy belongs in `CONTENT.md`.
Visual rules belong in `DESIGN.md`.
AI development behavior belongs in `AGENTS.md`.

If another document conflicts with this file about **product scope**, this file is the source of truth.

---

## 2. Project purpose

The primary purpose of V0 is to gain practical web development experience by building and maintaining a real personal portfolio website.

The project is intended to provide hands-on experience with topics such as:

- static site development,
- component-based page construction,
- content management,
- multilingual content,
- build and deployment workflows,
- maintainable project structure,
- small amounts of client-side interactivity when genuinely needed.

The website may later be used for:

- internship applications,
- job applications,
- showcasing completed engineering/software work,
- sharing a CV,
- presenting personal projects and technical interests.

However, these future uses are **not the main driver of V0 scope**.

V0 should be useful and complete on its own without pretending that unfinished portfolio content already exists.

---

## 3. Product principles

The following principles guide V0:

### 3.1 Keep the first version intentionally small

V0 should contain only content and functionality that already have a real purpose.

Features should not be added merely because they are common on portfolio websites.

### 3.2 Do not design around hypothetical content

Pages, schemas, and components should not be created for content that does not yet exist.

The clearest example is Projects: the Projects feature will be designed when the first real completed project is ready to publish.

### 3.3 The site must feel complete without Projects

The absence of a Projects section in V0 must not make the website look unfinished.

Home, About, Contact, global navigation, language switching, theme support, and the 404 experience should form a complete first version.

### 3.4 Prefer clear information over filler

Do not add sections such as Skills, Technologies, Certifications, Experience, Goals, or similar content merely to make pages longer.

If a section does not add meaningful information yet, it stays out of V0.

### 3.5 Separate content, design, and implementation decisions

- Product scope is defined here.
- Exact written content is defined in `CONTENT.md`.
- Visual design is defined in `DESIGN.md`.
- Technical implementation is defined in `ARCHITECTURE.md`.
- CMS/content model decisions are defined in `SANITY.md`.

---

## 4. V0 public sitemap

English is the default language.

```text
/
├── Home (EN)
├── about
├── contact
│
├── tr
│   ├── Home (TR)
│   ├── about
│   └── contact
│
└── 404
```

Canonical public routes:

```text
/             → English Home
/about        → English About
/contact      → English Contact

/tr           → Turkish Home
/tr/about     → Turkish About
/tr/contact   → Turkish Contact
```

There is no `/en` prefix.

A global 404 page is part of V0.

---

## 5. Languages

V0 supports:

- English
- Turkish

English is the default/root language.

The language switcher must keep the user on the equivalent page whenever that equivalent exists.

Examples:

```text
/about
→ TR
/tr/about
```

```text
/tr/contact
→ EN
/contact
```

Switching language must not unnecessarily send the user back to the Home page.

Automatic browser-language redirection is not part of V0.

---

## 6. V0 pages

## 6.1 Home

The Home page contains exactly three primary content sections:

```text
Home
├── Hero
├── Currently
└── Contact CTA
```

### Hero

Purpose:

- introduce Ali Çolak,
- communicate the current professional/educational identity,
- briefly explain the type of work and learning interests,
- provide a clear path to the About page.

The exact copy belongs in `CONTENT.md`.

### Currently

Purpose:

show concise, updateable information about what is currently being:

- studied,
- learned,
- worked on.

The three conceptual labels are:

- Studying
- Learning
- Working on

The exact wording and translated UI labels belong in `CONTENT.md` / the implementation's UI translation data as appropriate.

### Contact CTA

Purpose:

provide a lightweight transition from the Home page to the Contact page.

It includes:

- a short heading,
- a short description,
- a Contact action.

---

## 6.2 About

The V0 About page contains:

```text
About
├── Introduction
└── Education
```

### Introduction

Purpose:

provide a short personal/technical introduction focused on the current engineering learning journey.

V0 does not require a long biography.

### Education

Education includes both:

- Marmara University,
- OİB Mesleki ve Teknik Anadolu Lisesi.

The section presents institution, program/field, and date range.

Education is part of the actual current portfolio content and should not be replaced by generic placeholder entries.

---

## 6.3 Contact

The Contact page contains:

- a short introduction,
- Email,
- GitHub,
- LinkedIn.

There is **no contact form** in V0.

There is therefore no form submission flow, form backend, or form service in V0.

The page should make the existing contact methods easy to use without adding unnecessary interaction.

---

## 6.4 404

A 404 experience is part of V0.

Current product direction:

- one global 404 experience,
- simple rather than feature-heavy,
- understandable for both English and Turkish users,
- provides a clear way back to the site.

Exact wording and final visual treatment belong in `CONTENT.md` and `DESIGN.md`.

---

## 7. Global interface features

## 7.1 Navbar

The global navigation contains:

```text
Ali Çolak | Home | About | Contact | EN/TR | Light/Dark
```

Product-level behavior:

- Ali Çolak appears on the left side.
- The name may act as a Home link.
- Home, About, and Contact are visible in V0.
- Projects is not present in the V0 navbar.
- Language switching preserves the current page.
- A light/dark theme control is present.

Exact spacing, typography, icons, hover states, and responsive behavior belong in `DESIGN.md`.

---

## 7.2 Theme

The site supports:

- Light theme
- Dark theme

Expected user behavior:

```text
First visit
→ use the system preference

If the user changes the theme
→ remember the user's preference
```

The theme feature is intentionally small and should not require a large application-level state system.

Visual values for each theme belong in `DESIGN.md`.

---

## 7.3 Footer

The V0 footer contains the following information conceptually:

```text
Ali Çolak
Built with Astro & Sanity
© <current year> Ali Çolak
```

The year should represent the current year rather than being treated as permanent copy.

Social/contact links do not need to be duplicated in the footer in V0.

---

## 8. V0 content boundaries

V0 includes real content for:

- personal name,
- professional/educational title,
- approved profile image,
- Home Hero,
- Currently,
- Home Contact CTA,
- About Introduction,
- Education,
- Contact description,
- Email,
- GitHub,
- LinkedIn,
- English and Turkish equivalents where applicable.

The exact approved copy is maintained separately in `CONTENT.md`.

No AI coding agent should invent additional personal biography, achievements, skills, project claims, work history, or credentials to make the site appear fuller.

---

## 9. Profile image

**Temporary owner exception — 2026-11-22:** proceed toward publication with the
existing profile placeholder. The owner removed the real photograph. Real-photo
integration remains a future task and is not a prerequisite for the current
deployment milestones. This exception also applies to the image completion
criterion below; it does not authorize stock or AI-generated portraits.

A profile image is now part of V0.

This supersedes the earlier decision to omit a profile image.

Product-level requirements:

- use the approved real profile image,
- do not replace it with stock or AI-generated imagery,
- exact placement/presentation belongs in `DESIGN.md`,
- storage/content-model choice belongs in `SANITY.md` / `ARCHITECTURE.md`.

---

## 10. Explicitly out of scope for V0

The following are intentionally **not** part of V0:

- public Projects pages,
- Project detail pages,
- project CMS schema,
- unfinished project showcases,
- Skills section,
- Technologies section,
- Certifications section,
- Experience section,
- Goals section,
- Outside Engineering section,
- long biography,
- CV / Resume,
- Blog,
- authentication,
- user accounts,
- login/register,
- contact form,
- form service,
- analytics,
- custom domain,
- advanced preview/editing workflows,
- large client-side application functionality.

These are not forgotten requirements. They are deliberately deferred.

---

## 10. Projects policy

Projects are intentionally postponed.

Do not create:

```text
/projects
/projects/[slug]
/tr/projects
/tr/projects/[slug]
```

in V0.

Do not create placeholder Project cards or a speculative Project CMS model.

The Projects feature should be designed when the first real, completed project is ready to publish.

At that point, its actual content should determine:

- Project schema,
- list page structure,
- detail page structure,
- media requirements,
- metadata,
- rich-text needs,
- navigation placement,
- filtering or categorization needs, if any.

Likely future routes are:

```text
/projects
/projects/[slug]

/tr/projects
/tr/projects/[slug]
```

but these are future scope, not V0 implementation requirements.

---

## 11. Current project publication policy

V0 must not publish unfinished work simply to populate the portfolio.

Current direction:

- LogWise is not part of the initial public portfolio.
- Iron Man Arc Reactor Clock is not part of the initial public portfolio.
- Marmara Rover project publication is deferred until it is appropriate to present the work as a completed/ready portfolio item.

When projects become publishable, the Projects feature can be added deliberately.

---

## 12. Deferred features

The following may be reconsidered after V0:

### Near-term candidates

- Projects
- project detail pages
- CV / Resume link
- expanded SEO
- richer 404 content

### Optional future capabilities

- analytics,
- custom domain,
- richer content types,
- richer project media,
- advanced CMS preview,
- additional interactive components,
- another frontend UI framework only if a real requirement appears.

No deferred feature should be implemented preemptively.

---

## 13. V0 completion criteria

V0 can be considered product-complete when:

- Home exists in English and Turkish.
- About exists in English and Turkish.
- Contact exists in English and Turkish.
- The approved profile image is integrated according to the final design specification.
- The language switcher preserves equivalent page context.
- Light and dark themes are available.
- Navbar and footer are present and consistent.
- A usable 404 experience exists.
- All approved V0 content is shown correctly.
- No placeholder Projects section is exposed.
- No unfinished project is presented as completed work.
- The site feels intentional and complete despite its deliberately small scope.

Technical build/deployment criteria are defined in `ARCHITECTURE.md`.

---

## 14. Source-of-truth boundary

Use this file only for product definition and scope.

| Question | Source of truth |
|---|---|
| What are we building? | `PROJECT_SPEC.md` |
| How does it technically work? | `ARCHITECTURE.md` |
| How is CMS/content data modeled? | `SANITY.md` |
| What exact text appears on the site? | `CONTENT.md` |
| How should it look and behave visually? | `DESIGN.md` |
| How should AI coding agents work? | `AGENTS.md` |
| What is currently being implemented? | `IMPLEMENTATION_PLAN.md` |

---

## 15. Status

**Project phase — 2026-11-22:** V0 implemented and deployed.

The EN/TR public site is on GitHub Pages, Studio is hosted by Sanity, and
published content automatically rebuilds the site. The owner approved the
temporary profile placeholder and deferred the high-school education entry
(see CONTENT.md). Implementation and deployment records are in IMPLEMENTATION_PLAN.md.

This status does not imply complete WCAG conformance or authorization to expand
V0. Unresolved visual decisions and deferred product features remain subject to
the source-of-truth documents and owner approval.
