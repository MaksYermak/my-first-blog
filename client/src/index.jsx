import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'fontsource-roboto';
import './App.css';

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  container
);
