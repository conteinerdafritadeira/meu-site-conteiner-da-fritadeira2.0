import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
