import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Publicitario from "./Publicitario";
import Contenido from "./Contenido";
import PublicitarioII from "./PublicitarioII";
import Footer from "./Footer";

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
      <Navbar />
      <Publicitario />
      <Contenido></Contenido>
      <PublicitarioII></PublicitarioII>
      <Contenido></Contenido>
      <Footer></Footer>
    </div>
  );
}

export default App;
