import { CDN_URL } from "../utils/constans";

const RestaurantCard = ({ reData }) => {
  if (!reData || !reData.info) {
    return null; // better than just "return;"
  }

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = reData.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-2xl shadow-lg hover:shadow-xl bg-gray-150 transition-transform transform hover:scale-105 cursor-pointer">
      <img
        className="w-full h-40 object-cover rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
      />
      <h3 className="mt-3 text-lg font-semibold text-gray-800 truncate">{name}</h3>
      <h4 className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</h4>
      <div className="flex justify-between items-center mt-2 text-sm font-medium text-gray-600">
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md">
          ⭐ {avgRating}
        </span>
        <span>{costForTwo}</span>
      </div>
      <h4 className="mt-2 text-sm text-gray-500">{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
