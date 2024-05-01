import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa"; // Import FaBars icon
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "../navBar/styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                style={{ color: "yellow" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "block",
            cursor: "pointer",
            color: "yellow",
            paddingRight: "20px",
          }}
          onClick={handleToggleIcon}
        >
          {/* Render FaBars when toggleIcon is false */}
          {!toggleIcon ? <FaBars size={30} /> : <HiX size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
