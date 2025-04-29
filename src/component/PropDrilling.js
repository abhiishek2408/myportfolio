/** 
🧩 What is Prop Drilling in React?
Prop Drilling is when you pass data (props) from a parent component down through 
multiple nested child components, even if some of those intermediate components 
don’t actually need the data — they just forward it to the next one.
*/

function App() {
    const user = { name: "Alice", age: 22 };
    return <Parent user={user} />;
  }
  
  function Parent({ user }) {
    return <Child user={user} />; // passing props down
  }
  
  function Child({ user }) {
    return <GrandChild user={user} />; // still passing
  }
  
  function GrandChild({ user }) {
    return <p>User Name: {user.name}</p>; // actually using the prop
  }

//➡️ Even though only GrandChild needs the user prop, Parent and Child must pass it — this is prop drilling.

/*
🧨 Why is Prop Drilling a Problem?
Makes code harder to read and maintain 🧱
Intermediate components may become bloated with props they don’t need
In large apps, it can lead to tight coupling 


✅ How to Solve Prop Drilling?
React offers several solutions to avoid unnecessary prop drilling:


Solution	Description
🧠 useContext()	Share data across components without drilling props
📦 State Management	Use tools like Redux, Zustand, Recoil for global state
🧩 Component Composition Pass components as props to control rendering from the top

**/