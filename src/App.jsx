import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Chef from './sections/Chef';
import Intro from './sections/Intro';

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Render sections sequentially */}
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Intro />
    </main>
  );
}

export default App;
