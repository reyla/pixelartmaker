// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  let grid = $('#pixelCanvas');
  // clear any existing grid cells
  grid.children().remove();
  // function below adds table cells and rows to create the grid
  for(let x = 0; x < height; ++x) {
    grid.append('<tr>');
    for(let i = 0; i < width; ++i) {
    $('tr:last').append('<td width="10">&nbsp</td>');
    }
    grid.append('</tr');
  }
  // adds a border on every cell of table
  $('#pixelCanvas').children().css('border', '1px solid black');
};


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
