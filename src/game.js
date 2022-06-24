const button = document.querySelector("button")
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const SIZE = 50
const SCALE = 5
canvas.setAttribute("height", `${SIZE*SCALE}`)
canvas.setAttribute("width", `${SIZE*SCALE}`)

let boardData = new Array(SIZE*SIZE).fill(0);

function updateScreen (){
    for(let x = 0; x < SIZE; x++){
        for(let y = 0; y < SIZE; y++){
            if (boardData[x*SIZE+y] === 1){
                ctx.rect(x * SCALE, y * SCALE, SCALE, SCALE);
                ctx.fill();
            }
        }
    }
}

button.onclick = () => {


}

canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left)/SCALE)
    const y = Math.floor((e.clientY - rect.top)/SCALE)
    boardData[x*SIZE+y] = (boardData[x*SIZE+y]==="1")?0:1;
    updateScreen()
})
