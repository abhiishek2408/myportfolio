//fist install: npm install axios


import React, { useState } from "react";
import axios from "axios";

function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null); // Reset any previous errors

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data); // Store the users in state
      })
      .catch((err) => {
        setError("Failed to fetch user data!");
      })
      .finally(() => {
        setLoading(false); // Stop loading once the request completes
      });
  };

  return (
    <div>
      <h1>Axios Fetch User Data Example</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Address: {user.address.street}, {user.address.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserFetcher;
