import React from "react";
import { Link } from "react-router-dom";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import Main from "../Main/Main.jsx";

function ClothesSection({ handleAddClick, onCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <button
          className="clothes-section__items-btn"
          onClick={handleAddClick}
          type="button"
        >
          + Add New
        </button>
        <p className="clothes-section__items">Your Items</p>
      </div>
      <ul className="cards__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
