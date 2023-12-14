# DOM(Document Object Model)

- HTML 문서의 태그들을 객체로 생성하고 객체들의 관계에 따라 트리구조로 구성한 객체
- document 객체는 window 객체의 하위 객체 DOM 트리의 가장 최상위 객체
- HTML 태그를 노드라고 한다.

## 스크립트 선언 위치

1. 모든 태그들을 작성하고 body 태그 맨 마지막에 자바스크립트를 실행하는 방법

```html
<body>
  <div></div>
  <script></script>
</body>
```

2. 문서 전체에 해당하는 document에 DOMContentLoaded 이벤트를 사용하는 방법

```js
document.addEventListener("DOMContentLoaded", function () {
  //코드작성
});
```

## 문서 객체 가져오기

###CSS 선택자를 이용한 검색

```js
document.querySelector("선택자");
document.querySelectorAll("선택자");
```

- querySelector : 지정된 css 선택자에 해당하는 첫번째 요소 반환
- querySelectorAll : 지정된 css 선택자에 해당하는 모든 요소 반환

## 문서 객체 조작하기

### testContent, innerHTML

- textContent : 문서 객체 내에 문자 그대로 넣는다.
- innterHTML : 문서 객체 내에 HTML형식으로 넣는다.

```js
문서객체.textContent;
문서객체.innerHTML;
```

### setAttribute, getAttribute

- setAttribute : 문서 객체의 속성을 추가하거나 수정할 때
- getAttribute : 문서 객체의 속서을 가져올 때

```js
문서객체.setAttribute(속성이름, 값);
문서객체.getAttribute(속성이름);
```

### style 조작

- 문서 객체의 스타일을 조작할 때는 style로 접근할 수 있다.
- style 속성은 만약 background-color는 backgroundColor처럼
- 기호 대신 camelCase로 사용해야 한다.

```js
문서객체.style.속성 = "값";
```

### classList

- 사실 스타일을 조작할때는 style로 접근하는 방식보다 미리 클래스에 스타일을 지정하고, clssList로 해당 클래스를 추가, 삭제로 조작하는 것을 추천
- contains는 해당 클래스명 유무 체크
- 있다면 삭제, 없다면 추가를 알아서 해주는 toggle

```js
문서객체.classList.add("클래스명");
문서객체.classList.remove("클래스명");
문서객체.classList.contians("클래스명");
문서객체.classList.toggle("클래스명");
```

## 문서 객체 추가하기

- creatElement로 문서 객체 생성
- appendChild로 부모 객체에 자식 객체 추가

```js
const 자식객체 = document.creatElement(문서객체이름);
부모객체.appendChild(자식객체);
```

## 문서 객체 삭제하기

- 부모 객체에서 자식 객체 삭제가능
- 만약 부모 객체에 접근해야 한다면 parentNode를 사용

```js
부모객체(자식객체.parentNode).revmeChild(자식객체);
```