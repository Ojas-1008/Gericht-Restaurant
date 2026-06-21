import FooterOverlay from './components/FooterOverlay';

function App() {
  return (
    <div className="relative min-h-[500px] flex justify-center items-center">
      {/* The overlay sits absolute behind everything */}
      <FooterOverlay />

      {/* The foreground text */}
      <div className="text-center z-10 p-8">
        <h2 className="text-gold font-base text-4xl mb-4">Readability Test</h2>
        <p className="text-white font-alt text-lg max-w-[500px]">
          This text should be perfectly clear and legible against the dark, subtle pattern background of the FooterOverlay!
        </p>
      </div>
    </div>
  );
}

export default App;