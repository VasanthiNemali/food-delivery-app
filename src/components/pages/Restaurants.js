import React from "react";
import RestaurantsList from "../jsondata/restaurants.json";
import "../styles/restaurents.css";
import Restaurantspagebanner from  "../../images/restaurantspagebanner.png"

const Restaurants = () => {
  return (
    <div className="home">
     
      {RestaurantsList.map((list) => {
        return (
          <div className="card">
            <img style={{ width: "50px", height: "50px" }} src={list.image} />

            <h5>{list.name}</h5>

            <h4>CUISINE:{list.cuisine}</h4>
            <button className="restaurant-btn"> View Restaurant </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
