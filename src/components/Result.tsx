import styled from '@emotion/styled'
import { ArrowDownIcon, ArrowUpIcon, VariationIcon } from '../assets/icons'

const Container = styled.div`
    color:white;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    margin-top:30px;
    width: 100%;
    border:1px solid white;
    border-radius: 5px;
`
const ResultBody = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 885px) {
        flex-direction: column;
        align-items: center;
        padding: 27px 10px;
        box-sizing: border-box;
        border:0px;
  }
`
const Image = styled.img`
    display:block;
    width: 20%;
    height: 100%;
}
`
const Price = styled.p`
    font-size: 24px;
    text-align: center;
    margin:0px;
    width:100%;
    span {
        font-weight: 700;
    }
`
const Details = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: space-between;

    & > p {
        margin-left:20px;
        display: flex;
        align-items: center;
        gap:20px;
        width: 100%;
    }
`


const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } = result;
    return (
        PRICE ? (
            <Container>
                <Price>El precio es de: <span>{PRICE}</span></Price>
                <ResultBody>
                    <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='Logo Crypto' />
                    <Details>
                        <p>
                            <ArrowUpIcon /> El precio mas alto del dia: {HIGHDAY}
                        </p>
                        <p>
                            <ArrowDownIcon />  El precio mas bajo del dia: {LOWDAY}
                        </p>
                        <p>
                            <VariationIcon /> Variacion: {CHANGEPCT24HOUR}
                        </p>
                    </Details>
                </ResultBody>
            </Container>) : null
    )
}

export default Result;