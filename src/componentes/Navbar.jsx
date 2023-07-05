import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget/CartWidget";
function Navbar() {
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
                <CartWidget />
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
    font weight:bold
}
padding:.4rem;
background-color:#333;
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
