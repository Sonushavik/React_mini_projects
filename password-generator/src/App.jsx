import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length,setLength ] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed)  str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*_+{}~`"

    for (let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passwordGenerator()

  },[length, numberAllowed, charAllowed, passwordGenerator]) 

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select(); // for effect on the password while clicking button
  passwordRef.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password) // for select password
},[password])

  return (
    <>
      |
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-2 text-orange-500 bg-gray-600 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex-shadow rounded-lg overflow-hidden mb-1 relative">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 my-2 rounded-sm pr-12"
            readOnly
            ref={passwordRef} //  taking reference
          />
          <button
            onClick={copyPasswordToClipboard}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 py-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Lenght : {length}</label>
          </div>

          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
