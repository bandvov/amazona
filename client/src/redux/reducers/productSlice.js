import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
    loading: true,
    error: false,
    cartItems: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setAddToCart: (state, action) => {
      const item = action.payload;
      const existInCartItems= state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existInCartItems) {
        state.cartItems = state.cartItems.map(x=>{
         return x.product ===item.product ? item : x 
        })
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, setLoading, setError, setProduct, setAddToCart } =
  counterSlice.actions;

export default counterSlice.reducer;
