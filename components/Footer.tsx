
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <img 
            src="https://i.ibb.co/5gty5m4Q/98594300-1919080661557808-2383187394460385280-n.jpg" 
            alt="Artetex Design" 
            className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <p className="text-[10px] font-900 uppercase tracking-widest text-text-muted">International Textile Engineering Studio</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4 text-[10px] font-900 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Behance</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Legal</a>
        </div>
        
        <div className="text-right flex flex-col gap-1">
          <p className="text-[10px] font-900 uppercase tracking-widest">© 2024 Artetex SAS</p>
          <p className="text-[10px] font-400 text-text-muted uppercase tracking-widest italic">Hecho en Colombia</p>
        </div>
      </div>
    </footer>
  );
};
