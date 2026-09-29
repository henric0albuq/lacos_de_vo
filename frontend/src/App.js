import { useEffect, Component } from 'react';
import Lenis from 'lenis';

import Navbar from './components/lacos/Navbar';
import Hero from './components/lacos/Hero';
import Marquee from './components/lacos/Marquee';
import Moments from './components/lacos/Moments';
import Products from './components/lacos/Products';
import Occasions from './components/lacos/Occasions';
import Personalization from './components/lacos/Personalization';
import Mascot from './components/lacos/Mascot';
import HowItWorks from './components/lacos/HowItWorks';
import Gallery from './components/lacos/Gallery';
import FinalCta from './components/lacos/FinalCta';
import Contact from './components/lacos/Contact';
import Footer from './components/lacos/Footer';
import FloatingWhats from './components/lacos/FloatingWhats';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
          Algo correu mal ao carregar a página. Recarregue, por favor.
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="bg-cream text-ink font-sans">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Moments />
          <Products />
          <Occasions />
          <Personalization />
          <Mascot />
          <HowItWorks />
          <Gallery />
          <FinalCta />
          <Contact />
        </main>
        <Footer />
        <FloatingWhats />
        <div className="grain" aria-hidden="true" />
      </div>
    </ErrorBoundary>
  );
}

export default App;
