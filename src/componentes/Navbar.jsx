import React from "react";
import styled from "styled-components";
import CartWidget from "./Titulo/CartWidget";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/item/:id">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalogo/pormayor">Catalogo</NavLink>
            </li>
            <li>
              <NavLink to="/catalogo/pormenor">Catalogo2</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
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
background-color: pink;
display:flex;
align-items:center;
justify-content:space-between;
color:black;
position:relative;
float:left;
ul{
    list-style:none;
}
a{
    color:black;
    text-decoration:none;
    margin-right:1rem;
}
`;
