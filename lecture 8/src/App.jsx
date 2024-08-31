import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1

    // setCounter(counter + 1)
    // setCounter(counter + 1 )
    // setCounter(counter+ 1)
    // setCounter(counter + 1)
    
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    // setCounter(counter - 1)
    setCounter(prevCounter => prevCounter - 1 )
    
  }
  
  return (
    <>
      <h1>Problem 1 </h1>
      <p><b>Question:</b> What happens when you call setCounter multiple times in the same event handler,<br />
      and how can you ensure that each call properly updates the state?
      <br />
      In the code "setCounter(counter + 1)" has used 4 times, what would be the output, if useState(15) is given. <br />
      if 16, why? OR if 19, how so.?
      </p>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p> <b>Answer : </b>when the setCounter() is called multiple times within the same handler in react,<br />
      React batches all the updates togather for performance optimization. </p>
      <p>footer: {counter}</p>
    </>
  )
}

export default App