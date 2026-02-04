
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Heritage } from './components/Heritage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'home': return <Hero onNavigate={setCurrentView} />;
      case 'services': return <Services />;
      case 'collection': return <Gallery />;
      case 'process': return <Process />;
      case 'about': return <Heritage />;
      case 'contact': return <ContactSection />;
      default: return <Hero onNavigate={setCurrentView} />;
    }
  }

  return (
    <div className="flex h-screen w-full flex-col md:flex-row font-display text-text-main selection:bg-primary selection:text-black bg-background-light overflow-hidden">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      <main 
        ref={scrollRef}
        className="flex-1 w-full md:ml-[280px] lg:ml-[320px] h-screen overflow-y-auto relative bg-[#f4f4f0]"
      >
        <div key={currentView} className="animate-fade-in min-h-[calc(100vh-200px)]">
          {renderView()}
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
