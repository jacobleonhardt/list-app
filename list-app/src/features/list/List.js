import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectList } from './listSlice'
import { remove } from './listSlice'

export const List = () => {

  const dispatch = useDispatch()
  const list = useSelector(selectList)

  return (
    <div className='list'>
      <ul>{ list.map( item => {
      return <li key={list.indexOf(item)} >{ item } <button onClick={dispatch(remove())}>X</button></li>
    }) }</ul>
    </div>
  )
}
