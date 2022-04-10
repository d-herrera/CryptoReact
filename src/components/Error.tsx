import styled from "@emotion/styled";

const ErrorMesage = styled.div`
    background-color: red;
    color:white;
    font-size: 22px;
    padding:15px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-weight: 700;
`

const Error = ({children})=>{
    return(
        <ErrorMesage>
            {children}
        </ErrorMesage>
    )

}

export default Error;