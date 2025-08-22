import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constans";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API); // no resId here
      const json = await data.json();
      setresInfo(json.data);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
