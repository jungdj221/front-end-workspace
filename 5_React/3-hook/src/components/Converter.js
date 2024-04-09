import { useState, useEffect } from "react";
import Btn from "./Btn";


const Converter= ()=>{
    const [number, setNumber] = useState("");
    const [bool, setBool] = useState(false);
    const [text, setText] = useState("Minutes => Hours");

    const change = (e)=>{
        console.log(e.target.value);
        setNumber(e.target.value);
    };

    const reset= ()=>{
        setNumber("");
    };

    const invert= ()=>{
        setBool(!bool);
        reset(); 
    };

    useEffect(()=>{
        if(bool){
            setText("Hours => Minutes");
        }else{
            setText("Minutes => Hours");
        }  
    },[bool]);
   
return <>
        <h1>Time Converter</h1>
        <label>Minutes : <input placeholder="Minutes" disabled={bool} type="number" onChange={change} value={bool ? number*60 : number}/></label><br/>
        <label>Hours : <input placeholder="Hours" disabled={!bool} onChange={change} value={bool ? number : Math.floor(number/60)}/></label><br/>
        
        <Btn text="Reset" click={reset}/>
        <Btn text={text} click={invert}/>
    </>;
};

export default Converter;