// YouTube IFrame API
// https://developers.google.com/youtube/iframe_api_reference?hl=ko
// https://developers.google.com/youtube/player_parameters?hl=ko

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.querySelector("script");
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "742",
    width: "1319",
    videoId: "jzW2doRJOiM",
    playerVars: {
      playsinline: 1,
      controls: 1,
      fs: 0,
      modestbranding: 1,
    },
    events: {
      onReady() {
        playWhenVisible();
      },
      onStateChange(event) {
        const { data } = event;
        if (data === YT.PlayerState.PLAYING) {
          onPlay();
        } else if (data === YT.PlayerState.ENDED) {
          onEnd();
        }
      },
    },
  });
}

const $ = (selector) => document.querySelector(selector);
const container = $(".container");
let videoEnded;

function onPlay() {
  videoEnded = false;
  container.classList.remove("video-ended");
  container.classList.add("video-playing");
}

function onEnd() {
  videoEnded = true;
  container.classList.remove("video-playing");
  container.classList.add("video-ended");
}

$(".replay-button").addEventListener("click", function () {
  player.playVideo();
});

function playWhenVisible() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 영상 영역이 반 이상 보일 때 재생되도록 해두었습니다.
        // 값 조정 시 아래 threshold 옵션과 같이 조정하세요.
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!videoEnded) {
            player.playVideo();
          }
        } else {
          player.pauseVideo();
        }
      });
    },
    { threshold: [0, 0.5, 1] }
  );

  // `#player`는 `<iframe>` 으로변경되므로 부모 영역의 intersection을 모니터링하는 게 더 간편합니다.
  observer.observe(container);
}
