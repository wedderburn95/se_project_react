import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal.jsx";

import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import Footer from "../Footer/Footer.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import Profile from "../Profile/Profile.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = ({ name, imageUrl, weatherType }) => {
    setClothingItems([
      { name, link: imageUrl, weather: weatherType },
      ...clothingItems,
    ]);
    closeActiveModal();
  };

  useEffect(() => {
    getWeatherData(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch((error) => {
        console.error("Weather data error:", error);
        // Set some default weather data to prevent crashes
        setWeatherData({
          type: "default",
          temp: { F: 70, C: 21 },
          city: "Loading...",
          condition: "",
          isDay: true,
        });
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                />
              }
            />
          </Routes>
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onHandleAddItemSubmit={handleAddItemSubmit}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          isOpen={activeModal === "preview"}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
