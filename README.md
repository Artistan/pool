# Century Panthers Football Booster Club — Website

The official site of the Century Panthers High School Football Booster Club,
built with [Angular](https://angular.dev) 19 + Bootstrap 5 + Font Awesome and
deployed to GitHub Pages at [topshots.me](https://topshots.me).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, impact stats, what the club funds, announcements |
| `/schedule` | Season schedule (placeholder slate until the official one is announced) |
| `/get-involved` | Membership tiers and volunteer roles |
| `/sponsors` | Sponsorship tiers and sponsor showcase |
| `/about` | Mission, board roles, meeting info |
| `/contact` | Contact channels (update the placeholder emails in `contact.component.ts`) |

## Placeholders to customize

- **Social links** — footer + contact page link to `#` until real profiles are added.

Real data lives in dedicated modules: external links (donate, team calendar,
official school pages) in `src/app/site-links.ts`, and the Touchdown Club
support tiers in `src/app/touchdown-club.ts`. The schedule page embeds the
team's public Google Calendar.

## Development

```bash
npm install     # requires FONTAWESOME_NPM_TOKEN in the environment (see .npmrc)
npm start       # dev server at http://localhost:4200
npm test        # unit tests (Karma/Jasmine)
npm run build   # production build -> dist/pages-app/browser
```

## Deployment

Pushes to `master` run `.github/workflows/deploy.yml`, which builds the app and
publishes `dist/pages-app/browser` to the `gh-pages` branch (GitHub Pages serves
it at topshots.me). The workflow needs:

- A `FONTAWESOME_NPM_TOKEN` repository secret (Actions) for `npm install`.
- Permission for `github-actions[bot]` to push `gh-pages` — if a branch ruleset
  protects it, add the bot (or the deploy workflow) to the ruleset's bypass list.

`npm run deploy` (angular-cli-ghpages) is available for manual deploys.
