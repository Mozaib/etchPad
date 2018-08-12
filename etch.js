let pixelCount = 32;
const resetBtn = document.querySelector('.resetBtn');
const chooseGridBtn = document.querySelector('.changeBtn');

function createGrid(cols){ 
    let e = document.getElementById('grid');
    for(let i = 0; i < cols; i++){ 
      let col = document.createElement("div"); 
      col.className = "col"; 
      for(let x = 1; x <= cols; x++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.addAttribute = ""
          cell.innerText = '';
          col.appendChild(cell); 
          cell.addEventListener('mouseover', darkenPixel);
      } 
      e.appendChild(col); 
    } 
    document.getElementById("code").textContent = e.innerHTML; 
}

function darkenPixel() {
    let setOpacity = this.style.opacity;
    let incrementedOpacity = Number(setOpacity) + 0.1;
        this.style.opacity = incrementedOpacity;
}

function changeGrid(){
    let enteredValue = window.prompt("Enter grid size i.e. 16 or 32, value has to be inbetween 4 and 64");
    if (enteredValue < 4 || enteredValue > 64) {
        alert("Value has to be inbetween 4 and 64");
    } else {
        pixelCount = enteredValue;
        resetGrid(pixelCount);
    }
}

const resetGrid = function(pixelCount) { 
    while(grid.hasChildNodes()){
        grid.removeChild(grid.lastChild);
    }
    createGrid(pixelCount);    
}

resetBtn.addEventListener('click', () => {
    resetGrid(32);
});

chooseGridBtn.addEventListener('click', () => {
    changeGrid();
})

createGrid(pixelCount);