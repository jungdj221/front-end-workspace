import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { viewDetail } from "../../api/animalBoard";

const Detail = () => {
  const navigate = useNavigate();
  const { animalBoardCode } = useParams();

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
    setDetail(response.data);
  };
};
export default Detail;
