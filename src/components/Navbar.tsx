import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  //Navigate through webpages on click
  const navigate = useNavigate();
  function toHome() {
    navigate("/");
  }
  function toProjects() {
    navigate("/projects");
  }
  function toResume() {
    navigate("/resume");
  }
  function toContact() {
    navigate("/contact");
  }

  //Change color of Navbar on scroll
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar active" : "navbar"}>
      <ul>
        <li>
          <a onClick={toHome}>Home</a>
        </li>
        <li>
          <a onClick={toProjects}>Projects</a>
        </li>
        <li>
          <a onClick={toResume}>Resume</a>
        </li>
        <li>
          <a onClick={toContact}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
