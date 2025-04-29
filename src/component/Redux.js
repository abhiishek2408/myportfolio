/**
🧠 What is Redux?
Redux is a state management library for JavaScript apps (especially React). 
It helps you manage global state (like logged-in user, cart, etc.) in one centralized place.

✅ Redux Basics
3 Core Principles of Redux:

Store – Central place to hold your state
Actions – Plain JS objects that describe “what happened”
Reducers – Functions that change state based on actions

1. 📦 Install Redux packages:
npm install redux react-redux


//counterReducer.js

 */

// Initial state
const initialState = {
    count: 0,
  };
  
  // Reducer function
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;





//🔹 store.js

import { createStore } from "redux";
import counterReducer from "./counterReducer";

// Create store with reducer
const store = createStore(counterReducer);

//export default store;


//App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count); // read state
  const dispatch = useDispatch(); // send actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

//export default App;





//index.js


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"; // our Redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
