import DaumPostcode from "./components/daumPostcode";
import KakaoMap from "./components/KakaoMap";

const App = () => {
  return <>
    <button onClick={DaumPostcode}>주소검색</button>
    <KakaoMap/>
  </>
};

export default App;