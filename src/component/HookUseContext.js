/**
📘 3. useContext — Global Data Sharing (without prop drilling)
✅ Use-Case: Access global data (like theme, user) across components.
 */


import React, { useContext, createContext } from 'react';

const UserContext = createContext();  // Step 1: Create Context

function Child() {
  const user = useContext(UserContext);  // Step 3: Use Context
  return <h2>User: {user}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Amit">  {/* Step 2: Provide value */}
      <Child />
    </UserContext.Provider>
  );
}
