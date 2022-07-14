import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from './listSlice'

export const Item = (key, text) => {

  const dispatch = useDispatch()
  const deleteItem = () => {
    dispatch(removeItem(key))
  }

  return (
    <div>
      { text }
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
