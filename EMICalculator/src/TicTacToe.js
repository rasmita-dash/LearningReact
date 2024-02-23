import { useState } from "react";

export default function TicTacToe(){
    const [btnValue, setBtnValue]=useState(Array(9).fill(null));
    const [isOddClick, setIsOddClick]=useState(false);
    const [winner, setWinner]=useState(null);

    function handleClick(index){
        if(btnValue[index]){
            return;
        }
        const squares= btnValue.slice();
        if(isOddClick){
            squares[index]='0'
        }else{
            squares[index]='X';
        }
        setIsOddClick(!isOddClick);
        setBtnValue(squares);
        setWinner(getWinner());
        console.log(winner);
    }
    function getWinner(){
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i< lines.length; i++){
            const[a,b,c]=lines[i];
            if(btnValue[a] && btnValue[a]=== btnValue[b] && btnValue[a]===btnValue[c]){
                return btnValue[a];
            }
        }
        return null;
    }
    return(
        <>
        <label>{winner!=null? winner +' is the winner.': ''}</label>
            <div>
                <button className="btn-square" onClick={() => handleClick(0)}><span>{btnValue[0]}</span></button>
                <button className="btn-square" onClick={() => handleClick(1)}><span>{btnValue[1]}</span></button>
                <button className="btn-square" onClick={() => handleClick(2)}><span>{btnValue[2]}</span></button>
            </div>
            <div>
                <button className="btn-square" onClick={() => handleClick(3)}><span>{btnValue[3]}</span></button>
                <button className="btn-square" onClick={() => handleClick(4)}><span>{btnValue[4]}</span></button>
                <button className="btn-square" onClick={() => handleClick(5)}><span>{btnValue[5]}</span></button>
            </div>
            <div>
                <button className="btn-square" onClick={() => handleClick(6)}><span>{btnValue[6]}</span></button>
                <button className="btn-square" onClick={() => handleClick(7)}><span>{btnValue[7]}</span></button>
                <button className="btn-square" onClick={() => handleClick(8)}><span>{btnValue[8]}</span></button>
            </div>
        </>
    )
}