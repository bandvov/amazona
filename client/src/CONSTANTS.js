import Homescreen from "./screens/Homescreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import PageNotFoundScreen from "./screens/PageNotFoundScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddresstScreen from "./screens/ShippingAddresstScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderSummaryScreen from "./screens/OrderSummaryScreen";

export const ROUTES = [
  { path: "/", exact: true, component: Homescreen },
  { path: "/cart", exact: true, component: CartScreen },
  { path: "/cart/:id", exact: true, component: CartScreen },
  { path: "/product/:id", exact: true, component: ProductScreen },
  { path: "/signin", exact: true, component: SigninScreen },
  { path: "/register", exact: true, component: RegisterScreen },
  { path: "/shipping", exact: true, component: ShippingAddresstScreen },
  { path: "/payment", exact: true, component: PaymentMethodScreen },
  { path: "/order", exact: true, component: PlaceOrderScreen },
  { path: "/order/:id", exact: true, component: OrderSummaryScreen },
  { path: "/404", exact: true, component: PageNotFoundScreen },
];
