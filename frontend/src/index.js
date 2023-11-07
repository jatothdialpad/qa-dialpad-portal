import React from 'react';
import '@dialpad/dialtone/lib/dist/css/dialtone.min.css';
import ReactDOM from 'react-dom/client';
import './font.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import TestCoverage from './components/TestCoverage/TestCoverage';
import Achievements from './components/Achievements/Achievements';
import Layout from './layout';
import AboutUs from './components/About/About'
import Reports from './components/Reports/Reports';
import Execute from './components/Execute/Execute';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<AboutUs/>}/>
       <Route path="testcoverage" element={<TestCoverage/>}/>
       <Route path="about" element={<AboutUs/>}/>
       <Route path="achievements" element={<Achievements/>}/>
       <Route path="execute" element={<Execute/>}/>
       <Route path="reports" element={<Reports/>}/>
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
