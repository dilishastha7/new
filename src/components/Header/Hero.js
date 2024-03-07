import { Link } from "react-router-dom";
import "./style.css";
const Hero = () => {
  return (
    <div className="hero_section">
      <div className="overlay" />
      <div className="hero_section_content">
        <h1>
        Enhance Your Potential<br />
          FOR A BETTER WORLD
        </h1>
        <p>
        We make learning engaging & effective, so that you are ready to achieve your goals
        </p>
        <button>
          <Link to="/login" className="link">
            get started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
