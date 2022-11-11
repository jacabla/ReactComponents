import { useState } from "react";
import "./App.css";
// import { useState } from "react";
import Navbar from "./Navbar";
import Publicitario from "./Publicitario";

function App() {
  // const [eda, setEda] = useState(0); // se crear el estado, mas el metodo o funcion que permite cambiar el estado, mas el parametro del valor inicial
  // const incrementarEdad = () => {
  //   setEda(eda + 1); //aqui se usa el metodo
  // };

  // const [clicks, setClicks] = useState(0);
  // const incrementarClick = () => {
  //   setClicks(clicks + 1);
  // };
  
  // const [clicksResta, setClicksResta] = useState(clicks);
  // const restarClick = () => {
  //   setClicksResta(clicksResta - 1);
  // };

  // const [nombre, setNombre] = useState("");
  // const [edad, setEdad] = useState(0);

  // const actualizarNombre = (e) => {
  //   setNombre(e.target.value); // recibe el evento
  // };

  // const actualizarEdad = (e) => {
  //   setEdad(e.target.value); // recibe el evento
  // };

  return (
    <div className="App">
      <Navbar/>
      <Publicitario/>
      <header className="App-header">
        {/* <p>Nombre: {nombre}</p>
        <input onChange={actualizarNombre} />
        <p>Edad: {edad}</p>
        <input onChange={actualizarEdad} />
        <h1>{eda}</h1>
        <button onClick={incrementarEdad}>Incrementar edad</button>
        <p onClick={incrementarClick}>
          Aca puedes contar los clicks que has dado = {clicks}
        </p>
        <p onClick={restarClick}>
          y aqui puedes restar los click que has dado!
        </p> */}
      </header>
    </div>
  );
}

export default App;
