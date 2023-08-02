import "./App.css";
import Navbar from "./componentes/Navbar";
import Cart from "./componentes/Cart/Cart";
import ItemlistContainer from "./componentes/ItemlistContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/CartWidget/ItemCount/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cart />
      <Routes>
        <Route
          path="/"
          element={<ItemlistContainer greeting="Bienvenidos" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/catalogo/:catalogoId" element={<ItemlistContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
