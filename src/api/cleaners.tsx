/* type CryptoItem ={
    Fullname:string;
    Name:string;
} */

import { ReturnElemenType } from "../types/apiTypes"



type CryptoItem =
    {
        CoinInfo: {
            Id:string;
            FullName:string,
            Name:string 
        },
        Display:object
        RAW:object
    }
    
type ApiResponse = [CryptoItem]

/* type FormatedResponse = [{cryptoFullName:string, name:string}] */
export const formatCryptoListSelect=(list:ApiResponse):Array<ReturnElemenType>=>{

    const response = list.map((crypto:CryptoItem):ReturnElemenType=>{
        const obj:ReturnElemenType = {
            id:crypto.CoinInfo.Id,
            cryptoFullName: crypto.CoinInfo.FullName,
            name: crypto.CoinInfo.Name
        }
        return obj
    })
    return response;
}
