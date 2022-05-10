import { makeGetCall } from "./api";
const baseUrl='https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

export const getCurrencies =()=> {
    const currencies = makeGetCall(baseUrl)
    const response = currencies.Data.map((crypto)=>{
        return{
            cryptoFullName: crypto.CoinInfo.FullName,
            name: crypto.CoinInfo.Name
            };      
    })
    return  response
}