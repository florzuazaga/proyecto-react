import "./App.css";
import React from "react";
import Navbar from "./componentes/Navbar";
import Cart from "./componentes/Cart/Cart";
import ItemlistContainer from "./componentes/ItemlistContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/CartWidget/ItemCount/itemDetailContainer";
import CartProvider from "./context/CartContext";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemlistContainer greeting="Bienvenidos" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/catalogo/:catalogoId" element={<ItemlistContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
