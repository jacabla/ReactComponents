import React from "react";
import "./Navbar.css";
import Hero from "./Hero";

export default function Navbar() {
    const noAplica = () => {
        alert("Link decorativo");
      };

  return (
    <div>
        <Hero></Hero>
      <div className="navbar">
        <ul>
          <li onClick={noAplica}>Acerca de</li>
          <li onClick={noAplica}>Servicios</li>
          <li onClick={noAplica}>Galeria</li>
          <li onClick={noAplica}>Ubicaciones fisicas</li>
          <li onClick={noAplica}>Contacto</li>
        </ul>
      </div>
    </div>
  );
}
