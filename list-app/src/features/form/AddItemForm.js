import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../list/listSlice'

export const AddItemForm = () => {

  const dispatch = useDispatch()
  const [item, setItem] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    dispatch(add(item))
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <label>Item</label>
        <input type="text" placeholder="Item" onChange={(e) => setItem(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
