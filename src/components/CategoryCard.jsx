import "./CategoryCard.css";

function CategoryCard({ icon, title }) {
  return (
    <div className="category-card">
      <div className="category-icon">{icon}</div>

      <h3>{title}</h3>
    </div>
  );
}

export default CategoryCard;