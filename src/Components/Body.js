import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListofrRestaurants, setListofrRestaurants] = useState([]);
  const [FilteredRes, setFilteredRes] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListofrRestaurants(restaurants);
    setFilteredRes(restaurants);
  };

  return ListofrRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-1 p-1">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const Filtered = FilteredRes.filter((restaurants) =>
                restaurants.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setListofrRestaurants(Filtered);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredList = FilteredRes.filter(
                (Restaurant) => Restaurant.info.avgRating > 4.3
              );
              setListofrRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {ListofrRestaurants.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"/Restaurants/" + Restaurant.info.id}
          >
            <RestaurantCard reData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
