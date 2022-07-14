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
    removeItem: (state, action) => {
      console.log('>>>>>>', action.payload)
      const remove = state.items.indexOf(action.payload)
      state.items.splice(remove, 1)
    }
  },
})

export const selectList = (state) => state.list.items
export const { add, removeItem } = listSlice.actions
export default listSlice.reducer
