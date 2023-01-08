import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Productos = (props) => {
  const { id, title, price,images, description } = props.producto;
  return (
    <div className='product mx-2 my-sm-2 '>
    <Card style={{ width: '18rem', heigth: '500px' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h4>Id:{id} Precio:${price}</h4>
        <Button className='btnColor'>Agregar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default  Productos;