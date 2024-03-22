<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%> <%@ taglib prefix="sec"
uri="http://www.springframework.org/security/tags" %>
<sec:authentication property="principal" var="user" />

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>FESTOPIA | Find Seoul's Beat, Dive into FESTOPIA!</title>
    <!-- 파비콘 -->
    <link
      rel="icon"
      href="resources/resources/favicon.png"
      type="image/x-icon"
    />
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        * {
  box-sizing: border-box;
}
body {
  background: white;
}
.tabs .tab-header {
  float: left;
  width: 180px;
  height: 80vh;
  border-right: 1px solid #ccc; /*nav쪽 줄*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tabs .tab-header > div {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #888;
  cursor: pointer;
  padding-left: 10px;
}
.tabs .tab-header div i {
  display: inline-block;
  margin-left: 10px;
  margin-right: 5px;
}
.tabs .tab-content {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.tabs .tab-content > div > i {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #555;
  color: #f5f5f5;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
}
.tabs .tab-content > div {
  display: none;
  /* position: absolute; */
  text-align: center;
  padding: 40px 20px;
  /* top: -200%; */
  transition: all 500ms ease-in-out;
}
.tabs .tab-content > div.active {
  top: 0px;
}
.pigeon-account {
  display: flex;
  align-items: center;
  background-color: beige;
  height: 20rem;
}
#userImage {
  border-radius: 50%;
  border: 1px solid #888;
  background-color: none;
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-left: 50px;
  cursor: pointer;
  flex-shrink: 0;
}
#userInfo {
  text-align: left;
  margin-left: 100px;
  line-height: 50px;
}
#pwdChangeForm {
  background-color: aquamarine;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.current-pwd-check {
  background-color: beige;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#userImage img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

    </style>
  </head>
  <body>
    <div class="tabs">
      <div class="tab-header">
        <div class="inneractive0">컨텐츠 목차1</div>
        <div class="inneractive1">컨텐츠 목차2</div>
        <div class="inneractive2">컨텐츠 목차3</div>
      </div>

      <div class="tab-content">
        <div class="innercontent0">
          <div class="modify-second-page" id="content-page">
            여기에 넣고싶은 컨텐츠 1
          </div>
        </div>

        <div class="innercontent1">
          <div class="modify-second-page" id="content-page">
            여기에 넣고싶은 컨텐츠2
           
          </div>
        </div>

        <div class="innercontent2">
          <div class="modify-second-page" id="content-page">
           여기에 넣고싶은 컨텐츠3
          </div>
        </div>
      </div>
    </div>
  </body>
</html>


	

      <script>
     //default
$(".inneractive0").css("color", "#00acee");
$(".innercontent0").css("display", "block");
// 첫번째
$(".inneractive0").click(() => {
  $(".innercontent0").css("display", "block");
  $(".innercontent1").css("display", "none");
  $(".innercontent2").css("display", "none");

  $(".inneractive0").css("color", "#00acee");
  $(".inneractive1").css("color", "#888");
  $(".inneractive2").css("color", "#888");
});
//두번째
$(".inneractive1").click(() => {
  $(".innercontent1").css("display", "block");
  $(".innercontent0").css("display", "none");
  $(".innercontent2").css("display", "none");

  $(".inneractive1").css("color", "#00acee");
  $(".inneractive0").css("color", "#888");
  $(".inneractive2").css("color", "#888");
});
//세번째
$(".inneractive2").click(() => {
  $(".innercontent2").css("display", "block");
  $(".innercontent1").css("display", "none");
  $(".innercontent0").css("display", "none");

  $(".inneractive2").css("color", "#00acee");
  $(".inneractive1").css("color", "#888");
  $(".inneractive0").css("color", "#888");
});
      </script>
</body>
</html>