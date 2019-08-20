// Select color input
var colorChoice = document.getElementById("colorPicker");
// Select size input
var size = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  var canvas = document.getElementById("pixelCanvas");
  canvas.innerHTML = ""  // Clear canvas before making a new one

  for (var r = 0; r < height; r++) {
    var row = document.createElement("tr");
    canvas.appendChild(row);
    for (var c = 0; c < width; c++){
      var column = document.createElement("td");
      row.appendChild(column);
    }
  }

  // Colour selected cells
  canvas.addEventListener("click", function(selection) {
    var color = colorChoice.value;
    if (selection.target.nodeName === 'TD'){
      selection.target.style.backgroundColor = color;
    }
  });
};
