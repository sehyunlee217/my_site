import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import App_kr from './App_kr.jsx';
import ErrorPage from './components/pages/error-page.jsx';
import About from './components/pages/about.jsx';
import About_kr from './components/pages/lang_kr/about_kr.jsx';
import Creative from './components/pages/creative.jsx';
import Posts from './components/pages/posts.jsx';
import Projects from './components/pages/projects.jsx';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    ]
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/kr",
    element: <App_kr />
  },

  {
    path: "/About/kr",
    element: <About_kr />
  },
  {
    path: "/Projects",
    element: <Projects />
  },
  {
    path: "/Creative",
    element: <Creative />
  },
  {
    path: "/Posts",
    element: <Posts />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
);
