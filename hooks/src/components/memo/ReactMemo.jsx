import React, { useMemo, useState } from 'react'
import MemoCount from './MemoCount'

const ReactMemo = () => {

        const [count, setCount] = useState(0)

        const myBioData = useMemo (() => {
                return {
                        name: "Sonu",
                        age: 20,
                }
        })
  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount((prev) => prev+1)}>increment</button>

      <MemoCount bioData={myBioData}/>
    </>
  )
}

export default ReactMemo
