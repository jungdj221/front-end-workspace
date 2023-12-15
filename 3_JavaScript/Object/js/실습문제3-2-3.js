const images = document.querySelectorAll(".images img");
let count = 0;
const span = document.querySelector("#click");
function clickHandler() {
  span.innerHTML = ++count;
  const random = [
    Math.floor(random() * 3) + 1,
    Math.floor(random() * 3) + 1,
    Math.floor(random() * 3) + 1,
  ];
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../../resources/spy${i}.jpg`);
  }

  if (random[0] === random[1] && random[1] === random[2]) {
    //alert("일치");
    result.innerHTML = "Congratulation!! Press restart to play again~~!!";
    click.setAttribute("disabled", "disabled");
  }
}
click.addEventListener("click", clickHandler);
function restatHeandler() {
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../../resources/spy${i + 1}.jpg`);
  }
  click.removeAttribute("disabled");
  count = 0;
  span.innerHTML = "";
  result.innerHTML = "";
}
restart.addEventListener("click", restatHeandler);
