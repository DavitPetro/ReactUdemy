// 1) Import the React and ReactDOM libraries
import React from 'react';
// Library that defines the component and how multiple compnents work together.
import ReactDOM from 'react-dom/client'
// Import App component
import App from './App'
// Library that knows how to get a component to show up in the browser

// 2) Get a reference to the div wiht ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);
