$("#show").click(() => {
  $("#img").show(3000);
});
$("#hide").click(() => {
  $("#img").hide(500);
});
$("#toggle").click(() => {
  $("#img").toggle(250);
});

// 2. fadeIn fadeOut fadeToggle
$("#fadeIn").click(() => {
  $("#img").fadeIn();
});

$("#fadeOut").click(() => {
  $("#img").fadeOut();
});

$("#fadeToggle").click(() => {
  $("#img").fadeToggle();
});
$("#img").hover(
  function () {
    $(this).fadeTo(500, 0.5);
  }, //mouseenter
  function () {
    $(this).fadeTo(500, 1);
  } //mouseleave
);

// 3. slideDown(), slideUp()
$(".menu").click((e) => {
  let content = $(e.target).next();
  console.log(content);
  /*
  if (content.css("display") === "none") {
    content.slideDown(500);
  } else {
    content.slideUp(500);
  }
  */
  content.slideToggle(500);
  // 하나의 콘텐츠만 slideDown!
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDown(500);
  }
});
