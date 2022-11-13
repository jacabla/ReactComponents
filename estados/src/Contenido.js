import React from "react";
import "./Contenido.css";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img5 from "./images/img5.JPG";

export default function Contenido() {
    let descripcion1 = "Costa Rica es un destino por excelencia que invita a vivir atardeceres espectaculares"
    let descripcion2 = 'Las hemosas playas de Costa Rica son el escenario perfectopara esa sesion de fotos que deseas'
    let descripcion3 = "Puedes encontrar aguas crstalinas que invitan a tomar paseosen yate, en donde te divertiras!"
  return (
    <>
      <div className="contenidoMain">
        <div className="contenidoFlex">
          <div className="contenido">
            <div className="contenidoDescripcion">
              <h3>Bienvenidos al pais mas feliz del mundo! COSTA RICA!</h3>
              <p>Puedes encontrar todas las opciones para tu proximo viaje</p>
            </div>
            <div className="grid">
              <div className="gridImg">
                <div>
                  <img src={img1} className="imgGrid" alt="imagen"></img>
                </div>
                <div className="descripcion">
                  <h3>Hermosos atardeceres</h3>
                  <p>
                    {descripcion1}
                  </p>
                </div>
                <div>
                  <button>Ver mas</button>
                </div>
              </div>
              <div className="gridImg">
                <div>
                  <img src={img2} className="imgGrid" alt="imagen"></img>
                </div>
                <div className="descripcion">
                  <h3>Fotos inolvidables</h3>
                  <p>
                    {descripcion2}
                  </p>
                </div>
                <div>
                  <button>Ver mas</button>
                </div>
              </div>
              <div className="gridImg">
                <div>
                  <img src={img5} className="imgGrid" alt="imagen"></img>
                </div>
                <div className="descripcion">
                  <h3>Yates privados</h3>
                  <p>
                   {descripcion3}
                  </p>
                </div>
                <div>
                  <button>Ver mas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
