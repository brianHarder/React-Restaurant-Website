import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Reservations from './components/Reservations';

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
            <Route path="/reservations" element={<Reservations />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
