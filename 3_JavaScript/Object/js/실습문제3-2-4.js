//1. 입력시 글자 반짝

userId.addEventListener("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  if (regExp.test(userId.value)) {
    userIdResult.style.color = "green";
    userIdResult.innerHTML = "good!";
  } else {
    userIdResult.style.color = "red";
    userIdResult.innerHTML =
      "글자는 반드시 영문자로, 그리고 영문자, 숫자 포함 총4~12자입력";
  }
});
userPwd.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  if (regExp.test(userPwd.value)) {
    userPwdResult.style.color = "green";
    userPwdResult.innerHTML = "ok";
  } else {
    userPwdResult.style.color = "red";
    userPwdResult.innerHTML = "영문자, 숫자, 특수문자포함 8~15글자";
  }
});

userPwdCheck.addEventListener("input", function () {
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckResult.style.color = "green";
    userPwdCheckResult.innerHTML = "nice";
  } else {
    userPwdCheckResult.style.color = "red";
    userPwdCheckResult.innerHTML = "위의 비밀번호 재확인";
  }
});
userName.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  if (regExp.test(userName.value)) {
    userNameResult.style.color = "green";
    userNameResult.innerHTML = "ok";
  } else {
    userNameResult.style.color = "red";
    userNameResult.innerHTML = "한글로만 이루어져야됨. 2글자이상 입력";
  }
});
email.addEventListener("input", function () {
  const regExp = /^\w+@\w+\.\w+$/;
  if (regExp.test(email.value)) {
    emailResult.style.color = "green";
    emailResult.innerHTML = "nice";
  } else {
    emailResult.style.color = "red";
    emailResult.innerHTML = "이메일 입력!!!!!!!!!!!!!";
  }
});

function mustcomplete() {
  const regExp1 = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const regExp2 = /^[!-~]{8,15}$/;
  const regExp3 = /^[가-힣]{2,}$/;
  const regExp4 = /^\w+@\w+\.\w+$/;

  if (!regExp1.test(userId.value)) {
    userId.focus();
    return false;
  } else if (!regExp2.test(userPwd.value)) {
    userPwd.focus();
    return false;
  } else if (!userPwd.value === userPwdCheck.value) {
    userPwdCheck.focus();
    return false;
  } else if (!regExp3.test(userName.value)) {
    userName.focus();
    return false;
  } else if (!regExp4.test(email.value)) {
    email.focus();
    return false;
  }
  return true;
}
