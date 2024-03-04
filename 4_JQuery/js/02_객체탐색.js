// 1. Filtering 메서드
// 선택된 요소들 중 첫번째 요소를 가져와서 스타일 변경
$("h4").first().css("font-size", "4rem");
$("h4:first").css("color", "red");
$("h4").filter(":first").css("background-color", "yellow");

// 선택된 요소들중 마지막 요소를 가져와서 스타일 변경(last)
// font-size 3rem으로 변경하기
$("h4").last().css("font-size", "3rem");

// 선택된 요소들중 3번째 요소를 가져와서 스타일 변경 : eq
// eq(index) -> 해당 텍스트 변경 : text
$("h4:eq(2)").text("eq에 의해 값이 바뀜 from test-3 to this");
// 선택된 요소들중 홀수 인덱스의 요소를 가져와서 스타일 변경 odd <-> even
$("h4:odd").css({ color: "white", "background-color": "hotpink" });

// 선택 요소들중 특정 요소가 아닌것을 스타일 변경
$("h4:not(.test)").css({ color: "white", "background-color": "black" });
$("h4").filter(":not(.test)");
$("h4").not(".test");

// 2. Ancestors 메서드
// 선택된 요소의 바로 상위에 있는 부모 요소
console.log($("span").parent());
// 선택된 요소의 모든 상위 요소
console.log($("span").parents());

// span 요소의 부모 요소에 스타일 적용
// 글자색 - red, 테두리 :2px solid
$("span").parent().css({ color: "red", border: "2px solid" });

// li 요소의 모든 상위 요소에 스타일 적용
// 글자색 blue
$("li").parents().css("color", "blue");

// li요소의 상위요소 중 div만 스타일 적용
// 테두리 : 2px dashed tomato
$("li").parents("div").css("border", "2px dashed tomato");

// span 요소부터 div 요소 이전까지 상위 요소 스타일 적용
// 배경색 : lavenderblush

$("span").parentsUntil("div").css("background-color", "lavenderblush");

// 3. Descendants 메서드
let style1 = { color: "deeppink", border: "2px solid" };
let style2 = { color: "blue", border: "2px solid" };
let style3 = { color: "green", border: "2px solid" };
let style4 = { color: "purple", border: "2px solid" };
let style5 = { color: "orange", border: "2px solid" };
console.log($(".wrap").children());
console.log($(".wrap").find("span"));

// 클래스가 .wrap인 요소의
// 자식 요소들에 sty1 적용
$(".wrap").children().css(style1);

// 자식의 자식 요소들에게 style2
$(".wrap").children().children().css(style2);
let c_children = $(".wrap").children().children();
// 자식의 자식의 자식요소중 ul태그 적용 style3
$(".wrap").children().children("ul").css(style3);
//                   .children("ul")도 됨.

// 자식의 자식 요소중 li태그 style4 적용
$(".wrap").children().children().children("li").css(style4);
// 모든 하위 요소중 span태그 style5
$(".wrap").find("span").css(style5);

// 4. Sideways 메서드
// h2 요소의 형제 요소들에 style3 적용
$(".wrap2 h2").siblings().css(style3);

// h2 요소의 형제 요소 중 p 요소에 style2
$(".wrap2 h2").siblings("p").css(style2);

// h2 요소의 다음 형제 요소에 style1
$(".wrap2 h2").next().css(style1);

// h2 요소의 다음에 오는 모든 형제 요소에 스타일 적용
$(".wrap2 h2").nextAll().css("background-color", "pink");

// h2 요소 이후부터 p 요소 이전에 모든 형제 요소에 스타일 적용
$(".wrap2 h2").nextUntil("p").css("border", "3px dashed");

// h2 요소 이전(prev) 형제 요소에 스타일 적용
$(".wrap2 h2").prev().css(style5);

// h2 요소 이전에 오는 모든 요소(prevAll) 형제 요소에 배경색 : moccasin
$(".wrap2 h2").prevAll().css("background-color", "moccasin");
// h2 요소 이전부터 p 요소 이후까지 (prevUntil)의 모든 형제 요소에 글자크기 2rem
$(".wrap2 h2").prevUntil("p").css("font-size", "4rem");
