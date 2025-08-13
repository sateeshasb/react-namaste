 import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
 



 const Body = () => {


  const [ListofrRestaurants, setListofrRestaurants] = useState(resList);
    return (
      <div className='body'>
        <div className='search'>search</div>
        <div className="filter">
          <button className="filter-btn" onClick={() => { 
            //filter code
            const filteredList = ListofrRestaurants.filter((Restaurant) => Restaurant.info.avgRating > 4.3)
      
            setListofrRestaurants(filteredList);
          }}>Top Rated Restaurant</button>
        </div>
        <div className='res-container'>
          {ListofrRestaurants.map((Restaurant) =>
          <RestaurantCard reData={Restaurant} key={Restaurant.info.id} />)}
        </div>
      </div>
  )
 }

 export default Body;