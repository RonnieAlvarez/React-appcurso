import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import producto1 from "./comp_imgs/imgProduct.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export const Productos = (props) => {
  const { id, title, price, images, description } = props.producto;
  const shortDescription = description.substring(0, 20) + "..." ? description.substring(0, 20) + "..." : " " ;
  

  const popover = (
    <Popover
      id="popover-basic"
      style={{ background: "lightblue", color: "black" }}
    >
      <Popover.Header as="h4">{title}</Popover.Header>
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
    <div className="product mx-1 my-sm-1 align-items-center">
      <Card style={{ width: "15rem", heigth: "17rem" }}>
        <Card.Img variant="top" src={images[0] ? images[0] : producto1} style={{ width: "15rem", heigth: "8rem"}}/>
        <Card.Body className="product">
          <Card.Title className="h6">{title}</Card.Title>
          <Card.Text className="fs-6">{shortDescription}</Card.Text>
          <Popollamada />
          <h6>
             id: {id}   Precio: ${price}
          </h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Productos;
