import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemlistContainer from "./componentes/ItemlistContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./componentes/CartWidget/Item";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemlistContainer greeting="Bienvenidos" />}
        />
        <Route path="/Item/:id" element={<Item />} />
        <Route path="/catalogo" element={<ItemlistContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
