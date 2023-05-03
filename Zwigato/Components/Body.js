import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { GET_RES_API_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Body = () => {
  //Local state variables
  //react re-renders the component when the state variable changes
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  function searchReastaurants() {
    console.log(restaurants);
    const filteredRestaurants = restaurants.filter((r) =>
      r.data.name.includes(searchText)
    );

    // setRestaurants(filteredRestaurants)
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RES_API_URL);
    const json = await data.json();
    console.log(json);
    //Optional chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!restaurants) return null;
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="filter-btn" onClick={searchReastaurants()}>
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (r) => r.rating > 4.5
            );

            setRestaurants(filteredRestaurants);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res, index) => (
          <NavLink to={"/restaurant/" + res.data.id}>
            <RestaurantCard key={index} restaurant={res} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
