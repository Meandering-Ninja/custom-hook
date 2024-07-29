import {useMemo, useState, useReducer, useEffect} from 'react';
import useCounter from './hook';
import logo from './logo.svg';
import './App.css';

function App() {
  const {count, increment, decrement} = useCounter(0)
  
  return (
    <div className="App">
      <p> Count : {count}</p>
      <input type="button" value="Increment" onClick={increment} />
      <input type="button" value="Decrement" onClick={decrement} /> 
        </div>
  );
}

export default App;
