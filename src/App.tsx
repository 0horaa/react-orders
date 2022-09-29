import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Completeds } from "./pages/Completeds";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-pedidos" element={<Register />} />
        <Route path="/pedidos-entregues" element={<Completeds />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;

// JSX - JAVASCRIPT XML
// LIB DE ROTEAMENTO - REACT ROUTER DOM