import React from 'react';
import './index.css'
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        User Dashboard
      </header>
      <main className="container mx-auto p-4">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
