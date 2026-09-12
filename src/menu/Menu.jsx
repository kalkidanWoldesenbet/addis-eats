import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { getDishes } from "../api/dishes"
import CategoryBar from "./CategoryBar"
import DishList from "./DishList"

function Menu({onAdd}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category") || "All";

    const { data: dishes, status, error } = useFetch(getDishes, []);

    if (status === "loading") return <p>Loading menu...</p>
    if (status === "error") return <p role="alert">{error.message}</p>;

    const filtered =
    category === "All" 
                    ? dishes 
                    : dishes.filter((d) => d.category === category);

  return (
    <div>
      <h1>Menu</h1>
      <CategoryBar
        selected={category}
        onSelect={(cat) => setSearchParams(cat === "All" ? {} : { category: cat })}
      />
      <DishList dishes={filtered} onAdd={onAdd} />
    </div>
  )
}

export default Menu
