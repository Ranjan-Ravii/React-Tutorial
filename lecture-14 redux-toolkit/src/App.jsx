// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, incrementByValue } from './feature/counter/counterSlice';

// const Counter = () => {

//   const count = useSelector((state) => state.Counter.value)
//   const dispatch = useDispatch()  

//   const handleIncrement = () => {
//     dispatch(increment())
//   };

//   const handleDecrement = () => {
//     dispatch(decrement())
//   };

//   // const handleIncrementBySize = () => {
//   //   dispatch(incrementByValue(Number(incrementSize)));
//   // };

//   return (
//     <div className='w-full h-screen flex justify-center items-center bg-slate-600 '>
//       <div class="w-full h-1/2 max-w-md bg-gray-800 rounded-lg shadow-xl p-6 ">
//         <div class="text-center mb-8">
//           <h2 class="text-2xl font-bold text-white">Counter</h2>
//         </div>

//         <div class="text-center mb-8">
//           <span class="text-4xl font-bold text-white">0</span>
//         </div>

//         <div class="flex gap-4 justify-center mb-8">
//           <button class="w-24 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//           onClick={handleDecrement}>
//             -
//           </button>
//           <button class="w-24 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" 
//           onClick={handleIncrement}>
//             +
//           </button>
//         </div>

//         <div class="space-y-4">
//           <input
//             type="number"
//             value="1"
//             class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter increment size"
//           />
//           <button class="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors" 
//           onClick={handleIncrementBySize}>
//             Increment by 1
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Counter;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByValue } from './feature/slics/CounterSlice';

const App = () => {
  const [incrementSize, setIncrementSize] = useState(1);
  const count = useSelector((state) => state.counter.value);  // Fixed selector path
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBySize = () => {
    dispatch(incrementByValue(Number(incrementSize)));  // Pass the incrementSize
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-600">
      <div className="w-full h-1/2 max-w-md bg-gray-800 rounded-lg shadow-xl p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Counter</h2>
        </div>

        <div className="text-center mb-8">
          <span className="text-4xl font-bold text-white">{count}</span>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <button 
            className="w-24 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={handleDecrement}
          >
            -
          </button>
          <button 
            className="w-24 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="number"
            value={incrementSize}
            onChange={(e) => setIncrementSize(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter increment size"
          />
          <button 
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={handleIncrementBySize}
          >
            Increment by {incrementSize}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
