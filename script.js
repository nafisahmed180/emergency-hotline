const heartCount = document.getElementById("heart-count");
let count = 0;

const hearts = document.querySelectorAll(".heart-btn");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    count++;
    heartCount.textContent = count;
    return;
  });
});

let coins = 100;
const coinCount = document.querySelector(".coin-count");
const callHistory = document.querySelector(".call-history-list");
const callBtns = document.querySelectorAll(".call-btn");
const clearHistoryBtn = document.querySelector(".clear-history");

coinCount.textContent = coins;

callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.getAttribute("data-service");
    const serviceNumber = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const li = document.createElement("li");
    li.textContent = `${serviceName} (${serviceNumber}) - ${date} ${time}`;
    callHistory.append(li);
  });
});
