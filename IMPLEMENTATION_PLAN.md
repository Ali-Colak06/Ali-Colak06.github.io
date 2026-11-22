# V0 implementation plan

## Current authorization

**Current task — 2026-11-22:** the owner approved deployment-roadmap M1
(repository/publication preparation). This is distinct from Stage 1 M1 below.
M1 preparation and the subsequently authorized bounded dependency remediation
are complete. Validation passed; the remaining moderate CLI limitation is recorded
below. The owner subsequently authorized deployment-roadmap M2 (Pages workflow
preparation); local implementation and validation are complete, ready for review.
The owner authorized M3 GitHub connection and first publication; implementation
and live verification are complete. Next milestone: M4 hosted Sanity Studio.
The owner removed the real photograph and authorized continuing with the existing
placeholder. No photo restoration is needed for the deployment milestones.
The roadmap is: M1 preparation → M2 Pages workflow → M3 GitHub/first publication
→ M4 hosted Studio → M5 publish webhook → M6 end-to-end verification.
No commit, remote creation, push, Pages publication or Studio deployment was
performed in M1. Full visual/accessibility acceptance remains a separate open task.

Stage 1 is complete: repository, unstyled Astro route scaffolds, standalone
Sanity Studio, V0 schemas, content access foundations, and build verification.
Stage 2 has approved references plus explicitly deferred decisions.
The owner authorized Stage 3 content binding: reconcile approved Home punctuation
and render published Sanity content on the existing unstyled Astro pages.
The owner subsequently authorized the global shell milestone and conventional
responsive values. Shell implementation uses the recorded 1024px breakpoint
and 1240px maximum width. On 2026-09-29 the owner continued to Home/About/Contact
section styling, using that same conventional responsive transition. The owner
later requested a temporary CSS profile placeholder while the supplied portrait
is held for a later presentation decision. The owner authorized the global 404 next;
its language-selectable implementation is now ready for review.
The six canonical specification documents were left unchanged during Stage 1.
Approved Stage 2 decisions are recorded in their respective source-of-truth files.

## Stage 1 — Technical foundation

| Milestone | Status | Acceptance |
| --- | --- | --- |
| M1 — Read specifications and initialize local repository | Complete | Six documents read; local main branch, ignores and milestone record verified |
| M2 — Astro and directory architecture | Complete | Initial Astro check: 0 errors/warnings; static build passed |
| M3 — EN/TR physical routes and shared views | Complete | Seven HTML outputs and language metadata checked; 3 route tests passed |
| M4 — Standalone Studio and V0 schemas | Complete | Studio typecheck and scaffold build passed; 5 tests use the real Sanity validator |
| M5 — Content access foundation | Complete | 12 root tests pass, including actual GROQ evaluation with draft/release/unpublish cases |
| M6 — Verification and handoff | Complete | Clean installs, dependency trees, typechecks, 17 tests, both builds and route output verified; README delivered |

Work through milestones in order. Mark completion only after the acceptance
checks pass. This request authorizes all Stage 1 milestones; review is handed
back before Stage 2. No remote repository, commit, push or deployment is included.

## Stage 2 — Decisions with the owner (in progress)

- Deferred by the owner on 2026-09-23: the remaining design-review discussion, including color/readability checks, visited-link treatment and shared CSS token mapping. These are pending, not completed or approved by omission. Existing tablet/breakpoint and photo deferrals remain in effect. Next preparation topic: real Sanity project configuration and approved content.
- Deferred by the owner on 2026-09-22: tablet layout and mobile/desktop transition decisions. These responsive decisions remain open before implementation; the 404 visual was subsequently approved below.
- Approved on 2026-09-22: use the supplied desktop/light reference as-is for font, desktop type scale, light colors, section spacing and existing component appearance (DESIGN.md section 5).
- Approved on 2026-09-22: dark palette A (neutral anthracite), including the lighter blue accent and light-filled primary CTA. Exact colors and the scope of approval are recorded in DESIGN.md section 9; comparison saved at `UI_demos/Portfolio Dark Theme Options.html`. Alternative B is not approved.
- Define remaining component token mapping, complete contrast verification, and decide tablet typography/spacing, containers and breakpoints. Base dark text/accent pairs were checked at a minimum contrast of approximately 7.38:1; full accessibility acceptance is still pending.
- Approved on 2026-09-22: two-row mobile Navbar — name on the left and language/theme controls on the right in the first row; Home/About/Contact links always visible in the second row, without a hamburger menu (DESIGN.md section 17).
- Approved on 2026-09-22: the complete three-page mobile/light preview, using its default comfortable spacing. Currently items stack; Education dates sit below institution/program; Contact labels sit above values; footer content stacks left-aligned. Mobile typography, spacing and visible component styling are recorded in DESIGN.md section 28.
- Approved mobile reference preserved at `UI_demos/Portfolio Mobile UI v1.html`. The optional compact variant was not selected; preview widths are not breakpoints. Define Navbar breakpoint, tablet treatment and remaining interaction states.
- Approved on 2026-09-22: the light/dark interaction example — blue 2px focus outline with 4px offset, link hover underlines, button hover/pressed colors, 44px language/theme controls with 4px radius, moon/sun theme states, and 150ms ease color transitions disabled for reduced motion. Exact rules are in DESIGN.md sections 30–31; reference saved at `UI_demos/Portfolio Interaction UI v1.html`.
- Decide visited-link treatment and any additional unshown component details; finish contrast/accessibility verification. Interaction demo labels/readouts are not website copy.
- Approved on 2026-09-22: the global 404 uses EN/TR selection and shows one language at a time, with Home destinations `/` and `/tr`. The revised left-aligned visual, simplified header, theme control, single Home CTA and stacked footer are approved (DESIGN.md section 36). It initially opens in English; TR is selected explicitly by the user. Reference: `UI_demos/Portfolio 404 UI v1.html`. Preview width does not decide breakpoints.
- Approved on 2026-09-22: profile image in both desktop locations — right of the Home Hero introduction text and right of the About heading. Recorded in DESIGN.md section 27; the earlier no-Hero-portrait conflict is resolved.
- Approved on 2026-09-22: square (1:1) photo with 4px corner rounding on both pages; static repository asset under `public/`, updated by replacing the file. No Sanity image field.
- Deferred by the owner on 2026-09-22: supplying the portrait and deciding dimensions, precise alignment, crop, border treatment, mobile placement and alt behavior. Revisit before photo integration; continue other design decisions now.
- Reference supplied: `UI_demos/Portfolio UI v1.dc.html`.
- Mobile reference approval excludes the deferred portrait, real contact data, dark theme and 404; it does not authorize the demo's in-place navigation as production architecture.
- Supply real contact values and real Sanity/GitHub identifiers.
- Approve any missing UI/accessibility copy; do not invent translations.

## Stage 3 — Content, visual implementation and deployment (content binding complete)

### Current bounded task — Sanity connection (2026-09-23)

- Owner created the remote portfolio project and supplied its Project ID.
- Root `.env` and `studio/.env` now configure that same real project; both files
  are ignored by Git. No token is required for the approved public-read access.
- Read-only query to `production` succeeded with `perspective=published`:
  0 published documents. Dataset creation is not needed.
- Local configuration verified: Astro check/build/route checks and Studio
  check/build passed with the real project ID. Studio development server
  returned HTTP 200 at `http://127.0.0.1:3333/`.
- Owner confirmed Studio access after adding the local CORS origin.
- Owner supplied public email, GitHub and LinkedIn values on 2026-09-23;
  these are recorded in CONTENT.md. The owner published Site Settings;
  a public API query with the published perspective verified all five fields,
  including both professional-title translations, against approved content.
  Home publication was also verified through the public API: all required EN/TR
    values are present. The owner approved the trailing periods in both
    `currently.workingOn` translations; CONTENT.md now matches Studio.
    About publication was verified through the
    public API: both introductions match CONTENT.md, and the single Marmara
    University entry has both translations, start year 2025 and no end year.
    The owner deferred the high-school entry; CONTENT.md records that decision.
    Contact publication was verified through the public API: both descriptions
    match CONTENT.md. All four V0 singleton documents are now published.
    Route data binding is implemented in the shared Home/About/Contact views;
    type checks, 12 tests, the live-content build and updated route checks passed.
    A separate read-only comparison confirmed every rendered editorial field in
    both locales matches the published API response and the high-school entry
    is absent. The sandbox initially blocked build network access (EACCES);
    the same build passed with network permission. No fallback was introduced.
    No remote content was written by the agent.

### Milestones

1. **Complete:** configure real Sanity content and connect pages to the content access layer. Six unstyled content pages render published EN/TR fields, localized CTA links, contact links and CMS education entries. No new dependencies or client scripts.
2. **Implemented and verified; ready for owner review:** global shell, navigation, footer and theme behavior. Six content routes share Navbar/Footer, equivalent-language links, active states, 44px controls and the approved palette/font. System theme is used until an explicit choice, which persists across page navigation. 1024px shell transition and 1240px cap are recorded in DESIGN.md. The global 404 stays a scaffold for its own milestone.
3. **Page sections implemented and verified; temporary portrait placeholder active:** Home Hero/Currently/contact CTA, About introduction/Education and Contact rows follow the approved mobile/desktop references in EN/TR and both themes. Only the published university entry is shown. The shared ProfileImage component renders a square CSS placeholder with the approved responsive placement. The owner removed the real photograph and confirmed placeholder publication on 2026-11-22.
4. **404 implemented, review ready:** English initial state, EN/TR selection, shared theme, localized document title/lang and Home destinations. Final whole-site visual/responsive/accessibility acceptance remains pending.
5. Add GitHub Pages deployment and deploy Studio manually to Sanity hosting.
6. Connect Sanity published-content webhooks to GitHub workflow dispatch.

## Boundaries

- Foundation build success is not live CMS integration or finished V0 acceptance.
- No unapproved visual decisions, agent-written live dataset changes or placeholder personal content.
- No Projects, CV, blog, contact form, analytics, preview, SSR or custom backend.
- Required content access must throw on missing content; no hidden EN fallback.

## Validation record

### Deployment-roadmap M3 — 2026-11-22 (complete)

- GitHub device authentication completed by the owner; account Ali-Colak06 verified.
- Created public repository https://github.com/Ali-Colak06/Ali-Colak06.github.io,
  initial commit 0175b6c, main default branch and origin/main tracking configured.
- Set public repository Actions variable SANITY_PROJECT_ID to the existing
  project ID. No token stored in source/docs. GitHub CLI manages authentication.
- Pages source set to workflow (GitHub Actions), HTTPS enforced at
  https://ali-colak06.github.io/. github-pages environment custom branch policy
  permits only main.
- [Push run 45021724306](https://github.com/Ali-Colak06/Ali-Colak06.github.io/actions/runs/45021724306)
  and [manual dispatch 45021885669](https://github.com/Ali-Colak06/Ali-Colak06.github.io/actions/runs/45021885669)
  both completed successfully: root install, type check, 12 tests, live Sanity
  build, seven-route/49-reference checker, artifact upload and deployment.
- Live browser: 24 cases across six routes, widths 390/1240 and light/dark
  passed. Checked HTTP 200, language metadata, heading/active nav, sticky header,
  placeholder, equivalent-language links, no overflow, theme switching and
  persistence. Nested invalid TR URL returned HTTP 404 with initial English;
  switching to Turkish updated lang and Home target. No page errors/browser CMS
  requests. Desktop Home/mobile About screenshots visually reviewed.
- Removed real photo URL /images/profile.jpg returns HTTP 404. Root/Studio
  env files, generated artifacts and dependency folders remain ignored.
- Initial GitHub automatic legacy Jekyll run 45021721183 failed before Pages
  source was switched to Actions; it deployed nothing. The intended Astro push
  and manual workflows succeeded; no workflow fix was needed.
- GitHub annotations warn that some official Pages actions target Node 20;
  GitHub runs them on Node 24. They passed. This is separate from project Node
  24.14.1 and the previously documented moderate Sanity CLI audit limitation.
- README and this plan record the live URLs and manual rebuild process.
  Studio deployment and publish webhooks are not included in M3. Final full-site
  contrast/accessibility acceptance remains open.

Preparation history:

- First commit scope reviewed: 73 staged source/config/documentation files;
  no environment files, build output, dependency folders or real photo.
- Credential-pattern scan passed. Existing Markdown hard-break spaces in
  CONTENT.md are intentional; whitespace checks pass with blank-at-eol excluded.
- Existing local Git author identity is retained; no global Git setting changed.
- GitHub CLI 2.105.0 downloaded from its official release into the temporary
  directory; archive SHA256 verified against release checksums. No project
  dependency added. GitHub CLI was initially unauthenticated; device login
  requested from the owner. No token or login code is stored in project files.
- Initial unauthenticated lookup returned repository not found. After login the
  target was confirmed absent before creation; no existing repository overwritten.

### Deployment-roadmap M2 — 2026-11-22

Status: implemented and locally verified; no GitHub run or publication yet.

- Added `.github/workflows/deploy-pages.yml`: push to main and workflow_dispatch
  share the same workflow. Both jobs require refs/heads/main; manual runs on
  other branches skip publication. No PR or repository_dispatch trigger added.
- Separate build and deploy jobs, with deploy depending on build success.
  Build runs npm ci, type check, 12 tests, real-content build and route checks;
  only dist is uploaded using the official Pages artifact action.
- Uses checkout v6, setup-node v6, configure-pages v5, upload-pages-artifact v4
  and deploy-pages v4. Node is read from .nvmrc (24.14.1), npm cache from root
  package-lock.json. No project dependency or lockfile change in this milestone.
- Build permissions: contents read and pages read. Deploy permissions: pages
  write and id-token write, environment github-pages. Checkout does not persist
  credentials. No PAT, Sanity read token or Studio deployment in this workflow.
- Repository variable SANITY_PROJECT_ID is required and checked for blank input.
  Astro telemetry disabled in CI. The variable is public configuration; no
  value or secret was inserted into the workflow.
- Concurrency group github-pages, cancel-in-progress false: preserve an active
  run/deployment, replace an older pending run with the newest pending request.
  Build/deploy timeout limits are 15/10 minutes.
- Astro site set to https://ali-colak06.github.io, no subpath base. Existing
  root EN and prefixed TR route model preserved.
- Enhanced the existing output checker to resolve local href/src references
  against each generated page and reject private/Studio artifact paths.
- README now documents workflow behavior, required GitHub settings, manual
  trigger and the M3/M5 boundary. No GitHub settings have been changed locally.

Verification:

| Check | Result |
| --- | --- |
| actionlint 1.7.12 | Passed; official Windows release archive SHA256 checked against release checksums; shellcheck unavailable/disabled |
| Astro check | 28 files, 0 errors/warnings/hints |
| Root tests | 12 passed |
| Live Sanity build | Passed; seven HTML outputs |
| Output/routes/assets | Six content pages + 404, 49 local href/src references passed |
| Missing-stylesheet negative check | Rejected missing generated CSS; restored file and reran checker successfully |
| Ignore and photo check | Both .env files/build trees excluded from Git; no raster photo in dist |

No Studio changes, UI changes, commit, push, remote repository creation or
deployment. Existing non-fatal Vite import warning and 13 moderate CLI audit
entries per tree remain as documented. Local linting cannot establish runner
permissions, GitHub environment/OIDC behavior or live Pages routing; those need
the first actual GitHub run in M3. No browser visual reacceptance claimed.

Changed files: .github/workflows/deploy-pages.yml, astro.config.mjs,
scripts/check-routes.mjs, README.md and IMPLEMENTATION_PLAN.md.

### Dependency remediation — 2026-11-22

The owner authorized a bounded security update following deployment-roadmap M1.
Changes are local; no deployment workflow, commit, push or live CMS write.

| Direct dependency | Previous | Updated |
| --- | --- | --- |
| Root Astro | 7.3.1 | 7.4.13 |
| Root @sanity/astro | 3.5.1 | 3.6.2 |
| Root @sanity/client | 7.27.0 | 7.28.0 |
| Studio sanity / @sanity/validation | 6.12.0 | 6.24.0 |
| Studio @sanity/client | 8.5.0 | 8.17.0 |

Both lockfiles also refresh compatible transitive/ranged dependencies. Astro 7,
Sanity 6, TypeScript 5 and Node 24 remain the selected major versions. No new
direct dependency or application feature was added.

Removing the old overrides and updating upstream packages left two high-severity
parser dependencies: @sanity/cli → @vercel/frameworks@3.29.0 pins js-yaml@3.13.1
and smol-toml@1.5.2 exactly. The latest frameworks release still has these pins.
Both manifests therefore target only that parent with same-major replacements:
js-yaml@3.15.2 and smol-toml@1.9.1. This replaces the old vulnerable overrides
(3.15.1 / 1.6.1), rather than introducing a global cross-major override.

References: [Astro release](https://github.com/withastro/astro/releases/tag/astro%407.4.13),
[Sanity release](https://github.com/sanity-io/sanity/releases/tag/v6.24.0),
[YAML advisory](https://github.com/advisories/GHSA-2883-xcg3-v3hh),
[TOML advisory](https://github.com/advisories/GHSA-r4xh-jqrq-34v2).

Sanity's beta validation API now returns a result object rather than a marker
array. The test helper reads `result.markers` and asserts `result.complete`, so
execution failures cannot accidentally pass as a valid document. Existing schema
requirements and all five test scenarios are preserved.

Audit after targeted overrides: each tree has 13 moderate package entries,
0 low/high/critical. These remaining entries propagate one minimatch advisory
through Sanity CLI/oclif packages. No `audit fix --force` or downgrade was used.

Remaining limitation: [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)
affects minimatch 7–10, with a patch in 11.0.1. oclif 4.14.0 requires ^10.2.5.
Forcing minimatch 11 or oclif 5 would cross the parent's supported major range.
The inspected oclif call (`lib/config/plugin-loader.js`) matches dependency names
against configured plugin patterns with no optimizationLevel option; the advisory
describes attacker-controlled patterns at optimizationLevel >= 2. The public
site does not accept glob input or ship the CLI. This bounds observed exposure,
but does not establish every transitive CLI path is unaffected. Recheck when the
CLI dependency range is patched; the audit must not be described as clean.

Final verification after both clean installs:

| Check | Result |
| --- | --- |
| Root and Studio `npm ci --no-audit --no-fund` | Both passed from updated lockfiles |
| Root `npm run check` | 28 files; 0 errors/warnings/hints |
| Root `npm test` | 12 passed |
| Root real-content build and route check | Passed; seven HTML outputs |
| Studio type check, real-project build and tests | Passed; 5 tests passed |
| Both `npm ls --all --parseable` | Passed; no invalid/missing dependencies |
| Parent-resolved YAML/TOML smoke checks | Both trees parse known YAML/TOML successfully with overridden dependencies |
| Final registry audit after clean installs | Both 13 moderate, 0 high/critical |

The root build retains the previously recorded non-fatal Vite import warning.
No UI, schema or editorial behavior changed. No new browser visual acceptance
is claimed for this dependency-only task. New Studio validation helper behavior
is exercised by all five existing schema tests, including valid and invalid
content. Changed files: root/Studio package.json and package-lock.json,
studio/tests/schema.test.ts, README.md and IMPLEMENTATION_PLAN.md.

### Deployment-roadmap M1 — 2026-11-22

Status: repository preparation and current diagnostics complete; ready for review.
This is not production/security acceptance. Newly reported dependency findings
need a bounded remediation/reassessment task before public deployment.

| Check | Result |
| --- | --- |
| Runtime | Node 24.14.1 / npm 11.11.0 |
| Root type check | 28 files; 0 errors, warnings or hints |
| Root tests | 12 passed |
| Studio type check/tests | Passed / 5 passed |
| Root/Studio dependency integrity | Both `npm ls --all --parseable` passed |
| Root real-content build | Passed; seven HTML outputs |
| Root route output check | Passed; six content pages and one global 404 |
| Studio real-project build | Passed; no deployment performed |
| Photo removal | No raster images in new `dist`; placeholder in all four Home/About outputs |
| Git state | `main`, unborn HEAD, empty index, no remote |
| Ignore rules | Root/Studio `.env`, node_modules and dist, plus root `.astro`, excluded |
| Environment examples | Variable names with empty values only |
| Credential-pattern scan | No matches among 72 first-commit candidates; not a proof of absence of every possible secret |

The root build and npm audit initially failed under sandbox DNS restrictions;
network-enabled retries succeeded. The root build retains the known non-fatal
Vite ineffective-dynamic-import warning. Existing installations were validated;
fresh `npm ci` was not run in M1. No dependency manifest or lockfile was changed.

First-commit candidate inventory (Git non-ignored files; nothing staged):

| Group | Files | Scope |
| --- | --- | --- |
| Root | 15 | Seven specification/plan documents, README, two env/runtime examples, ignore, Astro/TS configuration and package manifest/lock |
| `src/` | 28 | Routes, shared views/components, styles, i18n and Sanity access |
| `studio/` | 19 | Independent project config/lock, env example, schemas and tests |
| `tests/` | 3 | Route/content tests and synthetic fixture |
| `scripts/` | 1 | Static route output verification |
| `UI_demos/` | 5 | Historical design references, not site output |
| `public/` | 1 | Empty `.gitkeep` only |
| **Total** | **72** | No `.env`, generated build, dependencies or real photo |

Pattern scan checked token prefixes, private-key headers and populated sensitive
token assignments, returning only locations on matches. Approved public contact
values and the public Sanity project ID are not secrets. Git ownership was
handled with command-local `safe.directory`; no global Git setting was changed.

Current npm audit findings (package entries including transitive effects):

| Tree | Low | Moderate | High | Critical | Total |
| --- | --- | --- | --- | --- | --- |
| Root | 1 | 16 | 12 | 0 | 29 |
| Studio | 1 | 14 | 10 | 0 | 25 |

These are not counts of distinct vulnerabilities or demonstrated exploitable
paths. High entries include CLI/tooling and transitive packages such as Vite,
undici, js-yaml, smol-toml, adm-zip, source-map-js and zod; root additionally
includes sharp/devalue. The direct Astro dependency has moderate findings;
npm reports a same-major fix candidate at 7.4.13. The old js-yaml/smol-toml
overrides also need reassessment. Do not reuse the old five-moderate result.

Next remediation task: inspect affected paths and feature exposure, apply
compatible updates in each independent tree, rerun checks/builds/audit and
document any remaining accepted limitation. Avoid forced upgrades or speculative
overrides. No security acceptance or automatic exploitability claim is made here.

Documentation updated: README, this plan, and the narrowly scoped photo exception
in PROJECT_SPEC, ARCHITECTURE and DESIGN. No UI/source-code change was needed.

Global 404 verification — 2026-09-29:

- Type check passed (0 errors/warnings/hints), 12 tests passed, live build and
  route checks passed. Seven HTML pages remain; no extra locale 404 route.
- Eight viewport/theme cases passed at 320/390/768/1240px in light/dark.
  Verified nested missing URL HTTP 404, initial EN with Turkish browser locale,
  both languages, title/lang, theme labels, Home/name links, reload to EN,
  keyboard activation and no-JS Home navigation. No browser page errors.
- Mobile light and desktop dark screenshots checked against DESIGN.md section 36.
- Build has a non-fatal Vite ineffective-dynamic-import warning: the Sanity
  client is also statically imported by Astro. No browser CMS calls introduced.
- Files: 404.astro, BaseLayout.astro, ThemeToggle.astro, global.css,
  check-routes.mjs, README.md and this plan.

Owner refinements — 2026-09-29:

- Updated Turkish greeting punctuation and Currently labels in CONTENT.md/UI.
- Both Home CTAs now use the primary filled style in both themes.
- Currently/Education headings use 22px mobile / 26px desktop subtitle styling.
- Navbar stays visible with sticky positioning and an opaque theme surface;
  focus/anchor scroll margins account for its height.
- Type check, live build and route checks passed. Eight browser combinations
  (320/390/1024/1240px, light/dark) verified copy, equal CTA colors, heading sizes,
  sticky position after scrolling and no horizontal overflow. Screenshots reviewed.
- Completed CMS correction: the owner published "I enjoy turning ideas to life
  through software, electronics and mechanics." The published API value was
  verified, the site rebuilt, and route checks passed. The running preview at
  port 4322 also returned the corrected text. Preview requires a rebuild after
  CMS publications; automatic deployment/webhook integration is not yet set up.

Page-section verification — 2026-09-29:

- Astro check: 0 errors/warnings/hints; all 12 tests passed.
- Live Sanity build and updated route checks passed, producing seven HTML pages.
- Browser: 84 combinations of six routes, light/dark themes and widths 320,
  390, 768, 1023, 1024, 1240 and 1440px passed. No horizontal overflow or
  browser page errors. Heading sizes, Currently columns, Education alignment,
  one published education entry, CTA target heights and page/language links checked.
- Desktop light and mobile light/dark screenshots reviewed against reference
  structure, spacing, typography, dividers and approved palette. Full final
  accessibility acceptance is still pending, including the existing light
  muted-label/date/footer contrast concern. No palette change was invented.
- Changed: three views, global styles, route-output checker, DESIGN.md,
  README.md and this plan. No new package or client-side feature added.

Temporary portrait placeholder — 2026-10-01:

- Replaced the rendered photo with an accessible square `AÇ` placeholder in the
  shared ProfileImage component. The original `public/images/profile.jpg` file
  remains unchanged for a later swap back.
- Preserved the approved 240px mobile / 320px desktop placement and 4px frame
  radius. No new dependency or image-processing step was added.

Global shell verification:

- Astro check: 0 errors/warnings/hints; all 12 existing tests passed.
- Real-content static build and updated route checks passed (seven pages).
- Browser: all six routes at 320, 390, 768, 1023, 1024, 1240 and 1440px
  showed no horizontal overflow and correct active-page state.
- Equivalent-page language navigation, persistent theme, system-theme changes,
  explicit overrides, reduced motion, 2px keyboard focus, disabled storage and
  JavaScript-disabled navigation checked successfully; no browser page errors.
- Instrument Sans loaded; mobile dark and desktop light shell screenshots reviewed.
- No new dependency. No full-site visual/accessibility acceptance claimed:
  page sections, portrait and final 404 remain unfinished. Reference light
  desktop footer muted text retains its pending contrast review.

Verified on 2026-09-05 with Node 24.14.1 and npm 11.11.0:

| Check | Result |
| --- | --- |
| Root `npm ci` | Passed from lockfile; no peer-resolution warning |
| Studio `npm ci` | Passed independently from its lockfile |
| Both `npm ls --all --parseable` | Passed; no missing/invalid dependencies |
| Root `npm run check` | Passed; 0 errors, warnings or hints |
| Root `npm test` | 12 passed, including real GROQ evaluation |
| Root `npm run build` | Passed without Sanity configuration; seven static pages |
| Root build with integration enabled | Passed using a process-only scaffold ID, no content fetches |
| Root `npm run check:routes` | Passed for both configuration paths; six localized routes and one 404, no client scripts/styles |
| Studio `npm run check` | Passed |
| Studio `npm test` | 5 passed using the real Sanity validation engine |
| Studio `npm run build:scaffold` | Passed after clean install; compilation only |
| Missing real Studio project ID | Explicit configuration error verified |
| Git ignores | Dependency/build folders and both `.env` paths ignored |
| Canonical document integrity | All six original SHA-256 hashes unchanged |

For the 2026-09-05 foundation checks, no visual acceptance was claimed: styles and visual components have deliberately
not been implemented. No live CMS read/write, actual content import, GitHub push,
Studio deployment or public deployment was performed. Live CMS acceptance still
requires approved content and authenticated Studio access. On 2026-09-23 the
real project configuration was verified separately: public `production` query
returned 0 published documents, both projects passed type checks and builds,
and the root route checks passed. No content was written or connected to pages.

### Known dependency limitation

**Historical result below, superseded by the 2026-11-22 audit table above.**

After compatible fixes for `js-yaml` and `smol-toml`, `npm audit` reports
**5 moderate findings in each independent dependency tree**, with no high or
critical findings. These are the same transitive advisory chain:
`sanity / @sanity/cli-build / @sanity/cli -> typeid-js -> uuid 10`.
The underlying advisory is
[GHSA-w5hq-g745-h8pq](https://github.com/advisories/GHSA-w5hq-g745-h8pq).
The affected uuid usage is in the Sanity tooling dependency tree; public Astro
HTML contains no client JavaScript. This does not establish that every CLI use
is unaffected. Studio's automatic suggested fix downgrades Sanity to a different
major version, so no forced downgrade or incompatible uuid override was applied.
Recheck when upgrading Sanity, before the later deployment milestone.

### Handoff

Start instructions, configuration names and folder responsibilities are in
README.md. Deployment-roadmap M1 preparation and the authorized dependency
remediation are complete. M2 Pages workflow is now locally implemented and
verified. M3 GitHub connection and first publication are complete. Next: M4 hosted
Sanity Studio, retaining the
documented moderate CLI limitation. Keep the approved placeholder; do not
restore the removed photo.
The owner previously confirmed the 404 works. Whole-site accessibility/contrast
acceptance remains open, and unresolved design choices must not be invented.
