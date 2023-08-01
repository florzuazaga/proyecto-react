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
              <NavLink to="/catalogo">Catalogo</NavLink>
            </li>
            <li>
              <NavLink to="/catalogo">Catalogo2</NavLink>
            </li>
            <li>
              <NavLink>
                <CartWidget initial={1} productos={10} onAdd={onAdd} />
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
