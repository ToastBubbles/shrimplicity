let gameCanvas = document.getElementById("game"),
  netShaft = document.getElementById("net-shaft"),
  mouseX = 0,
  mouseY = 0,
  direction = "",
  lastX = [0, ""];
//     mousemovemethod = function (e) {

//   if (e.pageX < oldx) {
//       direction = "left"
//   } else if (e.pageX > oldx) {
//       direction = "right"
//   }

//   oldx = e.pageX;

// }

onmousemove = function (e) {
  let boundaries = {
    left: gameCanvas.offsetLeft,
    right: gameCanvas.offsetLeft + gameCanvas.offsetWidth,
    top: gameCanvas.offsetTop - this.window.scrollY,
    bottom:
      gameCanvas.offsetTop + gameCanvas.offsetHeight - this.window.scrollY,
  };
  mouseX = e.clientX;
  mouseY = e.clientY;
  //   console.log(boundaries.top, mouseX, boundaries.bottom);

  if (
    boundaries.left < mouseX &&
    boundaries.right > mouseX &&
    boundaries.top < mouseY &&
    boundaries.bottom > mouseY
  ) {
    netShaft.style.left = `${mouseX - boundaries.left - 25}px`;
    netShaft.style.top = `${mouseY - boundaries.top - 1150}px`;
    //   mouseInside = true;
    // console.log("inside canvas");
    //   curX = mouseX;
    //   curY = mouseY;
    if (mouseX < lastX[0]) {
      direction = "left";
    } else if (mouseX > lastX[0]) {
      direction = "right";
    }
    // console.log(direction);

    if (lastX[1] !== direction) {
      console.log("changed!");
      flipNet();
      lastX[1] = direction;
    }

    lastX[0] = mouseX;
  }
};

function flipNet() {
  if (netShaft.classList.contains("flip")) {
    netShaft.classList.remove("flip");
  } else {
    netShaft.classList.add("flip");
  }
}
