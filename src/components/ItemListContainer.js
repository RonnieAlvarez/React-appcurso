import React from 'react'
import { Productos } from './Productos';

export const ItemListContainer = (props) => {
  return (
      <>
      <h2 className='mb-3'>{props.greeting}</h2>
      <div className='content'>
        <Productos prodName="Producto 1"/>
        <Productos prodName="Producto 2"/>
        <Productos prodName="Producto 3"/>
        <Productos prodName="Producto 4"/>
    </div>
      </>
  )
}
