/* m8-pool-stats.js
   Basic scaffold to manage rounds, scoring and winner detection using jQuery.
*/

;(function($){
  const MAX_ROUNDS = 100;
  let state = {
    rounds: 0,
    innings: 0
  };

  function init(){
    console.log('m8-pool-stats init');
    $('#add-round').on('click', addRound);
    $('#inning-add').on('click', addInning);
    $('#export-json').on('click', exportJSON);
    $('#import-json').on('click', importJSON);
    $('#reset-match').on('click', resetMatch);
    $(document).on('click', '.safety-incr', onSafetyInc);
    $(document).on('click', '.safety-decr', onSafetyDec);
    loadState();
    if (state.rounds === 0) addRound();
  }

  function onSafetyInc(e){
    const $input = $(e.target).siblings('.safeties');
    const val = Number($input.val()||0)+1;
    $input.val(val).trigger('change');
  }

  function onSafetyDec(e){
    const $input = $(e.target).siblings('.safeties');
    const val = Math.max(0, Number($input.val()||0)-1);
    $input.val(val).trigger('change');
  }

  function addRound(){
    if (state.rounds >= MAX_ROUNDS) return;
    state.rounds += 1;
    const r = state.rounds;
    // header
    $('#rounds-headers').append(`<span class="round-header">R${r}</span>`);
    // add inputs for each player
    $('#m8-score-table tbody .player-row').each(function(){
      const player = $(this).data('player');
      const $cell = $(this).find('.rounds');
      const input = $(`<input type="number" class="round-score" data-round="${r}" data-player="${player}" min="0" />`);
      input.on('input', onScoreInput);
      $cell.append(input);
    });
    $('#round-count').text(`Rounds: ${state.rounds}`);
    saveState();
  }

  function onScoreInput(){
    recalcTotals();
    autoAddRoundIfComplete();
    saveState();
  }

  function autoAddRoundIfComplete(){
    const r = state.rounds;
    if (r === 0) return;
    const inputs = $(`.round-score[data-round="${r}"]`);
    if (inputs.length === 0) return;
    // check that every player for this round has a value
    let allFilled = true;
    inputs.each(function(){ if ($(this).val() === '') allFilled = false; });
    if (allFilled && state.rounds < MAX_ROUNDS){
      // only add one more round and avoid adding multiple times rapidly
      if ($(`.round-score[data-round="${r+1}"]`).length === 0) addRound();
    }
  }

  function recalcTotals(){
    $('#m8-score-table tbody .player-row').each(function(){
      const $row = $(this);
      const rating = Number($row.find('.rating').val() || 0);
      let sum = 0;
      $row.find('.round-score').each(function(){ sum += Number($(this).val() || 0); });
      $row.find('.total').text(sum);
      // determine winner later
    });
    detectWinnerAndBonuses();
  }

  function detectWinnerAndBonuses(){
    const $rows = $('#m8-score-table tbody .player-row');
    const players = [];
    $rows.each(function(){
      const $r = $(this);
      players.push({
        el: $r,
        player: $r.data('player'),
        rating: Number($r.find('.rating').val()||0),
        total: Number($r.find('.total').text()||0)
      });
    });
    // clear winner state
    $rows.removeClass('winner');
    players.forEach(p => p.el.find('.bonus').text('0'));

    const exceeded = players.filter(p => p.total > p.rating);
    if (exceeded.length === 0) return;
    let winner = null;
    if (exceeded.length === 1) winner = exceeded[0];
    else if (exceeded.length === 2){
      // tie-breaker: compare last round points
      const lastRound = state.rounds;
      if (lastRound === 0) return;
      const vals = players.map(p => {
        const input = p.el.find(`.round-score[data-round="${lastRound}"]`);
        return Number(input.val() || 0);
      });
      if (vals[0] === vals[1]){
        // perfect tie; leave no winner
        return;
      }
      winner = vals[0] > vals[1] ? players[0] : players[1];
    }
    if (winner){
      winner.el.addClass('winner');
      winner.el.find('.bonus').text('100');
    }
    // update finals
    players.forEach(p => {
      const bonus = Number(p.el.find('.bonus').text()||0);
      const finalPoints = p.total + bonus;
      p.el.find('.final').text(finalPoints);
    });
  }

  function addInning(){
    state.innings = (state.innings || 0) + 1;
    $('#inning-count').text(state.innings);
    saveState();
  }

  function exportJSON(){
    const data = collectState();
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'm8-match.json'; document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  }

  function importJSON(){
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'application/json';
    input.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ev => {
        try{ const data = JSON.parse(ev.target.result); restoreState(data); }
        catch(err){ alert('Invalid JSON'); }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function collectState(){
    const players = [];
    $('#m8-score-table tbody .player-row').each(function(){
      const $r = $(this);
      const player = { player: $r.data('player'), team: $r.find('.team-number').val(), playerNumber: $r.find('.player-number').val(), first: $r.find('.first-name').val(), last: $r.find('.last-name').val(), rating: $r.find('.rating').val(), safeties: $r.find('.safeties').val(), rounds: [] };
      $r.find('.round-score').each(function(){ player.rounds.push($(this).val()); });
      players.push(player);
    });
    return { rounds: state.rounds, innings: state.innings, players };
  }

  function restoreState(data){
    if (!data) return;
    // reset UI
    resetMatch(true);
    state.rounds = data.rounds || 0;
    state.innings = data.innings || 0;
    for (let i=0;i<state.rounds;i++) addRound();
    if (data.players && data.players.length){
      data.players.forEach(p => {
        const $row = $(`#m8-score-table tbody .player-row[data-player="${p.player}"]`);
        $row.find('.team-number').val(p.team);
        $row.find('.player-number').val(p.playerNumber);
        $row.find('.first-name').val(p.first);
        $row.find('.last-name').val(p.last);
        $row.find('.rating').val(p.rating);
        $row.find('.safeties').val(p.safeties);
        (p.rounds||[]).forEach((val, idx) => {
          const r = idx+1;
          $row.find(`.round-score[data-round="${r}"]`).val(val);
        });
      });
    }
    $('#inning-count').text(state.innings || 0);
    recalcTotals();
    saveState();
  }

  function saveState(){
    try{ localStorage.setItem('m8-match', JSON.stringify(collectState())); }
    catch(e){}
  }

  function loadState(){
    try{
      const raw = localStorage.getItem('m8-match');
      if (raw){ restoreState(JSON.parse(raw)); }
    }catch(e){}
  }

  function resetMatch(skipSave){
    // clear round headers and inputs
    $('#rounds-headers').empty();
    $('#m8-score-table tbody .player-row').each(function(){
      $(this).find('.rounds').empty();
      $(this).find('.total, .bonus, .final').text('0');
      $(this).removeClass('winner');
      $(this).find('.safeties').val('0');
    });
    state.rounds = 0; state.innings = 0; $('#round-count').text('Rounds: 0'); $('#inning-count').text('0');
    if (!skipSave) saveState();
  }

  // initialize on DOM ready
  $(init);

})(jQuery);
