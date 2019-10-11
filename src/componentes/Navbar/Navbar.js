import React, { useState } from "react";
import {Link} from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };
  const fecharMenu = () => {
    setMenuAtivo(false);
  }

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={` ${menuAtivo ? "tiroX1" : ""}`} ></span>
          <span className={` ${menuAtivo ? "tiro" : ""}`}  ></span>
          <span className={` ${menuAtivo ? "tiroX2" : ""}`} ></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/Cadastro">Cadastro</Link>
        <Link onClick={fecharMenu} to="/Produtos">Produtos</Link>
        <Link onClick={fecharMenu} to="/Contato">Fale conosco</Link>
      </section>
      <div className="ancorasDesktop">
        <Link to="/">Home</Link>
        <Link to="/Cadastro">Cadastro</Link>
        <Link to="/Produtos">Produtos</Link>
        <Link to="/Contato">Fale conosco</Link>
      </div>

    </div>
  );
};
export default Navbar;
