import React, { useState } from 'react'
import { add } from '../list/listSlice'

export const AddItemForm = () => {

  const [item, setItem] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    add(item)
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <label>Item</label>
        <input type="text" placeholder="Item" onChange={(e) => setItem(e.target.value)} />
        <button type='submit' value="Add" />
      </form>
    </div>
  )
}
