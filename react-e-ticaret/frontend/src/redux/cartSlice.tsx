import { createSlice } from "@reduxjs/toolkit"; 


const fetchFromLocalStorage = () => {
    const cartItem = localStorage.getItem('cart');
  
    if (cartItem !== null) {
      return JSON.parse(cartItem);
    } else {
      return [];
    }
  }; 


  const storeInLocalStorage = (data) => {
    localStorage.setItem
  }
  



const initialState = { 
    cart : fetchFromLocalStorage() , 
    itemCount : 0 , 
    totalAmount : 0  
}

const cartSlice = createSlice({
    name : 'cart' , 
})