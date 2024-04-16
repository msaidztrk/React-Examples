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

export const getProducts: any = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProducts: any = createAsyncThunk(
  "getcategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    console.log('getCategoryProducts : ' , data , category);
    return data;
  }
);

export const getDetailProduct: any = createAsyncThunk(
  "getproduct",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getProducts ----------------
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })

      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })

      // getDetailProduct ----------------
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })

      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })

      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })

      // getCategoryProducts ----------------
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })

      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })

      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
