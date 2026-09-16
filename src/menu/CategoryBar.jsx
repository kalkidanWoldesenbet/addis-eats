const CATEGORIES = ["All", "Main", "Vegetarian", "Dessert", "Drinks"];

function CategoryBar({selected, onSelect}) {
  return (
    <div className="category-bar">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          aria-pressed={selected === cat}
        >
            {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar
