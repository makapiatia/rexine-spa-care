import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/Navigation';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ServicePage } from './components/Main/Services';
import { AboutUs } from './components/Main/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="rexine-spa-care-app text-blue">
          <Navigation />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
