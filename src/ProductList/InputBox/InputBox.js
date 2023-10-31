import React from "react";
import './InputBox.css';


function Input ({button, value, currency, changeValue, changeCurrency}) {




    return(
    <div className='box'>
        <div className='inputBox'>
          <p className='title'>Продукт</p>
          <input className='input' type='text' value={value} onChange={changeValue}/>
          <p className='title'>Кількість</p>
          <input className='input' type='number' value={currency} onChange={changeCurrency}/>
        </div>
        <button className='button' onClick={button}>Add</button>
      </div>
    )
}

export default Input;