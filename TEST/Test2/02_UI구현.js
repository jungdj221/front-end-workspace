//입력이맞으면 spand이 사라짐

userId.addEventListener("input", function () {
  const regExp = /^[가-힣a-zA-Z!-~]{1,}$/;
  if (regExp.test(userId.value)) {
    userIdResult.style.color = "white";
    //userIdResult.innerHTML - "사용가능한 아이디입니다.";
  } else {
    userIdResult.style.color = "red";
    userIdResult.innerHTML = "필수 입력 항목입니다.";
  }
});
userPwd.addEventListener("input", function () {
  const regExp = /^[a-zA-Z0-9!-~]{8,32}$/;
  if (regExp.test(userPwd.value)) {
    userPwdResult.style.color = "white";
    //userPwdResult.innerHTML = "사용할 수 있는 패스워드입니다.";
  } else {
    userPwdResult.style.color = "red";
    userPwdResult.innerHTML = "영문자 대/소문자, 특수문자, 숫자 포함 8 ~ 32자";
  }
});
userPwdCheck.addEventListener("input", function () {
  if (userPwdCheck.value === userPwd.value) {
    userPwdCheckResult.style.color = "white";
    // userPwdCheckResult.innerHTML = "비밀번호와 일치합니다.";
  } else {
    userPwdCheckResult.style.color = "red";
    userPwdCheckResult.innerHTML = "비밀번호와 일치하지않습니다.";
  }
});

const regExp1 = /^[가-힣a-zA-Z!-~]{1,}$/;
const regExp2 = /^[a-zA-Z0-9!-~]{8,32}$/;

function validate() {
  if (!regExp1.test(userId.value)) {
    userId.focus();
    userIdResult.style.color = "red";
    userIdResult.innerHTML - "필수 입력 항목입니다.";
    return false;
  } else if (!regExp2.test(userPwd.value)) {
    userPwd.focus();
    userPwdResult.style.color = "red";
    userPwdResult.innerHTML = "영문자 대/소문자, 특수문자, 숫자 포함 8 ~ 32자";
    return false;
  } else if (userPwdCheck.value != userPwd.value) {
    userPwdCheck.focus();
    userPwdCheckResult.style.color = "red";
    userPwdCheckResult.innerHTML = "비밀번호와 일치하지않습니다";
    return false;
  } else return true;
}
