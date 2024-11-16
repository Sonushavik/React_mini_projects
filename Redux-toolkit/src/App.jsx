
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value); // ye store ya state  se data fetch krne ka tarika hai
  const dispatch = useDispatch(); //ye state ko update krne ke liye use hota hai
  function handleIncrementClick (){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement())
  }

  function handleResetClick(){
    dispatch(reset())
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button><br/><br/>
      <button onClick={handleResetClick}>Reset</button>
      <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
      <br/>
      <br/>
      <button onClick={handleIncAmountClick}>Increment by number</button>
    </div>
  )
}

export default App
