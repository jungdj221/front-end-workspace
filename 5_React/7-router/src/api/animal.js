import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});
// 해설본 - 전체 보기
export const getAnimals = async () => {
  return await instance.get("animal");
};

// 추가
export const addAnimal = async (data) => {
  return await instance.post("animal", data);
};

// 삭제
export const delAnimal = async (no) => {
  return await instance.delete("animal/" + no);
};

// 특정 페이지 보기
export const getAnimal = async (no) => {
  return await instance.get("animal/" + no);
};

// 수정
export const updateAnimal = async (data) => {
  return await instance.put("animal", data);
};

// export const useGetQuery = ()=>{
//     return useQuery({
//         queryKey : ["animal"],
//         queryFn: async()=>{
//             const response = await axios.get("http://localhost:8080/api/animal");
//             return response.data;
//         },
//     });
// }
