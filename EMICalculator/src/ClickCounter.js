import { useState } from "react";

const MyButton=(props)=>{
    const [clickCount, setClickCount]= useState(0);
    function handleClick(){
        setClickCount(clickCount+1);
    }
    return(
        <>
            <button onClick={handleClick} style={props.style}>Click me!</button>
            You've clicked me : {clickCount} {clickCount<=1? 'time': 'times'}
        </>
    )
}

const ClickCounter=()=>{
    return (
        <div className="container">
            <MyButton style={{marginTop: '5px', 'background-color': 'aqua'}}/>
            <MyButton style={{marginTop: '5px', 'background-color': 'ice-blue'}}/>
            <MyButton style={{marginTop: '5px', 'background-color': 'cyan'}}/>
            <MyButton style={{marginTop: '5px', 'background-color': 'beige'}} />
            <MyButton style={{marginTop: '5px', 'background-color': 'light'}}/>
        </div>
    )
}

export default ClickCounter;