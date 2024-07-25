import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

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
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
