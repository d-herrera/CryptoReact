export type Currency={
    id:string,
    name:string
}

export type UserSelectionMainForm = {
    selectedCurrency:string
    selectedCrypto:string
}



export type CryptoItem =
    {
        CoinInfo: {
            Id:string;
            FullName:string,
            Name:string 
        },
        Display:object
        RAW:object
    }

export type UserSelection {
    selectedCurrency: string
    selectedCrypto: string
}