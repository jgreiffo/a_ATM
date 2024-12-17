// Ini account balances
let checkingBalance = 800;
let savingsBalance = 1500;
let inputBuffer = ""; 
let activeScreen = ""; // Track active action ('deposit', 'withdraw', etc.)

// Elements reference
const scrn2 = document.querySelector(".scrn2");
const checkingDisplay = document.querySelector(".balContainer .acctn:nth-child(1)");
const savingsDisplay = document.querySelector(".balContainer .acctn:nth-child(2)");

// display and balances
function updateBalances() {
    checkingDisplay.textContent = `Checking Account: $${checkingBalance}`;
    savingsDisplay.textContent = `Savings Account: $${savingsBalance}`;
  }
  
  // keypad input
  function handleKeyInput(value) {
    if (value === "CLR") {
      inputBuffer = "";
      scrn2.textContent = "";
    } else if (value === "ENTER") {
      processTransaction();
      inputBuffer = "";
    } else {
      inputBuffer += value;
      scrn2.textContent = inputBuffer;
    }
  }
  
  // Process transactions (Deposit/Withdraw/Check Balance)
  function processTransaction() {
    const amount = parseFloat(inputBuffer);
    if (!amount || amount <= 0) {
      scrn2.textContent = "Invalid Input";
      return;
    }
  
    switch (activeScreen) {
      case "deposit":
        checkingBalance += amount;
        scrn2.textContent = `Deposited $${amount}`;
        break;
  
      case "withdraw":
        if (checkingBalance >= amount) {
          checkingBalance -= amount;
          scrn2.textContent = `Withdrew $${amount}`;
        } else {
          scrn2.textContent = "Insufficient Funds";
        }
        break;
  
      case "checkBalance":
        scrn2.textContent = `Checking: $${checkingBalance}, Savings: $${savingsBalance}`;
        break;
  
      default:
        scrn2.textContent = "Select Option First";
    }
  
    updateBalances();
    activeScreen = ""; // Reset after transaction
  }
  
  // Card Insertion Simulation
  function insertCard() {
    scrn2.textContent = "Welcome! Please Enter Your PIN";
    inputBuffer = "";
    activeScreen = "enterPin";
  }
  
  // Event Listeners for Buttons
  document.querySelector(".btnLeftContainer .btnSelector:nth-child(1)").onclick = () => {
    activeScreen = "deposit";
    scrn2.textContent = "Enter Amount to Deposit:";
  };
  
  document.querySelector(".btnLeftContainer .btnSelector:nth-child(2)").onclick = () => {
    activeScreen = "withdraw";
    scrn2.textContent = "Enter Amount to Withdraw:";
  };
  
  document.querySelector(".btnLeftContainer .btnSelector:nth-child(3)").onclick = () => {
    activeScreen = "checkBalance";
    processTransaction();
  };
  
  document.querySelector(".cardSlot").onclick = insertCard;
  
  // Keypad Listeners
  document.querySelectorAll(".keys").forEach((key) => {
    key.onclick = () => handleKeyInput(key.textContent);
  });
  
  // Initialize Display
  updateBalances();
  