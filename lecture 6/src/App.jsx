import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h2>Real DOM</h2>
      <ul>
        <li>Real DOM is the actual structre of the webpage.</li>
        <li>React update complete document in real DOM.</li>
        <li>Any changes made directly reflects the complete webpage.</li>
        <li>All UI components need to be re-rendered for every DOM update.</li>
      </ul>
      <h2>Virtual DOM</h2>
      <ul>
        <li>Virtual DOM represent the virtual/memory representation of the Webpage.</li>
        <li>React update the state changes in Virtual DOM first and then it syncs with Real DOM</li>
        <li>Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions</li>
      </ul>
     </div>
    </>
  )
}

export default App
