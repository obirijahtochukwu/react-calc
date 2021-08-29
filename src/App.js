import React, { useState } from 'react';
import './App.css';
import Results from './components/Results';
import Keypad from './components/Keypad';

function App(){
  const [result, setResult] = useState('')

  const onClick = button => {
    if (button === "=") {
      calculate()
    } else if (button === "reset") {
      reset()
    } else if (button === "del") {
      backspace();
    } else {
      setResult(result + button)
    }
  };
  
  const calculate = () => {
    try {
      setResult(
        // eslint-disable-next-line
        (eval(result) || "") + ""
      )
    } catch(e) {
      setResult("error")
    }
  };

  const reset = () => {
    setResult('')
  };

  const backspace = () => {
    setResult(result.slice(0, -1))
  };


  
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto contain">
          <div className="head">
            <header>calc</header>
          </div>
          <Results result={ result }/>
          <Keypad onClick={ onClick }/>
        </div>
      </div>
    </div>
  );
  
}

export default App;