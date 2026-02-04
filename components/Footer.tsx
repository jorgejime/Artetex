
import React from 'react';
import { View } from '../types';

interface FooterProps {
  onNavigate?: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-black py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <img
            src="https://i.ibb.co/5gty5m4Q/98594300-1919080661557808-2383187394460385280-n.jpg"
            alt="Artetex Design"
            className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer block"
            onClick={() => {
              if (onNavigate) onNavigate('home');
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <p className="text-[10px] font-900 uppercase tracking-widest text-text-muted">Servicios Premium de Sublimación y Estampado</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4 text-[10px] font-900 uppercase tracking-widest">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Behance</a>
          <button onClick={() => onNavigate?.('privacy')} className="text-left hover:text-primary transition-colors uppercase">Privacidad</button>
          <button onClick={() => onNavigate?.('legal')} className="text-left hover:text-primary transition-colors uppercase">Legal</button>
        </div>

        <div className="text-right flex flex-col gap-1 items-end">
          <p className="text-[10px] font-900 uppercase tracking-widest">© 2026 Artetex SAS</p>
          <p className="text-[10px] font-400 text-text-muted uppercase tracking-widest italic">Hecho en Colombia</p>
          <p className="text-[9px] font-900 uppercase tracking-tighter mt-4 opacity-50">
            Desarrollado por <a href="https://www.centroeidea.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.centroeidea.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
