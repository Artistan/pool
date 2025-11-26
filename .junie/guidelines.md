

## Static Site (GitHub Pages + Jekyll)

The repository includes documentation and guidelines under `/.junie`. If we publish supplemental documentation via GitHub Pages using Jekyll, use the following advanced notes to build, test, and deploy. This section intentionally focuses on the specifics we rely on, not generic Jekyll basics.

### Prerequisites (local)
- Ruby 2.7.0+ with development headers (verify: `ruby -v`)
- RubyGems (verify: `gem -v`)
- GCC and Make (verify: `gcc -v`, `g++ -v`, `make -v`)

Install Jekyll toolchain locally:
- `gem install jekyll bundler`

If running Ruby 3.0+, Jekyll serve may require Webrick:
- `bundle add webrick`

### Quickstart (local)
- Create a sandbox site to verify your Ruby toolchain if needed:
    - `jekyll new myblog`
    - `cd myblog`
    - `bundle exec jekyll serve` (add `--livereload` for auto-refresh)
    - Browse http://localhost:4000

If errors occur, confirm prerequisites per Jekyll Requirements:
- https://jekyllrb.com/docs/installation/#requirements
  Troubleshooting:
- https://jekyllrb.com/docs/troubleshooting/#configuration-problems

### Repository layout and Pages deployment options
Jekyll isolated from app dependencies. Two supported patterns for GitHub Pages:

1) docs/ folder on default branch (simple, plugin-restricted):
- Place the Jekyll site in `/docs` on the default branch.
- In GitHub repo settings > Pages, set Source to "Deploy from a branch", Branch: `main` (or default), Folder: `/docs`.
- Use the GitHub Pages default Jekyll environment (restricted plugin set). Prefer the `github-pages` gem to match Pages runtime.

2) gh-pages branch or Actions workflow (full control):
- Build with Actions and publish the HTML output to the `gh-pages` branch (or to the Pages artifact).
- This allows non-whitelisted plugins/themes. Example minimal steps in Actions:
    - Setup Ruby
    - `bundle config set path vendor/bundle`
    - `bundle install`
    - `bundle exec jekyll build --trace`
    - Upload `_site` to Pages artifact or push to `gh-pages` branch

Notes:
- Keep a Gemfile alongside the Jekyll site and pin versions for reproducibility. If using GitHub’s runtime (no custom Actions build), prefer the `github-pages` gem to align with the Pages environment.
- Do not mix Composer/npm dependencies with the Jekyll Gemfile to avoid cache invalidation noise; isolate under `/docs` or a `/site` subdirectory.
- If you include custom plugins, use the Actions-based deployment. GitHub Pages native builds run a safe list only.

### Local testing commands (inside your Jekyll site dir)
- `bundle exec jekyll serve` to run the local dev server
- `bundle exec jekyll serve --livereload` for auto-refresh
- Visit http://localhost:4000

### Theme/templates
- Jekyll themes and templates are supported. For GitHub Pages native builds, prefer themes that work with `github-pages` gem. For custom or third-party templates requiring additional plugins, use the Actions build variant.

### jQuery usage on documentation pages
Some docs pages may use jQuery for small interactive behaviors. Recommendations:
- Prefer zero-dependency or native DOM utilities where feasible; for simple toggles, details/summary and CSS often suffice.
- If jQuery is retained:
    - Load with `defer` and after critical content; avoid blocking the render path.
    - Pin a specific jQuery version; avoid mixing multiple versions. Prefer the slim build if AJAX is not used.
    - Use `$.noConflict()` if there’s risk of global `$` collisions with other libraries.
    - Keep scripts modular; avoid mutating global state. Namespaces or IIFEs help prevent leaks.
    - Audit for legacy patterns (e.g., `.live()`, old event delegation). Use `.on()` with proper delegation.
    - Throttle/debounce scroll/resize handlers; avoid layout thrash by batching DOM reads/writes.
- Security and CSP:
    - Prefer self-hosted assets over public CDNs if you need strict CSP. If CDN is required, include Subresource Integrity (SRI) hashes.
    - If enabling strict CSP, add `nonce`/`sha256` for inline scripts or move inline code to external files.

References:
- GitHub Pages: https://docs.github.com/en/pages
- Jekyll: https://jekyllrb.com/

---

## Repository-specific notes (this project)

The current repository is a Jekyll site at the repository root, using the Minima theme with a custom domain.

- Layout and content
  - Site root: Jekyll config is at `/_config.yml`; pages live in root (e.g., `index.markdown`, `about.markdown`). ✓
  - Docs: Additional long‑form docs live under `/docs` and are published as part of the site build. ✓
  - Custom domain: `CNAME` is present and should remain committed; ensure GitHub Pages settings use the same domain: `topshots.me`. ✓

- Pages deployment mode
  - Current Gemfile pins `jekyll ~> 4.4.1` and `minima ~> 2.5`, not the `github-pages` gem. This usually requires a GitHub Actions build (or local build) to avoid plugin/version mismatches with GitHub’s restricted runtime.
  - Option A — Use GitHub Actions (recommended for full control):
    - Build Jekyll in CI and publish to Pages artifact or `gh-pages` branch. See steps in the main section above (Ruby setup → bundle install → `bundle exec jekyll build`).
    - Keep the current Gemfile as‑is.
  - Option B — Use GitHub Pages native runtime (simpler, plugin‑restricted):
    - Replace the Jekyll/minima gems with the `github-pages` gem to match GitHub’s environment.
    - Minimal change: in `Gemfile`, comment out `gem "jekyll"` and add/uncomment `gem "github-pages", group: :jekyll_plugins`, then run `bundle update github-pages`.
    - In repo settings, set Pages Source to “Deploy from a branch” with the root folder.

- Do not commit build output
  - `_site/` is already in `.gitignore`, but `_site/` is currently tracked in the repo history. Clean it up:
    - `git rm -r --cached _site`
    - Commit and push. CI or GitHub Pages will build the site; built files should not live in the repository.

- Local development (this repo)
  - Install dependencies: `bundle install` (if Ruby 3.x, also `bundle add webrick`).
  - Serve locally: `bundle exec jekyll serve --livereload` then open http://localhost:4000
  - If you switch to `github-pages` gem, re-run `bundle install` and restart.

- Assets and jQuery usage in this repo
  - Custom JS exists at `assets/js/m8-pool-stats.js` and CSS at `assets/css/m8-pool-stats.css`.
  - If jQuery is used:
    - Load scripts with `defer` and after critical HTML to avoid blocking render.
    - Pin a specific version in your layout, prefer the slim build if AJAX is not used.
    - If you later load jQuery from a CDN, include an SRI hash and a local fallback for reliability or self‑host the asset to support strict CSP.
    - Keep event handling modern (`.on()` with proper delegation) and throttle scroll/resize handlers.

- Configuration tips
  - `_config.yml` sets `url: https://topshots.me`. Keep `baseurl: ""` since the site is served at the domain root via Pages.
  - Theme: `minima` is fine for both native Pages (with `github-pages`) and Actions builds. If you adopt additional plugins, prefer the Actions build path.
  - When changing `_config.yml`, remember the Jekyll dev server does not auto‑reload config; restart `bundle exec jekyll serve` after edits.
