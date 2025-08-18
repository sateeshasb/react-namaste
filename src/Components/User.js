import React, { useState } from "react";


const User = ({name}) => {
const [count, setcount] = useState(0);

    return (
        <div className="user-card">
            <h2>count:{count}</h2>
            <button onClick={() => {
                setcount(count +1);
            }}>Count</button>
             <h2>Name:{name}</h2>
             <h3>Location:Bengaluru</h3>
             <h3>Contact:99999999999</h3>
        </div>
    )
}

 export default User;