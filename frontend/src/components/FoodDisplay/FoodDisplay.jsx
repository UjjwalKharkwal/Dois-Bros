import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // If food_list is undefined or still loading, show a loader or fallback message
  if (!food_list || food_list.length === 0) {
    return (
      <div className="food-display">
        <h2>Top dishes near you</h2>
        <p className="loading">Loading menu...</p>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            );
          }
          return null; // ✅ Added return null to avoid warnings
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
