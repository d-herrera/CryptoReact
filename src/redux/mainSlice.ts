import { createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import { Api, getCriptoCurrencies } from '../api/api'
import { UserSelection } from '../types/formTypes'



export type cryptoListItem = {
    CoinInfo: { 
      Id: string
      Name: string
      FullName: string
      Internal: string
      ImageUrl: string
      },    
      DISPLAY: {}
      RAW:{}
}

type GetCryptoOptionListResponse = Array<cryptoListItem>

export const getCryptoList = createAsyncThunk(
  'get/crytoList',
  async ()=> {
    try{
          const response = await Api.get(`/data/top/totalvolfull?limit=15&tsym=USD`)  
          return response.data.Data as GetCryptoOptionListResponse
        }catch(err){
          console.log(err);
      }
  })

  export const getCryptoPrice = createAsyncThunk<any,any, AsyncThunkConfig>(
    'get/crytoPryce',
    async (userSelection:UserSelection)=> {
      const {selectedCurrency, selectedCrypto } = userSelection;
      try{
            const response = await Api.get(`/data/pricemultifull?fsyms=${selectedCrypto}&tsyms=${selectedCurrency}`);
            return response
          }catch(err){
            console.log(err);
        }
    })

  interface Item {
    fullName: string
    imageUrl:string
    name:string
    id:string

  }

  type InitialState = {
    cryptoList:Array<Item>
    cryptoPrice:Object
    status: string
  }

const initialState = {
  cryptoList:[],
  cryptoPrice:{},
  status: 'idle',
} as InitialState;


const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder
    .addCase(getCryptoList.pending, (state) => {
     state.status = 'pending';
     return state
  })
    builder
      .addCase(getCryptoList.fulfilled, (state, action) => {
        if(action.payload !== undefined){
          action.payload.map(cryto=>{
            const {FullName, Id, ImageUrl, Name } = cryto.CoinInfo;
            state.cryptoList.push({
              fullName: FullName,
              imageUrl:ImageUrl,
              name:Name,
              id:Id
            })
          })
          state.status = "idle"
        }  
    })
    builder
      .addCase(getCryptoPrice.pending, (action, payload)=>{
        
      })
  },
})

export default  mainSlice.reducer