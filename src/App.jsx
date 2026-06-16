import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black min-h-[150vh] text-white">
      <Navbar />
      <div className="pt-24 px-8">
        <h1 className="text-4xl font-base">Scroll down to test the background blur effect!</h1>
      </div>
    </div>
  );
}

export default App;