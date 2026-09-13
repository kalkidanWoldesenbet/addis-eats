import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Menu from "./menu/Menu";
import { CartProvider, useCart } from "./cart/cartStore";
import Cart from "./cart/Cart";
import DishDetail from "./menu/DishDetail";

function Home() { return <h1>Home</h1>; }

function DishDetailRoute() {
  const { addItem } = useCart();
  return <DishDetail onAdd={addItem} />;
}

function MenuRoute() {
  const { addItem } = useCart();
  return <Menu onAdd={addItem} />;
}

function Checkout() { return <h1>Checkout</h1>; }
function NotFound() { return <h1>404 — Not Found</h1>; }

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuRoute />} />
          <Route path="menu/:id" element={<DishDetailRoute />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;