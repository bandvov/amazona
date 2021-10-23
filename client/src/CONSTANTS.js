import Homescreen from "./screens/Homescreen";
import ProductScreen from "./screens/ProductScreen";

export const ROUTES = [
  { path: "/", exact: true, component: Homescreen },
  { path: "/signin", exact: true, component: ProductScreen },
  { path: "/cart", exact: true, component: ProductScreen },
  { path: "/product/:id", exact: true, component: ProductScreen },
];
