import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home } from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';



const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // Adjust the case to match your file name
        element: <Home />,
      },
      {
        path: '/About', // Adjust the case to match your file name
        element: <About />,
      },
      {
        path: '/Projects', // Adjust the case to match your file name
        element: <Projects />,
      },
      {
        path: '/Contact', // Adjust the case to match your file name
        element: <Contact />,
      },
   
    ]
      },
    ],
  
);
export default AppRouter;




