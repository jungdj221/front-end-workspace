import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
// import { useState } from "react";
import { writeBoard } from "../api/AnimalBoard";

export const Editor = () => {
  //   const [state, setState] = React.useState({ value: null });
  //   const handleChange = (state) => {
  //     setState({ animalBoardContent: state.value });
  //   };

  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    console.log(value);
    setState({ value });
  };

  //   const [data, setBoard] = useState({});
  const add = async () => {
    await writeBoard(handleChange);
  };

  return (
    <div className="text-editor">
      <input type="text" placeholder="제목을 쓰시오." />
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <button onClick={add}>글등록</button>
    </div>
  );
};

export default Editor;
