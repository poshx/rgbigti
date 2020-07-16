window.addEventListener('load', rangeSlider);

function rangeSlider(value) {
    var red = document.querySelector('.rangeRed').value;
    var green = document.querySelector('.rangeGreen').value;
    var blue = document.querySelector('.rangeBlue').value;
    var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    document.querySelector('.txtRed').value = red;
    document.querySelector('.txtGreen').value = green;
    document.querySelector('.txtBlue').value = blue;

    document.querySelector('.color').style.background = rgb;
}