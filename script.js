
let board = document.querySelector('.board')

function populate(boardSize){
    board.style.gridTemplateColumns = `repeat(${boardSize} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${boardSize} ,1fr)`;
    let amount = boardSize*boardSize;
    
    for(let i=0; i<amount; i++){
        const square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', changeColor)
        square.addEventListener('mousedown', changeColor)
        board.appendChild(square);
    }
}

function changeColor(e){
    if(e === 'mouseover' && !(e === 'mousedown')){
        return;
    }
    
}

populate(16)

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