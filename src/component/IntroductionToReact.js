/**✅ 1. Best Practices of Front-End Development
These practices help ensure clean, maintainable, and scalable front-end code.

🔹 A. Semantic HTML
Use meaningful tags like <header>, <nav>, <article>, <footer> instead of <div> everywhere.
Helps SEO, accessibility, and code readability.

🔹 B. Responsive Design
Use media queries (@media) and flexible units (em, %, vw, vh) to make your site look good on all screen sizes.
Frameworks like Bootstrap or CSS Grid/Flexbox are useful.

🔹 C. Component-Based Design
Break your UI into reusable components (e.g., buttons, cards, navbars).
Especially important in frameworks like React, Vue, or Angular.

🔹 D. Performance Optimization
Minimize HTTP requests, use lazy loading, compress images.
Minify CSS and JS files before production.

🔹 E. Accessibility (a11y)
Use alt tags, aria attributes, proper contrast, keyboard navigation support.
Ensures your site is usable for everyone.

🔹 F. Version Control
Use Git for source code management.
Collaborate using platforms like GitHub or GitLab.

🔹 G. Testing
Use tools like Jest, React Testing Library, or Cypress to test components and user flows.


✅ 2. Single Page Applications (SPA) vs Multi Page Applications (MPA)

Feature	         SPA (Single Page App)	                 MPA (Multi Page App)
Pages Loaded	    One HTML page	                      Multiple HTML pages
Navigation	    Without reload (AJAX/JS)	              Full page reload
Speed	       Fast after initial load	               Slower due to multiple reloads
SEO	Difficult   (JS-based content)	                         Better SEO
Examples	   Gmail, Facebook, Twitter	                 Amazon, Flipkart, Blogs

🔹 Real-World SPA Examples:
Gmail: Switching between inbox, sent, etc. doesn’t reload the page.
Facebook: Content updates dynamically via React.

 */


/**3. Introduction to React Framework
React is a JavaScript library (not a full framework) developed by Facebook for 
building user interfaces, especially SPAs.

🔹 Key Concepts:
Component-Based Architecture: Reusable, independent components
JSX: JavaScript + HTML syntax
Virtual DOM: Efficient updates using a virtual representation of the DOM
Unidirectional Data Flow: Data flows in one direction – from parent to child */


/** 4. Features of React
🔹 JSX – Lets you write HTML-like syntax inside JS.
🔹 Components – Break your UI into isolated, reusable pieces.
🔹 Virtual DOM – Speeds up rendering by updating only what's changed.
🔹 Hooks – Functions like useState, useEffect for managing logic.
🔹 Declarative UI – You describe the UI, React handles the rendering.
🔹 React Router – Enables routing for SPAs. */


/**✅ 5. Advantages of React

Advantage	Description
🚀 Fast Performance	Thanks to Virtual DOM
🔄 Reusable Components	Write once, use everywhere
🎯 Great Ecosystem	Rich libraries and community
🌍 SEO Friendly (with Next.js)	Server-side rendering possible
🎣 Hooks & Functional Components	Modern coding style with better control */


/**❌ 6. Disadvantages of React
 * 
Disadvantage	                Description
⚙ Only UI Library	Not full framework (needs routing, state mgmt separately)
📚 Steep Learning Curve	JSX, hooks, state management can be hard for beginners
🔍 SEO Limitations	Client-side rendering isn’t ideal for search engines (without SSR)
⚡ Frequent Updates	Fast pace of React can be hard to keep up with */


/**What is the DOM?
The DOM (Document Object Model) is a programming interface that represents the structure of your web page.
Think of it as a tree of HTML elements.
Every time something changes (like a button click or new data), the browser has to re-render parts of the DOM.

📛 Problem:
Directly updating the real DOM is slow, especially for complex UIs with lots of elements. */


/**⚡ What is the Virtual DOM?
The Virtual DOM is a lightweight copy of the actual DOM kept in memory by React.
It's like a blueprint of your UI.
Every time your state or props change, React:
Creates a new Virtual DOM.
Compares it to the previous Virtual DOM.
Figures out exactly what changed (this process is called "diffing").
Updates only the changed parts in the real DOM. */


/**🔁 How Virtual DOM Works (Step-by-Step)
Let’s say you update a username on a webpage:
React creates a new Virtual DOM snapshot with the new username.
React compares it with the old Virtual DOM.
It sees: "Ah, only the username changed."
React updates only that element in the actual DOM – not the whole page! */


/**✅ It minimizes direct manipulation of the real DOM (which is slow).
✅ It uses efficient diffing algorithms to detect changes.
✅ It batches updates to avoid unnecessary re-renders. */


/**Term | Meaning
Real DOM | Actual web page structure
Virtual DOM | In-memory copy of DOM used by React
Diffing | Comparing new V-DOM with old one to detect changes
Reconciliation | Updating the real DOM with only necessary changes */




/**🧠 React Virtual DOM
React uses a Virtual DOM to improve performance.
It's a lightweight in-memory tree representing the UI.
On updates, React:
Creates a new Virtual DOM
Compares it with the old one using diffing
Updates only what's changed in the real DOM (efficiently) */



/**✅ Prerequisites:
Before you start, make sure you have these installed on your machine:
Node.js (v14+ recommended) 👉 Download Node.js
npm (comes with Node.js) or yarn

You can check your versions with: 
node -v
npm -v


Step-by-Step: Create React App
🔹 Step 1: Open Terminal (Command Prompt / PowerShell / VS Code terminal)

Navigate to the folder where you want your project:
cd path/to/your/folder

Step 2: Run Create-React-App Command
npx create-react-app myapp

npx runs the package without installing it globally.

 Step 3: Navigate to the Project
 cd my-react-app

Step 4: Start the React App
npm start

*/