import React from 'react';
import { Navigation } from './components/Navigation';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="rexine-spa-care-app text-blue">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
