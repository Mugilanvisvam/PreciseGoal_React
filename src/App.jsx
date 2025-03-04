import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About'; 
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import MutualFund from './Components/Products/MutualFund';
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/mutualfund" element={<MutualFund />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
