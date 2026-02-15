// Rotas

import { Routes, Route } from "react-router-dom";

// Paginas

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Feed from "./pages/feed";

// Estilos globais

import "./styles/thme.css";
import "./styles/global.css";
import "./styles/devices.css";

// APP

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/feed" element={<Feed/>} />
    </Routes>
  );
};

export default App;