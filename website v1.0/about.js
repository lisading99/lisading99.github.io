var btn_name = document.getElementById('about');
btn_name.className += " active";

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function getTextHeight(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.height;
}

var highlightText = document.getElementsByClassName('hl');
var highlightBox = document.getElementsByClassName('highlight');

for (i = 0; i < highlightText.length; i++) {
    var textWidth = getTextWidth(highlightText[i].textDocument, '16px Montserrat');
    var textHeight = getTextHeight(highlightText[i].textDocument, '16px Montserrat');
    highlightBox[i].style.width = textWidth + "px";
    highlightBox[i].style.height = textHeight + "px";
}

function myFunction() {
    var x = document.getElementById("gradient-nav");
    if (x.className === "gradient-nav") {
      x.className += " responsive";
    } else {
      x.className = "gradient-nav";
    }
  }
  