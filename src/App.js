import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store/action.types';
import { add, multiply, subtract,divide } from './store/action';
import { useRef, useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state)=>state.count)
  const [x,setX] = useState()
 
  return (
    <div className="App">
      <h1>Calculate:{count}</h1>
      <div>
          <input type="number"  onChange={(e)=>setX(e.target.value)}></input>
          <button onClick={()=>dispatch(add(+x))}>+</button>
          <button onClick={()=>dispatch(subtract(+x))}>-</button>
          <button onClick={()=>dispatch(multiply(+x))}>*</button>
          <button onClick={()=>dispatch(divide(+x))}>/</button>
      </div>
    </div>
  );
}

export default App;
