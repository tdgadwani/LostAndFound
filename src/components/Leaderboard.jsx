import React from 'react';
import 'tailwindcss/tailwind.css';

const leaderboardData = [
  { rank: 1, name: 'Kush', institution: 'NIT Patna | 3rd Year', credits: 3000 },
  { rank: 2, name: 'Kush', institution: 'NIT Patna | 3rd Year', credits: 2980 },
  { rank: 3, name: 'Kush', institution: 'NIT Patna | 2nd Year', credits: 2900 },
  // ... Add more data as needed
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-200 p-8">
      
      <h1 className="text-center text-5xl font-bold mb-8">Leaderboard</h1>

      <div className="flex justify-center space-x-4 mb-8">
        {leaderboardData.slice(0, 3).map((user, index) => (
          <div key={index} className="bg-yellow-300 rounded-lg p-4 text-center shadow-lg">
            <div className="text-sm">Rank {user.rank}</div>
            <img src={`https://api.adorable.io/avatars/285/${user.name}.png`} alt={user.name} className="w-32 h-32 mx-auto rounded-full my-4" />
            <div className="text-xl font-bold">{user.name}</div>
            <div className="text-sm">{user.institution}</div>
            <div className="text-red-500 font-bold mt-2">credits: {user.credits}</div>
          </div>
        ))}
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Rank</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Credits</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-2 px-4">Rank {user.rank}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4 text-red-500">credits: {user.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
