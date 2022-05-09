import styled from '@emotion/styled'
import CardBody from './card/CardBody'
import Spinner from './Spinner'
import CardHeader from './card/CardHeader'

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






const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } = result;
    return (
        <>
        { result.Price ? (
            <Container>
                <CardHeader imageUrl={IMAGEURL} price={PRICE} />
                <CardBody highDay={HIGHDAY} lowDay={LOWDAY} changePtc24Hour={CHANGEPCT24HOUR}/>
            </Container>):<p>Loading...</p>
        }
        
        </>
    )
       
}

export default Result;