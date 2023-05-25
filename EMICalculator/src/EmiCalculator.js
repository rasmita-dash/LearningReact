import { useEffect, useState } from "react";

const EmiCalculator = () =>{

    const [cost, setCost] = useState(0);
    const [processingFee, setProcessingFee] = useState(0);
    const [interest, setInterest] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [emi, setEmi] = useState(0);
    function calculateEMI(){
        const requiredLoan = cost-downPayment;
        const P = requiredLoan + (requiredLoan * (processingFee/100));
        const roi= interest/100/12;
        // P x R x (1+R)^N / [(1+R)^N-1]
        setEmi(P * roi * (1+roi)^tenure / [(1+roi)^tenure-1]);
    }
    const updateCost=(e)=>{
        const c= Number(e.target.value);
        setCost(c);
        calculateEMI();
    }
    const updateProcessingFee=(p)=>{
        setProcessingFee(p);
        calculateEMI();
    }
    const updateROI=(r)=>{
        setInterest(r);
        calculateEMI();
    }
    const updateDownPayment=(downPayment)=>{
        setDownPayment(downPayment);
        calculateEMI();
    }
    function updateTenure(e){
        const c= Number(e.target.value);
        setTenure(c);
    }
    // useEffect(calculateEMI(),[tenure]);
    return(
        <div className="container">
            
            <h3 className="content">EMI Calculator</h3>

            <label className="content" htmlFor ="cost">Cost of Property</label> 
            <input className="content" type="number" value={cost} id="cost" min={0} onChange={ (e) => updateCost(e)}></input>
 
            <label className="content" htmlFor ="fee">Processing Fee (in %)</label>
            <input className="content" type="number" id="fee" value={processingFee} 
            min={0} max={cost}
            onChange={(e) =>updateProcessingFee(e.target.value)}></input>
 
            <label className="content" htmlFor ="interest">Rate of Interest  (in %)</label>
            <input className="content" type="number" id="interest" value={interest} min={0} onChange={(e)=>updateROI(e.target.value)}></input>
 
            <label className="content" htmlFor ="downPayment">Down Payment</label>
            <input className="content" type="number" id="downPayment" value={downPayment}
            min={0} max={cost} onChange={(e) => updateDownPayment(e.target.value)}></input>
            
 
            <label className="content" htmlFor ="tenure">Tenure (in months)</label>
            <input className="content" type="range" id="tenure" value={tenure} min={0} max={360}  onChange={updateTenure}></input>
            <div className="slide-value-container">
                <label>0</label>
                <b>{tenure}</b>
                <label>{360}</label>
            </div>
 
            <label className="content" htmlFor ="emi">EMI</label>
            <input className="content" type="number" id="emi" value={emi} readOnly={true}></input>
        </div>
    )
}
 export default EmiCalculator;