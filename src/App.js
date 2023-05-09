import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Menubar from "./components/Menubar/Menubar";
import Philoedu from './components/Philoedu/Philoedu';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Plan from './components/Plan/Plan';
import Consult from './components/Consult/Consult';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Menubar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Philoedu" element={<Philoedu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/map" element={<Map />} />
          <Route path="/send-email" element={<Consult />} />
        </Routes>
        <Footer/>
      </React.Fragment>
    </Router>
  );
}



export default App;
