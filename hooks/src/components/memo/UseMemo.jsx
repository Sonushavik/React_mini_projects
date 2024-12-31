import React, { useMemo, useState } from 'react'

const ExpensiveComponent = () => {
        const sum = () => {
                let i=0
                for(i=0; i<1000000000;i++){
                        i=i+1;
                }

                return i;
        }

        const total = useMemo(() => sum(), [])

        return <p>sum: {total}</p>
}

const MemoParentComponent = () => {
        const [count, setCount] =useState(0);

        return(
                <>
                <button onClick={() => setCount(count+1)}>Re-render Parent</button>
                <p>{count}</p>
                </>
        )
}

export default MemoParentComponent;