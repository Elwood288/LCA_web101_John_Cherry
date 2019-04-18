//test
 function testAlert() {
    alert("Hello! I am an alert box!");
}

//Variables
var gameMarker= "X";
var space1 = document.getElementById("space1").innerHTML;
// Change symbol buttons
// function changeMarkerToX(){
//     gameMarker = "X";
//     console.log("The X button was clicked!")
// }

// function changeMarkerToO(){
//     gameMarker = "O";
//     console.log("The O button was clicked!")
// }

// On click place symbom in box
function placeMarker(clicked_id){
    if (document.getElementById(clicked_id).innerHTML === ""){
        document.getElementById(clicked_id).innerHTML = gameMarker; 
        console.log(space1);
        if (gameMarker === "X"){
            gameMarker = "O";
        }
        else{
            gameMarker= "X";
        }
    }
}

var space1 = document.getElementById("space1").innerHTML;
    
