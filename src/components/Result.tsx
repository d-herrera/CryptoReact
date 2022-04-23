import styled from '@emotion/styled'
import { ArrowDownIcon, ArrowUpIcon, VariationIcon } from '../assets/icons'

const Container = styled.div`
    margin-top: 40px;
    color: #b08ce1;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction:row;
    box-sizing: border-box;
    border-radius: 5px;
    @media (max-width: 885px) {
        flex-direction:column;
  }
`
const ResultBody = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;

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
    max-width: 80px;
    margin-bottom: 20px;
    // order:2;
    @media (max-width: 885px) {
       // order:1;
  }
}
`;

const CardHeader = styled.div`
/*     width: 100%; */
    box-sizing: border-box;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    @media (max-width: 830px) {
        width:100%;
        }
    
`
const Price = styled.p`
    font-size: 18px;
    text-align: center;
    margin:0px;
/*     width:30%;
    flex-basis: 100%; */
    justify-self: flex-end;
    // order:1;$
    @media (max-width: 885px) {
       // order:2;
  }
    span {
        font-weight: 700;
    }
`
const Details = styled.div`
    align-items: center;
    box-sizing: border-box;
    border:1px;
    border-style:solid;
    border-color: #121212 #121212 #121212 #121212;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 2rem;
    @media (max-width: 830px) {
        flex-direction: column;

  }
    // order:3;
    & > p {
        display: flex;
        color:#d8d8d8;
        align-items: center;
        gap:15px;
        line-height: 1.3rem;
        justify-content: center;
        

    }

    & > P:last-of-type{
        //justify-content: end;
        //padding-right: 62px;
    }
    & > div{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }


`


const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } = result;
    return (
        PRICE ? (
            <Container>
                <CardHeader>
                    <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='Logo Crypto' />
                    <Price>PRECIO ACTUAL: <span>{PRICE}</span></Price>
                </CardHeader>

                <Details>
                    <p>
                        <ArrowUpIcon />mas alto del dia<br />{HIGHDAY}
                    </p>
                    <p>
                        <ArrowDownIcon />mas bajo del dia<br /> {` ${LOWDAY}`}
                    </p>
                    <p>
                        <VariationIcon />variacion<br /> {`${CHANGEPCT24HOUR}`}
                    </p>
                </Details>
            </Container>) : null
    )
}

export default Result;