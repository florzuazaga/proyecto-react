import "./App.css";
import Navbar from "./componentes/navbar";
import ItemlistContainer from "./componentes/ItemlistContainer";
import { BrowserRouter, Routers, Router, Route } from "react-router-dom";
import Item from "./componentes/CartWidget/Item";

function App() {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<ItemlistContainer greeting="Bienvenidos" />}>
          <Route path="/Item/:id" element={<Item />} />
        </Route>
      </Routers>
      <Navbar />

      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
