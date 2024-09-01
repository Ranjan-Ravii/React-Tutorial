import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("purple");

  useEffect(() => { // useEffect autometically triggered when file is rendered or re-rendered
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div className='w-full h-screen duration-200'>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-l'>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "red"}}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "green"}}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: "blue"}}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;