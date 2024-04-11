import {getFetch, getAwait, getAxios, useGetQuery} from "./api/animal"; // getFetch파일을 import시 중괄호 필수
import { useEffect } from "react";
import { useState } from "react";

const App = ()=> {
  // const [data, setData] = useState([]); // 리스트로 가져오려면 초기값을 빈배열 []
  
  // const dataLoad = async()=>{
  //   const result = await getAxios();
  //   setData(result);
  //   // getAwait().then((result)=>{
  //   //   console.log(result);
  //   //   setData(result);
  //   // });
  // };
  // useEffect(()=>{
  //   dataLoad();
  // },[]);

  // react-query
  const {data, isLoading, isError} = useGetQuery();

  if(isLoading) return <>Loading...</>;
  if(isError) return <>Error...</>

  return ( <>
    {data?.map((animal)=>  /*최종 처리 과정에서 에러가 나면 ? 붙이기 null돠 관련된거 처리 해줌*/
      <div key={animal.no}>이름 : {animal.name}</div> // 데이터정보를 가져오는 최상위 테그에 무조건 key를 명시해줘야함 key는 서버상의 primary key에 해당하는 변수명을 가져옴.
    )} 
  </> // 리스트를 return할때는 map 함수를 사용
  );
}

export default App;
