import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter.Jsx'
import { BioProvider } from './components/context/Context'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import DigitalClock from './components/DigitalClock'
import UseReducer from './components/UseReducer'
import ReactMemo from './components/memo/ReactMemo'
import MemoParentComponent from './components/memo/UseMemo'

function App() {
  
  return (
    <>
      {/* <Counter/> */}

      {/* <BioProvider>
        <Home/>
        <AboutMe/>
      </BioProvider> */}

      <DigitalClock/>
      {/* <UseReducer/> */}

      {/* <ReactMemo/> */}
      {/* <MemoParentComponent/> */}
    </>
  )
}

export default App
