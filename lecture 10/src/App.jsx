import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numsALlowed, setNumbrs] = useState(false)
  const [charsAlloweed, setChars] = useState(false)
  const [Password, setPassword] = useState("")


  // const passwordGenerator = useCallback( ()=>{
  //   let pass = ""
  //   const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (numsALlowed) {
  //     str += '0123456789'
  //   }
  //   if (charsAlloweed) {
  //     str += '@$%-'
  //   }
    
  //   for(let i = 1; i<)


  // }
  //   ,[length, allowNums, allowChars, setPassword])

  return (
    <>
    <div className='flex justify-center '>
      <div className='my-10 w-1/2 bg-gray-600 flex flex-col items-center rounded-2xl shadow-2xl'>
        <h1 className='text-3xl text-center text-white m-10'>Password Generator</h1>
        <div className='flex justify-center items-center m-5'>
          <input className='h-12 w-60 rounded-xl' type="text" />
          <button className='text-white text-xl m-5 bg-black p-3 rounded-xl '>Copy</button>
        </div>
        <div className='flex flex-col justify-center items-center m-5'>
          <div className='flex items-center'>
            <input type="range" />
            <label className='text-white text-xl m-2'>Length</label>
          </div>
          <div className='flex items-center h-12'>
            <input type="checkbox" />
            <label className='text-white text-xl m-5'>Numbers</label>
            <input type="checkbox" />
            <label className='text-white text-xl m-5'>Characters</label>
          </div>
         
        </div>
      </div>
      </div>
    </>

  )
}

export default App
