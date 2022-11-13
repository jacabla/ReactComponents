import "./Publicitario.css";
import React from "react";
import img4 from "./images/img4.png"

export default function PublicitarioII() {
    const noAplica = () =>{
        alert ("Link de ejemplo")
    }
    return (
      <>
  <div className='mainP'>
      <div className='heroP'>
      <img onClick={noAplica} src={img4} alt='publicidad' title='Publicidad'></img>
      </div>
  </div>
      </>
    )
  }
  