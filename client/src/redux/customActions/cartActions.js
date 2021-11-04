import axios from "axios";
import { setAddToCart, setDeleteFromCart } from "../reducers/cartSlice";

export const addToCart = (dispatch, id, quontity) => {
  axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
    const { _id, name, price, countInStock, image } = res.data.product;
    const itemToAdd = {
      product: _id,
      name,
      price,
      countInStock,
      qty: quontity,
      image,
    };
    dispatch(setAddToCart(itemToAdd));
  });
};

export const deleteFromCart = (dispatch, id) => {
  dispatch(setDeleteFromCart(id));
};
