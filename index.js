//
//PLAY AUDIO ON CLICK
//

const allButtons = document.querySelectorAll("button").length;
const allNavItems = document.querySelectorAll(".nav-item").length;

for (var i = 0; i < allNavItems; i++) {
  document
    .querySelectorAll(".nav-item")
    [i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      soundOnClick(buttonInnerHTML);
    });
}

for (var i = 0; i < allButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    soundOnClick(buttonInnerHTML);
  });
}

const soundOnClick = function () {
  const clickAudio = new Audio("sounds/clickSound.mp3");
  clickAudio.play();
};

//Skills progress bars
