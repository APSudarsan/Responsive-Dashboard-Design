import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div 
      className="border rounded p-4 shadow hover:shadow-lg transition relative group cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      
      <button 
        className="absolute bottom-4 right-4 bg-blue-500 text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        View Details
      </button>
    </div>
  );
};

export default UserCard;
