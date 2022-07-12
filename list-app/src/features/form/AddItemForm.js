import React from 'react'

export const AddItemForm = () => {
  return (
    <div>
      <form>
        <label>Item</label>
        <input type="text" placeholder="Item" />
        <button type='submit' value="Add" />
      </form>
    </div>
  )
}
