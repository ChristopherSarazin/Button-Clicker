function removebutton(){
    // after "Add Definition" has been pressed
    // remove it
    var destroy = document.getElementById("adddef");
    destroy.remove();
}
var liked = 'You liked this definiton'

function changelogin(){
    // change login to logout after pressed
    // bouns if you can get it to constantly change it
    if (login.innerText === "Login"){
        login.innerText = "Logout";
    } else {
        login.innerText = "Login";
    }
}