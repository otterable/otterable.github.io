---
title:  Geocaches
image:  '/artAW.png'
---

test
<style>
  .board-game-button {
    font-size: 20px;
    padding: 12px 24px;
  }
</style>

<div class="centered-text">
  <div id="board-games" style="margin-bottom: 2em;">
    <button class="board-game-button" onclick="openExpansion('wien')">Ticket to Ride - Wien</button>
    <button class="board-game-button" onclick="openExpansion('other')">Other TTR expansions</button>
    <button class="board-game-button" onclick="openExpansion('ghostgame')">Ghost game</button>
  </div>

  <div id="game-details">
    <img id="game-image" src="/zug-1.jpg" alt="Ticket to Ride - Wien" style="margin-bottom: 1em;">
    <p id="game-text" style="font-size: 30px; margin-top: 2em;">
      <a href="https://cuteotter.eu">Wien - MASSIVE map with plenty of new functionality</a>
    </p>
  </div>
</div>

<script>
  function openExpansion(expansionName) {
    var gameImage = document.getElementById('game-image');
    var gameText = document.getElementById('game-text');

    if (expansionName === 'wien') {
      gameImage.src = '/zug-1.jpg';
      gameImage.alt = 'Ticket to Ride - Wien';
      gameText.innerHTML = '<a href="https://cuteotter.eu">Wien - MASSIVE map with plenty of new functionality</a>';
    } else if (expansionName === 'other') {
      gameImage.src = '/zug-1a.jpg';
      gameImage.alt = 'Other Ticket to Ride expansions';
      gameText.textContent = 'XD';
    } else if (expansionName === 'ghostgame') {
      gameImage.src = '/zug-2.png';
      gameImage.alt = 'Ghost game';
      gameText.textContent = 'EXOL';
    }
  }

  // Set default to 'wien'
  openExpansion('wien');
</script>
