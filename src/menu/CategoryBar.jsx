const CATEGORIES = ["All", "Main ","Vegetarian","Dessert"];

function CategoryBar({selected, onSelect}) {
  return (
    <div>
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
