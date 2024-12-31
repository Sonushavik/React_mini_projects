import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
        const [time, setTime] = useState(new Date())

        useEffect(() => {
                const intervalId = setInterval(() => {
                        setTime(new Date())
                },1000)

                return() => {
                        clearInterval(intervalId)
                }
        },[])

  return (
    <>
        <h1>Digital Clock</h1>
        <div>
                <span>{time.getHours().toString().padStart(2,"0")}</span>:
                <span>{time.getMinutes().toString().padStart(2,"0")}</span>:
                <span>{time.getSeconds().toString().padStart(2,"0")}</span>
        </div>
        <div>
                {
                        time.toLocaleDateString(undefined, {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                        })
                }
        </div>
    </>
  )
}

export default DigitalClock
