import React, { useState } from 'react'

const Counter = () => {

        const [count, setCount] = useState(0)

        function increment(){
                setCount(count+1)
        }

        function decrement(){
                if(count>0)
                setCount(count-1)
        }

  return (
    <>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Counter
