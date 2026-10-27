import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickHighlights } from './components/QuickHighlights';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Hero />
        <QuickHighlights />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Education />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Achievements />
        <hr className="section-divider" />
        <Certifications />
        <hr className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
