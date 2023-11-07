
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function layout() {
  return (
   <>
   <div className="site-header">
    <Header/>
   </div>
   <div className="site-wrapper">
    <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

export default layout
