import { useState } from 'react'
import styled from '@emotion/styled';
import HeaderImage from './assets/header-img.png';
import Form from './components/Form'
import Result from './components/Result'
import { useEffect } from 'react';
import { ReactElement } from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { getCryptosInfo } from './api/api';
import { UserSelectionMainForm } from './types/formTypes';
import {  getCryptoList } from './redux/mainSlice';
import { useAppDispatch, useTypedSelector } from './hooks/useRedux';
import {getCryptoPrice} from './redux/mainSlice'



const Heading = styled.h1`
font-family:'Lato', sans-serif;
color:#FFF;
text-align: center;
font-weight: 700;
font-size: 28px;
    padding: 20px;
    margin: 0px;
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
  & > h1{
    margin:0px;
  }
`

const Loading = styled.p`
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  color:white;
`
interface SelectOptionList{
  Data: []
  HasWarning: false
  Message: string
  MetaData: {}
  RateLimit: {}
  SponsoredData: []
  Type: number
}



function App():ReactElement {
  
  const [userSelection, setUserSelection] = useState<UserSelectionMainForm>({selectedCurrency:'', selectedCrypto:''});
  const [result, setResult] = useState<Object | undefined>({});
  const [formCryptoList, setformCryptoList] = useState<cryptoSelectItem[]>()
  const [isFormSubmited, setIsFormSubmited]=useState<boolean>(false)
  const SelectedCryptoInformation = getCryptosInfo(userSelection)
  const isFormCompleted=Object.keys(userSelection.selectedCurrency).length > 1
  const dispatch = useAppDispatch()
  const { cryptoList } = useTypedSelector(state=>state.main)

  useEffect(()=>{
      if(!cryptoList.length){
        dispatch(getCryptoList())
      }
      getCryptoPrice(userSelection)
      console.log(userSelection)
      
  },[dispatch, userSelection])

  return (
    <>
       <Header>
        <Heading>Cotiza tus Cryptos al Instante</Heading>
      </Header>
      <Container>
        <Form setUserSelection={setUserSelection} crytoOptionList={cryptoList}/>
        <Result result={result}/>
      </Container>
    </>

  )
}

const AppWrapper = ()=>(
  <Provider store={store}>
      <App/>
  </Provider>
)

export default AppWrapper


