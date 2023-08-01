import "./item.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const films = [
  {
    id: 1,
    price: 5000,
    image: "https://i.postimg.cc/D0bpFXyj/descarga.jpg",
    title: "sarten",
  },
  {
    id: 2,
    price: 70000,
    image: "https://i.postimg.cc/J0WYrhDR/images.jpg",
    title: "cacerola cuadrada",
  },
  {
    id: 3,
    price: 80000,
    image: "https://i.postimg.cc/4N7BhVGB/Cacerola-28-Cherry.png",
    title: "cacerola 28cm",
  },
];
export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData(id)
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};
const Item = ({ info }) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={info.image} />
      <Card-Body>
        <Card.Text>{info.title}</Card.Text>
        <Card.Text>${info.price}</Card.Text>
        <Button as={Link} to={`/Item/${info.id}`} variant="primary">
          Detalle
        </Button>
      </Card-Body>
    </Card>
  );
};
export default Item;
