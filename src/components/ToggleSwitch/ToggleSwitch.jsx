import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span //style={{ color: `${currentTemperatureUnit === "F" ? "#fff" : "#000"}` }} This is another way to do this
        className={`toggle-switch__text toggle-switch__text_F  ${
          currentTemperatureUnit === "F"
            ? "toggle-switch__text_color_white"
            : ""
        }`}
      >
        F
      </span>
      <span //style={{ color: `${currentTemperatureUnit === "C" ? "#fff" : "#000"}` }} This is another way to do this
        className={`toggle-switch__text toggle-switch__text_C ${
          currentTemperatureUnit === "C"
            ? "toggle-switch__text_color_white"
            : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
