// 1. 이벤트 연결
// $("#area1").on("mouseenter", (event) => {
//   // 마우스가 올라갈때
//   $(event.target).css("background-color", "beige").text("마우스가 올라감");
// });
// $("#area1").on("mouseleave", (event) => {
//   // 마우스가 떠날때
//   $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
// });
// 한번에 처리
/*
$("#area1").on("mouseenter mouseleave", (event) => {
  // mouseeneter의 경우
  if (event.type === "mouseenter") {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
    // mouseleave의 경우
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  }
});

$("#area1").on("click", (event) => {
  // 배경색상은 white, 텍스트는 '',
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave");
  //mouseenter, mouseleave 이벤트 제거
});
*/
// 세개 이벤트 합치기
$("#area1").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2. one 딱한번 실행 (kh 광고 이걸로 해보기)
$("#area2").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
/*
// keydown : 키보드가 눌려질때
$("#textarea1").keydown((e) => {
  console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keypress : 글자가 입력될때
$("#textarea1").keypress((e) => {
  console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keyup : 키보드가 떼어질때
$("#textarea1").keyup((e) => {
  console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
*/
// 한번에 합치기
$("#textarea1").on({
  keydown: (e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

let count = 0;
$("#textarea2").on({
  keydown: (e) => {
    console.log($(e.target).val().length);

    let currentLength = $(e.target).val().length + 1;
    let maxLength = parseInt($("#maxLength").text());

    console.log(typeof maxLength);
    if (currentLength > maxLength) {
      $(e.target).val($(e.target).val().substr(0, maxLength));
    } else {
      $("#counter").text($(e.target).val().length + 1);
    }
  },
});

const regExp = /^[a-z][a-zA-Z0-9]{3,11}$/;

$("#userId").on({
  keyup: (e) => {
    console.log($(e.target).val());
    let input = $(e.target).val(); // 제이쿼리 방식
    // e.target.value : 자바스크립트 방식
    if (regExp.test(input)) {
      $("#idcheck").text("굿 통과").css("color", "green");
    } else if (input === "") {
      $("#idcheck").text("");
    } else {
      $("#idcheck").text("사용불가 아이디").css("color", "red");
    }
  },
});

// 3. trigger 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let currentCount = parseInt(counter.text());
  counter.text(++currentCount);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
});
