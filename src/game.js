const testButton = document.querySelector("button")

var width = 10;

testButton.onclick = () => {
    console.log("WOOO")
    testButton.innerHTML += "."
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

