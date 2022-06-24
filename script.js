
let board = document.querySelector('.board')
let color = 'black'
let borderCheck = document.querySelector('.border-check');
let squaresArr = [];
var currentSize = 16;
let reset = document.querySelector('.reset');
let colorPicker = document.querySelector('.color-picker')
let mouseDown = false
colorPicker.oninput = (e) => changeColor(e.target.value);
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function populate(boardSize){
    
    board.style.gridTemplateColumns = `repeat(${boardSize} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${boardSize} ,1fr)`;
    let amount = boardSize*boardSize;
    currentSize=boardSize;
    for(let i=0; i<amount; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.style.cursor = 'pointer';
        squaresArr.push(square);
        square.addEventListener('mouseover', paint)
        square.addEventListener('mousedown', paint)
        
        board.appendChild(square);
    }
}



function resetBoard(){
    squaresArr.forEach(square =>{
        square.style.backgroundColor ='white';
    })
}

function paint(e){
    if(e.type === 'mouseover' && !mouseDown)
        return;

    if(color === 'rainbow'){
        const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else{
        this.style.backgroundColor = color;
    }
    
}
function changeColor(newColor){
    
    color = newColor;
}

function toggleBorder(){
    if (borderCheck.checked){
        squaresArr.forEach(square => {
            square.style.border = '1px solid gray';
        });
    }
    else{
        squaresArr.forEach(square => {
            square.style.border = 'none';
        });
    }
}
populate(currentSize)

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
slider.onchange = (e) => changeSize(e.target.value)
function changeSize(newSize){
    resetBoard();
    currentSize = newSize;
    squaresArr.forEach(square => {
        square.remove()
    })
    populate(currentSize);
    if(borderCheck.checked){
        squaresArr.forEach(square => {
            square.style.border = '1px solid black';
     })
    }
}