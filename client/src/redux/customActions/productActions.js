import axios from "axios";
import {
  setAddToCart,
  setDeleteFromCart,
  setShippingAddress,
} from "../reducers/cartSlice";
import {
  setProduct,
  setError,
  setLoading,
  setProducts,
} from "../reducers/productSlice";
import {
  setUser,
  setUserLoading,
  setUserErrorMessage,
} from "../reducers/userSlice";

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
    .get(`http://localhost:5000/api/products/${id}`)
    .then((res) => {
      dispatch(setProduct(res.data.product));
    })
    .catch((err) => {
      dispatch(setError(true));
      dispatch(setLoading(false));
    });
};

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

export const signinUser = (dispatch, data) => {
  dispatch(setUserLoading(true));
  dispatch(setUserErrorMessage(""));
  axios
    .post("http://localhost:5000/api/users/signin", data)
    .then((response) => {
      dispatch(setUser(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((err) => {
      dispatch(setUserErrorMessage(err.message));
    })
    .finally(() => dispatch(setUserLoading(false)));
};
export const registerUser = (dispatch, data) => {
  dispatch(setUserLoading(true));
  dispatch(setUserErrorMessage(""));
  axios
    .post("http://localhost:5000/api/users/register", data)
    .then((response) => {
      dispatch(setUser(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((err) => {
      dispatch(setUserErrorMessage(err.message));
    })
    .finally(() => dispatch(setUserLoading(false)));
};
export const saveShippingAddress = (dispatch, data) => {
  dispatch(setShippingAddress(data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
