import { useEffect, useState } from "react";
import RestrauntCardV2 from "./Cards/RestrauntCardV2";
import RestCard from "./Cards/RestCard";
import { allRestaurants } from "../config";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";

function filterRestData(restaurantList, searchText) {
  const filteredData = restaurantList.filter((rest) =>
    rest.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const searchClickHandler = () => {
    const data = filterRestData(allRestaurantList, searchText);
    setFilteredRestaurantList(data);
    console.log(filterRestData(allRestaurantList, searchText));
  };

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0595596&lng=72.8295287&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional Rendering
  //If restaurantList is empty: render Shimmer UI
  //else : render Actual data UI

  return (
    <>
      <Carousel />
      <div className="main">
        <div className="container">
          <div className="all-Restaurants-Nav-Container">
            <div className="navCont1 ">
              <div className="all-rest-nav">
                <div className="all-rest-nav-header">Restaurants</div>
                <div className="all-rest-nav-items">
                  <input
                    className="search-bar"
                    type="text"
                    placeholder="search restraunt or dish..."
                    value={searchText}
                    onChange={changeHandler}
                  />
                  <button className="search-btn" onClick={searchClickHandler}>
                    <img
                      className="search-icon"
                      src={require("../../assets/search-icon.png")}
                    />
                  </button>
                  <div className="all-rest-nav-filters">
                    <div>Delivery Time</div>
                    <div>Rating</div>
                    <div>Cost : Low To High</div>
                    <div>Cost : High To Low</div>
                    <div id="filter">Filters</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="all-rest-cont">
              <div className="rest-card-row">
                {allRestaurantList.length == 0 ? (
                  <Shimmer />
                ) : (
                  filteredRestaurantList.map((restaurant) => (
                    <RestrauntCardV2
                      {...restaurant.data}
                      key={restaurant.data.id}
                    />
                  ))
                )}

                {/*allRestaurants.map((restaurant) => (
                  <RestrauntCard {...restaurant.data} />
                ))*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
