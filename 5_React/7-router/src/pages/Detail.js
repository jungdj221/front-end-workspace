import { useNavigate, useParams } from "react-router-dom";
import { getAnimal, updateAnimal } from "../api/animal";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  // 사이즈를 border 기준으로 하기에 딱 맞게 떨어지게 할 수 있음

  * {
    margin-right: 5px;
    padding: 5px;
  }
  input {
    width: 200px;
    border: 1px solid gray;
    border-radius: 5%;
  }
  button {
    border-radius: 5px;
    background-color: black;
    border: 1px solid black;
    cursor: pointer;
    color: white;
  }
`;
const Detail = () => {
  const navigate = useNavigate();
  const { no } = useParams();
  console.log(no);
  const [animal, setAnimal] = useState({
    name: "",
    age: 0,
  }); // 하나 값만 가져오므로 중괄호, 배열은 대괄호 + 초기값을 잡아줘야 에러콘솔이가 안남

  // 하나 보기
  const animalAPI = async () => {
    // console.log(no); //undefined
    const response = await getAnimal(no);
    // console.log(response.data); // 값.data를 해야 들어와짐
    setAnimal(response.data);
  };

  // 수정하기
  const update = async () => {
    await updateAnimal(animal); // animal 정보는 사용자에게 이미 입력받았으므로 그거를 그대로 가지고 오면 됨.
    navigate("/");
  };

  useEffect(() => {
    animalAPI();
  }, []); // 값이 없을때 가져오는 method를 실행시키겠다.

  return (
    <Div>
      <input
        type="text"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={update}>정보수정</button>
    </Div>
  );
};
export default Detail;
