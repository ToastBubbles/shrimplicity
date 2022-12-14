let gameCanvas = document.getElementById("game"),
  netShaft = document.getElementById("net-shaft"),
  netting = document.getElementById("netting"),
  debug = document.getElementById("debugger"),
  tracker = document.getElementById("tracker"),
  mouseX = 0,
  mouseY = 0,
  direction = "",
  mousetravel = 0,
  lastX = [0, ""],
  lerp = 1,
  acc = 0;
let netFlip = 1;

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
    netFlip = -1;
    netShaft.classList.remove("flip");
  } else {
    netShaft.classList.add("flip");
    netFlip = 1;
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

    var speed = movement; //current speed

    // document.getElementById("speed").innerText=Math.round(speed);
    // document.getElementById("maxSpeed").innerText=Math.round(
    //   speed>maxSpeed?(maxSpeed=speed):maxSpeed
    // );

    var acceleration = speed - prevSpeed;
    acc = acceleration;
    // console.log(acc);

    // document.getElementById("acceleration").innerText=Math.round(
    //   acceleration
    // );
    if (prevSpeed < speed) {
      lerp += 1;
    } else if (prevSpeed > speed) {
      lerp -= 1;
    }
    //console.log(lerp);
    //netting.style.transform = `scale(${lerp}, 1)`;
    if (acceleration > 0) {
      // //   document.getElementById("maxPositiveAcceleration").innerText=Math.round(
      //   acceleration>maxPositiveAcc?(maxPositiveAcc=acceleration):maxPositiveAcc
      // );
      //netting.style.transform = `scale(${lerp}, 1)`;
      //console.log(acceleration / 100000);
    } else {
      //   document.getElementById("maxNegativeAcceleration").innerText=Math.round(
      //   acceleration<maxNegativeAcc?(maxNegativeAcc=acceleration):maxNegativeAcc
      // );
    }
  }

  prevEvent = currentEvent;
  prevSpeed = speed;
}, 10);
// setInterval(function () {
//   if (acc > 0) {
//     if (lerp < acc / 10000) {
//       lerp += 0.1;
//     } else if (lerp > acc / 10000) {
//       lerp -= 0.1;
//     }
//   }
//   netting.style.transform = `scale(${lerp}, 1)`;

//   console.log(lerp.toFixed(2));
// }, 10);
let netXoffset = 200;
setInterval(function () {
  debug.style.left = `${netShaft.offsetLeft + 50 + netXoffset * netFlip}px`;
  debug.style.top = `${netShaft.offsetTop + 2500}px`;
  //netting.style.transform = `scale(${lerp}, 1)`;

  // console.log(lerp.toFixed(2));
}, 10);

tracker.style.left = debug.style.left;
tracker.style.top = debug.style.top;

setInterval(function () {
  if (tracker.offsetLeft - debug.offsetLeft > 100) {
    tracker.style.left = `${debug.offsetLeft + 100}px`;
  } else if (tracker.offsetLeft - debug.offsetLeft < -100) {
    tracker.style.left = `${debug.offsetLeft - 100}px`;
  }
  if (tracker.offsetLeft < debug.offsetLeft) {
    tracker.style.left = `${tracker.offsetLeft + 1}px`;
  } else if (tracker.offsetLeft > debug.offsetLeft) {
    tracker.style.left = `${tracker.offsetLeft - 1}px`;
  }
  if (tracker.offsetTop < debug.offsetTop) {
    tracker.style.top = `${tracker.offsetTop + 1}px`;
  } else if (tracker.offsetTop > debug.offsetTop) {
    tracker.style.top = `${tracker.offsetTop - 1}px`;
  }
  console.log(tracker.offsetLeft - debug.offsetLeft);
  // tracker.style.left = `${netShaft.offsetLeft + 50 + netXoffset * netFlip}px`;
  // tracker.style.top = `${netShaft.offsetTop + 2500}px`;
  //netting.style.transform = `scale(${lerp}, 1)`;

  // console.log(lerp.toFixed(2));
}, 1);
tracker.style.left = debug.style.left;
tracker.style.top = debug.style.top;
let netDist = 0;
let netDistY = 0;
setInterval(function () {
  netDist = ((debug.offsetLeft - tracker.offsetLeft) * netFlip * -1) / 100;
  netDistY = (debug.offsetTop - tracker.offsetTop) / 100;
  if (netDist > 1) {
    netting.style.transform = `scale(${2}, 1)`;
  } else if (netDist < -2) {
    netting.style.transform = `scale(${-1}, 1)`;
  } else {
    netting.style.transform = `scale(${-netDist + 1}, 1)`;

    netting.style.transform = `scale(${netDist + 1}, 1)`;
  }
  netting.style.transform += `skew(0, ${netDistY}deg)`;

  //console.log(netDist);
}, 10);

//+ netXoffset * netFlip
