import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import producto1 from "./comp_imgs/imgProduct.png";
import { Link } from "react-router-dom";


export const Usuarios = (props) => {
  const { id, name, avatar, role,email } = props.user;
  

  return (
    <div className="product mx-1 my-sm-1 align-items-center">
      <Card className="Container align-items-center m-0 p-0" style={{ width: "15rem", heigth: "17rem" }}>
        <Card.Img className="m-0 p-0" variant="top" src={avatar ? avatar : producto1} style={{ width: "15rem", heigth: "8rem"}}/>
        <Card.Body className="product">
          <Card.Title className="h6">{role}  (#{id}) </Card.Title>
          <Card.Text className="fs-6">
           Nombre: {name}
          Email: {email}
          </Card.Text>
          <Link
              className="ms-2 me-2 btn btn-info btn-sm"
              to={`/userdet/${id}`}
            >
              ver: {id}
            </Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Usuarios;
