

function CartLine({ line, onQuantityChange, onRemove }) {
    const { dish, quantity } = line;
    const lineTotal = dish.price * quantity;

  return (
    <div className="cart-line">
        <h3>{dish.name}</h3>
        <p>{dish.price} ETB each</p>

        <div className="quantity-controls">
            <button onClick={() =>onQuantityChange(dish.id, quantity - 1)} aria-label={`Decrease ${dish.name} quantity`} >
                -
            </button>
            <button onClick={() => onQuantityChange(dish.id, quantity + 1)} aria-label={`Increase ${dish.name} quantity`}>
                +
            </button>
        </div>

        <p>{lineTotal} ETB</p>
        <button className="remove-btn" onClick={() => onRemove(dish.id)}>Remove</button>
      
    </div>
  )
}

export default CartLine
