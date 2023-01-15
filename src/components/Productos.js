import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import producto1 from "./comp_imgs/imgProduct.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export const Productos = (props) => {
  const { id, title, price, images, description } = props.producto;
  const shortDescription = description.substring(0, 30) + "..." ? description.substring(0, 30) + "..." : " " ;
  

  const popover = (
    <Popover
      id="popover-basic"
      style={{ background: "lightblue", color: "black" }}
    >
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );

  const Popollamada = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="outline-dark" size="sm">
        Ver Descripcíon{" "}
      </Button>
    </OverlayTrigger>
  );

  return (
    <div className="product mx-2 my-sm-2 align-items-center">
      <Card style={{ width: "18rem", heigth: "500px" }}>
        <Card.Img variant="top" src={images[0] ? images[0] : producto1} />
        <Card.Body className="product">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <Popollamada />
          <h4>
             id: {id}   Precio: ${price}
          </h4>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Productos;
