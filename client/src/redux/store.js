import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, productReducer, userReducer } from "./reducers";

export default configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartSlice,
  },
});
