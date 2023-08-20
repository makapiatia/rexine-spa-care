import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/Navigation';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ServicePage } from './components/Main/Services';
import { AboutUs } from './components/Main/AboutUs';
import { Contact } from './components/Main/Contact';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="rexine-spa-care-app text-blue">
          <Navigation />
          <ScrollToTop />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
