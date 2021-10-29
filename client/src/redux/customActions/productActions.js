import {
  setProduct,
  setError,
  setLoading,
  setProducts,
  setAddToCart,
} from "../reducers/productSlice";
import axios from "axios";

export const getProducts = (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(false));
  axios
    .get("http://localhost:5000/api/products")
    .then((res) => {
      dispatch(setProducts(res.data.products));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(true));
      dispatch(setLoading(false));
    });
};

export const getProduct = (dispatch, id) => {
  dispatch(setLoading(true));
  dispatch(setError(false));
  axios
    .get(`http://localhost:5000/api/product/${id}`)
    .then((res) => {
      dispatch(setProduct(res.data.product));
    })
    .catch((err) => {
      dispatch(setError(true));
      dispatch(setLoading(false));
    });
};

export const addToCart = (dispatch, id, quontity) => {
  axios.get(`http://localhost:5000/api/product/${id}`).then((res) => {
    const { _id, name, price, countInStock } = res.data.product;
    const itemToAdd = {
      product: _id,
      name,
      price,
      countInStock,
      qty: quontity,
    };
    dispatch(setAddToCart(itemToAdd));
  });
};
