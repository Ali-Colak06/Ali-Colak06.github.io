# AGENTS.md — AI Development Instructions

## 1. Purpose

This file defines how AI coding agents should work on the Ali Çolak portfolio repository.

It does not define product scope, architecture, content, or visual design by itself.

Agents must use the repository's source-of-truth documents before making changes.

---

## 2. Required reading

Before implementing a task, read the documents relevant to that task.

Primary sources:

```text
PROJECT_SPEC.md
ARCHITECTURE.md
SANITY.md
CONTENT.md
DESIGN.md
```

Source ownership:

| Topic | Source of truth |
|---|---|
| Product scope | `PROJECT_SPEC.md` |
| Technical architecture | `ARCHITECTURE.md` |
| Sanity CMS model | `SANITY.md` |
| Exact website copy | `CONTENT.md` |
| Visual design | `DESIGN.md` |
| Current milestone/task plan | `IMPLEMENTATION_PLAN.md` when present |
| Agent behavior | `AGENTS.md` |

Do not treat an older summary, chat export, mockup source HTML, or historical decision file as more authoritative than these canonical files.

---

## 3. Core behavior

Act as an implementation engineer, not as an autonomous product designer.

Do not silently make major decisions that belong to:

- product scope,
- architecture,
- content,
- visual identity.

Implement approved decisions faithfully.

---

## 4. Scope discipline

Do not add features outside V0 unless explicitly requested.

In particular, do not implement:

- Projects,
- project cards,
- project schema,
- CV,
- Blog,
- Skills section,
- Technologies section,
- Certifications section,
- Experience section,
- contact form,
- authentication,
- analytics,
- custom backend,
- application database,
- custom domain integration,
- advanced CMS preview.

"Common on portfolio websites" is not a reason to add a feature.

---

## 5. Architecture discipline

Preserve the agreed technical direction:

```text
Astro
TypeScript
Static MPA / SSG
Sanity
GitHub Actions
GitHub Pages
```

V0 is not a SPA.

Do not introduce:

- React,
- Vue,
- Svelte,
- client-side router,
- application state library,
- SSR,
- custom Node backend,
- monorepo tooling

without an explicit new requirement.

---

## 6. Dependency policy

Before adding a dependency:

1. identify the requirement,
2. check whether Astro, current dependencies, CSS, or browser APIs already solve it,
3. add a dependency only if it provides a clear benefit.

Do not install libraries merely to make implementation easier if the same result is simple with the existing stack.

When adding a dependency, explain:

- why it is needed,
- what problem it solves,
- why the current stack is insufficient.

---

## 7. Design fidelity

`DESIGN.md` is the visual source of truth.

Do not "improve" the design using generic AI design patterns.

Avoid introducing unapproved:

- gradients,
- glowing effects,
- glassmorphism,
- bento layouts,
- decorative cards,
- huge border radii,
- fake terminal UI,
- decorative tech backgrounds,
- random illustrations,
- stock images.

If `DESIGN.md` marks a decision as unresolved and implementation cannot proceed without it, surface the missing decision rather than inventing a permanent visual rule.

---

## 8. Content integrity

`CONTENT.md` is the copy source of truth.

Do not silently rewrite approved copy.

Do not invent:

- achievements,
- experience,
- employment,
- certifications,
- metrics,
- client work,
- awards,
- project results,
- contact information,
- Turkish translations.

If a content improvement seems useful, propose it separately.

---

## 9. Profile image

A real profile image is part of V0.

Do not:

- remove it because older documents excluded it,
- replace it with a stock image,
- replace it with an AI-generated portrait,
- invent its final placement before `DESIGN.md` defines it,
- invent its storage architecture before the Sanity/static-asset decision is closed.

Use only the approved profile image asset supplied for the project.

---

## 10. Sanity discipline

Follow `SANITY.md`.

Do not:

- create speculative Project schema,
- move fixed UI text into Sanity,
- duplicate global contact values across page documents,
- replace field-level localization with separate language documents,
- add Portable Text without a real content need,
- add private information to the public dataset.

Preserve the separation:

```text
Editorial content → Sanity
UI/configuration → code
```

---

## 10. i18n discipline

Preserve:

```text
EN
/ /about /contact

TR
/tr /tr/about /tr/contact
```

Do not add `/en`.

Do not translate route slugs in V0.

Language switching should keep the equivalent current page.

Do not create implicit EN fallback for required Turkish editorial content.

---

## 11. Client JavaScript

Keep client JavaScript minimal.

Known small interactive needs include theme behavior.

Do not hydrate static components without a reason.

Prefer static Astro output whenever possible.

---

## 12. Repository structure

Respect the repository organization defined in `ARCHITECTURE.md`.

Do not reorganize the whole project because another structure is personally preferred.

Refactors must solve a concrete problem.

Avoid speculative abstractions.

---

## 13. Before modifying code

For every meaningful implementation task:

1. inspect the current repository state,
2. read the relevant spec documents,
3. identify files likely to change,
4. identify any unresolved requirement that blocks correct implementation,
5. keep the requested scope narrow.

Do not start by rewriting unrelated code.

---

## 14. During implementation

Prefer:

- small coherent changes,
- readable code,
- clear names,
- semantic HTML,
- reusable components when actual reuse exists,
- straightforward TypeScript,
- CSS that reflects `DESIGN.md`.

Avoid:

- abstraction for abstraction's sake,
- premature generic utilities,
- unnecessary wrapper components,
- large dependency additions,
- unrelated cleanup.

---

## 15. Component policy

Create a component when it has a clear reason, such as:

- actual reuse,
- meaningful page-section boundary,
- isolated interactive behavior,
- clearer ownership.

Do not split every few lines of markup into a component.

Do not keep large duplicated page sections solely to avoid creating a sensible shared component.

---

## 16. Accessibility

Implementation must preserve:

- semantic landmarks,
- correct heading hierarchy,
- keyboard accessibility,
- visible focus states,
- usable links/buttons,
- appropriate labels,
- language metadata,
- reasonable touch targets,
- reduced-motion respect when animation exists.

Do not remove focus outlines without replacing them with an accessible visible focus style.

---

## 17. Responsive implementation

Do not treat responsive behavior as accidental wrapping.

Follow the explicit responsive rules in `DESIGN.md`.

Where responsive design is still unresolved, avoid making irreversible aesthetic assumptions.

---

## 18. Error handling

Do not hide build/content errors to force deployment success.

Required content failures should be visible during build/development.

A failed build should remain a failed build rather than shipping an incomplete site.

---

## 19. Secrets

Never write secrets into:

- source files,
- Markdown,
- client JavaScript,
- committed `.env` files.

Use platform/environment secret storage.

`.env.example` may document variable names only.

---

## 20. Git and change safety

Keep changes reviewable.

Before broad refactors, understand existing behavior.

Do not delete files or large sections unrelated to the requested task.

When a task is complete, report:

- files changed,
- what was implemented,
- tests/checks run,
- any remaining issue,
- any deviation from the specs.

---

## 21. Validation after changes

Run the relevant checks available in the repository.

At minimum, when applicable:

- install/dependency integrity,
- Astro build,
- TypeScript/type checks,
- relevant tests,
- obvious broken links/routes,
- browser console errors for interactive changes.

Do not claim a check passed if it was not run.

---

## 22. Visual review

For UI tasks, successful compilation is not enough.

Compare implementation against `DESIGN.md` and the approved design reference.

Check:

- typography,
- spacing,
- alignment,
- width,
- borders,
- colors,
- responsive behavior,
- light/dark behavior,
- active/hover/focus states.

Do not consider a visually inaccurate page complete solely because it builds.

---

## 23. Milestone workflow

When `IMPLEMENTATION_PLAN.md` exists:

- work on one milestone/task at a time,
- do not implement future milestones unless explicitly requested,
- update task status only after work is actually complete,
- keep milestones small enough to review.

Preferred cycle:

```text
Read specs
↓
Implement one bounded milestone
↓
Build/test
↓
Human review
↓
Commit
↓
Next milestone
```

---

## 24. Secondary AI / review workflow

If another AI model reviews the code:

- treat review comments as suggestions, not automatically authoritative changes,
- compare suggestions against canonical specs,
- do not let a reviewer silently redefine architecture or design,
- apply only changes that improve correctness while respecting project decisions.

The project should have one coherent implementation direction.

---

## 25. Decision conflicts

If two canonical documents appear to conflict:

1. identify the conflict explicitly,
2. do not guess which one should win unless source ownership clearly resolves it,
3. use the ownership table in this file,
4. request/record a corrected canonical decision before broad implementation.

Example:

```text
Copy conflict
→ CONTENT.md wins

Architecture conflict
→ ARCHITECTURE.md wins

Visual conflict
→ DESIGN.md wins

Product scope conflict
→ PROJECT_SPEC.md wins
```

---

## 26. Historical documents

Historical summaries may remain useful for understanding why a decision was made.

However, historical statements such as "decision pending" are not current requirements if the canonical spec now records a final decision.

Never resurrect an obsolete open question merely because it appears in an older document.

---

## 27. Working principle

Use this sequence:

```text
Understand
↓
Check canonical spec
↓
Implement only requested scope
↓
Validate
↓
Report
```

Do not use:

```text
Guess
↓
Add common features
↓
Redesign
↓
Refactor everything
```

---

## 28. Definition of a good AI contribution

A good contribution:

- solves the requested problem,
- respects the source-of-truth files,
- introduces minimal necessary complexity,
- is easy to review,
- is visually faithful when UI is involved,
- does not invent content,
- does not broaden scope,
- passes relevant checks,
- leaves the project easier to understand.
