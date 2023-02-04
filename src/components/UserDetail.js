// import ItemCount from "./ItemCount"
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const UserDetail = (props) => {
  const { name, email, avatar } = props.user;
  const navigate = useNavigate();
  return (
    <div className="Container mt-5 detailcontent">
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
              <Card.Title className="text-primary">{name}</Card.Title>
              <Card.Text>{email}</Card.Text>
            </Container>
            <button
              className=" btn btn-outline-secondary btn-sm"
              onClick={() => navigate(-1)}
            >
              go back
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserDetail;
