import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getDishes } from "../api/dishes";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

export default function Menu({ onAdd }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const search = searchParams.get("search") || "";

  const { data: dishes, status, error } = useFetch(getDishes, []);

  if (status === "loading") return <p>Loading menu…</p>;
  if (status === "error") return <p role="alert">{error.message}</p>;

  let filtered = category === "All" ? dishes : dishes.filter((d) => d.category === category);

  if (search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter((d) => d.name.toLowerCase().includes(q));
  }

  function handleCategorySelect(cat) {
    const params = new URLSearchParams(searchParams);
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params);
  }

  return (
    <div>
      <div className="menu-hero">
        <div>
          <span className="hero-tag">Today's Specials</span>
          <h1>Fresh from Addis Ababa's kitchens</h1>
          <p>Slow-simmered stews and fire-grilled tibs, delivered hot.</p>
        </div>
      </div>

      {search && (
        <p>
          Results for "{search}" ({filtered.length} found)
        </p>
      )}

      <CategoryBar selected={category} onSelect={handleCategorySelect} />
      <DishList dishes={filtered} onAdd={onAdd} />
    </div>
  );
}