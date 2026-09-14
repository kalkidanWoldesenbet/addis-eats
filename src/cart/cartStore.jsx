import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "addis-eats-cart";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart); // [{ dish, quantity }]

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage full or blocked — cart still works in-memory
    }
  }, [items]);

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

  function setQuantity(dishId, quantity) {
    if (quantity <= 0) {
      removeItem(dishId);
      return;
    }
    setItems((prev) =>
      prev.map((line) =>
        line.dish.id === dishId ? { ...line, quantity } : line
      )
    );
  }

  const total = items.reduce(
    (sum, line) => sum + line.dish.price * line.quantity,
    0
  );

  const value = { items, addItem, removeItem, setQuantity, clearCart, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}