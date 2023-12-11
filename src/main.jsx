import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Main from './Layout/Main';
import Contact from './Pages/Home/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='bg-gradient-to-r from-white to-black-50'>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
);
