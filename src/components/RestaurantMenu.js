import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";

const Shimmer = (props) => {
  return (
    <>
      <div className="restaurent-card">
        <div className="shimmer-container">
          {Array(15)
            .fill("")
            .map((e, index) => (
              <div key={index} className="shimmer-card"></div>
            ))}
        </div>
      </div>
    </>
  );
};

const RestaurantMenu = () => {
  //how to read a dynamic URL Params
  const params = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.821073335771809&lng=77.65771263820804&restaurantId=" +
        params.id
    );

    const json = await data.json();
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setRestaurant(json.data.cards);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="rest-menu">
      <h1>Restaurant Name : {restaurant[0].card.card.info.name}</h1>
      <h2>Restaurant ID: {params.id}</h2>
      <img src={CDN_IMG_URL + restaurant[0].card.card.info.cloudinaryImageId} />

      <div>
        <h3>Menu</h3>
        <ul className="menu-items">
          {
            restaurant[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
              .itemCards
          .map((item) => (
            <li key={item.card.info.id}>{item.card.info.name};</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
