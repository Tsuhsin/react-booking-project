// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import App from './App';
import Navbar from './components/Navbar'
import TodoList from './components/practice/TodoList'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  // <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/todoList" element={ <TodoList /> } />
      </Routes>
    </BrowserRouter>
  // </StrictMode>
);
