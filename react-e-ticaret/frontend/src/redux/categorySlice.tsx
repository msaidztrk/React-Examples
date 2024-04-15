import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories : []
} 

export const getCategories : any = createAsyncThunk('category', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await  response.json();
    console.log('response categories : ',data);
    return data;
});

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            });
    }
});

export default categorySlice.reducer;