import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { viewDetail, getComments } from "../../api/animalBoard";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import styled from "styled-components";

const Comment = styled.div`
  .animal-board-comment{
    display: flex;
    
    input-group{
      display: flex;
      width: 50%;
    }

  }
`;

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
    // console.log(response);
    setDetail(response.data);
    // console.log(response.data);
  };

  // 댓글 불러오기
  const [comments, setComments] = useState([]);
  const animalBoardCommentAPI = async ()=>{
    const response = await getComments(animalBoardCode);
    console.log(response.data);
    setComments(response.data);
  }

  useEffect(() => {
    animalBoardAPI();
    animalBoardCommentAPI();
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
      <div className="animal-board-comment-contents">
        {comments.map((comment)=>(
          <div className="animal-board-comment-content" key={comment.animalBoardCommentCode}>
           
              <p>{comment.user.userNickname} {comment.animalCommentDate}</p>
            <input value={comment.animalCommentContent} readOnly/>
           
            {comment.replies.map((reply)=>(
              <div className="animal-board-comment-content-reply" key={reply.animalBoardCommentCode}>
                <p>{reply.user.userNickname} {reply.animalCommentDate}</p>
            <input value={reply.animalCommentContent} readOnly/>
              </div>
            ))}
            
            
          </div>
          
        ))}
      </div>
      <div className="animal-board-comment container-sm">
      <InputGroup>
      
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      
        <Button variant="secondary">댓글추가!</Button>
      </InputGroup>
      </div>
    </>
  );
};
export default Detail;
