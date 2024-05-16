import React, { useState, useMemo, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
import ImageUploader from "quill-image-uploader";
import { addWrite } from "../api";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageUploader", ImageUploader);
const FinalTester = () => {
  let animalBoardCode = 0;
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  //const [animalBoardCode, setAnimalBoardCode] = useState(0);
  const testSubmit = async () => {
    return await addWrite({
      animalCategoryCode: 3,
      animalBoardTitle: "제목 테스트",
      animalBoardContent: value,
      user: {
        userId: "test01",
      },
    });
  };

  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["images"],
  ]; //미리 지정한 toolbarOption을 moduel의 container에 import

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
      },
      clipboard: {
        matchVisual: false,
      },

      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            console.log(animalBoardCode);
            formData.append("animalBoardCode", animalBoardCode);
            formData.append("file", file);

            fetch("http://localhost:8080/compagno/public/animal-board/image", {
              method: "POST",
              body: formData,
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((result) => {
                const image =
                  "http://192.168.10.28:8081" + result.animalBoardImage;
                resolve(image);
                setImages((prev) => [...prev, file]);
              })
              .catch((error) => {
                console.error(
                  "There was a problem with the fetch operation:",
                  error
                );
                reject(error);
              });
          });
        },
      },
      imageResize: {
        displaySize: true,
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize", "Toolbar"],
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
    "imageBlot",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
        modules={modules}
        formats={formats}
        placeholder="Give me a title"
      />
      <button type="button" onClick={testSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default FinalTester;
