import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getDishById } from "../api/dishes";

export default function DishDetail({ onAdd }) {
  const { id } = useParams();
  const { data: dish, status, error } = useFetch(() => getDishById(id), [id]);

  if (status === "loading") return <p>Loading dish…</p>;

  if (status === "error") {
    return (
      <div>
        <p role="alert">{error.message}</p>
        <Link to="/menu">Back to menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{dish.name}</h1>
      <p>{dish.category}</p>
      <p>{dish.description}</p>
      <p>{dish.price} ETB</p>
      <button onClick={() => onAdd(dish)}>Add to cart</button>
      <Link to="/menu">Back to menu</Link>
    </div>
  );
}