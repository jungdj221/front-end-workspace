import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/compagno/",
});

// 추가
export const writeBoard = async (data) => {
  return await instance.post("animal-board", data);
};