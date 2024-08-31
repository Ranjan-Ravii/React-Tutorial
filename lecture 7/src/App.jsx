import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Sam",
    age: 21
  }

  let myArrr = [1, 2, 3]

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!</h1>
      <br />

      <div className="flex justify-center items-center flex-wrap">
        <Card username="Lily" btnText="Click me" para="this is Lily, a software developer."  />
        <br />
        <Card username="Bloom" para="This is Bloom, a UI/UX and software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quae." btnText="Visit me"  />
        <Card username = "Alex" para = "This is Alex, A data "  />
      </div>

    </>
  )
}

export default App
