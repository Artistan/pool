

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
