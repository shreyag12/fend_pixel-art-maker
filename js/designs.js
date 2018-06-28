// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  clearGrid();
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  var table = document.getElementById("pixelCanvas");
  for(i= 0;i<height;i++)
  {
  	var row = table.insertRow(i);
  	for(j=0;j<width;j++)
  	{
  		var cell = row.insertCell(j);
  	}
  }
  document.getElementById("design").style.display = "block";
}

function clearGrid(){
	$('#pixelCanvas').empty();

}

$(document).ready(function() {

 $('#pixelCanvas').on('click','td' ,function(e) {
 	color = document.getElementById("colorPicker").value;
 	color2 = $(this).css('background-color');
 	$('#dummy').css({ 'color' : color});
 	color_p = $('#dummy').css('color');
 	if(color2 == 'rgba(0, 0, 0)' || color2 == 'rgba(0, 0, 0, 0)' || color2 == 'rgb(255, 255, 255)' || color2 != color_p )
 	{
 		console.log("coloring the cell");
 		$(this).css({ 'background-color': color});
 	}
 	else
 	{ 
 		console.log("removing color from the cell");
 		$(this).css({ 'background-color': '#ffffff'});
 	}
 });

});

function clearColor(){
	console.log("removing color");
	$('#pixelCanvas td').css({ 'background-color' : ""});
}