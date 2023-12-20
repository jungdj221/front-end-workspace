const navIcons = document.querySelectorAll(".header-main-bottom i");
const aList = document.querySelectorAll(".header-main-bottom a");

navIcons[0].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.remove("header-main-bottom-right");
  });
});
navIcons[1].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.add("header-main-bottom-right");
  });
});

// main
const mainImg = document.querySelectorAll("main > img");
//첫 번째 이미제 main-img-active클래스가 추가되어 있음
setInterval(() => {
  //const className = "main-img-active";
  for (let i = 0; i < mainImg.length; i++) {
    //마지막 이미지에서는 클래스 제거, 첫번째 이미지에 클래스추가

    //첫번째 이미지에서는 클래스 제거, 두번쨰 이미지에 클래스 추가
    //두번째 이미지에서는 클래스 제거, 세번째 이미지에 클래스 추가
    if (mainImg[i].classList.contains("main-img-active")) {
      mainImg[i].classList.remove("main-img-active");
      //마지막꺼만 예외로 처리
      if (i === mainImg.length - 1) {
        mainImg[0].classList.add("main-img-active");
        break;
      }
      mainImg[i + 1].classList.add("main-img-active");
      break;
    }
  }
}, 2000);
// section: 카테고리별 추천광고상품
//사용자가 스크롤을 내리는 순간 어느 시점에 나타나고
//다시 올리면 사라지는
const categoryMenu = document.querySelector(".category-menu");
window.addEventListener("scroll", function () {
  //console.log(window.scrollY);
  if (window.scrollY >= 1300) {
    categoryMenu.style.display = "flex";
  } else {
    categoryMenu.style.display = "none";
  }
});
