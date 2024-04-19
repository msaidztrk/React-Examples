import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

interface ProductState {
  products: any[]; // Update the type according to your product data structure
  productsStatus: string; // Allow any string type for status
  productDetail: any[]; // Update the type according to your product detail data structure
  productDetailStatus: string; // Allow any string type for status
}

const initialState: ProductState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getSearchProducts: any = createAsyncThunk("searchproducts", async (keyword) => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const data = await response.json();
  return data;
});


const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })

  },
});

export default searchSlice.reducer;
