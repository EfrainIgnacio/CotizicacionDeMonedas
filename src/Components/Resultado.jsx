import styled from "@emotion/styled"

const Contenedor=styled.div`
    color:#fff;
    display:flex;
    align-items:center;
    gap:1rem;
    margin-top: 30px;
`
const Imagen=styled.img`
    display: block;
    width:120px;
`
const Texto = styled.p`
    font-size:20px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size:25px;
    span{
        font-weight: 700;
    }
`

function Resultado({cotizacion}){

    const {PRICE, HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=cotizacion;

    return(
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}/>
            <div>

                <Precio>El precio es <span>{PRICE}</span> </Precio>
                <Texto>Precion mas alto <span>{HIGHDAY}</span> </Texto>
                <Texto>El precion mas bajo <span>{LOWDAY}</span> </Texto>
                <Texto>Variacion en las ultimas 24 horas <span>${CHANGEPCT24HOUR}</span> </Texto>
                <Texto>Ultima actualizacion <span>{LASTUPDATE}</span> </Texto>
            </div>
        </Contenedor>
    )
}
export default Resultado