TopShots Pool — Jekyll Site

This repository contains a Jekyll site served at https://topshots.me using the Minima theme. Pages are at the repo root with additional docs under /docs.

Quick start (local):
- bundle install
- If on Ruby 3.x: bundle add webrick
- bundle exec jekyll serve --livereload
- Open http://localhost:4000

Deployment options:
- GitHub Actions (recommended for full control with current Gemfile), or
- GitHub Pages native runtime using the github-pages gem.

Guidelines and detailed notes:
- See .junie/guidelines.md for project-specific Pages/Jekyll guidance, asset practices, and deployment steps.

Note: Do not commit the _site build output. If it was committed previously, run:
- git rm -r --cached _site
- git commit -m "chore: stop tracking _site build output"
- git push
