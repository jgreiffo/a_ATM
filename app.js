// Ini account balances
let checkingBalance = 800;
let savingsBalance = 1500;
let inputBuffer = ""; 
let activeScreen = ""; // Track active action ('deposit', 'withdraw', etc.)

// Elements reference
const scrn2 = document.querySelector(".scrn2");
const checkingDisplay = document.querySelector(".balContainer .acctn:nth-child(1)");
const savingsDisplay = document.querySelector(".balContainer .acctn:nth-child(2)");

