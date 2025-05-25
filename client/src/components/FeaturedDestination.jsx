import React from "react";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50">
        <Title title='Featured Destination' subTitle='Discober our handpicked selection of exceptional properties around the world offering unparalled luxury and unforgetable experiences.'/>
      <div className="flex flex-wrap items-center justify-center gap-6" style={{ marginTop: '100px' }}>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button onClick={() =>{navigate('/rooms'); scrollTo(0,0)}} className="mt-8 px-6 py-2 font-medium border  border-gray-400 text-black rounded hover:bg-gray-700 transition-all">
        View All Destination
      </button>
    </div>
  );
};

export default FeaturedDestination;
