import './App.css';
import { useState } from 'react';
import useGeneratePassword from './hooks/useGeneratePassword';

function App() {
  const [length, setLength] =useState(4);
  const [passwordOptions, setPasswordOptions]= useState([
    {title: 'Use Upper Case', state: false},
    {title: 'Use Lower Case', state: false},
    {title: 'Use Numbers', state: false},
    {title: 'Use Special Characters', state: false},
  ]);
  const { genPassword, generatePassword } = useGeneratePassword();
  function handleLengthChange (e){
    setLength(e.target.value);
  }

  function handleOptionChange (opt){
    const updatedOptions = [...passwordOptions]
    updatedOptions.map(pwdOp => {
      if(pwdOp.title === opt.title){
        pwdOp.state = !pwdOp.state
      }
    });
    setPasswordOptions(updatedOptions);
    console.log(passwordOptions);
  }
  function handleGeneratePassword(){
    generatePassword(length, passwordOptions);

  }
  return (
    <div className="App">
      <h3 style={{marginBottom: '20px'}}>Password Generator</h3>

      <div className='pwd-gen-container'>
        
          <div className="pwd-generator">

          <div className='pwd-container'>
            <label>{genPassword}</label>
            <button onClick={() => {navigator.clipboard.writeText(genPassword)}}>Copy</button>
          </div>
          <div className='length-container'>
            <span className='length-specifier'>
              <label>Length</label>
              <label>{length}</label>
            </span>
            <input className='length-range' type="range" value={length} min= {0} max={14} onChange={handleLengthChange}/>
          </div>
          <div className='checkbox-container'>
            {passwordOptions.map((opt,index) => {
              return (<span className='pwd-option' key={index} >
                    <input type='checkbox' checked={opt.state} onChange={()=>handleOptionChange(opt)} /> 
                    <label>{opt.title}</label>
              </span>)
            })}
          </div>
          <div>
            <button className='btn-generate' onClick={handleGeneratePassword}>Generate Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
