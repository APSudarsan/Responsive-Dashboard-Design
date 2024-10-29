import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid'; 
import UserCard from './UserCard';
import Modal from './Modal';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [modalUser, setModalUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredUsers(users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase()) ||
      user.username.toLowerCase().includes(term.toLowerCase())
    ));
  };

  const handleSort = (option) => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (option === 'name') return a.name.localeCompare(b.name);
      if (option === 'username') return a.username.localeCompare(b.username);
      return 0;
    });
    setSortOption(option);
    setFilteredUsers(sortedUsers);
    setShowSortMenu(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end items-center mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by username or name"
            className="border rounded-lg px-4 py-2 pl-10 w-full max-w-sm shadow-sm"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="ml-4 bg-gray-800 text-white rounded-lg px-4 py-2 shadow-md flex items-center"
          >
            <span className="mr-2">⇅</span> Sort
          </button>
          {showSortMenu && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
              <button 
                onClick={() => handleSort('name')} 
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Sort by Name
              </button>
              <button 
                onClick={() => handleSort('username')} 
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Sort by Username
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} onClick={() => setModalUser(user)} />
        ))}
      </div>

      {modalUser && <Modal user={modalUser} onClose={() => setModalUser(null)} />}
    </div>
  );
};

export default Dashboard;