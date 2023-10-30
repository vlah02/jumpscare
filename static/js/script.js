fetch(atob("L2FwaS9hbGVydA=="), {
  method: "POST",
});

const video = document.getElementById("video");
const scare = document.getElementsByClassName("scare")[0];
const overlay = document.getElementById("overlay");
let hasClicked;

window.onbeforeunload = function () {
  if (hasClicked) return true;
};

function videoClick(event) {
  if (event) event.preventDefault();
  // if not fullscreen
  const { documentElement } = document;
  if (documentElement.requestFullscreen) documentElement.requestFullscreen();
  else if (documentElement.mozRequestFullScreen)
    documentElement.mozRequestFullScreen();
  else if (documentElement.webkitRequestFullscreen)
    documentElement.webkitRequestFullscreen();
  else if (documentElement.msRequestFullscreen)
    documentElement.msRequestFullscreen();
}

overlay.addEventListener("click", function (event) {
  event.preventDefault();
  if (!hasClicked) hasClicked = true;
  fetch(atob("L2FwaS9hbGVydA=="), {
    method: "POST",
    body: "1",
  });
  overlay.style.display = "none";
  scare.style.display = "";
  video.play();
  videoClick();
});
video.addEventListener("click", videoClick);
