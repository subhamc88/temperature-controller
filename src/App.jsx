import "./index.css";
import {useState} from "react";

export default function App(){
  const [temp,setTemp] = useState(36);
  const [clr,setClr] = useState("orange");
  
  function increaseTemp() {
    let newTemp = temp+1;
    if(newTemp>=40){
      setClr("red");
    }
    else if(newTemp>34 & newTemp<40){
      setClr("orange");
    }
    else {setClr("blue");}
    setTemp(newTemp)
  }
  function decreaseTemp() {
    let newTemp=temp-1;
    if(newTemp>=40){
      setClr("red");
    }
    else if(newTemp<40 && newTemp>34){
      setClr("orange");
    }
    else{
      setClr("blue");
    }
    setTemp(newTemp)
  }
  return(
    <>
      <div className ="container">
        <div className ={`display-container , ${clr}`}>
          <div className ="display">{temp}°C</div>
        </div>
        <div className ="btn-container">
          <button onClick={increaseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
      </div>
    </>
  );
}
