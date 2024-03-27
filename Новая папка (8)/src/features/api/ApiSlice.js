import { createSlice } from "@reduxjs/toolkit"

const initinalState = {
   api:[]
  }
  

export const ApiSlice = createSlice({
    name: 'Api',
    initinalState,
    reducers: {
              Api: (api)=>{
fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(json => console.log(json))
        }

    },
  })
  
  
  export const {Api}=ApiSlice
  export default ApiSlice.reducer