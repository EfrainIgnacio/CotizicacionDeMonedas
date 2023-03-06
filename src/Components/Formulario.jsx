import { useEffect, useState } from "react"
import { monedas } from "../Data/Monedas"
import useSelectMonedas from "../hooks/useSelectMonedas"

import styled from "@emotion/styled"
import Error from "./Error"
function Formulario({setMonedas}){

    const InputSubmit=styled.input`
        background-color:#9497FF;
        border:none;
        width:100%;
        padding:10px;
        color:#fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        cursor:pointer;
        margin-top: 10px;
        border-radius: 13px;
        &:hover{
            background-color:#7A7DFE;
            cursor: pointer;
        }
    `


    const [cryptos,setCryptos]=useState([])

    const [mensajeError, setMensajeError] = useState(false)

    const [moneda, SelectMonedas]=useSelectMonedas("Ingresa tu moneda",monedas)

    const [criptomonedas, SelectCriptosMonedas]=useSelectMonedas("Ingresa tu criptomoneda", cryptos)

    useEffect(()=>{
        const consultarAPI=async()=>{
            const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta=await fetch(url)
            const resultado=await respuesta.json()


            const arrayAPI=resultado.Data.map(crypto=>{

                const objetoAPI={
                    id:crypto.CoinInfo.Name,
                    nombre:crypto.CoinInfo.FullName
                }
                return objetoAPI
            })
            setCryptos(arrayAPI)
        }
        consultarAPI()
    },[])


    const handleSubmit=(e)=>{
        e.preventDefault()

        if([moneda,criptomonedas].includes("")){

            setMensajeError (true)
            return
        }
        
        setMensajeError (false)
        setMonedas({
            moneda,
            criptomonedas
        })
        
    }

    return(

        <>
        
            {mensajeError && <Error>Todos los campos son obligatorios</Error>}

            <form onSubmit={handleSubmit}>

                <SelectMonedas />
                <SelectCriptosMonedas />

                <InputSubmit 
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    )

}

export default Formulario