var mouseEvent="empty";
var lpx,lpy;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="yellow";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mouseDown";
    radius=document.getElementById("radius").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
function clear_area()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    cpmx=e.clientX - canvas.offsetLeft;
    cpmy=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(cpmx,cpmy,radius,0,2*Math.PI)
        ctx.stroke();


    }
    

}