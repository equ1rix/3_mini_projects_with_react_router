
import React, { useState, useEffect, useRef} from 'react';
import './Converter.css';
import currencyapi from '@everapi/currencyapi-js'



function Converter() {
  const [currencies, setCurrencies] = useState([]);
  const [results, setResults] = useState(null);

  const baseC = useRef('');
  const secondC = useRef('');
  const counter = useRef('');

  const client = new currencyapi('cur_live_AtDAYGZLrzUQNfIGHkqpJlmxkFOtMTnHPepgOjO0');

  useEffect(() => {
    const client = new currencyapi('cur_live_AtDAYGZLrzUQNfIGHkqpJlmxkFOtMTnHPepgOjO0');
    client.latest({
    }).then(response => {
      const currencyList = Object.keys(response.data);
      setCurrencies(currencyList);
    });
  }, []);

  function onClickButton(){
    const coun = counter.current.value;
    const counter0 = baseC.current.value;
    const counter1 = secondC.current.value;

    client.latest({
      base_currency: `${counter0}`,
      currencies: `${counter1}`,
    }).then(response => {
      if (!counter0 == '' && !counter1 == '') {
        const counterCurrencies = response.data[counter1]['value']
        const result = coun * counterCurrencies
        return setResults(result.toFixed(2));
      } else {
        return setResults('error')
      }
    });
  }

  return (
    <>
      <div className="formBlock">
        <input list="currency" type="text" name="base_currency" ref={baseC} />
        <input list="currency" type="text" name="currency" ref={secondC} />
        <input type='number' ref={counter}/>

        <datalist  id="currency">
          {currencies.map((currency, index) => (
            <option key={index} value={currency} />
          ))}
        </datalist>
        <button className='buttonConv' onClick={() => {onClickButton()}}>Push</button>
          {<p>{results}</p>}
      </div>
    </>
  );
}

export default Converter;
