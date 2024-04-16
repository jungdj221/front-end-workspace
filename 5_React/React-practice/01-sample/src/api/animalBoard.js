import axios from "axios";

// 전역주소
const instance = axios.create({
  baseURL: "http://localhost:8080/compagno/",
});

// 글쓰기
export const addBoard = async (boardInfo) => {
 return await instance.post(`animal-board`, boardInfo);
};

// 글 전체보기
export const viewBoardList = async () => {
  return await instance.get(`animal-board`);
};

// 글 하나보기
export const viewDetail = async (animalBoardCode) => {
  return await instance.get(`animal-board/` + animalBoardCode);
};

// 글 수정
export const updateBoard = async (updatedInfo) => {
  return await instance.put(`animal-board`, updatedInfo);
};

// 글 삭제
export const delBoard = async (animalBoardCode) => {
  return await instance.delete(`animal-board/` + animalBoardCode);
};

/*
private String id; // 유저정보
    private String animalMainImage; 1
    private String animalBoardTitle; 1
    private String animalBoardContent; 1
    private String animalBoardView; -
    private Date animalBoardDate; -
    private int animalCategoryCode; 1
*/
