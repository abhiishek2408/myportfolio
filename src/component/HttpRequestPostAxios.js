

function AxiosPost() {
    const handlePost = () => {
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "New Post",
        body: "This is content",
      })
      .then((res) => alert("Created with ID: " + res.data.id));
    };
  
    return <button onClick={handlePost}>Add Post</button>;
  }
  