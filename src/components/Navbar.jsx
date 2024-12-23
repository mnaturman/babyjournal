import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaBaby } from 'react-icons/fa';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <FaBaby className="h-8 w-8 mr-2 text-pink-500" />
                <span className="font-semibold text-gray-500 text-lg">Baby Memory Journal</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {currentUser ? (
              <>
                <Link to="/dashboard" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-pink-500 hover:text-white transition duration-300">Dashboard</Link>
                <Link to="/add-entry" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-pink-500 hover:text-white transition duration-300">Add Entry</Link>
                <Link to="/view-book" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-pink-500 hover:text-white transition duration-300">View Book</Link>
                <button onClick={handleLogout} className="py-2 px-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-400 transition duration-300">Log Out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-pink-500 hover:text-white transition duration-300">Log In</Link>
                <Link to="/register" className="py-2 px-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-400 transition duration-300">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
