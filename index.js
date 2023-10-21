
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



const pencil = document.getElementById("pencil");

let isPencilActive = false; // intially the pencil is inactive.

// const colorPicker = document.getElementById("color-picker");

// colorPicker.addEventListener("change", () => {
//     drawingColor = colorPicker.value ;
//     console.log(drawingColor);
// });

let x = 0;
let y = 0;

function onPencilClick() {
  // console.log("Click")
  pencil.classList.toggle("active");
  isPencilActive = !isPencilActive; // enabling the drawing
  // isPencilActive = !false = true
  if (isPencilActive) {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", startDrawing);
  }
}

pencil.addEventListener("click", onPencilClick);

function startDrawing(e) {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
}

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    x = e.offsetX;
    y = e.offsetY;
  }
  
  function stopDrawing() {
    isDrawing = false;
  }
  