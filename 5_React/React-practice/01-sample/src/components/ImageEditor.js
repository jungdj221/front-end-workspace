import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import ImageQuillToolbar, { modules, formats } from "./ImageEditorToolbar";
// import "react-quill/dist/quill.snow.css";

const ImageEditor = () => {
  const [value, setValue] = useState("");
  const testSubmit = () => {
    console.log(value);
  };
  const quillRef = useRef(null);
  return (
    <div>
      <ImageQuillToolbar toolbarId={"sample"} />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules("sample")}
        formats={formats}
        placeholder="Give me a title"
      />
      <button type="button" onClick={testSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default ImageEditor;
