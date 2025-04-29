/**
🔹 1. What are HTTP Methods?
These are actions we perform when interacting with APIs (like reading, creating, updating, or deleting data).
Method	                    Use
GET-----------------------Get data
POST--------------------Send new data
PUT------------------Update existing data
DELETE-------------------Remove data */

/*
 2. Using fetch() in React
✅ GET Request (fetch data from API)
 */

import React, { useEffect, useState } from "react";

function FetchGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      {data.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}


//✅ POST Request (send new data)

function FetchPost() {
    const handlePost = () => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "New Post", body: "This is content." }),
      })
        .then((res) => res.json())
        .then((data) => alert("Post created with ID: " + data.id));
    };
  
    return <button onClick={handlePost}>Add Post</button>;
  }



// ✅ PUT Request (update data)

function FetchPut() {
    const handleUpdate = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Updated Title", body: "Updated Body" }),
      })
        .then((res) => res.json())
        .then((data) => alert("Post updated: " + data.title));
    };
  
    return <button onClick={handleUpdate}>Update Post</button>;
  }



// ✅ DELETE Request (remove data)

function FetchDelete() {
    const handleDelete = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      }).then(() => alert("Post deleted"));
    };
  
    return <button onClick={handleDelete}>Delete Post</button>;
  }

