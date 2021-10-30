import Homescreen from "./screens/Homescreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

export const ROUTES = [
  { path: "/", exact: true, component: Homescreen },
  { path: "/signin", exact: true, component: ProductScreen },
  { path: "/cart", exact: true, component: CartScreen },
  { path: "/cart/:id", exact: true, component: CartScreen },
  { path: "/product/:id", exact: true, component: ProductScreen },
];
