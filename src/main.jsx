import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import ErrorPage from './components/error-page.jsx';
import About from './components/about.jsx';
import Creative from './components/creative.jsx';
import Posts from './components/posts.jsx';
import Projects from './components/projects.jsx';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Posts",
        element: <Posts />
      },
    ]
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Projects",
    element: <Projects />
  },
  {
    path: "/Creative",
    element: <Creative />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
);