import axios, { AxiosError, AxiosResponse } from "axios";
import { CryptosInfoResponse } from "../types/apiTypes";
import { UserSelectionMainForm } from "../types/formTypes";
import {formatCryptoListSelect} from './cleaners'

const url = 'https://min-api.cryptocompare.com/';
export const Api = axios.create({
    baseURL: url,
  });

  const proccessError = (err):void=>{
    if (err.response) {
        // The client was given an error response (5xx, 4xx)
    } else if (err.request) {
        // The client never received a response, and the request was never left
    } else {
        // Anything else
    }
    if (axios.isAxiosError(err)){
        console.log(err)
    }else{
        //process 
    } 
}

type getCriptoCurrenciesPayload = {
    CoinInfo:object
    DISPLAY: object
    RAW:object
}

type GetCriptoCurrencies = Array<getCriptoCurrenciesPayload>

export const getCriptoCurrencies = async ()=>{
    try{
        const data =  await api.get(`/data/top/totalvolfull?limit=10&tsym=USD`)     
        return formatCryptoListSelect(data.data.Data);
    }catch(err){
        proccessError(err)
    }

}


export const getCryptosInfo = async (userSelection:UserSelectionMainForm)=>{
    
 try{
    const {selectedCurrency,  selectedCrypto} = userSelection
    const response: CryptosInfoResponse = await api.get(`/data/pricemultifull?fsyms=${selectedCrypto}&tsyms=${selectedCurrency}`);
    console.log('api response',response?.DISPLAY[selectedCrypto][selectedCurrency])
    return response?.DISPLAY[selectedCrypto][selectedCurrency];
 }catch(err){
    proccessError(err)
 }



}
