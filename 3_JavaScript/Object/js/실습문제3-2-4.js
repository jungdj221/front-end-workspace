//1. 입력시 글자 반짝

userId.addEventListener("input", function(){
    const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
    if (regExp.test(userId.value)){
      userIdResult.style.color = "green";
      userIdResult.innerHTML ="good, move on next!";
    } else {
      userIdResult.style.color="red"
      userIdResult.innerHTML ="글자는 반드시 영문자로, 그리고 영문자, 숫자 포함 총4~12자입력"
    }
});
// userId.addEventListener("input", function () {
//     const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
//     if (regExp.test(userId.value)) {
//       userIdResult.style.color = "green";
//       userIdResult.innerHTML = "OK!";
//     } else {
//       userIdResult.style.color = "red";
//       userIdResult.innerHTML =
//         "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
//     }
//   });