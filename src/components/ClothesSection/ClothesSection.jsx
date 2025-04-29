import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <button className="clothes-section__items-btn">+ Add New</button>
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
