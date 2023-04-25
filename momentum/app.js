var player = document.getElementById("myVideoPlayer");

player.addEventListener("ended", function() {
  var replayButton = document.createElement("button");
  replayButton.innerHTML = "리플레이";
  replayButton.onclick = function() {
    player.currentTime = 0;
    player.play();
  };
  player.parentNode.appendChild(replayButton);
});