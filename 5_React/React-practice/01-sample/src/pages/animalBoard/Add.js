import ReactQuill from "react-quill";
import React, { useCallback, useEffect, useState } from "react";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditorToolbar";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { addBoard } from "../../api/animalBoard";

const Add = () => {
  const navigate = useNavigate();
  const [boardInfo, setboardInfo] = useState({
    animalCategoryCode: "",
    animalBoardTitle: "",
    animalBoardContent: "",
    animalMainImage: "",
  });

  const add = async () => {
    // console.log(boardInfo);
    await addBoard(boardInfo);
    navigate("/compagno/animal-board");
  };

  // 게시글 글 set
  //   const onContent = (value) => {
  //     console.log(value);
  //     setboardInfo({ ...boardInfo, animalBoardContent: value });
  //   };
  // 글 조건
  //   const [isError, setError] = useState(null);

  // 실질적인 submit 관련
  //   const addBoard = async (e) => {
  // if(boardInfo.animalBoardContent.length < 20){
  //     setError("20자는 넘기셔야합니다.");
  //     return;
  // }

  // console.log(boardInfo);
  // await axios.post(`http://localhost:8080/compagno/animal-board`, boardInfo);
  // 조건에 부합했을때라는 추가 조건을 삽입해야함

  //   };
  //   console.log(setboardInfo);
  return (
    <>
      <select
        value={boardInfo.animalCategoryCode}
        onChange={(e) =>
          setboardInfo((prev) => ({
            ...prev,
            animalCategoryCode: e.target.value,
          }))
        }
      >
        <option value="default">-- 어떤 동물인가요 --</option>
        <option value="1">개</option>
        <option value="2">고양이</option>
        <option value="3">비둘기</option>
        <option value="4">기타</option>
      </select>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={boardInfo.animalBoardTitle}
        onChange={(e) =>
          setboardInfo((prev) => ({
            ...prev,
            animalBoardTitle: e.target.value,
          }))
        }
      />
      <EditorToolbar toolbarId={"t1"} />
      <ReactQuill
        value={boardInfo.animalBoardContent}
        onChange={(e) =>
          setboardInfo((prev) => ({
            ...prev,
            animalBoardContent: e,
          }))
        }
        modules={modules("t1")}
        placeholder="글을 쓰시오"
      />
      <button onClick={add}>submit</button>
    </>
  );
};

export default Add;
