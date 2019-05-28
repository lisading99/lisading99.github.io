

// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    //var current = document.getElementsByClassName("active");
    //current[0].className = current[0].className.replace("active", "");
    btns[3].className += " active";
  });
}

// simply add the active css to the link since you're currently on that page
var btn_name = document.getElementById('projects');
btn_name.className += " active";
/*
function makeActive(name) {
    var btn = document.getElementById(name);
    element.className += " active";
  
}
*/

/*
$(document).ready(function() {
  function makeActive(nameClass) {
    $(nameClass).click('')
  }
});
*/
/*
var page_list = window.location.pathname.split("/"); 
  var page = page_list[page_list.length -1];
  var btn = document.getElementById(page);*/

function myFunction() {
  var x = document.getElementById("gradient-nav");
  if (x.className === "gradient-nav") {
    x.className += " responsive";
  } else {
    x.className = "gradient-nav";
  }
}
