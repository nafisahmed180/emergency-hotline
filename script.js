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

function addCallToHistory(serviceName, serviceNumber) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const date = now.toLocaleDateString();

  const historyCard = document.createElement("div");
  historyCard.className =
    "flex justify-between items-center bg-[#F9FAFB] p-4 rounded-xl shadow";

  historyCard.innerHTML = `
    <div>
      <h2 class="text-black font-semibold text-lg">${serviceName}</h2>
      <p class="text-gray-500 text-sm">${serviceNumber}</p>
    </div>
    <div class="text-right">
      <p class="text-gray-600 text-sm">${time}</p>
      <p class="text-gray-400 text-xs">${date}</p>
    </div>
  `;

  callHistory.append(historyCard);
}

callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.getAttribute("data-service");
    const serviceNumber = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("⚠️ Not enough coins! You need at least 20 coins.");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert(`📞 Calling ${serviceName} at ${serviceNumber}...`);
    addCallToHistory(serviceName, serviceNumber);
  });
});

const clearBtn = document.querySelector(".clear-history-btn");
const callHistoryList = document.querySelector(".call-history-list");

clearBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});

const copyButton = document.querySelector(".copy-btn");
const textToCopy = document.querySelector(".card-text");
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(textToCopy.textContent).then(
    () => {
      alert("✅ Copied to clipboard!");
    },
    () => {
      alert("❌ Failed to copy!");
    }
  );
});
