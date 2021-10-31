import { configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer } from "./reducers";

export default configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
