import React, {useContext} from 'react'
import { BioContext } from './context/Context'
const Home = () => {
const { myName, myAge }= useContext(BioContext)
  return (
    <>
    <h1>Hello Everyone my Name is {myName}. I am {myAge} years old</h1>
    </>
  )
}

export default Home
