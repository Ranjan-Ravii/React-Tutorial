import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 5;
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1)
    }

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value by 1.</button>
      <br />
      <button onClick={removeValue}>Remove Value by 1.</button>
      <br />
      <br />
      <p>The state of counter Value is being changed using Hooks. <br />
        Hooks: Hooks are special functions in React that allow you to use React features, such as state and lifecycle methods, in functional components without needing to write a class. Hooks enable you to manage multiple states or perform side effects in response to user interactions, like a button click, in a more straightforward and reusable way.</p>
      <ul>
        <li>No Need for Classes: Hooks allow you to use React's powerful features in functional components, eliminating the need to write class components.</li>
        <li>Manage State and Effects: Hooks like useState and useEffect let you manage state and side effects in a more intuitive way.</li>
        <li>Multiple States and Effects: You can manage multiple pieces of state or perform various side effects (like fetching data or updating the DOM) within the same functional component.</li>
      </ul>
    </>
  )
}

export default App
