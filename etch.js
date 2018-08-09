let pixelCount = 32;

function createGrid(cols){ 
    let e = document.getElementById('grid');
    for(let i = 0; i < cols; i++){ 
      let col = document.createElement("div"); 
      col.className = "col"; 
      for(let x = 1; x <= cols; x++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.addAttribute = ""
          cell.innerText = '0';
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
    let enteredValue = window.prompt("Enter grid size i.e. 16 or 32");
    if (enteredValue < 2 || enteredValue > 100) {
        alert("Value has to be inbetween 2 and 100");
    } else {
        pixelCount = enteredValue;
        resetGrid(pixelCount)
    }
}



function resetGrid(pixelCount) {
    while(grid.hasChildNodes()){
        grid.removeChild(grid.lastChild);
    }
    createGrid(pixelCount);
}

createGrid(pixelCount);