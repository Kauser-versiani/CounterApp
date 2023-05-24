let mainTitle = document.querySelector("#counter");
let currentValue = 0;
let btnIncrement = document.querySelector("#increment");
let btnReset = document.querySelector("#reset");
let btnDecrement = document.querySelector("#decrement");

btnIncrement.addEventListener("click" , () =>{
 currentValue += 1;
mainTitle.textContent = currentValue;
})
btnReset.addEventListener("click" , () =>{
    currentValue = 0;
   mainTitle.textContent = currentValue;
})
btnDecrement.addEventListener("click" , () =>{
    currentValue -= 1;
   mainTitle.textContent = currentValue;
})

