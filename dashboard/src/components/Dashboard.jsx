import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Modal from './Modal';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [modalUser, setModalUser] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  // Search
  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredUsers(users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase()) ||
      user.username.toLowerCase().includes(term.toLowerCase())
    ));
  };

  // Sorting
  const handleSort = (option) => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (option === 'name') return a.name.localeCompare(b.name);
      if (option === 'username') return a.username.localeCompare(b.username);
      return 0;
    });
    setSortOption(option);
    setFilteredUsers(sortedUsers);
  };

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or username"
          className="border p-2"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)} className="border p-2">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
        </select>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} onClick={() => setModalUser(user)} />
        ))}
      </div>

      {modalUser && <Modal user={modalUser} onClose={() => setModalUser(null)} />}
    </div>
  );
};

export default Dashboard;
