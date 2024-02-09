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
btn.setAttribute("id", "spin-btn");
btn.textContent = "SPIN";
output.appendChild(btn);


const symbols = ['html','javascript','nestjs','npm','typescript','react'];
const column1 = document.getElementById('col-1');
const column2 = document.getElementById('col-2');
const column3 = document.getElementById('col-3');

// functtion runs loop through symbols array 
// returns 3 random elements from the array for col 1-3
const spinReel = (col) =>{
    const randomIdx = Math.floor(Math.random() * symbols.length);
    // col. innerHTML = "";
    for (let i= 0; i < 3; i++) {
        const symbolIndex = (randomIdx + i) % symbols.length;
        const symbol = symbols[symbolIndex];
        const image = document.createElement('img');
        image.src = `assets/images/${symbol}.png`; 
        image.alt = symbol;
        col.appendChild(image)
        console.log(symbol);
        
    }

}


const spin = () =>{
    spinReel(column1);
    spinReel(column2);
    spinReel(column3);
}


const spinButton = document.getElementById("spin-btn");
spinButton.addEventListener("click", spin);








console.log(column1);
console.log(column2);
console.log(column3);










