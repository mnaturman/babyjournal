import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { format } from 'date-fns';

function Dashboard() {
  const [entries, setEntries] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchEntries = async () => {
      if (currentUser) {
        const q = query(
          collection(db, 'entries'),
          where('userId', '==', currentUser.uid),
          orderBy('date', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const entriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEntries(entriesData);
      }
    };

    fetchEntries();
  }, [currentUser]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Baby's Journey</h1>
      <Link to="/add-entry" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mb-6 inline-block transition duration-300">
        Add New Entry
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {entry.photoUrl && <img src={entry.photoUrl} alt={entry.title} className="w-full h-48 object-cover" />}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
              <p className="text-gray-600 mb-2">{format(entry.date.toDate(), 'MMMM d, yyyy')}</p>
              <p className="text-gray-700">{entry.note}</p>
            </div>
          </div>
        ))}
      </div>
      {entries.length === 0 && (
        <p className="text-gray-600 text-center mt-8">No entries yet. Start capturing memories!</p>
      )}
    </div>
  );
}

export default Dashboard;
