import { Outlet, Link, useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "./cart/cartStore";

function Layout() {
  const { items, total } = useCart();
  const count = items.reduce((sum, line) => sum + line.quantity, 0);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  // keep the box in sync if the URL's search param changes elsewhere (e.g. clearing it on Menu)
  useEffect(() => {
    if (location.pathname === "/menu") {
      setQuery(searchParams.get("search") || "");
    }
  }, [location.pathname, searchParams]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams(location.pathname === "/menu" ? searchParams : undefined);
    const trimmed = query.trim();
    if (trimmed) {
      params.set("search", trimmed);
    } else {
      params.delete("search");
    }
    navigate(`/menu?${params.toString()}`);
  }

  return (
    <div>
      <header className="site-header">
        <Link to="/" className="brand">
          Addis <span>Eats</span>
        </Link>

        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search dishes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <nav>
          <Link to="/menu">Menu</Link>
          <Link to="/cart" className="cart-pill">
            Cart ({count}) · {total} ETB
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Addis Eats</footer>
    </div>
  );
}

export default Layout;