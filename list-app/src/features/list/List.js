import React from 'react'
import { Item } from './Item'
import { useSelector } from 'react-redux'
import { selectList } from './listSlice'

export const List = () => {

  const list = useSelector(selectList)

  return (
    <div className='list'>
      <ul>{ list.map((item, index) => {
      return <li><Item key={index} text={item}/></li>
    }) }</ul>
    </div>
  )
}
