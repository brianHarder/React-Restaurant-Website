import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import About from './components/About';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Specials />
                <Testimonials />
              </>
            }></Route>
            <Route path="/reservations" element={<BookingPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
