import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: "",
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || {},
    paymentMethod: "paypal",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
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
  setDeleteFromCart,
  setShippingAddress,
  setPaymentMethod,
  setError,
  setLoading,
} = cartSlice.actions;

export {
  setAddToCart,
  setDeleteFromCart,
  setShippingAddress,
  setPaymentMethod,
  setError,
  setLoading,
};

export default cartSlice.reducer;
