import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css'
import Header from './Components/Header';
import Body  from './Components/Body';
import RestaurantCard from './Components/RestaurantCard';
 







 const  AppLayout = () => {
  return (
    <div className='App-box'>
       <Header />
       <Body />
       <RestaurantCard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
