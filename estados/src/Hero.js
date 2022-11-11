import React from "react";
import "./Hero.css";
import logo from "./images/logo.png";

export default function Hero() {
  const noAplica = () => {
    alert("Link decorativo");
  };
// 
  return (
    <>
      <div className="main">
        <div className="hero">
          <div className="img">
            <a href="https://reactjs.org" target="_blank" rel="noreferrer" title="Ir a react.org">
              <img src={logo} className="logo" alt="logo"></img>
            </a>
          </div>
          <div className="buscador">
            <input className="input" placeholder="Buscar"></input>
          </div>
          <div className="log">
            <p onClick={noAplica} rel="noreferrer">
              Mi cuenta
            </p>
          </div>
          <div className="cart">
            <p onClick={noAplica} rel="noreferrer">
              <span className="material-symbols-outlined">shopping_cart</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
