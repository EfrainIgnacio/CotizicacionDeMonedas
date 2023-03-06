import styled from "@emotion/styled";
import ImagenCripto from  "./img/imagen-criptos.png"

import Formulario from "./Components/Formulario";
import { useEffect, useState } from "react";

import Resultado from "./Components/Resultado";

import Spinner from "./Components/Spinner";

function App() {
  
  const Contenedor=styled.div`
    max-width:900px;
    margin:0 auto;
    width:90%;

    @media(min-width:990px){
      display:grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }
  `

  const Imagen=styled.img`
    max-width:400px;
    width:80%;
    margin: 100px auto 0 auto;
    display: block;
  `

  const Heading=styled.h1`
    color:#FFFFFF;
    text-align:center;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size:35px;

    &::after{
      content:'';
      width:150px;
      height: 5px;
      background-color: #66A2FE;
      display: block;
      margin: 10px auto 0 auto;
    }
  `

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)
  
  useEffect(() => {
    
    if(Object.keys(monedas).length>0){
      const cotizarCirpto= async()=>{
        setCargando(true)
        setCotizacion({})
        const {moneda,criptomonedas}=monedas;
        const urlCripto= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedas}&tsyms=${moneda}`
        const respuesta = await fetch(urlCripto)
        const resultado= await respuesta.json()

        setCotizacion(resultado.DISPLAY[criptomonedas][moneda])

        setCargando(false)
      }
      cotizarCirpto()
    }

  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
      />
      <div>
        <Heading>Cotizador de CriptoMonedas</Heading>

        <Formulario 
          setMonedas={setMonedas}
        />

        {/* SI cargando esta como true */}
        { cargando && <Spinner/> }
        { cotizacion.PRICE && <Resultado cotizacion={cotizacion}/> }
        
      </div>
    </Contenedor>
  );
}

export default App;
