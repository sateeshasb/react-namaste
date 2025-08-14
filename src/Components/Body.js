import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofrRestaurants, setListofrRestaurants] = useState([]);
  const [FilteredRes, setFilteredRes] = useState([]);

  const [searchtext, setsearchtext] = useState("");
  console.log("body");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );

    const json = await data.json();
    console.log(json);
    console.log("fetched");
    setListofrRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRes(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return ListofrRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              const FilteredRes = ListofrRestaurants.filter((restaurants) =>
                restaurants.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setListofrRestaurants(FilteredRes);
            }}
          >
            search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              //filter code
              const filteredList = ListofrRestaurants.filter(
                (Restaurant) => Restaurant.info.avgRating > 4.3
              );

              setListofrRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {ListofrRestaurants.map((Restaurant) => (
          <RestaurantCard reData={Restaurant} key={Restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
