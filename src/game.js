const play = document.getElementById("play")
const scamble = document.getElementById("scramble")
const canvas = document.getElementById('canvas');
const para = document.getElementById('data');
const ctx = canvas.getContext('2d');

const SIZE = 25
const SCALE = 10

let calculate = false;

canvas.height = SIZE*SCALE*1
canvas.width = SIZE*SCALE*1

let boardData = new Array(SIZE*SIZE).fill(0);

setInterval(function(){
    if (calculate){
        boardDataNext = new Array(SIZE*SIZE).fill(0);
        for(let x = 0; x < SIZE; x++){
            for(let y = 0; y < SIZE; y++){
                neighbours(x,y, (count) => {
                    if (count === 3) {
                        boardDataNext[x*SIZE+y] = 1
                    }else if (boardData[x*SIZE+y] === 1 && count === 2){
                        boardDataNext[x*SIZE+y] = 1
                    }
                })
            }
        }
        boardData = boardDataNext
        updateScreen()
    }
}, 750);

function updateScreen (){
    para.innerText = boardData;
    for(let x = 0; x < SIZE; x++){
        for(let y = 0; y < SIZE; y++){
            
            if (boardData[x*SIZE+y] === 1){
                ctx.fillStyle = 'black'; 
                ctx.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
            }else{
                ctx.fillStyle = 'lightgrey'; 
                ctx.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
            }
            
        }
    }
}

function neighbours (x, y, callback) {

    let count = 0
    for (let dx = -1; dx < 2; dx++){
        for (let dy = -1; dy < 2; dy++){
            if (dy === 0 && dx === 0)continue;
            if (1 === boardData[((x+dx)%SIZE)*SIZE+(y+dy)%SIZE]){
                count++;
            }
        }
    }
    callback(count)
}

play.onclick = () => {
    calculate = !calculate;
    if (calculate){
        play.innerHTML = "Pause"
    }else{
        play.innerHTML = "Play" 
    }
}
scamble.onclick = () => {
    for(let x = 0; x < SIZE; x++){
        for(let y = 0; y < SIZE; y++){
            if (Math.random() > 0.7){
                boardData[x*SIZE+y] = 1;
            }else{
                boardData[x*SIZE+y] = 0;
            }
       }
    }
    updateScreen()
}

canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left)/SCALE)%SIZE
    const y = Math.floor((e.clientY - rect.top)/SCALE)%SIZE
    boardData[x*SIZE+y] = (boardData[x*SIZE+y] === 1)?0:1;
    updateScreen()
    neighbours(x,y, console.log)
})
