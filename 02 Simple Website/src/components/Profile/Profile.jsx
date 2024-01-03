import React from 'react';

const Profile = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold mb-6">User Profile</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <p className="text-gray-800 text-lg font-medium" id="username">
              JohnDoe123
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <p className="text-gray-800 text-lg font-medium" id="email">
              john.doe@example.com
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Profile;
