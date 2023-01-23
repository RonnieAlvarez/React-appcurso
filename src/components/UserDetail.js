// import ItemCount from "./ItemCount";
import React from "react";
import Card from "react-bootstrap/Card";
import  Container  from 'react-bootstrap/Container';

const UserDetail = (props) => {
  const { id, name, email, avatar,role } = props.user;
  return (
    <div className="Container mt-5 detailcontent">
    <h2>{role}</h2>
    <div className="detailproduct detailProductTam">
        <Card
          className="detailproduct d-flex flex-row    detailProductTam  align-items-center"
          style={{ width: "40rem", heigth: "18rem" }}
        >
          <Card.Img
            variant="top"
            style={{ width: "18rem", heigth: "18rem" }}
            src={avatar ? avatar : " "}
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
            <Card.Title className="text-primary">{role}  + Id:{id}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Card.Text>{email}</Card.Text>
          </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserDetail;
