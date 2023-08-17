import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemCount/ItemDetailContainer/ItemDetail/index";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const consultadb = getFirestore();
    const consultaDoc = doc(consultadb, "productos", id);
    getDoc(consultaDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
