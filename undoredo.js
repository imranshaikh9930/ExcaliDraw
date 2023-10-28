const undo = document.querySelector(".undo");

undo.addEventListener("click", Undo);

const redoStack = [];
function Undo() {
  if (historyIndex) {
    const undoneAction = history.pop();
    redoStack.push(undoneAction);

    historyIndex--;

    if (historyIndex <= 0) {
      c.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      c.putImageData(history[historyIndex - 1], 0, 0);
    }
  }
}

const redo = document.querySelector(".redo");

redo.addEventListener("click", Redo);

function Redo() {
  if (redoStack.length > 0) {
    const redoneAction = redoStack.pop();
    history.push(redoneAction);
    historyIndex++;

    c.putImageData(redoneAction, 0, 0);
  }
}

document.getElementById("redo").addEventListener("click", Redo);
document.querySelector("#undo1").addEventListener("click", Undo);
document.querySelector("#redo1").addEventListener("click", Redo);
