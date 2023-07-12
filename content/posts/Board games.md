---
title: Board games
image: '/zug-1.jpg'
---

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
      <a href="https://cuteotter.eu">Wien - MASSIVE map with plenty of new functionality. Trams, Market, Stock exchange, Concessions... Click to view.</a>
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
      gameText.innerHTML = '<a href="https://cuteotter.eu">Wien - MASSIVE map with plenty of new functionality. Trams, Market, Stock exchange, Concessions... Click to view.</a>';
    } else if (expansionName === 'other') {
      gameImage.src = '/zug-yugo.jpg';
      gameImage.alt = 'Other Ticket to Ride expansions';
      gameText.innerHTML = '<a href="https://drive.google.com/drive/folders/1c7TN1Roqe0-xuOtvqjD4hB7EzODf4afd?usp=sharing">We\'ve also created a few other expansions. Yugoslavia with a unique country rule, and Transsylvania. Click to access the files.</a>';
    } else if (expansionName === 'ghostgame') {
      gameImage.src = '/ghostgame-secret.jpg';
      gameImage.alt = 'Ghost game';
      gameText.textContent = 'TBD Summer 2023';
    }
  }

  // Set default to 'wien'
  openExpansion('wien');
</script>
