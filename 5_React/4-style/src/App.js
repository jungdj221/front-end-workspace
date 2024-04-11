import "./asset/style.scss"; // App 에만 style을 줄거기에 여기에만 import
import style from "./asset/style.module.css"; // 모듈화된 css파일을 import 시 style을 추가 + className={stle.css명}
import styled from "styled-components";

const Div = styled.div`
  background-color: darkcyan;
  color: white;
  font-size: 6rem;
`;

const App= ()=> {
  return <>
    <div className="class" /*id="id"*/ /*style={{backgroundColor: "black", color: "white"}}*/>
      <h1 className={style.deco}>Hello, React Styling!</h1>
    </div>
    <Div>Styled Components 임의로 완성시킨 스타일을 적용</Div>
  </>
  // react에서는 class="ddd" 가 아닌 className="sss" 로 해야함
  // id는 그대로 id
}

export default App;
