import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-text">
        <span className="home-eyebrow">Addis Ababa · Delivered fresh</span>
        <h1>Ethiopian food, made for sharing.</h1>
        <p>
          From smoky shiro to slow-simmered doro wat, Addis Eats brings the
          dishes you grew up with straight to your door. Browse today's
          menu, build your order, and taste home — wherever you are in
          the city.
        </p>
        <Link to="/menu" className="cta-button">
          Browse today's menu
        </Link>
      </div>

      <img
        src="/food.jpg"
        alt="A spread of Ethiopian dishes including injera and stews"
        className="home-image"
      />
    </div>
  );
}