var btn_name = document.getElementById('contact');
btn_name.className += " active";

function myFunction() {
    var x = document.getElementById("gradient-nav");
    if (x.className === "gradient-nav") {
      x.className += " responsive";
    } else {
      x.className = "gradient-nav";
    }
  }
  