const openButton = document.querySelector(".open");
const container = document.querySelector(".container");

openButton.addEventListener("click", () => {
  container.style.display = "block"; // 클릭 버튼을 누르면 컨테이너가 나타나고
  openButton.style.display = "none"; //  클릭 버튼이 사라지게 한다.
});

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
  container.style.display = "none"; // 닫기 버튼을 누르면 컨테이너가 사리지고
  openButton.style.display = "block"; // 클릭 버튼이 나타나게 한다.
});

document.title = "Modal";
