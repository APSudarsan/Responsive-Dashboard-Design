import React from 'react';
import Dashboard from './components/Dashboard';
import backgroundImage from './assets/background.png'; 

const App = () => {
  return (
    <div 
      className="App min-h-screen bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <header className="container mx-auto px-4 py-4 rounded-lg ">
        <h1 className="text-4xl font-bold text-gray-800 text-left">
          User Dashboard
        </h1>
        <hr className="border-gray-300 border-t-2 mt-6" /> 
      </header>
      <main className="container mx-auto p-4 pb-16">
        <Dashboard />
      </main>
      <footer className="text-center mt-6 text-gray-500 pb-6">
        Designed and Developed by <a href ="https://github.com/APSudarsan/" className="font-semibold">Sudarsan</a>
      </footer>
    </div>
  );
};

export default App;
