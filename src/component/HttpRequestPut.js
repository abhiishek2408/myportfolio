function AxiosPut() {
    const handleUpdate = () => {
      axios.put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "Updated Title",
        body: "Updated Body",
      })
      .then((res) => alert("Updated: " + res.data.title));
    };
  
    return <button onClick={handleUpdate}>Update Post</button>;
  }

  

  function AxiosDelete() {
    const handleDelete = () => {
      axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(() => alert("Deleted"));
    };
  
    return <button onClick={handleDelete}>Delete Post</button>;
  }
  
  