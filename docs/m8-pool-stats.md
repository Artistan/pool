---
layout: page
title: M8 Pool Stats"
permalink: /m8-pool-stats/
---

# m8 Pool Stats

This page provides an overview of key metrics for the **M8** Pool statistics. 

## Summary

We will create a score keeping build here for tracking M8 Pool League scores. This is a form of 8ball billiards.

## Pool League Scores

use jquery to do the live updates logic for math on the columns and addition of additional columns for rounds. <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

create a table here
1 on 1 players (2 total players) per match

there should be a header row which identifies the information in column.
there should be a row for each player which starts with player information, these all have html inputs

following those columns is the same columns per player to keep track of scores 
- team #
- player #
- first name
- last name
- rating - this is an integer from 10 to 250
- Safeties - this is a counter for tracking number of safties played per player
- Round Scores - 1 column per round
   - This can be anywhere from 1 to 100 columns
   - do not add a column for an additional round until the current round score is logged.
   - scores is anywhere from 8 - 15 for the winner and 0 - 7 for the looser.
- a column after the round scores should maintain a total sum of all the round scores
- when the total sum of the round scores exceeds either player's rating, then the match is done
   - both players scores exceed the rating at the end of the match, then the winner with the most points for the last round is the winner of the match
   - otherwise the player that exceeded their rating is the winner of the match- 
- a column after the total scores will show the bonus for the winner which default to 100 points, 0 points for the loser
- a column at the end of the table, will be the total points plus bonus for each player

there is also a row under these for keeping track of "innings"
an inning is whenever the home team player (on top) returns to the pool table to shoot again.


- **Last updated:** {{ "now" | date: "%Y-%m-%d %H:%M %Z" }}
