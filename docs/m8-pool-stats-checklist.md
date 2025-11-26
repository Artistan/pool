---
layout: page
title: M8 - Checklist
permalink: /docs/m8-pool-stats-checklist/
description: Manual accessibility and functional checks for the M8 Pool Stats page.
tags: 
  - billiards
  - scoring
  - pool
categories:
  - billiards
  - scoring
  - pool
collection: docs
---

# M8 Pool Stats — Accessibility & Test Checklist

This file contains a short manual checklist and edge-case tests to run locally against `docs/m8-pool-stats.md`.

Accessibility checks
- [ ] Keyboard navigation: Tab through all controls (buttons, inputs) — focus visible and order logical.
- [ ] Focus styling: focused controls have a clear outline (test in high-contrast and low-contrast themes).
- [ ] Screen reader labels: all inputs have `aria-label` or visible label; totals and bonuses update in `aria-live` regions.
- [ ] Buttons use `type="button"` to avoid accidental form submissions.
- [ ] Color contrast: winner highlight and status background meet contrast ratio (manual check recommended).

Functional tests
- [ ] Add a round and set scores for both players (e.g., 10 and 6). Confirm totals update and a new round is added automatically.
- [ ] Enter non-numeric text into a round score; confirm it's cleared and a message is shown.
- [ ] Enter numbers outside allowed ranges (e.g., rating 5 or 300, round score 20) and confirm they're clamped and a message shown.
- [ ] Simulate a match end: add rounds until a player's total exceeds their rating. Confirm the winner row is highlighted, bonus set to 100, final points computed, inputs locked, and `Add Round` disabled.
- [ ] Export the match to JSON, then Reset, then Import the JSON — confirm state is restored and winner/locked state is applied.
- [ ] Add innings several times and reload page; confirm innings persist via localStorage.
- [ ] Verify `MAX_ROUNDS` limit by quickly adding many rounds; confirm UI shows "Maximum rounds reached" and prevents more than 100 rounds.

Edge-case guards
- [ ] If both players exceed rating in same round, confirm tie-break uses last-round points; if last-round points tie exactly, no winner (manual adjudication required).
- [ ] Import invalid JSON: attempt to import a corrupted file and confirm the user sees an error.

Notes
- These are manual checks designed for quick QA of the interactive page. If you want, I can add automated browser tests (e.g., Playwright) next.
