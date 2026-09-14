import { Link } from "react-router-dom"
import { useCart } from "./cartStore"
import CartLine from "./CartLine";

function Cart() {
    const {items, setQuantity, removeItem, total} = useCart();
  
    if(items.length === 0) {
        return(
            <div>
                <h1>Your cart is empty</h1>
                <p><Link to="/menu">Browse the menu</Link> to add something.</p>
            </div>
        );
    }
  
    return (
    <div>
      <h1>Your Cart</h1>
      {items.map((line) => (
        <CartLine 
         key={line.dish.id}
         line={line}
         onQuantityChange={setQuantity}
         onRemove={removeItem}
        />
      ))}

      <h2>Total: {total} ETB</h2>
      <Link to="/checkout">Proceed to checkout</Link>
    </div>
  );
}

export default Cart
