import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-text selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;