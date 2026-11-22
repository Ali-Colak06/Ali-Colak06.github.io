# Ali Çolak Portfolio — Sanity CMS Specification

## 1. Document purpose

This document is the source of truth for the portfolio's Sanity CMS model.

It defines:

- Sanity's role,
- dataset policy,
- Studio placement and deployment,
- content ownership,
- field-level localization,
- singleton documents,
- reusable object types,
- validation,
- frontend content access expectations,
- draft/publish policy,
- deferred CMS features.

Product scope belongs in `PROJECT_SPEC.md`.
General technical architecture belongs in `ARCHITECTURE.md`.
Exact copy belongs in `CONTENT.md`.

---

## 2. Sanity's role

Sanity is used as a **headless CMS for editorial/public portfolio content**.

Primary flow:

```text
Sanity Studio
      ↓
Sanity Content Lake
      ↓
Astro reads content at build time
      ↓
Static HTML
      ↓
GitHub Pages
```

Core rule:

> Sanity manages content; it does not manage the site's application structure or interface logic.

---

## 3. Sanity is not the application backend

V0 does not use Sanity as a substitute for:

- user authentication,
- user accounts,
- application sessions,
- a contact-form backend,
- custom business APIs,
- an application database.

It is the portfolio content source.

---

## 4. Dataset

V0 uses one dataset:

```text
production
```

No separate `development` dataset is required initially.

Reason:

- V0 content volume is very small,
- schema surface is limited,
- introducing dataset synchronization would add workflow complexity without current value.

A development/staging dataset can be added later if schema migration/testing needs justify it.

---

## 5. Dataset visibility

V0 uses:

```text
production
→ public read
```

Meaning:

- published public content can be read without an Astro build read token,
- drafts still require authorization,
- write operations still require authorized Sanity users.

Important rule:

> Never publish private or secret information into the public dataset.

A field does not become private simply because the frontend does not render it.

---

## 6. Secrets

Do not store secrets in Sanity Studio configuration that is shipped to the browser.

Do not store:

- API secrets,
- GitHub PAT values,
- private credentials,
- passwords

inside schema files, Studio config intended for the client, or public documents.

---

## 7. Studio location

Sanity Studio source code lives in the same Git repository as the Astro site:

```text
/studio
```

Studio is a standalone application.

It is not embedded in Astro.

---

## 8. Studio hosting

Studio deployment target:

```text
Sanity managed Studio hosting
*.sanity.studio
```

The public portfolio does not expose Studio at:

```text
/admin
/studio
```

GitHub Pages only hosts the public Astro site.

---

## 9. Studio deployment policy

V0 Studio deployment is manual when schema/configuration changes.

Content editing/publishing does not require redeploying Studio.

Concept:

```text
Schema/config code change
→ Studio deploy

Content edit/publish
→ Content Lake update
→ public-site rebuild
```

Studio CI/CD may be added later if Studio code changes become frequent enough to justify it.

---

## 10. Studio access model

Knowing the Studio URL must not be treated as a security boundary.

Project/content editing depends on Sanity authentication and project permissions.

Only authorized Sanity users should have write access.

---

## 11. Content ownership

## 11.1 Content stored in Sanity

Sanity owns editable editorial/public content such as:

- name,
- professional title,
- email,
- GitHub URL,
- LinkedIn URL,
- Hero description,
- Currently values,
- Contact CTA description,
- About introduction,
- Education entries,
- Contact description,
- English/Turkish editorial equivalents,
- future Projects content when Projects is implemented.

---

## 11.2 Content kept in code/i18n

Sanity does not own fixed interface/application text such as:

- Navbar labels,
- button labels,
- `Studying`,
- `Learning`,
- `Working on`,
- route definitions,
- route language behavior,
- theme logic,
- Footer fixed text,
- technical configuration,
- Astro configuration,
- Sanity integration configuration,
- environment variable definitions.

---

## 12. Localization strategy

Use **field-level localization**.

Do not create separate English and Turkish documents for the same page.

Reusable localized types:

```text
localizedString
├── en : string
└── tr : string
```

```text
localizedText
├── en : text
└── tr : text
```

This keeps translations adjacent in Studio.

---

## 13. `localizedString`

Use for short single-line values.

Conceptual schema:

```text
localizedString
├── en : string
└── tr : string
```

Examples:

- professional title,
- institution name,
- program name.

Important required localized values should require both languages.

---

## 14. `localizedText`

Use for paragraph-like or longer plain text.

Conceptual schema:

```text
localizedText
├── en : text
└── tr : text
```

Examples:

- Hero description,
- Currently content,
- About introduction,
- Contact CTA description,
- Contact page description.

---

## 15. Portable Text policy

Portable Text is **not used in V0**.

Current content is simple enough for:

- string,
- text.

Do not introduce rich-text schema merely for future possibility.

Portable Text can be reconsidered when Projects exist and real project case-study content demonstrates a need for:

- rich paragraphs,
- links,
- headings,
- inline formatting,
- embedded media.

---

## 16. V0 Sanity type map

```text
SANITY V0

Singleton documents
├── siteSettings
├── homePage
├── aboutPage
└── contactPage

Reusable object types
├── localizedString
├── localizedText
└── educationEntry
```

Projects is not part of the V0 schema.

---

## 17. Singleton policy

These documents are singletons:

```text
siteSettings
homePage
aboutPage
contactPage
```

Studio should present them as unique site sections rather than encouraging multiple page documents.

Target Studio navigation concept:

```text
Content

Site Settings
Home
About
Contact
```

---

## 18. `siteSettings`

Type:

```text
document / singleton
```

Schema:

```text
siteSettings
├── name : string
├── professionalTitle : localizedString
├── email : string
├── githubUrl : url
└── linkedinUrl : url
```

Notes:

- `name` is not localized.
- `professionalTitle` is localized.
- Email is global.
- GitHub URL is global.
- LinkedIn URL is global.
- No phone field in V0.
- No location field in V0.
- No CV field in V0.

---

## 19. `homePage`

Type:

```text
document / singleton
```

Schema:

```text
homePage
├── heroDescription : localizedText
├── currently
│   ├── studying : localizedText
│   ├── learning : localizedText
│   └── workingOn : localizedText
└── contactCtaDescription : localizedText
```

Notes:

- Hero name comes from `siteSettings.name`.
- Hero professional title comes from `siteSettings.professionalTitle`.
- `Studying`, `Learning`, and `Working on` labels themselves live in code/i18n.
- The values beneath those labels live in Sanity.
- CTA heading/button labels live in code/i18n.
- CTA description lives in Sanity.

---

## 20. `aboutPage`

Type:

```text
document / singleton
```

Schema:

```text
aboutPage
├── introduction : localizedText
└── education : educationEntry[]
```

Education is embedded in About.

Do not create an independent education document collection in V0.

Array order is display order.

---

## 21. `contactPage`

Type:

```text
document / singleton
```

Schema:

```text
contactPage
└── description : localizedText
```

Do not duplicate:

- email,
- GitHub URL,
- LinkedIn URL

inside `contactPage`.

Those values come from `siteSettings`.

---

## 22. `educationEntry`

Type:

```text
object
```

Schema:

```text
educationEntry
├── institution : localizedString
├── program : localizedString
├── startYear : number
└── endYear : number | null
```

Current item behavior:

```text
endYear == null
→ Present / Günümüz
```

Do not add a redundant `isCurrent` boolean in V0.

---

## 23. Validation policy

Planned required validation:

### `siteSettings`

- `name` required
- `professionalTitle.en` required
- `professionalTitle.tr` required
- `email` required
- email must be a valid email format
- `githubUrl` required
- `linkedinUrl` required

### `homePage`

- `heroDescription.en` required
- `heroDescription.tr` required
- `currently.studying.en/tr` required
- `currently.learning.en/tr` required
- `currently.workingOn.en/tr` required
- `contactCtaDescription.en/tr` should be required if CTA is part of final V0 content

### `aboutPage`

- `introduction.en` required
- `introduction.tr` required
- `education` contains at least one entry

### `contactPage`

- `description.en` required
- `description.tr` required

### `educationEntry`

- `institution.en/tr` required
- `program.en/tr` required
- `startYear` required
- `endYear` optional
- when present, `endYear >= startYear`

---

## 24. Localization fallback policy

The site should not rely on English fallback for required Turkish editorial content.

Expected workflow:

```text
EN content complete
+
TR content complete
→ publish
```

Missing required translations should be caught during content validation rather than hidden in frontend rendering.

---

## 25. Frontend content access

Astro reads Sanity during build.

Public V0 content can be read without a private Sanity read token.

Frontend integration direction:

```text
@sanity/astro
```

Content access logic belongs under the Astro source layer, conceptually:

```text
src/lib/sanity/
├── queries.ts
├── content.ts
└── types.ts
```

---

## 26. Query policy

For V0, it is acceptable to retrieve both localized fields:

```text
{
  en: "...",
  tr: "..."
}
```

and let a central frontend helper choose the current locale.

Reason:

- very small dataset,
- simpler GROQ,
- centralized localization behavior.

Locale-projected GROQ can be introduced later if scale makes it useful.

---

## 27. CDN policy

Build-time fetch direction:

```text
useCdn: false
```

A content-triggered build should prefer the newest published content.

The public visitor does not need live client-side Sanity queries.

---

## 28. Draft policy

Draft edits are not public.

V0 does not use drafts in the public build.

Draft work happens in Studio until Publish.

---

## 29. Preview policy

V0 does not include:

- authenticated preview,
- draft preview URLs,
- Visual Editing,
- Presentation Tool workflow,
- preview-specific Astro client.

This can be revisited when Projects introduce richer page layouts where pre-publish visual review becomes valuable.

---

## 30. Publish/rebuild policy

Published changes affecting the site trigger a public-site rebuild.

V0 relevant document types:

```text
siteSettings
homePage
aboutPage
contactPage
```

Expected flow:

```text
Publish / Unpublish relevant content
        ↓
Sanity webhook
        ↓
GitHub workflow dispatch
        ↓
Astro rebuild
        ↓
GitHub Pages
```

Draft edits do not trigger deployment.

---

## 31. Public dataset safety rule

Because the dataset is public-read:

Do not create and publish fields containing:

- private notes,
- credentials,
- unpublished personal information,
- secrets,
- internal-only comments.

If future content requires true privacy, reassess the dataset/access architecture rather than depending on frontend omission.

---

## 32. Profile image

A profile image is now part of V0.

The earlier decision to exclude it is obsolete.

**Storage decision locked by the owner — 2026-09-22:** static repository asset.

```text
public/
└── approved profile image asset
```

The owner will update the photo by replacing the project file, not through Studio.
Do not add `profileImage` to `siteSettings` or any other V0 schema.
Asset handling belongs to `ARCHITECTURE.md`; presentation and crop decisions
belong to `DESIGN.md`.

Use only the approved real profile image; do not generate or substitute a placeholder portrait.

---

## 33. V0 schema exclusions

Intentionally absent from Sanity V0:

- Projects,
- Skills,
- Technologies,
- Certificates,
- Experience,
- CV,
- SEO fields,
- Blog,
- Analytics,
- Theme,
- Navbar,
- Footer,
- 404 configuration.

These are deferred, not forgotten.

---

## 33. Projects CMS policy

Do not create a speculative Project type yet.

When the first real completed project is ready, design the Project content model around actual requirements.

Questions to answer then may include:

- title,
- slug,
- summary,
- role,
- dates,
- technologies,
- cover media,
- image gallery,
- video,
- external links,
- repository URL,
- rich text,
- bilingual content,
- ordering,
- featured state.

None of these should be guessed into V0.

---

## 34. Studio schema organization

Target organization:

```text
studio/
├── schemaTypes/
│   ├── documents/
│   │   ├── siteSettings.ts
│   │   ├── homePage.ts
│   │   ├── aboutPage.ts
│   │   └── contactPage.ts
│   ├── objects/
│   │   ├── localizedString.ts
│   │   ├── localizedText.ts
│   │   └── educationEntry.ts
│   └── index.ts
│
└── structure/
    └── index.ts
```

Exact implementation may evolve, but document/object responsibility should remain clear.

---

## 35. Sanity source-of-truth boundary

| Question | Source |
|---|---|
| Product scope | `PROJECT_SPEC.md` |
| General technical architecture | `ARCHITECTURE.md` |
| Sanity model and CMS behavior | `SANITY.md` |
| Exact written content | `CONTENT.md` |
| Visual design | `DESIGN.md` |
| AI coding rules | `AGENTS.md` |
