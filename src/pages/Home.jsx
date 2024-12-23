import React from 'react';
import { Link } from 'react-router-dom';
import { FaBaby, FaBook, FaCamera } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Baby Memory Journal</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        Capture and cherish every precious moment of your baby's journey. Create beautiful digital memory books with photos and milestones.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FaBaby className="text-5xl text-pink-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Track Milestones</h2>
          <p className="text-gray-600 text-center">Record your baby's important milestones and achievements.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FaCamera className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Upload Photos</h2>
          <p className="text-gray-600 text-center">Add beautiful photos to capture every special moment.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <FaBook className="text-5xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Create Digital Books</h2>
          <p className="text-gray-600 text-center">Generate stunning digital memory books to cherish forever.</p>
        </div>
      </div>
      <Link to="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
