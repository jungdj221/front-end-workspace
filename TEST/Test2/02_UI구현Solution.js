const id = document.querySelector("#id");
const idSpan = document.querySelector("#id-span");
const pwd = document.querySelector("#password");
const pwdSpan = document.querySelector("#password-span");
const pwdCheck = document.querySelector("#password-check");
const pwdCheckSpan = document.querySelector("#password-check-span");

const idText = "필수 입력 항목입니다";
const passwordText = "영문자 대/소문자, 특수문자, 숫자 포함 8 ~ 32자";
const passwordCheckText = "비밀번호와 일치하지 않습니다.";

id.addEventListener("input", function () {
  if (id.value !== "") {
    idSpan.innerHTML = "";
  } else {
    idSpan.innerHTML = idText;
  }
});
const regExp = /^[!-~]{8,32}$/;

pwd.addEventListener("input", function () {
  if (regExp.test(pwd.value)) {
    pwdSpan.innerHTML = "";
  } else {
    pwdSpan.innerHTML = passwordText;
  }
});
pwdCheck.addEventListener("input", function () {
  if (pwd.value === pwdCheck.value) {
    pwdCheckSpan.innerHTML = "";
  } else {
    pwdCheckSpan.innerHTML = passwordCheckText;
  }
});

function validate() {
  if (id.value === "") {
    id.focus();
    idSpan.innerHTML = idText;
    return false;
  } else if (!regExp.test(pwd.value)) {
    pwd.focus();
    pwdSpan.innerHTML = passwordText;
    return false;
  } else if (pwd.value !== pwdCheck.value) {
    pwdCheck.focus();
    pwdCheckSpan.innerHTML = passwordCheckText;
    return false;
  }
  return true;
}
