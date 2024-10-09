import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  // let count  =10


  let addValue = () =>{
   setCount(count+1)
  }

  let removeValue = () =>{
      if(count>0){
        setCount(count-1)
    }else{
      //
    }
  }

  return (
    <>
        <h1><u>Counter</u></h1>
        <h2>counter value: {count}</h2>

        <button onClick={addValue}>Add value</button>
        <br></br>
        <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
