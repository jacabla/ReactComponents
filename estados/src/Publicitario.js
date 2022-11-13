import React from 'react'
import "./Publicitario.css";
import img3 from "./images/img3.png";

export default function Publicitario() {
  const noAplica = () =>{
    alert ("Link de ejemplo")
  }
  return (
    <>
<div className='mainP'>
    <div className='heroP'>
    <img onClick={noAplica} src={img3} alt='publicidad' title='Publicidad'></img>
    </div>
</div>
    </>
  )
}
