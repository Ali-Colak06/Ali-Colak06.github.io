# Ali Çolak Portfolio — Technical Architecture

## 1. Document purpose

This document defines **how the portfolio is technically structured and how its main systems interact**.

It is the source of truth for:

- rendering model,
- framework and runtime choices,
- routing organization,
- i18n implementation,
- repository organization,
- build and deployment flow,
- GitHub Pages behavior,
- Sanity-to-site rebuild flow,
- theme implementation constraints.

Product scope belongs in `PROJECT_SPEC.md`.
CMS schema details belong in `SANITY.md`.
Exact copy belongs in `CONTENT.md`.
Visual design belongs in `DESIGN.md`.

If another document conflicts with this file about technical architecture, this file wins.

---

## 2. Architecture summary

V0 uses:

```text
Astro
+ TypeScript
+ Sanity
+ Static MPA / SSG
+ GitHub
+ GitHub Actions
+ GitHub Pages
+ English / Turkish
```

Core principle:

```text
Static by default
Server only if needed
JavaScript only if needed
Client framework only if needed
External backend only if needed
Content in Sanity
UI/configuration in code
```

---

## 3. Rendering model

The website is a **static multi-page application generated with SSG**.

It is not a SPA.

Target model:

```text
Source code + Sanity content
            ↓
         Astro build
            ↓
     Static HTML/CSS/JS
            ↓
       GitHub Pages
            ↓
          Visitor
```

V0 does not use:

- SSR,
- a continuously running Node server,
- a custom API server,
- a client-side router,
- SPA runtime,
- application authentication,
- a dedicated application database.

---

## 4. Frontend stack

### Framework

Astro.

### Language

TypeScript.

### Browser output

Primarily:

- HTML,
- CSS,
- minimal JavaScript where necessary.

### Client framework policy

V0 starts without:

- React,
- Vue,
- Svelte,
- React Router,
- Redux,
- Zustand,
- similar application-level client frameworks/state tools.

A client UI framework may only be introduced later if a real interactive requirement justifies it.

Do not add one preemptively.

---

## 5. Interactive behavior

Known client-side behavior is intentionally small.

V0 requires client-side behavior for features such as:

- theme switching,
- theme preference persistence,
- any small progressive enhancement that cannot be handled purely by HTML/CSS.

These features should use the minimum browser JavaScript needed.

No global client application runtime is required.

---

## 6. Hosting

The public site is hosted on **GitHub Pages**.

Repository model:

```text
GitHub Pages User Site
```

Repository naming model:

```text
<github-username>.github.io
```

Public site:

```text
https://<github-username>.github.io/
```

No `/portfolio/` base path is expected.

A custom domain is not part of V0.

---

## 7. Repository model

Astro and Sanity Studio live in the **same Git repository**.

The repository is not split into separate frontend and CMS repositories.

High-level structure:

```text
<username>.github.io/
├── Astro application at repository root
└── studio/
    └── standalone Sanity Studio application
```

The repository contains two Node projects:

```text
/package.json
/studio/package.json
```

They are intentionally independent.

V0 does not require:

- npm workspaces,
- pnpm workspaces,
- Turborepo,
- Nx,
- Lerna.

If shared packages or a significantly larger repository structure appear later, workspace tooling can be reconsidered.

---

## 8. Proposed repository structure

Target structure:

```text
<username>.github.io/
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   └── tr/
│   │       ├── index.astro
│   │       ├── about.astro
│   │       └── contact.astro
│   │
│   ├── views/
│   │   ├── HomePage.astro
│   │   ├── AboutPage.astro
│   │   └── ContactPage.astro
│   │
│   ├── components/
│   │   ├── global/
│   │   ├── home/
│   │   └── about/
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── ui.ts
│   │   ├── routes.ts
│   │   └── localize.ts
│   │
│   ├── lib/
│   │   └── sanity/
│   │       ├── queries.ts
│   │       ├── content.ts
│   │       └── types.ts
│   │
│   └── styles/
│       └── global.css
│
├── studio/
│   ├── schemaTypes/
│   │   ├── documents/
│   │   ├── objects/
│   │   └── index.ts
│   ├── structure/
│   │   └── index.ts
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   ├── package.json
│   └── tsconfig.json
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

This is a target organization, not a requirement to create empty folders before they are needed.

---

## 9. Astro source responsibilities

### `src/pages/`

Responsibility:

```text
Which URL exists?
```

Route files should stay thin.

They should not become large duplicated page implementations.

### `src/views/`

Responsibility:

```text
Shared page implementation
```

English and Turkish routes can point to the same view implementation.

Conceptual model:

```text
src/pages/about.astro ───────┐
                             ├── AboutPage.astro
src/pages/tr/about.astro ────┘
```

### `src/components/`

Responsibility:

reusable UI sections/components.

Initial grouping may include:

```text
global/
home/
about/
```

Do not create abstract directory layers without a concrete need.

### `src/layouts/`

Responsibility:

shared page shell, including common document structure and global layout.

Expected V0:

```text
BaseLayout.astro
```

### `src/i18n/`

Responsibility:

- supported locale configuration,
- UI translation data,
- equivalent-route generation,
- localized-value selection.

### `src/lib/sanity/`

Responsibility:

- GROQ queries,
- content access functions,
- result types.

UI components should not contain long embedded data-access logic when that logic can live here.

---

## 10. Routing and i18n

Supported locales:

```text
en
tr
```

Default locale:

```text
en
```

English has no locale prefix.

Routes:

```text
/             → EN Home
/about        → EN About
/contact      → EN Contact

/tr           → TR Home
/tr/about     → TR About
/tr/contact   → TR Contact
```

Translated slugs are not part of V0.

Examples not used:

```text
/tr/hakkimda
/tr/iletisim
```

---

## 11. Astro i18n strategy

Use Astro's built-in i18n support.

The intended approach is:

- `en` as default locale,
- no prefix for default locale,
- `tr` prefixed with `/tr`,
- physical route files for the small V0 route set,
- shared view/page implementations,
- locale-aware shared layouts/components.

Locale resolution should use Astro's locale context rather than ad-hoc pathname parsing where possible.

Primary locale concept:

```text
Astro.currentLocale
```

---

## 12. UI translations

Small fixed interface text belongs in code, not Sanity.

Examples:

- navigation labels,
- button labels,
- `Studying`,
- `Learning`,
- `Working on`,
- `Present / Günümüz`,
- fixed footer text,
- small interface headings.

A lightweight TypeScript translation map is sufficient.

V0 does not need:

- i18next,
- react-i18next,
- another large localization library.

---

## 13. Sanity localized-value handling

Sanity editorial content uses field-level localization.

Astro may receive localized values in the conceptual form:

```ts
{
  en: "...",
  tr: "..."
}
```

A central localization helper should select the active value.

Do not repeat locale branching throughout UI components.

Concept:

```text
localized Sanity value
        +
active locale
        ↓
localized string/text
```

For V0, queries may retrieve both `en` and `tr` values because the data volume is very small.

Locale-specific query projection can be reconsidered if content scale grows.

---

## 14. Missing localization policy

Important V0 localized content should be validated in both languages.

Do not silently use English editorial content as a fallback on Turkish pages.

Expected state:

```text
required EN content ✅
required TR content ✅
```

If content is missing, fix the source content rather than hiding the issue with an implicit fallback.

---

## 15. Language switcher behavior

The language switcher changes only the language, preserving page context.

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

The route mapping should be centralized rather than implemented independently in each page.

Automatic browser-language redirect is not part of V0.

---

## 16. Theme architecture

V0 supports light and dark themes.

Behavior:

```text
First visit
→ system preference

User manually changes theme
→ user preference takes priority
→ preference may be persisted in the browser
```

This should remain a small client-side feature.

Do not introduce a UI framework or application state library for theme switching.

Exact color tokens and visual behavior belong in `DESIGN.md`.

---

## 17. Sanity frontend integration

The Astro application reads content from Sanity at build time.

Preferred integration:

```text
@sanity/astro
```

V0 should use the integration-provided Sanity client rather than creating unnecessary client wrappers.

A custom/secondary client can be added later only if a feature such as authenticated preview requires it.

Content fetch direction:

```text
Astro build
    ↓
Sanity Content Lake
    ↓
published content
    ↓
static pages
```

---

## 18. Sanity dataset access from Astro

V0 dataset:

```text
production
```

Visibility:

```text
public read
```

Astro build does not require a Sanity read token for published content.

Content fetch configuration direction:

```text
useCdn: false
```

Reason:

a build triggered immediately after publishing should read the newest source content rather than rely on CDN cache freshness.

Browser visitors do not query Sanity directly.

---

## 19. Sanity Studio architecture

Sanity Studio is a separate application inside:

```text
/studio
```

It is **not embedded in the public Astro site**.

Do not expose it as:

```text
/studio
/admin
```

on the GitHub Pages portfolio site.

Studio source code remains in the same repository for maintainability.

Studio deployment target:

```text
Sanity managed Studio hosting
*.sanity.studio
```

Studio is an editing interface; the Content Lake is the actual hosted content backend.

---

## 20. Studio deployment

V0 Studio code/config deployment is manual.

Concept:

```text
Studio schema/config changes
        ↓
manual Sanity Studio deploy
```

Do not create a separate Studio CI/CD workflow in V0 unless it becomes useful.

Publishing content does **not** redeploy Studio.

---

## 21. Public site deployment

The public Astro site is built and deployed by GitHub Actions.

Primary workflow:

```text
.github/workflows/deploy-pages.yml
```

The same public-site deployment workflow should support:

- code changes pushed to the deployment branch,
- Sanity-triggered content rebuilds,
- manual workflow execution.

Avoid duplicating equivalent deployment logic across multiple workflows.

---

## 22. Code-change deployment flow

Concept:

```text
Local development
      ↓
Git commit / push
      ↓
GitHub repository
      ↓
GitHub Actions
      ↓
Astro build
      ↓
GitHub Pages deploy
```

A failed build must not replace the current deployed site with a broken output.

---

## 23. Sanity publish-to-deploy flow

Current V0 architecture:

```text
Sanity published content changes
            ↓
       Sanity Webhook
            ↓
GitHub workflow_dispatch API
            ↓
    deploy-pages workflow
            ↓
        Astro build
            ↓
    GitHub Pages deploy
```

No intermediate custom backend/Worker is required in V0.

---

## 24. Webhook scope

The Sanity webhook should only trigger site rebuilds for document types that affect the public site.

V0 types:

```text
siteSettings
homePage
aboutPage
contactPage
```

When Projects is implemented later, relevant Project types can be added.

Draft edits should not trigger public rebuilds.

Published create/update/delete state changes should result in a rebuild so publish and unpublish operations are reflected in the static site.

---

## 25. GitHub workflow dispatch authorization

The Sanity webhook requires a GitHub credential capable of dispatching the target workflow.

The credential should follow least privilege:

- scoped only to the portfolio repository,
- only the permission required for workflow dispatch,
- never committed to the repository,
- stored as a secret in the appropriate service configuration.

Do not store secrets in:

- source code,
- Markdown documentation,
- public environment files,
- frontend JavaScript.

---

## 26. Full rebuild policy

V0 performs a full Astro rebuild for relevant published content changes.

This is acceptable because the site is small.

Do not add incremental build complexity before site size or deployment time creates a real need.

---

## 27. Concurrency

If multiple content publications happen quickly, redundant deployment runs may be replaced/cancelled so the latest state wins.

This can be handled using GitHub Actions concurrency when the deployment workflow is implemented.

The objective is not to build every intermediate content state; the objective is to deploy the newest valid state.

---

## 28. Manual deploy

The Pages deployment workflow should remain manually runnable through GitHub Actions.

This provides a recovery path when:

- a webhook fails,
- content needs a rebuild,
- deployment behavior is being tested.

---

## 29. Preview and draft architecture

V0 does not include:

- authenticated draft preview,
- preview URLs,
- Presentation Tool workflow,
- Visual Editing,
- a draft-aware Astro client.

Studio remains the place where drafts are edited.

The public site renders published content only.

Preview can be added later if rich project content creates a real editorial need.

---

## 30. Browser-to-Sanity access

Public visitors should not need to query Sanity from their browser.

Normal production flow:

```text
Sanity
   ↓
build time
   ↓
static HTML
   ↓
GitHub Pages
   ↓
visitor
```

This keeps the runtime site independent of live Sanity availability for ordinary page rendering.

---

## 31. 404 architecture

V0 uses one global 404 output suitable for GitHub Pages.

Do not create unnecessary locale-specific 404 routing complexity.

The 404 can communicate in both languages and provide a way back to the site.

Exact copy and presentation belong in `CONTENT.md` and `DESIGN.md`.

---

## 32. Environment and secrets

Configuration values may include non-secret public identifiers and secret credentials.

Rules:

- secrets never go into tracked Markdown files,
- secrets never go into client-exposed code,
- `.env.example` may contain variable names but not secret values,
- deployment secrets belong in the relevant platform secret store.

Exact environment variables should be documented when implementation begins.

---

## 33. Build-time content failure behavior

A build that cannot obtain required content or otherwise fails validation should fail clearly.

It should not silently deploy incomplete pages.

The deployment step should only execute after a successful build.

---

## 34. Dependency policy

Do not add a dependency because it is common or convenient in other projects.

Before adding a dependency, ask:

```text
Is there a real requirement?
↓
Can Astro / browser APIs / current stack handle it?
↓
If not, choose the smallest justified dependency.
```

Examples of things that should not be added without a new requirement:

- React,
- state libraries,
- router libraries,
- large i18n libraries,
- monorepo tooling,
- CSS/UI frameworks,
- custom backend frameworks.

---

## 35. Profile image asset

A profile image is now required in V0.

**Storage decision locked by the owner — 2026-09-22:** use a static repository asset.

```text
public/
└── approved profile image asset
```

The owner will replace the image file in the project to update the photo.
Changes follow the normal code build/deployment flow. No Sanity image field or
CMS upload/crop workflow is needed for the V0 profile photo.
Current owner instruction — 2026-11-22: continue with the temporary CSS placeholder
in the shared ProfileImage component. The owner removed the real photograph;
`public/images/profile.jpg` is no longer present or required for builds.
Static repository storage remains the architecture for any future approved photo.
No image-processing dependency is needed for the placeholder.

Visual placement/crop rules are owned by `DESIGN.md`.

---

## 36. Deferred architecture

Not part of V0 architecture:

- Project routes/schema,
- custom domain configuration,
- analytics integration,
- authenticated users,
- custom backend,
- application database,
- advanced preview,
- Studio CI deployment,
- large client framework,
- SSR.

These may be reconsidered only when a real product requirement appears.

---

## 36. Architecture source-of-truth boundary

| Question | Source |
|---|---|
| Product scope | `PROJECT_SPEC.md` |
| Technical architecture | `ARCHITECTURE.md` |
| Sanity schema/content model | `SANITY.md` |
| Exact copy | `CONTENT.md` |
| Visual specification | `DESIGN.md` |
| AI coding rules | `AGENTS.md` |
| Active milestones | `IMPLEMENTATION_PLAN.md` |
