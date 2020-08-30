function Cricles(x, y, radius) {
    this.x = x;
    this.y = y
    this.radius = radius;
}
function getRamdomHex() {
    return Math.floor(Math.random()*225);
}
function getRamdomColor() {
    let red = getRamdomHex();
    let green = getRamdomHex();
    let blue = getRamdomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCricle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRamdomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Cricles(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCricle() {
    for (let i = 0; i < 30; i++){
        createCricle();
    }
}

createMultipleCricle();