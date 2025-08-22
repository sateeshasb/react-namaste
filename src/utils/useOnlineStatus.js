import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [useOnlineStatus, setonLineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonLineStatus(false);
    });

    window.addEventListener("online", () => {
      setonLineStatus(true);
    });
  }, []);
};

export default useOnlineStatus;
