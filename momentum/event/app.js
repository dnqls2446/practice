const h1 = document.querySelector(".hello h1");

function handleh1Click() {
  h1.style.color = "blue";
}

h1.addEventListener("click", handleh1Click);
