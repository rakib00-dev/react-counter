import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  let val = localStorage.getItem('data');
  let val2 = Number(val);
  console.log(val2);

  const [count, setCount] = useState(val2);
  console.log(val);
  console.log(count);

  function OnFun() {
    setCount((count) => (count = count + 1));
    store();
  }

  const store = () => {
    val = count;
    localStorage.setItem('data', val);
  };

  const clearCount = () => {
    setCount(0);

    document.getElementById('head').innerHTML = 0;
    document.getElementById('btnval').innerHTML = 0;
    // localStorage.removeItem('data', val);
  };

  return (
    <div id="wrapper">
      <div>
        <img id="react" src={reactLogo} alt="" />
        <h1>
          Current count time is <span id="head">{val2}</span>
        </h1>
        <button onClick={OnFun}>
          Count <strong id="btnval">{val2}</strong>
        </button>
        <br />
        <a onClick={clearCount}>clear count</a>
      </div>
    </div>
  );
}

export default App;
