import styled from '@emotion/styled'

const Container = styled.div`
    color:white;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap:1rem;
    margin-top:30px;

`
const Image = styled.img`
    display:block;
    width: 120px;
`
const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } = result;
    return (
        PRICE ? (
            <Container>
                <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='Logo Crypto' />
                <div>
                    <Price>El precio es de: <span>{PRICE}</span></Price>
                    <p>El precio mas alto del dia: {HIGHDAY}</p>
                    <p>El precio mas bajo del dia: {LOWDAY}</p>
                    <p>variacion: {CHANGEPCT24HOUR}</p>
                    <p>Ultima actualizacion: {LASTUPDATE}</p>
                </div>
            </Container>):null
)
}

export default Result;