import { useState } from "react";
export default function Calculator(){
    const [exp,setExp]=useState("");
    const [res,setRes]=useState("");

    const click = (event) =>{
        setExp(exp.concat(event.target.value));
    }
    
    const handleClear=()=>{
        setExp("");
        setRes("");
    };
    const handleEqual=()=>{
        if(exp===""){
            setRes("Error");
            return;
        }
        try{
            setRes(String(eval(exp)))
        }
        catch{
            setRes("Error");
        }
    };
    return(
        <div style={{textAlign:"center"}}>
            <h1>React Calculator</h1>
            <input type="text" value={exp} readOnly/>
            <div>{res}</div>
            <div>
                <button value={"7"} onClick={click}>7</button>
                <button value={"8"} onClick={click}>8</button>
                <button value={"9"} onClick={click}>9</button>
                <button value={"+"} onClick={click}>+</button>
                <br/>
                <button value={"4"} onClick={click}>4</button>
                <button value={"5"} onClick={click}>5</button>
                <button value={"6"} onClick={click}>6</button>
                <button value={"-"} onClick={click}>-</button>
                <br/>
                <button value={"1"} onClick={click}>1</button>
                <button value={"2"} onClick={click}>2</button>
                <button value={"3"} onClick={click}>3</button>
                <button value={"*"} onClick={click}>*</button>
                <br/>
                <button onClick={handleClear}>C</button>
                <button value={"0"} onClick={click}>0</button>
                <button onClick={handleEqual}>=</button>
                <button value={"/"} onClick={click}>/</button>
            </div>
        </div>
    );
}