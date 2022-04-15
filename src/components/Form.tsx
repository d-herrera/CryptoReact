import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ReactElement } from 'react';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectCurrency';
import { Currency } from '../types/formTypes';
import { SyntheticEvent } from 'react';
import { SetStateAction } from 'react';

/* type Crypto = {
    Algorithm: string
    AssetLaunchDate: string
    BlockNumber: number
    BlockReward:number
    BlockTime: number
    DocumentType: string
    FullName: string
    Id: string
    ImageUrl: string
    Internal: string
    MaxSupply: number
    Name: string
    NetHashesPerSecond: number
    ProofType: string
    Rating: object
    Type: number
    Url: string
} */

type Crypto =
    {
        CoinInfo:object
        Display:object
        RAW:object
    }

type ApiResponse = {
    Data: Array<Crypto>
    HasWarning: boolean
    Message: string
    MetaData: object
    RateLimit: object
    SponsoredData: []
    Type: number
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width:100%;
    @media (max-width: 885px) {
        width: 80%;
    margin: 0 auto;
  }

`
const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 885px) {
    justify-content: center;
  }
`

const SubmitButton = styled.input`
    background-color: #FFF;
    border:none;
    width: 100%;
    padding:10px;
    color:#012DA9;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .4s ease;
    margin-top: 20px;

    &:hover{
        background-color: #032070;
        color:white;
        cursor:pointer;
    }
    
`    
    const options:Array<Currency>= [
        {
            id:'USD',
            name:'Dolar de Estados Unidos'
        },
        {
            id:'EUR',
            name:'Euro'
        },
        {
            id:'ARS',
            name:'Peso Argentinos'
        }
    ]

const Form = ({setUserSelection}:any):ReactElement => {
    const [cryptocurrencies , setcryptocurrencies ] = useState<Object[]>([{}])
    const [error, setError] = useState<Boolean>(false)
    const [selectedCurrency, SelectCurrency] = useSelectMonedas('Elije tu moneda', options);
    const [selectedCrypto, SelectCrypto] = useSelectMonedas('Elije tu criptomoneda', cryptocurrencies);
   

    useEffect(()=>{
        const fetchApi = async ():Promise<void>=>{
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
            const request = await fetch(url);
            const response: ApiResponse = await request.json();
            
            const cryptoArr = response.Data.map((crypto:any)=>{
                return{
                    cryptoFullName: crypto.CoinInfo.FullName,
                    name: crypto.CoinInfo.Name
                    };      
            })

            setcryptocurrencies(cryptoArr);    
        }
        fetchApi()
    },[])

    const handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault();
        if([selectedCurrency, selectedCrypto].includes('')){
            console.log('error')
            setError(true);
            return
        }
        setError(false);
        setUserSelection(
            {
                selectedCurrency,
                selectedCrypto
            }
        )

    }

    
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <StyledForm onSubmit={handleSubmit}>
                <SelectWrapper>
                    <SelectCurrency/>
                    <SelectCrypto/>
                </SelectWrapper>
                <SubmitButton
                    type='submit'
                    value='Cotizar'
                />

            </StyledForm>
        </>
    )
}

export default Form;