import React from 'react';
import '@dialpad/dialtone/lib/dist/css/dialtone.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import TestCoverage from './components/TestCoverage/TestCoverage';
import Achievements from './components/Achievements/Achievements';
import Layout from './layout';
import About from './components/About/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="testcoverage" element={<TestCoverage/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="achievements" element={<Achievements/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
