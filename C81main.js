var canvas= document.getElementById("HTMLcanvas");
var ctx = canvas.getContext("2d");

function loadLogo() {

    color = "blue";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(200, 200, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "black";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(300, 200, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "red";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(400, 200, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "yellow";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(250, 240, 40, 0, 2*Math.PI);
    ctx.stroke();

    color = "green";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(350, 240, 40, 0, 2*Math.PI);
    ctx.stroke();

}

function clearArea() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

}