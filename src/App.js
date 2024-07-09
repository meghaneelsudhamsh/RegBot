// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/ContactUs';
import NotFound from './Components/NotFound';
import Chatbot from './Components/Chatbot';
import Reach from './Components/Reachus';
import './App.css';
import Help from './Components/Help';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
      <img src='./images/homebg.jpg' alt="Background" className="background-img" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/connect' element={<Reach/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
