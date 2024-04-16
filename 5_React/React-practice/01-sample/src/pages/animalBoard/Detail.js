import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { viewDetail } from "../../api/animalBoard";
import { Link } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { animalBoardCode } = useParams();
  console.log(animalBoardCode);

  const [detailInfo, setDetail] = useState({
    userName: "",
    animalType: "",
    animalBoardTitle: "",
    animalBoardContent: "",
    animalBoardDate: "",
    animalBoardView: 0,
  });

  const animalBoardAPI = async () => {
    const response = await viewDetail(animalBoardCode);
    console.log(response);
    setDetail(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    animalBoardAPI();
  }, []);

  // Link에 대해 알아보기 글쓰기 시작 버튼을 할 수있음 상세페이지에서
  /*
  {ispost.map((item,index) => ( 
          <div className="post__list" key={index}>
            <h2>{item.title}</h2>

            <div className="post__description" dangerouslySetInnerHTML={{ __html: item.description}}  />
            <div className="post__description" dangerouslySetInnerHTML={{ __html: item.information}}  />
            <Link to={`/Edit/${item.id}`} className="btn btn__theme"> Edit </Link>
            map형태로 뿌린다는것은 내부에 뿌려질 quill이 두개 이상일때 각각의 퀼에 index를 주는것
  */
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 className> 아마도 nav 관련이 여기</h1>
            <Link to="/compagno/write-board"> 글쓰기! </Link>
            <Link to={`/compagno/edit-board/${detailInfo.animalBoardCode}`}>
              수정하기
            </Link>

            <div className="post__list">
              <h2>{detailInfo.animalBoardTitle}</h2>

              <div
                className="post__description"
                dangerouslySetInnerHTML={{
                  __html: detailInfo.animalBoardContent,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
