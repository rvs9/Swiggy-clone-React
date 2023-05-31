import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  //get data from API
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const json = await data.json();
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setRestaurantData(json.data.cards);
  }

  //return restaurant data
  return restaurantData;
};

export default useRestaurantMenu;
