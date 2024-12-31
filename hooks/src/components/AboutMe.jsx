import React, {useContext} from 'react'
import { BioContext } from './context/Context'

const AboutMe = () => {

        const {myName, myAge, add} = useContext(BioContext)
  return (
    <>
      <h3>Hello there this is {myName} . I am from {add}</h3>
    </>
  )
}

export default AboutMe
