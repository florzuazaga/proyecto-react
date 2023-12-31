import "./item.css";
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={info.image} alt="" />
      <Card-Body>
        <Card.Text>{info.title}</Card.Text>
        <Card.Text>${info.price}</Card.Text>
        <Button as={Link} to={`/item/${info.id}`} variant="primary">
          Detalle
        </Button>
      </Card-Body>
    </Card>
  );
};
export default Item;
