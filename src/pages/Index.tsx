
import '../i18n/config';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { FAQ } from '../components/FAQ';
import { About } from '../components/About';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <About />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
