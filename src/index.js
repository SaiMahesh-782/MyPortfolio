import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './App';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter}/>)
