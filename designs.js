
/**
* @description builds table of cells based on user input for height and width
*/
function makeGrid() {
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  var table = document.getElementById('pixelCanvas');
  // clear any existing grid cells
  $('#pixelCanvas').children().remove();
  // this loop adds table rows and cells to create the grid
  for (let x = 0; x < height; ++x) {
    var row = table.insertRow(0);
    for (let i = 0; i < width; ++i) {
    var cell = row.insertCell(0);
    }
  }
}


/**
* @description these functions only work once DOM is fully loaded
*/
document.addEventListener('DOMContentLoaded', function () {
  /**
  * @description submit button runs the grid function
  */
  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    makeGrid();
  })
  /**
  * @description grid cell changes to selected color when user clicks on it
  */
  $('#pixelCanvas').on('click', 'td', function (){
    const color = $('#colorPicker').val();
    $(this).css('background-color', color);
  })
});
