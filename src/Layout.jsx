import {Outlet, Link} from "react-router-dom"
import { useCart } from "./cart/cartStore";

function Layout() {
  const {items} = useCart();
  const count = items.reduce((sum, line) => sum + line.quantity, 0);
  
  return (
    <div>
      <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cart">Cart ({count})</Link>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>

      <footer>Addis Eats</footer>
    </div>
  );
}

export default Layout
