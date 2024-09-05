import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numsAllowed, setNumsAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordrRef = useRef(null)


  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    let requiredChars = ""

    if (numsAllowed) {
      str += "0123456789"
      requiredChars += "0123456789".charAt(Math.floor(Math.random() * 10))
    }
    if (charsAllowed) {
      str += "!@#$%"
      requiredChars += "!@#$%".charAt(Math.floor(Math.random() * 5))
    }

    const totalLength = length - requiredChars.length

    for (let i = 0; i < totalLength; i++) {
      let randomIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomIndex);
    }

    pass += requiredChars;
    pass = pass.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(pass)

  }, [length, numsAllowed, charsAllowed, password])


  const copyPassword = useCallback(() => {
    passwordrRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numsAllowed, charsAllowed])

  return (
    <>
      
        <div className='flex flex-col items-center justify-center space-y-4 my-16 mx-auto p-6 rounded-2xl shadow-2xl shadow-slate-900'>
          <h1 className='text-2xl font-black text-white'>Password Generator</h1>
          <input
            className='text-center rounded-xl bg-slate-300 h-8 w-64'
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordrRef}
          />
          <button
            onClick={copyPassword}
            className='text-white text-xl m-5 bg-black p-3 rounded-xl '>
            Copy</button>



          <div className='flex flex-col items-center space-y-2'>

            <label htmlFor='length' className='text-lg font-medium'>
              Password Length: {length}
            </label>
            <input
              className='w-64'
              type="range"
              id="length"
              min="8"
              max="16"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>


          <div className='flex items-center space-x-2'>
            <input
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500'
              type="checkbox"
              checked={numsAllowed}
              onChange={(e) => setNumsAllowed((prev) => !prev)}
            />
            <label htmlFor="includeNumbers" className='text-lg font-medium'>
              Include Numbers
            </label>
          </div>


          <div className='flex items-center space-x-2'>
            <input
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500'
              type="checkbox"
              checked={charsAllowed}
              onChange={(e) => setCharsAllowed((prev) => !prev)}
            />
            <label htmlFor="includeSpecialChars" className='text-lg font-medium'>
              Include Special Characters
            </label>
          </div>
        </div>
 
    </>
  )
}

export default App
