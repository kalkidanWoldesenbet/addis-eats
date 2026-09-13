const DISHES = [
  { id: "1", name: "Doro Wat", category: "Main", price: 350, description: "Spicy chicken stew with berbere and boiled egg." },
  { id: "2", name: "Tibs", category: "Main", price: 320, description: "Sautéed beef with onions, peppers and rosemary." },
  { id: "3", name: "Shiro", category: "Vegetarian", price: 220, description: "Ground chickpea stew, mild and smoky." },
  { id: "4", name: "Kitfo", category: "Main", price: 380, description: "Minced beef, seasoned with mitmita and niter kibbeh." },
  { id: "5", name: "Timatim Salata", category: "Vegetarian", price: 150, description: "Tomato and onion salad with jalapeño." },
  { id: "6", name: "Baklava", category: "Dessert", price: 120, description: "Layered pastry with honey and nuts." },
];

export function getDishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false && Math.random() < 0.3) {
        reject(new Error("Failed to load the menu."));
      } else {
        resolve(DISHES);
      }
    }, 800);
  });
}

export function getDishById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dish = DISHES.find((d) => d.id === id);
      if (dish) resolve(dish);
      else reject(new Error("Dish not found."));
    }, 500);
  });
}