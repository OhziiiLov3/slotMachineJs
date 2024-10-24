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

// defautl images 
const addDefaultSymbols = () =>{
    spinReel(column1, ['html','javascript','npm']);
    spinReel(column2, ['npm','typescript','react']);
    spinReel(column3, ['javascript','nestjs','typescript']) ;
}



// functtion runs loop through symbols array 
// returns 3 random elements from the array for col 1-3
const spinReel = (col, defaultSymbols = []) =>{
    const randomIdx = Math.floor(Math.random() * symbols.length);
    const symbolToShow = defaultSymbols.length > 0 ? defaultSymbols : symbols;
    const imageContainer = col.querySelector('.image-container');
    imageContainer.innerHTML = "";
    for (let i= 0; i < 36; i++) {
        const symbolIndex = (randomIdx + i) % symbolToShow.length;
        const symbol = symbols[symbolIndex];
        const image = document.createElement('img');
        image.src = `assets/images/${symbol}.png`;
        image.alt = symbol;
        imageContainer.appendChild(image)
        console.log(symbol);
        
    }

}

// adds default symbols when the page loads
document.addEventListener("DOMContentLoaded", addDefaultSymbols)

const spin = (event) =>{
  event.preventDefault();
//     clear and reset animations 
  column1.querySelector('.image-container').style.animation = 'none';
  column2.querySelector(".image-container").style.animation = "none";
  column3.querySelector(".image-container").style.animation = "none";

   // Force reflow to reset animations (important for applying the new animation)
   column1.offsetHeight; 
   column2.offsetHeight; 
   column3.offsetHeight; 

// //   adds the spin animation to class to each col 
column1.querySelector('.image-container').style.animation = 'spin 1s linear infinite';
column2.querySelector('.image-container').style.animation = 'spin 1.2s linear infinite';
column3.querySelector('.image-container').style.animation = 'spin 1.4s linear infinite';
 // Now we will gradually slow down each column at different times
 setTimeout(() => {
  column1.querySelector(".image-container").style.animation = 'spin 1.5s ease-out';
}, 1000); // After 1 second, slow down column 1

setTimeout(() => {
  column2.querySelector(".image-container").style.animation = 'spin 2s ease-out';
}, 1300); // After 1.3 seconds, slow down column 2

setTimeout(() => {
  column3.querySelector(".image-container").style.animation = 'spin 2.5s ease-out';
}, 1600); // After 1.6 seconds, slow down column 3

  // Finally, stop the spin completely and show the final result after it slows down
setTimeout(() => {
  column1.querySelector(".image-container").style.animation = "";
  column2.querySelector(".image-container").style.animation = "";
  column3.querySelector(".image-container").style.animation = "";


  // spinReel(column1);
  // spinReel(column2);
  // spinReel(column3);
}, 2500);

}


const spinButton = document.getElementById("spin-btn");
spinButton.addEventListener("click", spin);








console.log(column1);
console.log(column2);
console.log(column3);










