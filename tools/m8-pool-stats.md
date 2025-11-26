---
layout: stats
title: M8 Pool Stats
permalink: /tools/m8-pool-stats/
description: Interactive score keeping page for M8 Pool League with rounds, totals, and export/import.
tags:
  - billiards
  - scoring
  - pool
categories: 
  - billiards
  - scoring
  - pool
---

# m8 Pool Stats

This page provides an overview of key metrics for the **M8** Pool statistics. 

## Summary

We will create a score keeping build here for tracking M8 Pool League scores. This is a form of 8ball billiards.

## Pool League Scores

Add scores and live-updating controls below. The page includes a small JS and CSS scaffold and loads jQuery for DOM handling.

<link rel="stylesheet" href="/assets/css/m8-pool-stats.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="/assets/js/m8-pool-stats.js"></script>

<div id="m8-pool-app">
   <div class="controls">
      <button id="export-json" type="button">Export JSON</button>
      <button id="import-json" type="button">Import JSON</button>
      <button id="reset-match" type="button">Reset</button>
   </div>

   <div id="m8-status" role="status" aria-live="polite" class="m8-status" hidden></div>

   <table id="m8-score-table">
      <thead>
         <tr>
            <th>Team #</th>
            <th>Player #</th>
            <th>First</th>
            <th>Last</th>
            <th>Rating</th>
            <th>Safeties</th>
            <th class="rounds-header">Rounds</th>
            <th>Total</th>
            <th>Bonus</th>
            <th>Final Points</th>
         </tr>
         <tr id="rounds-row">
            <th colspan="6"></th>
            <th id="rounds-headers"></th>
            <th></th>
            <th></th>
            <th></th>
         </tr>
      </thead>
      <tbody>
         <tr class="player-row" data-player="1">
            <td><input type="number" class="team-number" value="1" min="1" aria-label="Team number player 1"></td>
            <td><input type="number" class="player-number" value="1" min="1" aria-label="Player number player 1"></td>
            <td><input type="text" class="first-name" value="" aria-label="First name player 1"></td>
            <td><input type="text" class="last-name" value="" aria-label="Last name player 1"></td>
            <td><input type="number" class="rating" value="100" min="10" max="250" aria-label="Rating player 1"></td>
            <td>
               <button class="safety-decr" type="button" aria-label="Decrease safeties">-</button>
               <input type="number" class="safeties" value="0" min="0" aria-label="Safeties player 1">
               <button class="safety-incr" type="button" aria-label="Increase safeties">+</button>
            </td>
            <td class="rounds" data-player="1">
               <!-- round score inputs will be appended here -->
            </td>
            <td class="total"><span class="total-val" aria-live="polite">0</span></td>
            <td class="bonus"><span class="bonus-val" aria-live="polite">0</span></td>
            <td class="final"><span class="final-val" aria-live="polite">0</span></td>
         </tr>

         <tr class="player-row" data-player="2">
            <td><input type="number" class="team-number" value="1" min="1" aria-label="Team number player 2"></td>
            <td><input type="number" class="player-number" value="2" min="1" aria-label="Player number player 2"></td>
            <td><input type="text" class="first-name" value="" aria-label="First name player 2"></td>
            <td><input type="text" class="last-name" value="" aria-label="Last name player 2"></td>
            <td><input type="number" class="rating" value="100" min="10" max="250" aria-label="Rating player 2"></td>
            <td>
               <button class="safety-decr" type="button" aria-label="Decrease safeties">-</button>
               <input type="number" class="safeties" value="0" min="0" aria-label="Safeties player 2">
               <button class="safety-incr" type="button" aria-label="Increase safeties">+</button>
            </td>
            <td class="rounds" data-player="2">
               <!-- round score inputs will be appended here -->
            </td>
            <td class="total"><span class="total-val" aria-live="polite">0</span></td>
            <td class="bonus"><span class="bonus-val" aria-live="polite">0</span></td>
            <td class="final"><span class="final-val" aria-live="polite">0</span></td>
         </tr>
      </tbody>
   </table>

   <div class="round-controls">
      <button id="add-round">Add Round</button>
      <span id="round-count">Rounds: 0</span>
   </div>

   <div class="innings-row">
      <label>Innings:</label>
      <button id="inning-add">Add Inning</button>
      <span id="inning-count">0</span>
   </div>
</div>

Notes:
- The table has two player rows (home/top is player 1). Round score inputs will be added dynamically.
- A new round should only be added after the current round's scores are entered for both players; the JS scaffold handles this behavior.



- **Last updated:** {{ "now" | date: "%Y-%m-%d %H:%M %Z" }}
