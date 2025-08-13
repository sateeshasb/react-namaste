 import { CDN_URL } from "../utils/constans";

const RestaurantCard = ({ reData }) => {
  // If no data yet, show nothing or a loading placeholder
  if (!reData || !reData.info) {
    return 
  }

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime
  } = reData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt="rest-logo"
      />
      <h3>{name }</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating }</h4>
      <h4>{costForTwo  }</h4>
      <h4>{deliveryTime }</h4>
    </div>
  );
};

export default RestaurantCard;
