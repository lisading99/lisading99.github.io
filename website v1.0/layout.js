// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

function myFunction() {
  var x = document.getElementById("gradient-nav");
  if (x.className === "gradient-nav") {
    x.className += " responsive";
  } else {
    x.className = "gradient-nav";
  }
}
