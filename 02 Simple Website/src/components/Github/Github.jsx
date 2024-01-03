import React, { useState, useEffect, } from 'react';
import { useLoaderData } from 'react-router-dom';


const GitHub = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

  const userData=useLoaderData();
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/users/CodeAjay`);
//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error('Error fetching GitHub user data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

  return (
    <div className='flex p-9 justify-center bg-gray-800'>
      { userData ? (
        <div className='text-white'>
          <h2 className='text-5xl font-bold py-5'>{userData.login}</h2>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} style={{width:'250px',padding:'15px'}} />
          <p>Name: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Public Repositories: {userData.public_repos}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default GitHub;

export const githubInfo = async()=>{
    const response =await fetch('https://api.github.com/users/CodeAjay')
    return response.json()
}