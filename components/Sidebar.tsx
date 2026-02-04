
import React from 'react';
import { Home, LayoutGrid, ScrollText, Mail, Layers, Cpu } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const navItems: { label: string; icon: React.ReactNode; view: View; highlight?: boolean }[] = [
    { label: '01 INICIO', icon: <Home className="w-4 h-4" />, view: 'home' },
    { label: '02 SERVICIOS', icon: <Layers className="w-4 h-4" />, view: 'services' },
    { label: '03 GALERÍA', icon: <LayoutGrid className="w-4 h-4" />, view: 'collection' },
    { label: '04 PROCESO', icon: <Cpu className="w-4 h-4" />, view: 'process' },
    { label: '05 NOSOTROS', icon: <ScrollText className="w-4 h-4" />, view: 'about' },
    { label: '06 CONTACTO', icon: <Mail className="w-4 h-4" />, view: 'contact' },
  ];

  return (
    <aside className="w-full md:w-[260px] flex-shrink-0 flex flex-col bg-white border-b md:border-b-0 md:border-r border-black p-8 md:h-full md:fixed md:top-0 md:left-0 z-50">
      <div className="flex flex-col gap-12">
        {/* Logo Container */}
        <div className="cursor-pointer group" onClick={() => onNavigate('home')}>
          <img 
            src="https://i.ibb.co/5gty5m4Q/98594300-1919080661557808-2383187394460385280-n.jpg" 
            alt="Artetex Design Logo" 
            className="w-full max-w-[180px] h-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <p className="text-black text-[9px] font-900 tracking-[0.3em] uppercase opacity-40 border-t border-black pt-2">
            SISTEMA_INDUSTRIA_COL
          </p>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`group flex items-center justify-between py-2 transition-all duration-200 border-b border-transparent hover:border-black ${
                  isActive ? 'text-black font-600 border-black' : 'text-text-muted font-400'
                }`}
              >
                <span className="text-[11px] tracking-tight uppercase">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto flex flex-col gap-8">
        <div className="text-[10px] font-600 leading-tight uppercase">
          <p>Barranquilla / CO</p>
          <p className="text-text-muted">Establecido 2024</p>
        </div>
        
        <button 
          onClick={() => onNavigate('contact')}
          className="w-full bg-black text-white py-4 text-[11px] font-900 uppercase tracking-widest hover:bg-primary hover:text-black transition-colors"
        >
          Solicitar Cotización
        </button>
      </div>
    </aside>
  );
};
