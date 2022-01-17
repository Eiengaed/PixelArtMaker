const container = document.getElementById("gridContainer");
let colorInput = document.getElementById("color");
let newColor = document.getElementById("colorPalette");
let active = false;
let activeColor;



//creates Grid
//color palette and color picker color wont be resetted when changing grid dimensions
function makeGrid(rows, columns){
  
  container.innerHTML = "";
  const size = 50;
  
  if(rows > size && columns > size){
    rows = size;
    columns = size;
  }else if(rows > size){
    rows = size;
  }else if(columns > size){
    columns = size;
  }

  for(let i = 0; i < rows; i++){
    
    let row = document.createElement("div");
    container.appendChild(row).className = "gridX";
    
    for(let j = 0; j < columns; j++){
      let column = document.createElement("div");
      row.appendChild(column).className = "pixel";
    }
    
  }
  
}

//add the current color to the palette
function addCurrentColorToPalette(){
  let color = document.createElement("div");
  newColor.appendChild(color).className = "pixel2";
  color.style.backgroundColor = colorInput.value;
}

//selects the clicked color so it can change the background color of a cell
newColor.addEventListener("click", event => {
  const target = event.target;
  const tColor = target.style.backgroundColor;
  if(target.matches("div.pixel2")){
    active = true;
    let children = document.getElementById("colorPalette").getElementsByClassName("pixel2");
    for (const child of children) {
      child.style.border = "";
    }
    target.style.border = "2px dotted black";
    activeColor = target.style.backgroundColor;
  }
})

//deselects the color from the color palette and switches to the color from the color picker
colorInput.addEventListener("click", () => {
    let children = document.getElementById("colorPalette").getElementsByClassName("pixel2");
    for (const child of children) {
      child.style.border = "";
    }
    active = false;
})

//colors a cell depending on what color is selected
container.addEventListener("click", event => {
  const target = event.target;
  if(target.matches("div.pixel") && active){
      target.style.backgroundColor = activeColor;
      console.log("Active color: " + activeColor);   
  }else if(target.matches("div.pixel")){
    target.style.backgroundColor = colorInput.value;
  }
})


