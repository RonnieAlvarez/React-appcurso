import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import producto1 from "./comp_imgs/imgProduct.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";


export const Item = (props) => {
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
      <Card className="Container align-items-center m-0 p-0" style={{ width: "15rem", heigth: "17rem" }}>
        <Card.Img className="m-0 p-0" variant="top" src={images ? images : producto1} style={{ width: "15rem", heigth: "8rem"}}/>
        <Card.Body className="product">
          <Card.Title className="h6">{title}  (#{id}) </Card.Title>
          <Card.Text className="fs-6">{shortDescription}</Card.Text>
          <Popollamada />
          <h6 className="align-items-center">
             Precio: ${price}
          </h6>
          <Link
              className="ms-2 me-2 btn btn-info btn-sm"
              to={`/maindetail/${id}`}
            >
              Agregar id: {id}
            </Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
