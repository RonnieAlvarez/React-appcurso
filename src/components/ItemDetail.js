import ItemCount from "./ItemCount";
import React from "react";
import Card from "react-bootstrap/Card";
import  Container  from 'react-bootstrap/Container';



const ItemDetail = (props) => {
  const { title, images, description, price,stock } = props.producto;
  console.log(props)
  return (
    <div className="Container mt-5 detailcontent">
      <h2>{title}</h2>
      <div className="detailproduct detailProductTam">
        <Card
          className="detailproduct d-flex flex-row    detailProductTam  align-items-center"
          style={{ width: "40rem", heigth: "18rem" }}
        >
          <Card.Img
            variant="top"
            style={{ width: "18rem", heigth: "18rem" }}
            src={images ? images : "https://api.lorem.space/image/fashion?w=640&h=480&r=2861"}
          />
          <Card.Body
            style={{
              background: "white",
              color: "black",
              width: "18rem",
              heigth: "18rem",
            }}
          >
          <Container className="d-flex flex-column align-items-center p-1">
            <Card.Title className="text-primary">{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <span className="lh-sm m-0 fs-6 fw-light text-primary " ><strong>$ {price} </strong> Stock <strong>{stock}</strong></span>
            <ItemCount producto={props.producto}/>
          </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
