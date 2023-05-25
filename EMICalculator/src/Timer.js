import { useState,useEffect } from "react";

const Timer=()=>{
    const [timer, setTimer]= useState(0);
    useEffect( function(){
        let intervalId = setInterval(function(){
            setTimer(prev=> prev+1);
        },  1000)
        return (()=>{clearInterval(intervalId)})
        }, [])

    return(
        <div>Timer : {timer}</div>
                
    )
}

export default Timer;