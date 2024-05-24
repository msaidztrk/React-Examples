import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { useState } from "react";

interface Product {
  barkod: string;
  marka: string;
  beden: string;
  ingredients: string[];
  ingredients_data: {
    isim: string;
    en: number;
    boy: number;
    adet: number;
    ek: number;
  }[];
  grup: string | null;
  desen: string | null;
  renk: string | null;
  adet: number;
  olcuBirim: string | null;
  olcuPara: string | null;
  fiyat: number;
  totalSum: string | null;
}

const fetchArrayFromLocalStorage = () => {
  const productArray = localStorage.getItem("productArray");

  if (productArray !== null) {
    return JSON.parse(productArray);
  } else {
    return [];
  }
};

const fetchArrayLenFromLocalStorage = () => {
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

function calculateTotalSumArray(
  adet: number,
  fiyat: number,
  olcuPara: string | null
) {
  const totalSumPrice = adet * fiyat;
  const totalSumText = totalSumPrice + " " + olcuPara;
  return totalSumText;
}
const proformaStructure: Product = {
  barkod: "",
  marka: "",
  beden: "",
  ingredients: [],
  ingredients_data: [

  ],
  grup: null,
  desen: null,
  renk: null,
  adet: 1,
  olcuBirim: null,
  olcuPara: null,
  fiyat: 0,
  totalSum: null,
};

// const [product, setProducts] = useState<Product[]>([]);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productLine: fetchArrayLenFromLocalStorage(),
    productsArray: fetchArrayFromLocalStorage(),
  },
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      if (action.payload == "productLine") {
        state.productLine += 1;
        state.productsArray.push(proformaStructure);
        storeInLocalStorage(state.productsArray);
        console.log(state.productsArray);
      }
    },
    decrement: (state) => {
      state.productLine -= 1;
    },
    incrementByAmount: (state, action) => {
      state.productLine += action.payload;
    },

    deleteRow: (state) => {
      state.productLine -= 1;
    },
    

    changeValue: (
      state,
      action: PayloadAction<{ type: string; value: any; indexRow: number ; arrayIndex? : number   }>
    ) => {
      const updatedProductsArray = state.productsArray.map(
        (item: Product, index: number) => {
          if (index === action.payload.indexRow) {
            if (action.payload.type === "adet")
              item.adet = Number(action.payload.value);
            if (action.payload.type === "fiyat")
              item.fiyat = Number(action.payload.value);
            if (action.payload.type === "olcuPara")
              item.olcuPara = action.payload.value;

            if (
              action.payload.type === "adet" ||
              action.payload.type === "fiyat" ||
              action.payload.type === "olcuPara"
            )
              item.totalSum = calculateTotalSumArray(
                item.adet,
                item.fiyat,
                item.olcuPara
              );

            if (action.payload.type === "desen")
              item.desen = action.payload.value;
            if (action.payload.type === "renk")
              item.renk = action.payload.value;
            if (action.payload.type === "grup")
              item.grup = action.payload.value;

            if (action.payload.type === "barkod")
              item.barkod = action.payload.value;
            if (action.payload.type === "beden")
              item.beden = action.payload.value;
            if (action.payload.type === "marka")
              item.marka = action.payload.value;
            if (action.payload.type === "icerik") {
              item.ingredients = action.payload.value;

              console.log("item.ingredients : ", action.payload.value); 
              item.ingredients_data = item.ingredients_data.filter(ingredientData => action.payload.value.includes(ingredientData.isim));
        
              // Add new ingredients_data for items not already in item.ingredients_data
              action.payload.value.forEach((ingredient: string) => {
                if (!item.ingredients_data.find(ingredientData => ingredientData.isim === ingredient)) {
                  item.ingredients_data.push({
                    isim: ingredient,
                    en: 0,
                    boy: 0,
                    adet: 0,
                    ek: 0,
                  });
                }
              });
            }  

            if (action.payload.type === "en"){
              let index : any = action.payload.arrayIndex 
              let ingredient_index = item.ingredients_data[index];
              ingredient_index['en'] = action.payload.value
            }

            
            if (action.payload.type === "boy"){
              let index : any = action.payload.arrayIndex 
              let ingredient_index = item.ingredients_data[index];
              ingredient_index['boy'] = action.payload.value
            }

            if (action.payload.type === "adet"){
              let index : any = action.payload.arrayIndex 
              let ingredient_index = item.ingredients_data[index];
              ingredient_index['adet'] = action.payload.value
            }
             
            if (action.payload.type === "ek"){
              let index : any = action.payload.arrayIndex 
              let ingredient_index = item.ingredients_data[index];
              ingredient_index['ek'] = action.payload.value
            }
       









          }
          return item;
        }
      );

      state.productsArray = updatedProductsArray;
      storeInLocalStorage(updatedProductsArray);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, changeValue } = productSlice.actions;

export default productSlice.reducer;
