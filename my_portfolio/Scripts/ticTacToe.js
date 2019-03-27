//test
 function testAlert() {
    alert("Hello! I am an alert box!");
}

//Variables
var gameMarker= "X";

// Change symbol buttons
function changeMarkerToX(){
    gameMarker = "X";
    console.log("The X button was clicked!")
}

function changeMarkerToO(){
    gameMarker = "O";
    console.log("The O button was clicked!")
}

// On click place symbom in box
function placeMarker(clicked_id){
    document.getElementById(clicked_id).innerHTML = gameMarker; 
}