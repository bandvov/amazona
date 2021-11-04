import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || {},
    paymentMethod: "paypal",
  },
  reducers: {
    setAddToCart: (state, action) => {
      const item = action.payload;
      const existInCartItems = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existInCartItems) {
        state.cartItems = state.cartItems.map((x) => {
          return x.product === item.product ? item : x;
        });
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setDeleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.product !== action.payload;
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
  },
});
const {
  setAddToCart,
  setDefaultCartItems,
  setDeleteFromCart,
  setShippingAddress,
  setPaymentMethod,
} = cartSlice.actions;

export {
  setAddToCart,
  setDefaultCartItems,
  setDeleteFromCart,
  setShippingAddress,
  setPaymentMethod,
};

export default cartSlice.reducer;
