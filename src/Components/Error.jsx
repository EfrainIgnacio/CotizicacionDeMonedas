import styled from "@emotion/styled"

const Texto=styled.div`
    background-color:#B7322C;
    color: #fff;
    padding:15px;
    font-size:20px;
    text-transform: uppercase;
    text-align:center;
`

function Error({children}) {
    return (
        <Texto>{children}</Texto>
    )
}

export default Error