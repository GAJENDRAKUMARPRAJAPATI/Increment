import { useState } from "react";

const Home = () =>{
    const[count, setCount]= useState(0);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>INC</button>
        <button onClick={()=>{if(count>0){setCount(count -1)}else{setCount(0)}}}>DEC</button>
        </>
    )
}
export default Home;