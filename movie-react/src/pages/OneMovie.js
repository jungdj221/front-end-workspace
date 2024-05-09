import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie, updateMovie } from "../api/movie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Div = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    font-size: 3rem;
    font-weight: bold;
  }
  .content {
    margin-top: 30px;
  }
  button {
    margin-top: 30px;
    width: 70px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
    padding: 10px;
  }
  .button-container {
    display: flex;
    button {
      margin-right: 10px;
    }
  }
  input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
  }
`;
const OneMovie = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const getMovieAPI = async () => {
    const response = await getMovie(code);
    setMovie(response.data);
    console.log(response.data);
  };
  //수정하는 창 뜨는 boolean
  const [boolean, setBoolean] = useState(false);
  //update
  const update = async () => {
    await updateMovie(movie);
    setBoolean(false);
    navigate("/");
    // getMovieAPI();
  };
  //cancel
  const cancelUpdate = async () => {
    setBoolean(false);
    getMovieAPI();
  };
  useEffect(() => {
    getMovieAPI();
  }, []);
  return (
    <Div>
      {boolean ? (
        <>
          <div className="title">영화정보</div>
          <input
            value={movie.title}
            onChange={(e) =>
              setMovie((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            value={movie.genre}
            onChange={(e) =>
              setMovie((prev) => ({ ...prev, genre: e.target.value }))
            }
          />
          <input
            value={movie.actor}
            onChange={(e) =>
              setMovie((prev) => ({ ...prev, actor: e.target.value }))
            }
          />
          <div className="button-container">
            <button onClick={update}>완료</button>
            <button onClick={cancelUpdate}>취소</button>
          </div>
        </>
      ) : (
        <>
          <div className="title">영화정보</div>
          <div className="content">{movie.title}</div>
          <div className="content">{movie.genre}</div>
          <div className="content">{movie.actor}</div>
          <button onClick={() => setBoolean(true)}>수정</button>
        </>
      )}
    </Div>
  );
};
export default OneMovie;
