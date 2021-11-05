import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
    loading: true,
    error: false,
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
  
  },
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  setLoading,
  setError,
  setProduct,
} = counterSlice.actions;

export default counterSlice.reducer;
