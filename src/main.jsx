import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Modal from './components/Modal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // {
      //   path: '/book/:id',
      //   element: <Modal></Modal>,
      //   loader: ({ params }) => fetch(`https://www.googleapis.com/books/v1/volumes/${params}`),
      // },
      {
        path: '/book',
        element: <Modal></Modal>,
        // loader: ({ params }) => fetch(`https://www.googleapis.com/books/v1/volumes/${params}`),
      },
    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />

  // </React.StrictMode> 
)
