import { useState } from 'react'
import styled from '@emotion/styled';
import ImagenCrypto from './assets/img/imagen-criptos.png';
import Form from './components/Form'
import Result from './components/Result'
import { useEffect } from 'react';
import { ReactElement } from 'react';
import Spinner from './components/Spinner';

const Heading = styled.h1`
font-family:'Lato', sans-serif;
color:#FFF;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;
  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #6a73f3;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Container = styled.div`
  max-width:900px;
  margin:0 auto;
  width:90%;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    column-gap:2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width:80%;
  margin:100px auto 0 auto;
  display:block;
`

const Loading = styled.p`
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  color:white;
`

function App():ReactElement {
  
  const [userSelection, setUserSelection] = useState({selectedCurrency:'', selectedCrypto:''});
  const [result, setResult] = useState<Object | undefined>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=>{
    if(Object.keys(userSelection.selectedCurrency).length > 1){
    const getCryptoData = async ()=>{
      setLoading(true)
      const {selectedCurrency,  selectedCrypto} = userSelection
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedCrypto}&tsyms=${selectedCurrency}`
      
      const response = await fetch(url);
      const result = await response.json()
      setResult(result.DISPLAY[selectedCrypto][selectedCurrency]); 
      setLoading(false)
    }
    getCryptoData();
      
    }
  },[userSelection])


  return (
    <Container>
      <div>
        <Image src={ImagenCrypto} alt='imagen criptomonedas' />
      </div>
      <div>
        <Heading>Cotiza tus Cryptos al Instante</Heading>
        <Form setUserSelection={setUserSelection}/>
        { loading ? <Spinner/> : <Result result={result}/>}
      </div>



    </Container>
  )
}

export default App
