import axios from "axios";
import {
  setAddToCart,
  setDeleteFromCart,
  setShippingAddress,
  setError,
  setLoading,
  addCreatedOrderToSTore,
} from "../reducers/cartSlice";

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

export const createOrder = (dispatch, order) => {
  dispatch(setLoading(true));
  axios
    .post(
      "http://localhost:5000/api/order/create",
      {
        ...order,
      },
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      }
    )
    .then((res) => {
      dispatch(addCreatedOrderToSTore(res.data.order));
    })
    .catch((err) => {
      dispatch(setError("Something went wrong! Please reload and try again"));
    });
  dispatch(setLoading(false));
};
export const saveShippingAddress = (dispatch, data) => {
  dispatch(setShippingAddress(data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
