import "./item.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ films }) => {
  console.log(films);
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={films.image} />
      <Card-Body>
        <Card.Text>{films.title}</Card.Text>
        <Card.Text>${films.price}</Card.Text>
        <Button as={Link} to={`/Item/${films.id}`} variant="primary">
          Detalle
        </Button>
      </Card-Body>
    </Card>
  );
};
export default Item;
