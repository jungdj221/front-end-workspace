import React from "react";
import { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import axios from "axios";

// DB로 이미지 전송
const ImageHandler = ({ quillRef }) => {
  // 이미지를 넣을 input type: file DOM 생성
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*"); //다중 파일 업로드
  input.click(); // *****toolbar 이미지를 누르게 되면 이 부분이 실행 *****
  // 이미지 선택
  input.onchange = async () => {
    // console.log(props);
    // 이미지 선택에 따른 조건체크를 재 반복
    // const file: any = input.files ? input.files[0] : null; => js로 변경
    // 선택한 파일이 files에 존재하면 첫번째 요소 반환, 아니면 null
    const file = input.files ? input.files[0] : null;
    if (!file) return; // file 없으면 null
    const formData = new FormData();
    formData.append("images", file);
    // 에디터 정보
    //const quillBody = props.quillRef.getEditor();
    const quillBody = quillRef.current.getEditor();
    console.log(quillBody);
    // 에디터 커서 위치 정보
    const range = quillBody.getSelection(true); // typeScript의 경우 마지막에 !
    // if (props && props.quillObj && props.quillObj.current) {
    //     const quill = props.quillObj.current.getEditor();
    //     const range = quill.getSelection();
    try {
      //  서버에 정보 전송  res = response
      const response = await axios.post(
        "http://localhost:8080/compagno/animal-board",
        formData
      );
      const imgUrl = response.data;
      console.log(imgUrl);
      // 에디터의 cursor 위치에 이미지 요소를 넣어준다
      if (quillBody && range) {
        quillBody.insertEmbed(range.index, "image", imgUrl);
      }
      //   quillBody?.insertEmbed(range.index, "image", `${imgUrl}`);
    } catch (error) {
      console.log(error);
    }
  };
  alert("!");
};

const Size = Quill.import("formats/size");
Size.whiteList = ["small", "medium", "large", "huge"];
Quill.register(Size, true);

const Font = Quill.import("formats/font"); // ""attributors/class/font
Font.whiteList = [
  // 단, 실제 quill 사용시 font 미적용 관련은 찾아봐야함.
  "arial",
  "comic-sans",
  "georgia",
];
Quill.register(Font, true); // true 속성 추가 해야 적용됨.
Quill.register("modules/ImageResize", ImageResize);
//===================================================
// Module 적용
// const modules = {
//     toolbar: {
//       container: "#toolbar",
//       handlers: {},
//     },
//     history: {
//       delay: 500,
//       maxStack: 100,
//       userOnly: true,
//     },
//   };
// 만약에 적용하고 싶은 toolbar가 여러개 있다면 container의 이름이 능동적으로 바뀌어야함
// ex
// props : quill을 사용할 페이지에서 import한 toolbar의  id명의 지정하여 보낼때 거기서 받는 데이터 값
export const modules = (props) => ({
  toolbar: {
    container: "#" + props,
    handlers: {
      image: ImageHandler,
    }, // 여기에  custom으로 쓰일 handler 삽입
  },
  // 이미지 크기 조절
  ImageResize: {
    parchment: Quill.import("parchment"),
    // parchment: {
    //   image: {
    //     attributes: ["width", "height"],
    //   },
    // },
    // modules: ["Resize", "DisplayedSize"],
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
});
// useMemo(() => {
//   modules(data);
// });

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
];

export const ImageQuillToolbar = (props) => {
  return (
    <>
      {props.toolbarId !== undefined && (
        <div id={props.toolbarId}>
          <span className="ql-formats">
            <select className="ql-font" defaultValue="arial">
              <option value="arial">Arial</option>
              <option value="comic-sans">Comic-sans</option>
              <option value="georgia">Georgia</option>
            </select>
            <select className="ql-size" defaultValue="medium">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="huge">Huge</option>
            </select>
            <select className="ql-header">
              <option value="1">Header 1</option>
              <option value="2">Header 2</option>
              <option value="3">Header 3</option>
              <option value="4">Header 4</option>
              <option value="5">Header 5</option>
              <option value="6">Header 6</option>
              <option value="" selected>
                Normal
              </option>
            </select>
          </span>
          <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
            <button className="ql-blockquote" />
          </span>
          <span className="ql-formats">
            <select className="ql-color" />
            <select className="ql-background" />
          </span>
          <span className="ql-formats">
            <button className="ql-image" />
            <button className="ql-video" />
          </span>
          <span className="ql-formats">
            <button className="ql-clean" />
          </span>
        </div>
      )}
    </>
  );
};
export default ImageQuillToolbar;
