import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleOpen = () => {
    setShowNavbar(true);
  };
  const handleClose = () => {
    if (window.innerWidth >= 917) {
      setShowNavbar(false);
    }
    setShowNavbar(false);
  };
  useEffect(() => {
    // Add an event listener to handle window resize
    window.addEventListener("resize", handleClose);
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div class="header_section">
    <div class="container">
        <div class="logo">
        </div>
        <div class="nav_elements">
            <ul>
                <li>Home</li>
                <li>Subjects</li>
                <li class="nav_link">Courses
                    <ul class="dropdown">
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Coding</li>
                        <li>Music and Creativity</li>
                    </ul>
                </li>
                <li>Events</li>
                <li>Careers</li>
                <li class="grade_link">Grade
                    <ul class="dropdown">
                        <li>Grade 1-3</li>
                        <li>Grade 4-6</li>
                        <li>Grade 7-10</li>
                        <li>Grade 11-12</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default Header;
