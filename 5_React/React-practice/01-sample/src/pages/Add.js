import ReactQuill from "react-quill";
import React, {useCallback, useEffect, useState} from "react";
import EditorToolbar, {modules, formats} from '../components/EditorToolbar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-quill/dist/quill.snow.css";

const Add = ()=>{

    const navigate = useNavigate();
    const [boardInfo, setboardInfo] = useState({
        animalBoardContent: '',
        animalCategoryCode: 1
    }); // 게시글 제목, 글

    // 게시글 글 set
    const onContent = (value) =>{
        console.log(value);
        setboardInfo({...boardInfo,
        animalBoardContent:value});
    }
    // 글 조건
    const [isError, setError] = useState(null);

    // 실질적인 submit 관련
    const addBoard = async (e) =>{
        // if(boardInfo.animalBoardContent.length < 20){
        //     setError("20자는 넘기셔야합니다.");
        //     return;
        // }
       

        console.log(boardInfo);
        await axios.post(`http://localhost:8080/compagno/animal-board`,boardInfo)
        // 조건에 부합했을때라는 추가 조건을 삽입해야함
       navigate('/');
    }

    return (
        <>
        {/* <form onSubmit={addBoard}> */}
        <EditorToolbar toolbarId={'t1'}/>
        <ReactQuill
        value={boardInfo.animalBoardContent}
        onChange={onContent}
        modules={modules('t1')}
        placeholder="글을 쓰시오"
        />
        <button onClick={addBoard}>submit</button>
        {/* </form> */}
        </>
    )
};

export default Add;

