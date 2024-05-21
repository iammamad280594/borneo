import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Abouts from './Pages/Abouts';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Team from './Pages/Team';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div >
       <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/product" element={<Products />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
  );
};

export default App;
