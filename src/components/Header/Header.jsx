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
  return (
    <header className="header">
      <img className="header__logo" src={wtwr} alt="Header Logo" />\
      <p alt="Date">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch className="toggle__switch" />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-cloths-btn"
      >
        + Add cloths
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrance Tegegne</p>
        <img src={avatar} alt="Terrance Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
