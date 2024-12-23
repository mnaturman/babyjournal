import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { format } from 'date-fns';

function ViewBook() {
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
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Baby's Digital Book</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {entries.map((entry, index) => (
          <div key={entry.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'bg-pink-50' : 'bg-blue-50'}`}>
            <div className="md:w-1/2">
              <img src={entry.photoUrl} alt={entry.title} className="w-full h-64 object-cover" />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold mb-2">{entry.title}</h2>
              <p className="text-gray-600 mb-4">{format(entry.date.toDate(), 'MMMM d, yyyy')}</p>
              <p className="text-gray-700">{entry.note}</p>
            </div>
          </div>
        ))}
      </div>
      {entries.length === 0 && (
        <p className="text-gray-600 text-center mt-8">No entries yet. Start adding memories to create your baby's digital book!</p>
      )}
    </div>
  );
}

export default ViewBook;
