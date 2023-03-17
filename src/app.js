/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.showRandomCard = () => {
  const card = {
    symbol: null,
    value: null
  };

  const cardSymbols = ["♦", "♥", "♠", "♣"];

  const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

  const getRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const randomValue = getRandom(cardValues);

  const randomSymbol = getRandom(cardSymbols);

  const setCardState = () => {
    card.symbol = randomSymbol;
    card.value = randomValue;
  };

  const getRandomCard = () => {
    setCardState();
    document.querySelector("#card").innerHTML = `
    <div class="card-body bg-white rounded " id="bodyCard">
      <p class="card-text text-start fixed-top px-4" id="symbolCard">${card.symbol}</p>
      <h1 class="card-text mw-100 text-center fw-bold" id="valor">${card.value}</h1>
      <p class="card-text text-end fixed-bottom px-4" id="symbolCard">${card.symbol}</p>
    </div>`;
  };
  getRandomCard();
};
