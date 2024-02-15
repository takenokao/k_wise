
window.onload = function() {
  var audioButton = document.querySelector(".audio_button");
  var audio = document.getElementById("audio");

  audioButton.addEventListener("click", function() {
      if (audio.paused) {
          audio.play();
          audioButton.classList.remove("stop");
      } else {
          audio.pause();
          audioButton.classList.add("stop");
      }
  });
};
