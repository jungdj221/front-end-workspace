//$(document).ready(function () {
$(function () {
  // 1. 태그선택자
  // 자바스크립트
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }

  // 제이쿼리 방법
  $("h5").css("color", "skyblue").css("background-color", "yellow");

  // 2. 아이디 선택자
  // 자바스크립트 방식으로 글씨 색깔 변경
  const id1 = document.querySelector("#id1");
  id1.style.color = "red";
  $("#id2").css("color", "blue");

  // 3. 클래스선택자
  $(".item").css({ color: "white", "background-color": "indigo" });

  // 4. 자식 선택자와 자손 선택자
  $("div > ul > li").css("color", "green");
  $("div ul .ch").css("background-color", "lime");
  $("div h3").css("background-color", "khaki");
  $("div ul li h3").css("color", "indianred");
  $("div h3").css("color", "violet");
  $("div ul li h3").css("color", "indianred");

  // 5. 속성 선택자
  $("#div1 input[class]").css("background-color", "turquoise");
  $("#div1 input[type=text]").val("change value");
  $("#div1 input[class~=test1]").val("123456789");
  $("#div1 input[type^=ra]").prop("checked", true);
  $("#div1 input[type$=box]" /*$= contain/like*/).prop("checked", true);
  $("#div1 input[class*=st3]").css({ width: "100px", height: "100px" });

  // 6. 입력 양식 선택자
  $("#div2 :text").css("background-color", "pink");
  $("#div2 :button").val("누르면 집비둘기");
  $("#div2 :checkbox").prop("checked", true);
  $("#div2 :file").css("background-color", "yellow");

  // 7. 입력 양식 상태에 대한 선택자
  // 1) input 태그 중 활성화된 객체
  $("#div3 input:enabled").css("background-color", "lavender"); //활성화된 객체만 선택
  // 2) 비활성화 객체
  $("#div3 input:disabled").css("background-color", "lightcyan"); //비활성화 객체

  // 3) input 태그 중 체크된 객체 선택
  $("#div3 input:checked").css({ width: "30px", height: "30px" });
  // 4) checkbox에 change 이벤트 핸들러 등록
  $("#div3 :checkbox").change(function () {
    console.log(this);
    console.log($(this));
    let checkbox = $(this);
    console.log(checkbox.attr("checked"));
    console.log(checkbox.prop("checked")); // true or false
  });

  // 5) select에 change 이벤트 핸들러 등록
  $("#national").change(function () {
    // select 태스의 option 태그중 선택된 객체 선택
    let value = $("#national > option:selected").val();
    console.log(value);
    $("#result").val(value);
  });
});
//});
