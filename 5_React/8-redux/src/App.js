import { increase, decrease } from "./store/counter";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";

const App = () => {
  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch(); //import한 함수 increase/decrease를 쓰기 위해서
  return (
    <>
      {/* <h1>Total Clicks : {counter}</h1> */}
      <Header />
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
    </>
  );
};

export default App;
