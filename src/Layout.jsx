import {Outlet, Link} from "react-router-dom"

function Layout() {
  return (
    <div>
      <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cart">Cart</Link>
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
