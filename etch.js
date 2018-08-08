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

function resetGrid() {
    while(grid.hasChildNodes()){
        grid.removeChild(grid.lastChild);
    }
    createGrid(16);
}

createGrid(32);