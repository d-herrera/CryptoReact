import { createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import { Api, getCriptoCurrencies } from '../api/api'



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
/*           thunkApi.rejectWithValue({ 
            message: "Failed to fetch todos." 
          }); */
      }
  })

  export const getCryptoPrice = createAsyncThunk<any,any, AsyncThunkConfig>(
    'get/crytoPryce',
    async (userSelection)=> {
      const {selectedCurrency, selectedCrypto } = userSelection;
      try{
            const response = await Api.get(`/data/pricemultifull?fsyms=${selectedCrypto}&tsyms=${selectedCurrency}`);
            console.log('get crypto prices: ', response)  
            return response?.DISPLAY[selectedCrypto][selectedCurrency];
          }catch(err){
            console.log(err);
  /*           thunkApi.rejectWithValue({ 
              message: "Failed to fetch todos." 
            }); */
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
    status: string
  }

const initialState = {
  cryptoList:[],
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