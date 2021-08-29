import React, { useState, useEffect } from 'react';


export default function Calculate() {
 
 const [prevValue, setPrevValue] = useState(null);
 const [nextValue, setNextValue] = useState('0');
 const [op, setOp] = useState(null);
 
 useEffect(() => {}, [op, nextValue, prevValuen]);

  const Operators = {
   '/': (firstValue, secondValue) => firstValue / secondValue,
   '*': (firstValue, secondValue) => firstValue * secondValue,
   '+': (firstValue, secondValue) => firstValue + secondValue,
   '-': (firstValue, secondValue) => firstValue - secondValue,
   '=': (firstValue, secondValue) => firstValue = secondValue
  };

  const performOperation = () =>{
   let temp = Operators[op](
    parseFloat(prevValue),
    parseFloat(nextValue)
   );
   setOp(null);
   setNextValue(String(temp));
   setPrevValue(null);
  };

  const handleNum = (number) =>{
   setNextValue(nextValue === '0' ? String(number) : nextValue + number);
  };

  const insertDot = () => {
   if(!/\./.test(nextValue)){
    setNextValue(nextValue + '.');
   }
  };

  const percentage = () =>{
   setNextValue(parseFloat(nextValue) / 100);
   if(prevValue && nextValue ===''){
    setPrevValue(parseFloat(prevValue) / 100);
   }
  };

  const changeSign = () =>{
   setNextValue(parseFloat(nextValue) * -1);
  };

  const clearData = () =>{
   setNextValue('0');
   setPrevValue('0');
  };

  const handleOperation = () =>{
   if(Number.isInteger(value)){
    handleNum(parseInt(value, 10));
   }
   else if(value in Operators){
    if(op === null){
     setOp(value);
     setPrevValue(nextValue);
     setNextValue('');
    }
    if(op){
     setOp(value);
    }
    if(prevValue && op && nextValue){
     performOperation();
    }
   }
   else if(value ==='reset'){
    clearData();
   }
   else if(value === '\xB1'){
    changeSign();
   }
   else if(value === '.'){
    insertDot();
   }
   else if(value === '%'){
    percentage()
   }
  }
 
 return (
  <div>
   <div className="container">
    <div className="row">
     <div className="col-12 col-md-6 mx-auto contain">
     <div className="head">
      {1 + 2}
      <header>calc</header>
     </div>
      <input onChange={(e)=> setInput( e.target.name)} type="text" readOnly name={input} className='w-100'/>
      <div className="keypad">
       <div className="row">
        <div className="col-3 bty">
         <button name='7' onClick={(e)=> setInput( e.target.name)}>7</button>
        </div>
        <div className="col-3 bty">
         <button name='8' onClick={(e)=> setInput( e.target.name)}>8</button>
        </div>
        <div className="col-3 bty">
         <button name='9' onClick={(e)=> setInput( e.target.name)}>9</button>
        </div>
        <div className="col-3 bty">
         <button className='res del'>del</button>
        </div>
        <div className="col-3 bty">
         <button name='4' onClick={(e)=> setInput( e.target.name)}>4</button>
        </div>
        <div className="col-3 bty">
         <button name='5' onClick={(e)=> setInput( e.target.name)}>5</button>
        </div>
        <div className="col-3 bty">
         <button name='6' onClick={(e)=> setInput( e.target.name)}>6</button>
        </div>
        <div className="col-3 bty">
         <button name='+'>+</button>
        </div>
        <div className="col-3 bty">
         <button name='1' onClick={(e)=> setInput( e.target.name)}>1</button>
        </div>
        <div className="col-3 bty">
         <button name='2' onClick={(e)=> setInput( e.target.name)}>2</button>
        </div>
        <div className="col-3 bty">
         <button name='3' onClick={(e)=> setInput( e.target.name)}>3</button>
        </div>
        <div className="col-3 bty">
         <button name='-' onClick={(e)=> setInput( e.target.name)}>-</button>
        </div>
        <div className="col-3 bty">
         <button name='.' onClick={(e)=> setInput( e.target.name)}>.</button>
        </div>
        <div className="col-3 bty">
         <button name='0' onClick={(e)=> setInput( e.target.name)}>0</button>
        </div>
        <div className="col-3 bty">
         <button name='/' onClick={(e)=> setInput( e.target.name)}>/</button>
        </div>
        <div className="col-3 bty">
         <button name='*' onClick={(e)=> setInput( e.target.name)}>*</button>
        </div>
        <div className="col-6 bty">
         <button name='reset'  className="res">reset</button>
        </div>
        <div className="col-6 bty pl-0">
         <button name='result' className='ok'>=</button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}


















