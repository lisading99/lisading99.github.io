
// create array to go through roles
var roles_array = ['developer', 'designer', 'artist', 'student'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var date = new Date();
var time = date.getHours();
$(document).ready(function() {
  var counter = 0;  
  function roles_list() {
    $('#i-am').text("I am a")
    // check if the the word's first letter is a vowel
    for (var x = 0; x < vowels.length; x++) {
      if (roles_array[counter][0] == vowels[x]){
        $('#i-am').text("I am an");
        break;
      }
    }
        $('#roles').text(roles_array[counter]).fadeIn('slow');
          $('#roles').text(roles_array[counter]).fadeOut('slow');
         counter++;
        if (counter == roles_array.length) {
          counter = 0;
        }
    }
  setInterval(roles_list, 2000);
  
  // determine the current time and figure out if it's night or day
 // if (time > 0 && time <= 17) { 
    // must be the day time so display the sky with clouds and hide the night sky
    $('.section-center').hide();
 // }
 // else {
 //   $('#clouds').hide();

 // }
  
});



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
