import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const getFetch = () =>{
    return fetch("http://localhost:8080/api/animal").then((response)=>{
       return response.json();
    }).then(data =>{
        return data;
    });
};

// async ~ await
export const getAwait= async ()=>{
    const response = await fetch("http://localhost:8080/api/animal");
    console.log(response);
    return response.json();
};

// axios (async ~ await) 왠만하면 이거 쓰면 됨
export const getAxios = async()=>{
    const response =await axios.get("http://localhost:8080/api/animal");
    return response.data;
};

// react-query
export const useGetQuery = ()=>{
    return useQuery({
        queryKey: ["animal"],
        queryFn: getAxios,
    });
}