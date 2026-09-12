import {Outlet, Link} from "react-router-dom"

function Layout() {
  return (
    <div>
      <header>
        <nav>
            <Link>Home</Link>
            <Link>Menu</Link>
            <Link>Cart</Link>
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
