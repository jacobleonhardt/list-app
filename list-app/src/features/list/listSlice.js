import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
    },
  },
})

export const selectList = (state) => state.list.items
export const { add } = listSlice.actions
export default listSlice.reducer
