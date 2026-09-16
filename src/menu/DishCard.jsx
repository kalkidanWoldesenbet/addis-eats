import { Link } from "react-router-dom";

export default function DishCard({ dish, onAdd }) {
  return (
    <article className="dish-card">
      <div className="dish-image-wrap">
        <img
          src={dish.image}
          alt={dish.name}
          className="dish-image"
          onError={(e) => { e.target.src = "/dishes/Doro-Wat-Recipe-SQ.jpg.jpg"; }}
        />
        <div className="dish-badge">
          <span>★ {dish.rating}</span>
          <span>⏱ {dish.time}</span>
        </div>
      </div>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>{dish.price} ETB</p>
      <Link to={`/menu/${dish.id}`}>View</Link>
      <button onClick={() => onAdd(dish)}>Add to cart</button>
    </article>
  );
}