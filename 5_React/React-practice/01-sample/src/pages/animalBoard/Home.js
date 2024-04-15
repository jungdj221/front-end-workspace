import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

// 여기서 viewAll 의 역할을 해줌
const Home = () => {
  const navigate = useNavigate();
  const [boards, setBoard] = useState([]); // 여러개 = 배열

  const getBoard = async () => {
    const result = await axios.get(
      `http://localhost:8080/compagno/animal-board`
    );
    console.log(result.data);
    setBoard(result.data);
  };
  useEffect(() => {
    getBoard();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <tr key={board.animalBoardCode}>
              <td>글번호</td>
              <td>
                <a href={`/compagno/animal-board/${board.animalBoardCode}`}>
                  {board.animalCategoryCode}
                  {board.animalBoardTitle}
                </a>
              </td>
              <td>작성자</td>
              <td>{board.animalBoardView}</td>
              <td>{board.animalBoardDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div dangerouslySetInnerHTML={{ __html: board.animalBoardContent }}></div> */}
    </>
  );
};

export default Home;
