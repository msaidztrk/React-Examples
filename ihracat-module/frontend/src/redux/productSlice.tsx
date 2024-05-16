import { createSlice , PayloadAction  } from '@reduxjs/toolkit'
import { useState } from 'react';

interface Product {
  barkod: string;
  marka: string;
  beden: string;
  ingredients: never[];
  ingredients_data: { isim: string; en: number; boy: number; adet: number; }[];
  grup: string;
  desen: string;
  renk: string;
  adet: number;
  olcuBirim: string;
  olcuPara: string;
  fiyat: number;
}

const fetchArrayFromLocalStorage = () => {
  const productArray = localStorage.getItem("productArray");

  if (productArray !== null) {
    return JSON.parse(productArray);
  } else {
    return [];
  }
};  

const fetchArrayLenFromLocalStorage= () => {
  const productArray = localStorage.getItem("productArray");

  if (productArray !== null) {
    return JSON.parse(productArray).length;
  } else {
    return 0;
  }
};  

const storeInLocalStorage = (data: any) => {
  localStorage.setItem("productArray", JSON.stringify(data));
};

const proformaStructure  : Product= {
  "barkod": "",
  "marka": "",
  "beden": "",
  "ingredients" : [],
  "ingredients_data" : [ 
      {
          "isim" : "" ,
          "en" : 0,
          "boy" : 0,
          "adet" : 0
      },
      {
          "isim" : "" ,
          "en" : 0,
          "boy" : 0,
          "adet" : 0
      },
      {
          "isim" : "" ,
          "en" : 0,
          "boy" : 0,
          "adet" : 0
      }
  ] , 
  "grup" : "" ,
  "desen" : "",
  "renk" : "", 
  "adet" : 1 ,
  "olcuBirim" : "",
  "olcuPara" : "",
  "fiyat" : 0
}; 

// const [product, setProducts] = useState<Product[]>([]);


export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productLine: fetchArrayLenFromLocalStorage(), 
    productsArray : fetchArrayFromLocalStorage()
  },
  reducers: {
    increment: (state, action: PayloadAction<string>) => {

      if(action.payload == 'productLine'){
        state.productLine += 1 
        state.productsArray.push(proformaStructure);
        storeInLocalStorage(state.productsArray);
        console.log(state.productsArray);
      }
        
    },
    decrement: (state) => {
      state.productLine -= 1
    },
    incrementByAmount: (state, action) => {
      state.productLine += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment  } = productSlice.actions

export default productSlice.reducer