import { configureStore } from '@reduxjs/toolkit' 
import counterReducers from  '../feature/slics/CounterSlice';


export const store = configureStore({
  reducer: {
    counter : counterReducers
  }, 
})