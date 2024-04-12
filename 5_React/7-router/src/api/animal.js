import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const instance = axios.create({
    baseURL: "http://localhost:8080/api/",
})
// 해설본 - 전체 보기
export const getAnimals = async() =>{
    return await instance.get("animal");
};

// 추가
export const addAnimal = async(data)=>{
    return await instance.post("animal", data);
}

// 삭제
export const delAnimal = async(no)=>{
    return await instance.delete("animal/" + no);
}

// export const useGetQuery = ()=>{
//     return useQuery({
//         queryKey : ["animal"],
//         queryFn: async()=>{
//             const response = await axios.get("http://localhost:8080/api/animal");
//             return response.data;
//         },
//     });
// }
