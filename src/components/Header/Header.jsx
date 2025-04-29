import { Link } from "react-router-dom";
import "./Header.css";
import avatar from "../../assets/avatar.png";
import wtwr from "../../assets/wtwr.svg";
import Main from "../Main/Main";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrance Tegegne";

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={wtwr} alt="Header Logo" />
        </Link>

        <p alt="Date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__nav">
        <ToggleSwitch className="toggle__switch" />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-cloths-btn"
        >
          + Add cloths
        </button>
        <Link to="/profile" className="header__profile-link">
          <div className="header__profile">
            <div className="header__user-container"></div>
            <p className="header__username">{username}</p>
            <img
              src={avatar}
              alt="Terrance Tegegne"
              className="header__avatar"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
