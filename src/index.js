let gameCanvas = document.getElementById("game"),
  netShaft = document.getElementById("net-shaft"),
  netting = document.getElementById("netting"),
  mouseX = 0,
  mouseY = 0,
  direction = "",
  mousetravel = 0,
  lastX = [0, ""];

var prevEvent, currentEvent;

onmousemove = function (e) {
  let boundaries = {
    left: gameCanvas.offsetLeft,
    right: gameCanvas.offsetLeft + gameCanvas.offsetWidth,
    top: gameCanvas.offsetTop - this.window.scrollY,
    bottom:
      gameCanvas.offsetTop + gameCanvas.offsetHeight - this.window.scrollY,
  };
  currentEvent = e;
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

    if (lastX[0] > -1) {
      mousetravel += Math.max(Math.abs(mouseX - lastX[0]));
    }
    //console.log(mousetravel);

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

var maxSpeed = 0,
  prevSpeed = 0,
  maxPositiveAcc = 0,
  maxNegativeAcc = 0;
setInterval(function () {
  if (prevEvent && currentEvent) {
    var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
    var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
    var movement = Math.sqrt(movementX * movementX + movementY * movementY);

    // document.getElementById("movementX").innerText=movementX;
    // document.getElementById("movementY").innerText=movementY;
    // document.getElementById("movement").innerText=Math.round(movement);

    var speed = 10 * movement; //current speed

    // document.getElementById("speed").innerText=Math.round(speed);
    // document.getElementById("maxSpeed").innerText=Math.round(
    //   speed>maxSpeed?(maxSpeed=speed):maxSpeed
    // );

    var acceleration = 10 * (speed - prevSpeed);

    // document.getElementById("acceleration").innerText=Math.round(
    //   acceleration
    // );

    if (acceleration > 0) {
      // //   document.getElementById("maxPositiveAcceleration").innerText=Math.round(
      //   acceleration>maxPositiveAcc?(maxPositiveAcc=acceleration):maxPositiveAcc
      // );
      netting.style.transform = `scale(${acceleration / 10000}, 1)`;
      console.log(acceleration / 100000);
    } else {
      //   document.getElementById("maxNegativeAcceleration").innerText=Math.round(
      //   acceleration<maxNegativeAcc?(maxNegativeAcc=acceleration):maxNegativeAcc
      // );
    }
  }

  prevEvent = currentEvent;
  prevSpeed = speed;
}, 100);
