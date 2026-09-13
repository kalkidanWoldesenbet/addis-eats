import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{ dish, quantity }]

  function addItem(dish) {
    setItems((prev) => {
      const existing = prev.find((line) => line.dish.id === dish.id);
      if (existing) {
        return prev.map((line) =>
          line.dish.id === dish.id
            ? { ...line, quantity: line.quantity + 1 }
            : line
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  }

  function removeItem(dishId) {
    setItems((prev) => prev.filter((line) => line.dish.id !== dishId));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce(
    (sum, line) => sum + line.dish.price * line.quantity,
    0
  );

  const value = { items, addItem, removeItem, clearCart, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}