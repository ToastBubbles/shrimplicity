// let gameCanvas = document.getElementById("game"),
//   netShaft = document.getElementById("net-shaft"),
//   netting = document.getElementById("netting"),
//   debug = document.getElementById("debugger"),
//   tracker = document.getElementById("tracker"),
//   shrimpContainer = document.getElementById("shrimp-container"),
//   mouseX = 0,
//   mouseY = 0,
//   direction = "",
//   mousetravel = 0,
//   lastX = [0, ""],
//   lerp = 1,
//   acc = 0;
// let netFlip = 1;
// window.scrollTo(0, 0);
// document.body.scrollTop = 0;
// var prevEvent, currentEvent;
// let boundaries = {
//   left: gameCanvas.offsetLeft,
//   right: gameCanvas.offsetLeft + gameCanvas.offsetWidth,
//   top: gameCanvas.offsetTop - this.window.scrollY,
//   bottom: gameCanvas.offsetTop + gameCanvas.offsetHeight - this.window.scrollY,
// }; change2

window.onload = function () {
  //now that the window has loaded we add our event listeners to the videos.
  //When video1 has ended, play video2 etc
  document.getElementById("shrimpvid1").addEventListener("ended", function () {
    playVideo("shrimpvid2");
    setTimeout(() => {
      document.getElementById("shrimpvid1").classList.add("hide");
    }, 1000);
  });
  document.getElementById("shrimpvid2").addEventListener("ended", function () {
    playVideo("shrimpvid3");
    setTimeout(() => {
      document.getElementById("shrimpvid2").classList.add("hide");
    }, 1000);
  });
  document.getElementById("shrimpvid3").addEventListener("ended", function () {
    playVideo("shrimpvid4");
    setTimeout(() => {
      document.getElementById("shrimpvid3").classList.add("hide");
    }, 1000);
  });
  document.getElementById("shrimpvid4").addEventListener("ended", function () {
    playVideo("shrimpvid1");
    setTimeout(() => {
      document.getElementById("shrimpvid4").classList.add("hide");
    }, 1000);
  });
};

function playVideo(videoID) {
  //This playVideo function takes in the ID of a video element and plays that video.
  var videoElement = document.getElementById(videoID);
  videoElement.play();
  videoElement.classList.remove("hide");
}

// onmousemove = function (e) {
//   currentEvent = e;
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   //   console.log(boundaries.top, mouseX, boundaries.bottom);

//   if (
//     boundaries.left < mouseX &&
//     boundaries.right > mouseX &&
//     boundaries.top < mouseY &&
//     boundaries.bottom > mouseY
//   ) {
//     netShaft.style.left = `${mouseX - boundaries.left - 25}px`;
//     netShaft.style.top = `${mouseY - boundaries.top - 1150}px`;
//     //   mouseInside = true;
//     // console.log("inside canvas");
//     //   curX = mouseX;
//     //   curY = mouseY;
//     if (mouseX < lastX[0]) {
//       direction = "left";
//     } else if (mouseX > lastX[0]) {
//       direction = "right";
//     }

//     if (lastX[0] > -1) {
//       mousetravel += Math.max(Math.abs(mouseX - lastX[0]));
//     }
//     //console.log(mousetravel);

//     if (lastX[1] !== direction) {
//       console.log("changed!");
//       flipNet();
//       lastX[1] = direction;
//     }

//     lastX[0] = mouseX;
//   }
// };

// function flipNet() {
//   if (netShaft.classList.contains("flip")) {
//     netFlip = -1;
//     netShaft.classList.remove("flip");
//   } else {
//     netShaft.classList.add("flip");
//     netFlip = 1;
//   }
// }

// var maxSpeed = 0,
//   prevSpeed = 0,
//   maxPositiveAcc = 0,
//   maxNegativeAcc = 0;
// setInterval(function () {
//   if (prevEvent && currentEvent) {
//     var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
//     var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
//     var movement = Math.sqrt(movementX * movementX + movementY * movementY);

//     // document.getElementById("movementX").innerText=movementX;
//     // document.getElementById("movementY").innerText=movementY;
//     // document.getElementById("movement").innerText=Math.round(movement);

//     var speed = movement; //current speed

//     // document.getElementById("speed").innerText=Math.round(speed);
//     // document.getElementById("maxSpeed").innerText=Math.round(
//     //   speed>maxSpeed?(maxSpeed=speed):maxSpeed
//     // );

//     var acceleration = speed - prevSpeed;
//     acc = acceleration;
//     // console.log(acc);

//     // document.getElementById("acceleration").innerText=Math.round(
//     //   acceleration
//     // );
//     if (prevSpeed < speed) {
//       lerp += 1;
//     } else if (prevSpeed > speed) {
//       lerp -= 1;
//     }
//     //console.log(lerp);
//     //netting.style.transform = `scale(${lerp}, 1)`;
//     if (acceleration > 0) {
//       // //   document.getElementById("maxPositiveAcceleration").innerText=Math.round(
//       //   acceleration>maxPositiveAcc?(maxPositiveAcc=acceleration):maxPositiveAcc
//       // );
//       //netting.style.transform = `scale(${lerp}, 1)`;
//       //console.log(acceleration / 100000);
//     } else {
//       //   document.getElementById("maxNegativeAcceleration").innerText=Math.round(
//       //   acceleration<maxNegativeAcc?(maxNegativeAcc=acceleration):maxNegativeAcc
//       // );
//     }
//   }

//   prevEvent = currentEvent;
//   prevSpeed = speed;
// }, 10);
// // setInterval(function () {
// //   if (acc > 0) {
// //     if (lerp < acc / 10000) {
// //       lerp += 0.1;
// //     } else if (lerp > acc / 10000) {
// //       lerp -= 0.1;
// //     }
// //   }
// //   netting.style.transform = `scale(${lerp}, 1)`;

// //   console.log(lerp.toFixed(2));
// // }, 10);
// let netXoffset = 200;
// setInterval(function () {
//   debug.style.left = `${netShaft.offsetLeft + 50 + netXoffset * netFlip}px`;
//   debug.style.top = `${netShaft.offsetTop + 2500}px`;
//   //netting.style.transform = `scale(${lerp}, 1)`;

//   // console.log(lerp.toFixed(2));
// }, 10);

// tracker.style.left = debug.style.left;
// tracker.style.top = debug.style.top;

// setInterval(function () {
//   if (tracker.offsetLeft - debug.offsetLeft > 100) {
//     tracker.style.left = `${debug.offsetLeft + 100}px`;
//   } else if (tracker.offsetLeft - debug.offsetLeft < -100) {
//     tracker.style.left = `${debug.offsetLeft - 100}px`;
//   }
//   if (tracker.offsetLeft < debug.offsetLeft) {
//     tracker.style.left = `${tracker.offsetLeft + 1}px`;
//   } else if (tracker.offsetLeft > debug.offsetLeft) {
//     tracker.style.left = `${tracker.offsetLeft - 1}px`;
//   }
//   if (tracker.offsetTop < debug.offsetTop) {
//     tracker.style.top = `${tracker.offsetTop + 6}px`;
//   } else if (tracker.offsetTop > debug.offsetTop) {
//     tracker.style.top = `${tracker.offsetTop - 6}px`;
//   }
//   //console.log(tracker.offsetLeft - debug.offsetLeft);
//   // tracker.style.left = `${netShaft.offsetLeft + 50 + netXoffset * netFlip}px`;
//   // tracker.style.top = `${netShaft.offsetTop + 2500}px`;
//   //netting.style.transform = `scale(${lerp}, 1)`;

//   // console.log(lerp.toFixed(2));
// }, 10);
// tracker.style.left = debug.style.left;
// tracker.style.top = debug.style.top;
// let netDist = 0;
// let netDistY = 0;
// setInterval(function () {
//   netDist = ((debug.offsetLeft - tracker.offsetLeft) * netFlip * -1) / 100;
//   netDistY = (debug.offsetTop - tracker.offsetTop) / 100;
//   if (netDist > 0.5) {
//     netting.style.transform = `scale(${1.5}, 1)`;
//   } else if (netDist < -2) {
//     netting.style.transform = `scale(${-1}, 1)`;
//   } else {
//     netting.style.transform = `scale(${-netDist + 1}, 1)`;

//     netting.style.transform = `scale(${netDist + 1}, 1)`;
//   }
//   if (netDistY > 2) {
//     netting.style.transform += `skew(0, ${2 * 20}deg)`;
//   } else if (netDistY < -2) {
//     netting.style.transform += `skew(0, ${-2 * 20}deg)`;
//   } else {
//     netting.style.transform += `skew(0, ${netDistY * 20}deg)`;
//   }

//   //console.log(netDistY);
// }, 10);

// function addShrimp() {
//   shrimpContainer.innerHTML += `<div class="shrimp shrimpstand"></div>`;

//   shrimpController();
// }

// function shrimpController() {
//   let shrimps = document.querySelectorAll(`.shrimp`);
//   shrimps.forEach(function (shrimp) {
//     console.log(shrimp);
//     move(shrimp);
//   });
// }
// let val = 0;
// let shrimpflip = 1;
// function move(shrimp) {
//   shrimp.style.left = `${boundaries.left + val}px`;
//   shrimp.style.top = `${gameCanvas.offsetTop - 750}px`;
//   if (shrimp.offsetLeft > boundaries.right - 101 && shrimpflip === 1) {
//     shrimpflip = -1;
//   } else if (shrimp.offsetLeft < boundaries.left && shrimpflip === -1) {
//     shrimpflip = 1;
//   }
//   if (shrimpflip === -1) {
//     val--;
//   } else {
//     val++;
//   }
//   shrimp.style.transform = `scale(${-shrimpflip}, 1)`;
//   console.log(shrimp.style.top);
//   setTimeout(() => {
//     move(shrimp);
//   }, 10);
// }

// addShrimp();

// //+ netXoffset * netFlip
