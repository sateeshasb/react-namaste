import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constans";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // restaurant id from URL

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurants =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    [];

  const restaurant = restaurants.find(
    (res) => String(res.info.id) === String(resId)
  )?.info;

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurant;

  return (
    <div className="menu">
      <h1>Restaurant Details</h1>
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} width="200" />
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>⭐ {avgRating}</p>
        <p>{costForTwo}</p>
        <p>{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
