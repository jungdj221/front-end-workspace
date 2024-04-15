import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// 여기서 viewAll 의 역할을 해줌
const Home = ()=>{

    const[boards, setBoard] =useState([]) // 여러개 = 배열

    const getBoard = async ()=>{
        const result = await axios.get(`http://localhost:8080/compagno/animal-board`);
        console.log(result.data);
        setBoard(result.data);
    }
    useEffect(()=>{
        getBoard();
    },[]);

    return (
        <div >
        {boards.map((board)=>(
            <div key={board.animalBoardCode}>
               <div dangerouslySetInnerHTML={{__html:board.animalBoardContent}}></div>
            </div>
        ))}
        </div>
    )
}

export default Home;