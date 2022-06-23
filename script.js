var slider = document.getElementById("slider")
var size = document.getElementById("size")

size.innerHTML = `${slider.value}x${slider.value}`;

slider.oninput = function(){
    size.innerHTML = `${this.value}x${this.value}`;
}

slider.addEventListener("input", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(0, 174, 255) ' + x +'%, white ' + x +'%)';
    slider.style.background=color;
})