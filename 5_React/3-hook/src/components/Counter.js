import { useState, useEffect } from "react";

const Btn = ({click, text})=>{
  return<button onClick={click}>{text}</button>;
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = ()=>{
    setCounter(counter+1);
  };

  const minus = ()=>{
    setCounter(counter -1);
  };

  console.log("always");

  useEffect(()=>{
    console.log("useEffect");
  },[]);// 첫번째는 화살표 함수, 두번째는 대괄호[특정 데이터 변화값에 따라서]

  useEffect(()=>{
    console.log("counter change")
  },[counter]); // 즉 counter가 바뀔때마다 해당 함수가 일어남

  return (
    <>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="+1"/> 
      <Btn click={minus} text="-1"/>
    </>
  );
};
// 데이터는 상위componenet 에서 하위 componenet로만 단방향으로 전달 가능 즉 App -> Btn으로는 가능
export default Counter;