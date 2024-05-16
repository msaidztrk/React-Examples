import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    productLine: 5 ,
  },
  reducers: {
    increment: (state) => {
      state.productLine += 1
      console.log(state.productLine);
    },
    decrement: (state) => {
      state.productLine -= 1
    },
    incrementByAmount: (state, action) => {
      state.productLine += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer