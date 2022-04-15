import { useState } from 'react'
import styled from '@emotion/styled';
import HeaderImage from './assets/header-img.png';
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
margin-top: 0px;
text-transform:uppercase ;
/* font-size: 34px;
  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #6a73f3;
    display: block;
    margin: 10px auto 0 auto;
  } */
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
  max-width:900px;
  margin:0 auto;
  width:90%;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-image: url(${HeaderImage});
  margin-top:0px;
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
    <>
      <Header>
        <Heading>Cotiza tus Cryptos al Instante</Heading>
      </Header>
      <Container>
        <Form setUserSelection={setUserSelection}/>
        { loading ? <Spinner/> : <Result result={result}/>}
      </Container>
    </>

  )
}

export default App
