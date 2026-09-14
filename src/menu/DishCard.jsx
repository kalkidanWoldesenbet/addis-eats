import { Link } from "react-router-dom";

function DishCard({ dish, onAdd }) {
  return (
    <article className="dish-card"> 
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <p>{dish.price} ETB</p>
        <Link to={`/menu/${dish.id}`}>View</Link>
        <button onClick={() => onAdd(dish)}>Add to cart</button>
    </article>
  )
}

export default DishCard
