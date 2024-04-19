import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../api/movie";
import styled from "styled-components";

const Table = styled.table`
  text-align: center;
  width: 100%;
  th {
    padding-bottom: 10px;
  }
  td {
    padding-bottom: 10px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Home = () => {
  const [movies, setMovies] = useState([]);

  const movieAPI = async () => {
    const response = await getMovies();
    console.log(response.data);
    setMovies(response.data);
  };

  const onDelete = async (no) => {
    await deleteMovie(no);
    setMovies(movies.filter((movie) => movie.no !== no));
    movieAPI();
  };

  useEffect(() => {
    movieAPI();
  }, []);
  return (
    <>
      <Div>
        <h1>영화 목록</h1>
      </Div>
      <Table>
        <thead>
          <tr>
            <th>제목</th>
            <th>장르</th>
            <th>영화배우</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.no}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.actor}</td>
              <td>
                <button onClick={() => onDelete(movie.no)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Home;
