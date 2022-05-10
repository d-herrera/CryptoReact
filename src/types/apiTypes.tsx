export type ReturnElemenType = {
    id:string;
    cryptoFullName:string;
    name:string;
}
export type CryptosInfoResponse = {
    DISPLAY: {
        [key:string]:{
            [key:string]:{}
        }
       
    },
    RAY:{}

} | undefined

export type CyptoInfoResponseSanitized = {
    PRICE:string
    HIGHDAY:string
    LOWDAY:string
    LASTUPDATE:string
    CHANGEPCT24HOUR:string
    IMAGEURL:string
}
