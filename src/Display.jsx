import React,{useState} from "react";



const Display=()=>{
let time=new Date().toLocaleTimeString();
 const[curtime,settime]=useState(time);
 const updatedtime=()=>{
    time=new Date().toLocaleTimeString();
    settime(time);
 }

 return(
    <>
      <div className=" alter d-flex flex-column bd-highlight mb-3">
      <h3>{curtime}</h3>
       <button type="button"  className="btn btn-warning" onClick={updatedtime}>Click Me</button>  
       </div>
    </>
 )

}
 
export default Display;