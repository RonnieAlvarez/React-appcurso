import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react'
import producto1 from './comp_imgs/imgProduct.png'


export const Productos = (props) => {
  return (
    <div className='product mx-2 my-sm-2 '>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto1} />
      <Card.Body>
        <Card.Title>{props.prodName}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur  elit. 
          Neque ipsum saepe sed, culpa debitis.
        </Card.Text>
        <Button className='btnColor'>Agregar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default  Productos;