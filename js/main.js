// const prompt = require("prompt-sync")();

/* cache elements */
const output = document.querySelector(".main-container");

const inputContainer = document.querySelector(".input-container");
// output.appendChild(inputContainer);

const betLabelEl = document.createElement("label");
const betInputEl = document.createElement("input");

betInputEl.setAttribute("id", "bet-input");
betInputEl.setAttribute("placeholder", "Enter Bet");
betLabelEl.innerHTML = "<h3><strong>Bet</stron><h3> ";
betLabelEl.style.color = "#fff"

const lineInputEl = document.createElement("input");
const lineLabelEl = document.createElement("label");

lineInputEl.setAttribute("id", "line-input");
lineInputEl.setAttribute("placeholder", "Enter Line");
lineLabelEl.innerHTML = "<h3><strong>Line</stron><h3> ";
lineLabelEl.style.color = "#fff";


inputContainer.appendChild(betLabelEl);
inputContainer.appendChild(betInputEl);
inputContainer.appendChild(lineLabelEl);
inputContainer.appendChild(lineInputEl);



const btn = document.createElement("button");
btn.setAttribute("id","spin-btn");
btn.textContent = "SPIN"
output.appendChild(btn);
console.log(btn);







