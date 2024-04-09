import {userState} from "react";

const App = ()=> {
  const [count, setCounter] = userState(0); // 초기값. 0 부터 시작
  // let count = 0; 이부분이 [여기에 들어감] 초기값을  가질 변수, 두번째는 함수
  const setCount = () =>{
    // count = count + 1;
    setCounter(count + 1);
    
  }
  //count++; // 값이 변화되는 데이터 

  return <div>
    <h1>Total Click : {count}</h1>
    <button onClick={setCount}>Click!</button>
  </div>;
};


export default App;
