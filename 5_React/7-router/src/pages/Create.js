import { addAnimal } from "../api/animal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
const Create = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({});
  // 담아야 하는 데이터 : name / age 보내는 방식 json
  const add = async () => {
    await addAnimal(animal);
    navigate("/");
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="동물 이름 입력"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="동물 나이 입력"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={add}>동물 추가</button>
    </Div>
  );
};
export default Create;
