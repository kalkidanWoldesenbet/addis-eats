const DISHES = [
  // Main
  {
    id: "1",
    name: "Doro Wat",
    category: "Main",
    price: 350,
    rating: 4.7,
    time: "25-35 mins",
    image:"/dishes/Doro-Wat-Recipe-SQ.jpg",
    description: "Spicy chicken stew with berbere and boiled egg.",
  },
  {
    id: "2",
    name: "Tibs",
    category: "Main",
    price: 320,
    rating: 4.6,
    time: "20-30 mins",
    image:"/dishes/tibs.webp",
    description: "Sautéed beef with onions, peppers and rosemary.",
  },
  {
    id: "4",
    name: "Kitfo",
    category: "Main",
    price: 380,
    rating: 4.8,
    time: "20-25 mins",
    image:"/dishes/Kitfo.jpg",
    description: "Minced beef, seasoned with mitmita and niter kibbeh.",
  },
  {
    id: "7",
    name: "Gomen Besiga",
    category: "Main",
    price: 340,
    rating: 4.5,
    time: "25-30 mins",
    image:"/dishes/Gomen-Besiga.jpg",
    description: "Collard greens simmered with tender beef chunks.",
  },
  {
    id: "8",
    name: "Kikil",
    category: "Main",
    price: 360,
    rating: 4.4,
    time: "30-40 mins",
    image:"/dishes/Kikil.jpg",
    description: "Slow-cooked lamb shank in a light garlic broth.",
  },
  {
    id: "9",
    name: "Dulet",
    category: "Main",
    price: 310,
    rating: 4.3,
    time: "20-25 mins",
    image:"/dishes/Dulet.jpg",
    description: "Minced tripe, liver and beef sautéed with chili and onion.",
  },

  // Vegetarian
  {
    id: "3",
    name: "Shiro",
    category: "Vegetarian",
    price: 220,
    rating: 4.6,
    time: "15-20 mins",
    image:"/dishes/Shiro.jfif",
    description: "Ground chickpea stew, mild and smoky.",
  },
  {
    id: "5",
    name: "Timatim Salata",
    category: "Vegetarian",
    price: 150,
    rating: 4.2,
    time: "10-15 mins",
    image:"/dishes/Timatim.png",
    description: "Tomato and onion salad with jalapeño.",
  },
  {
    id: "10",
    name: "Misir Wat",
    category: "Vegetarian",
    price: 210,
    rating: 4.5,
    time: "20-25 mins",
    image:"/dishes/Misir.jpg",
    description: "Spiced red lentil stew simmered in berbere.",
  },
  {
    id: "11",
    name: "Gomen",
    category: "Vegetarian",
    price: 190,
    rating: 4.3,
    time: "15-20 mins",
    image:"/dishes/Gomen.jpg",
    description: "Collard greens sautéed with garlic and ginger.",
  },
  {
    id: "12",
    name: "Fosolia",
    category: "Vegetarian",
    price: 200,
    rating: 4.1,
    time: "15-20 mins",
    image:"/dishes/Fosolia.jpg",
    description: "Green beans and carrots sautéed with onion and herbs.",
  },
  {
    id: "13",
    name: "Atkilt Wat",
    category: "Vegetarian",
    price: 195,
    rating: 4.4,
    time: "20-25 mins",
    image:"/dishes/Atikilt-Wot.jpg",
    description: "Cabbage, carrot and potato stew, mildly spiced.",
  },

  // Dessert
  {
    id: "6",
    name: "Baklava",
    category: "Dessert",
    price: 120,
    rating: 4.5,
    time: "5-10 mins",
    image:"/dishes/Baklava.jpg",
    description: "Layered pastry with honey and nuts.",
  },
  {
    id: "14",
    name: "Ethiopian Honey Cake",
    category: "Dessert",
    price: 140,
    rating: 4.6,
    time: "10-15 mins",
    image:"/dishes/Honey-Cake.webp",
    description: "Moist spiced cake sweetened with local honey.",
  },
  {
    id: "15",
    name: "Fried Dabo Kolo",
    category: "Dessert",
    price: 90,
    rating: 4.2,
    time: "5-10 mins",
    image:"/dishes/Dabokolo.webp",
    description: "Crunchy spiced wheat snack, lightly sweetened.",
  },

  // Drinks
  {
    id: "16",
    name: "Ethiopian Coffee (Buna)",
    category: "Drinks",
    price: 80,
    rating: 4.9,
    time: "5-10 mins",
    image:"/dishes/Coffee.jfif",
    description: "Traditionally roasted and brewed single-origin coffee.",
  },
  {
    id: "17",
    name: "Tej (Honey Wine)",
    category: "Drinks",
    price: 160,
    rating: 4.5,
    time: "5 mins",
    image:"/dishes/Tej.jpg",
    description: "Fermented honey wine with a light gesho bitterness.",
  },
  {
    id: "18",
    name: "Fresh Avocado Juice",
    category: "Drinks",
    price: 110,
    rating: 4.4,
    time: "5-10 mins",
    image:"/dishes/Avocado.jpg",
    description: "Creamy blended avocado juice, lightly sweetened.",
  },
  {
    id: "19",
    name: "Sparkling Ambo Water",
    category: "Drinks",
    price: 60,
    rating: 4.3,
    time: "Ready to serve",
    image:"/dishes/Ambo.jfif",
    description: "Naturally carbonated mineral water from Ambo, Ethiopia.",
  },
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