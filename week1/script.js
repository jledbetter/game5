
document.onkeyup = keyPress;

function keyPress(e) {

    var keyCode = e.keyCode ? e.keyCode : e.which;

    if (keyCode == '38') {
        document.getElementById("message").innerHTML = "You pressed up";
    }
    
    if (keyCode == '39') {
        document.getElementById("message").innerHTML = "You pressed right";
    }

    if (keyCode == '37') {
        document.getElementById("message").innerHTML = "You pressed left";
    }

    if (keyCode == '40') {
        document.getElementById("message").innerHTML = "You pressed down";
    } 
}
