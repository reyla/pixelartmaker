// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  var table = document.getElementById('pixelCanvas');
  // clear any existing grid cells
  $('#pixelCanvas').children().remove();
  // function below adds table rows and cells to create the grid
  for(let x = 0; x < height; ++x) {
    var row = table.insertRow(0);
    for(let i = 0; i < width; ++i) {
    var cell = row.insertCell(0);
    }
  }
}


// submit button runs the grid build
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  makeGrid();
});


// grid cell changes to selected color when user clicks on it
$('#pixelCanvas').on('click', 'td', function (){
  const color = $('#colorPicker').val();
  $(this).css('background-color', color);
});
