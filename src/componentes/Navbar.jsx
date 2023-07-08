import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget/CartWidget";
function Navbar() {
  const onAdd = (valor) => {
    console.log(`Compra ${valor} cantidad`);
  };
  return (
    <>
      <Conteiner>
        <h2>Menú</h2>
        <div>
          <ul>
            <li>
              <a href="./componentes/paginas/Inicio.jsx">Home</a>
            </li>
            <li>
              <a href="./componentes/paginas/Catalogo.jsx">Catalogo</a>
            </li>
            <li>
              <a href="./componentes/paginas/Contacto.jsx">Contacto</a>
            </li>
            <li>
              <a href="#">
                <CartWidget initial={1} productos={10} onAdd={onAdd} />
              </a>
            </li>
          </ul>
        </div>
      </Conteiner>
    </>
  );
}
export default Navbar;
const Conteiner = styled.div`
h2{
    font weight: 400;
    font weight: bold;
}
padding:.4rem;
background-color: black;
display:flex;
align-items:center;
justify-content:space-between;
color:#fff;
position:relative;
float:left;
ul{
    list-style:none;
}
a{
    color:#fff;
    text-decoration:none;
    margin-right:1rem;
}
`;
