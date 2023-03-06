import styled from "@emotion/styled"
import { useState } from "react"

function useSelectMonedas(label,opciones) {
    
    const Label= styled.label`
        color:#FFF;
        display:block;
        font-size: 25px;
        margin:15px 0;
    `
    const Select= styled.select`
        width:100%;
        font-size: 20px;
        padding: 13px;
        border-radius: 10px;
        margin-bottom:15px ;
    `
    const [state, setState] = useState("")

    const SelectMonedas=()=>{
        return(
            <>
                <Label>{label}</Label>
                <Select
                    value={state}
                    onChange={e=>setState(e.target.value)}
                >
                    <option value="">Selecciona una opcion</option>

                    {opciones.map(opcion=>(

                        <option
                            key={opcion.id}
                            value={opcion.id}
                        >
                            {opcion.nombre}
                        </option>
                        
                    ))}
                </Select>
            </>

        )
    
    }
    return[ state,SelectMonedas ]

}

export default useSelectMonedas