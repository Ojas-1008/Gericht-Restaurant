import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Render the Hero and About sections sequentially */}
      <Hero />
      <About />
    </main>
  );
}

export default App;