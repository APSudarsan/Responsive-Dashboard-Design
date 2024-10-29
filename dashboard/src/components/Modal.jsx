import React from 'react';

const Modal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 mx-4 rounded-lg shadow-lg w-full max-w-sm relative"> 
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">Close</button>
        <h2 className="text-2xl font-bold mb-2 my-10 text-gray-800">{user.name}</h2>
        <hr className="border-gray-300 border-t-2 mb-4"/>
        <p className="text-gray-500 text-sm">Username</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">{user.username}</p>
        <p className="text-gray-500 text-sm">Email</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">{user.email}</p>
        <p className="text-gray-500 text-sm">Phone</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">{user.phone}</p>
        <p className="text-gray-500 text-sm">Website</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">{user.website}</p>
        <p className="text-gray-500 text-sm">Address</p>
        <p className="text-xl font-semibold text-gray-800 mb-8">{`${user.address.street}, ${user.address.city}`}</p>
        <div className="mt-8 absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-[#D4EFFB] to-[#E4E4F7] rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default Modal;
