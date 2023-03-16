import React,{useState} from "react";
import Categories from "./components/pages/Categories";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Routing from "./components/Routers/Router";


function App() {
 
  
  return (
    <div>
  <Routing />

  <Home/>

      <Footer/>
    
    </div>
  );
}

export default App;
