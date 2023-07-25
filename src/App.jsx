import "./App.css";
import Navbar from "./componentes/navbar";
import ItemlistContainer from "./componentes/ItemlistContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./componentes/CartWidget/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemlistContainer greeting="Bienvenidos" />}>
          <Route path="/Item/:id" element={<Item />} />
        </Route>
      </Routes>
      <Navbar />

      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
