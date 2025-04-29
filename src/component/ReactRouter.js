//🚦 What is Routing in React (or Web Development)?
//   Routing means navigating between different pages or views in a web application without reloading the page.

//✅ 1. Setup: Installing React Router
//    npm install react-router-dom

//App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/101?name=John">User with Query</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;


//Home.js          Navigate to Other Pages + Send Data via state

import React from "react";      
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about", {
      state: { message: "Hello from Home page!" }, // Passing data
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About with Data</button>
    </div>
  );
}

//export default Home;

//About.js        Receiving Passed Data via state

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function About() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <p>Received: {location.state?.message}</p>

      <button onClick={() => navigate(-1)}>⬅️ Go Back</button>
      <button onClick={() => navigate(1)}>➡️ Next Page</button>
    </div>
  );
}

//export default About;

//Contact.js      Simulate Data Fetching (useEffect)

import React, { useEffect, useState } from "react";

function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 5)));
  }, []);

  return (
    <div>
      <h1>Contact Page (Fetched Users)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

//export default Contact;

//User.js **********   Getting URL Params and Query Params

import React from "react";
import { useParams, useLocation } from "react-router-dom";

function User() {
  const { id } = useParams(); // Route param
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name"); // Query param

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID (from URL): {id}</p>
      <p>Name (from query): {name}</p>
    </div>
  );
}

//export default User;
