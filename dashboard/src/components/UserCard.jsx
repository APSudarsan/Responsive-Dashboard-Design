import React, { useState } from 'react';

const UserCard = ({ user, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); 
  return (
    <div 
      className="relative bg-white border rounded-lg pl-6 pb-8 m-2 transition-transform transform hover:scale-105 min-h-48 flex flex-col justify-between"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="absolute top-4 right-4">
        <a 
          href="#" 
          className={`text-black hover:text-gray-800 relative transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          View Details
          <span
            className={`block transition-transform duration-300 transform ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
            style={{
              height: '1px', 
              backgroundColor: 'black',
              transformOrigin: 'left',
            }}
          ></span>
        </a>
      </div>

      <div className="space-y-1 mt-auto"> 
        <h3 className="text-2xl font-semibold">{user.name}</h3>
        <p className="text-gray-500">@{user.username}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-[#D4EFFB] to-[#E4E4F7] rounded-b-lg"></div>
    </div>
  );
};

export default UserCard;