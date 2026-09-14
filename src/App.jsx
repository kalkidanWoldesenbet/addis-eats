import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Menu from "./menu/Menu";
import { CartProvider, useCart } from "./cart/cartStore";
import Cart from "./cart/Cart";
import DishDetail from "./menu/DishDetail";
import RequireAuth from "./auth/RequireAuth"
import { AuthProvider } from "./auth/AuthProvider";
import SignIn from "./auth/SignIn"
import ErrorBoundary from "./ErrorBoundary";
import { lazy, Suspense } from "react";
const Checkout = lazy(() => import("./checkout/Checkout"));
import Home from "./Home";



function DishDetailRoute() {
  const { addItem } = useCart();
  return <DishDetail onAdd={addItem} />;
}

function MenuRoute() {
  const { addItem } = useCart();
  return <Menu onAdd={addItem} />;
}

function NotFound() { return <h1>404 — Not Found</h1>; }

function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<MenuRoute />} />
            <Route path="menu/:id" element={<DishDetailRoute />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signin" element={<SignIn />} />
            <Route element={<RequireAuth />}>
              <Route path="checkout" element={
                <Suspense fallback={<p>Loading checkout…</p>}>
                   <Checkout />
                 </Suspense>
                } />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;