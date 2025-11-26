/* m8-pool-stats.js
   Basic scaffold to manage rounds, scoring and winner detection using jQuery.
*/

;(function($){
  const MAX_ROUNDS = 100;
  let state = {
    rounds: 0,
    innings: 0,
    matchEnded: false
  };

  function showMessage(text, timeout = 3000){
    try{
      const $el = $('#m8-status');
      if (!$el.length) return;
      $el.text(text).removeAttr('hidden');
      setTimeout(()=>{ $el.attr('hidden',''); }, timeout);
    }catch(e){ console.warn('showMessage failed', e); }
  }

  function init(){
    console.log('m8-pool-stats init');
    $('#add-round').on('click', addRound);
    $('#inning-add').on('click', addInning);
    $('#export-json').on('click', exportJSON);
    $('#import-json').on('click', importJSON);
    $('#reset-match').on('click', resetMatch);
    $(document).on('click', '.safety-incr', onSafetyInc);
    $(document).on('click', '.safety-decr', onSafetyDec);
    // validate rating bounds on change
    $(document).on('change', '.rating', function(){
      const v = Number($(this).val()||0);
      let changed = false;
      if (v < 10){ $(this).val(10); changed = true; }
      if (v > 250){ $(this).val(250); changed = true; }
      if (changed) showMessage('Rating clamped to 10–250');
      recalcTotals();
      saveState();
    });
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
    if (state.rounds >= MAX_ROUNDS){ showMessage('Maximum rounds reached'); return; }
    if (state.matchEnded){ showMessage('Match already ended'); return; }
    state.rounds += 1;
    const r = state.rounds;
    // header
    $('#rounds-headers').append(`<span class="round-header">R${r}</span>`);
    // add inputs for each player
    $('#m8-score-table tbody .player-row').each(function(){
      const player = $(this).data('player');
      const $cell = $(this).find('.rounds');
      const input = $(`<input type="number" class="round-score" data-round="${r}" data-player="${player}" min="0" max="15" />`);
      input.on('input', onScoreInput);
      // enforce numeric bounds on change and report when clamped
      input.on('change', function(){
        const raw = $(this).val();
        let v = Number(raw);
        if (isNaN(v)){
          $(this).val('');
          showMessage('Non-numeric score removed');
          return;
        }
        let clamped = false;
        if (v < 0){ v = 0; clamped = true; }
        if (v > 15){ v = 15; clamped = true; }
        $(this).val(v);
        if (clamped) showMessage('Score clamped to 0–15');
      });
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
    if (allFilled && state.rounds < MAX_ROUNDS && !state.matchEnded){
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
      // lock further editing after a winner is decided
      state.matchEnded = true;
      $('.round-score').prop('disabled', true);
      $('#add-round').prop('disabled', true);
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
    try{ alert('Match exported as m8-match.json'); }catch(e){}
  }

  function importJSON(){
    if (!confirm('Importing JSON will replace the current match state. Continue?')) return;
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'application/json';
    input.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ev => {
        try{ const data = JSON.parse(ev.target.result); restoreState(data); alert('Match imported'); }
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
    state.matchEnded = false;
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
    // if a winner already exists in imported state, lock UI
    const players = collectState().players || [];
    const hasWinner = players.some(p => Number(p.rounds && p.rounds.length && (p.rounds.reduce((a,b)=>a+Number(b||0),0) > Number(p.rating||0))));
    if (hasWinner){
      // perform detection to apply bonus and lock
      detectWinnerAndBonuses();
    }
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
    state.rounds = 0; state.innings = 0; state.matchEnded = false;
    $('#round-count').text('Rounds: 0'); $('#inning-count').text('0');
    // re-enable inputs and controls
    $('.round-score').prop('disabled', false);
    $('#add-round').prop('disabled', false);
    if (!skipSave) saveState();
  }

  // initialize on DOM ready
  $(init);

})(jQuery);
