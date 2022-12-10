let gameCanvas = document.getElementById("game"),
  netShaft = document.getElementById("net-shaft"),
  mouseX = 0,
  mouseY = 0;

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
    console.log("inside canvas");
    //   curX = mouseX;
    //   curY = mouseY;
  }
};
