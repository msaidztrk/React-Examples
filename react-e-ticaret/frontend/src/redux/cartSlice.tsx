import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const fetchFromLocalStorage = () => {
  const cartItem = localStorage.getItem("cart");

  if (cartItem !== null) {
    return JSON.parse(cartItem);
  } else {
    return [];
  }
};

const storeInLocalStorage = (data: any) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item: { id: any }) => item.id === action.payload.id
      );

      if (isItemCart) {
        // localde bu ürün var
        const tempCart = state.carts.map(
          (item: { id: any; quantity: any; price: any }) => {
            console.log("item : ", { ...item });

            if (item.id === action.payload.id) {
              let tempQt = item.quantity + action.payload.quantity;
              let tempTotalPrice = tempQt * item.price;
              return {
                ...item,
                quantity: tempQt,
                totalPice: tempTotalPrice,
              };
            } else {
              return item;
            }
          }
        );

        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },

    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter(
        (item: { id: any }) => item.id !== action.payload
      );
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce(
        (cartTotal: any, cartItem: any) => {
          return cartTotal += cartItem.price * cartItem.quantity;
        },
        0
      );

      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
