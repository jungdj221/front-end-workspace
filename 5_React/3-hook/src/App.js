import Counter from "./components/Counter";
import Converter from "./components/Converter";


const App = () => {
  // return <Counter/>;
  return <>
  <Converter/>
  <Counter/>
  </>
};
// 데이터는 상위componenet 에서 하위 componenet로만 단방향으로 전달 가능 즉 App -> Btn으로는 가능
export default App;