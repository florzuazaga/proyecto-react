import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemCount/ItemDetailContainer/ItemDetail/index";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", "2q85IOAoHFNCMJeL5SoB");
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};
export default ItemDetailContainer;
