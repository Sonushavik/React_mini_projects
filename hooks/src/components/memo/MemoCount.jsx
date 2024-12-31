import React, { useRef, memo } from 'react'

const MemoCount = ({bioData}) => {

        const renderCount = useRef(0);
  return (
    <div>
      <p> Nothing changed here but Ive now rendered:
        <span>{renderCount.current++}times</span>
      </p>
      <p>my Name is {bioData.name}</p>
    </div>
  )
}

export default (MemoCount)
