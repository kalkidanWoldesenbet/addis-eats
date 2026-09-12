import DishCard from "./DishCard"

function DishList({ dishes, onAdd }) {
    if(dishes.length === 0){
        return <p>No dishes in this category yet - try another one.</p>
    }
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} onAdd={onAdd}/>
      ))}
    </div>
  )
}

export default DishList
