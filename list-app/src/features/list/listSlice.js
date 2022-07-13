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
    remove: (state, action) => {
      const remove = state.items.indexOf(action.payload)
      state.items.splice(remove, 1)
    }
  },
})

export const selectList = (state) => state.list.items
export const { add, remove } = listSlice.actions
export default listSlice.reducer
