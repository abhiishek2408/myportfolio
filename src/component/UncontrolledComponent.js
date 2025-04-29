import React, { useRef } from "react";

function UncontrolledLogin() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    alert(`Username: ${username}, Password: ${password}`);
    
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Username:<input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        Password:<input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default UncontrolledLogin;
