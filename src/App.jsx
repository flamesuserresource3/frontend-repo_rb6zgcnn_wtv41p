import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sections from './components/Sections';
import SplashScreen from './components/SplashScreen';

function App() {
  return (
    <div className="font-sans bg-white dark:bg-neutral-950">
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sections />
      </main>
    </div>
  );
}

export default App;
