
import React from 'react';
import { Home, LayoutGrid, ScrollText, Mail, Layers, Cpu, Menu, X } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems: { label: string; icon: React.ReactNode; view: View; highlight?: boolean }[] = [
    { label: 'INICIO', icon: <Home className="w-4 h-4" />, view: 'home' },
    { label: 'SERVICIOS', icon: <Layers className="w-4 h-4" />, view: 'services' },
    { label: 'GALERÍA', icon: <LayoutGrid className="w-4 h-4" />, view: 'collection' },
    { label: 'PROCESO', icon: <Cpu className="w-4 h-4" />, view: 'process' },
    { label: 'NOSOTROS', icon: <ScrollText className="w-4 h-4" />, view: 'about' },
    { label: 'CONTACTO', icon: <Mail className="w-4 h-4" />, view: 'contact' },
  ];

  const handleNav = (view: View) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-black h-16 px-6 flex items-center justify-between z-[60]">
        <span className="font-900 tracking-tighter text-xl">ARTETEX</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <aside className={`w-full md:w-[280px] flex-shrink-0 flex flex-col bg-white border-b md:border-b-0 md:border-r border-black p-8 md:h-full fixed top-0 left-0 z-50 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>

        <div className="flex flex-col gap-12">
          {/* Logo Container */}
          <div className="cursor-pointer group" onClick={() => onNavigate('home')}>
            <img
              src="https://i.ibb.co/5gty5m4Q/98594300-1919080661557808-2383187394460385280-n.jpg"
              alt="Artetex Design Logo"
              className="w-full max-w-[180px] h-auto mb-2 md:grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-black text-[9px] font-900 tracking-[0.3em] uppercase opacity-40 border-t border-black pt-2">
              ESTAMPADOS ALTA FINURA
            </p>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNav(item.view)}
                  className={`group flex items-center justify-between py-4 md:py-2 transition-all duration-200 border-b border-transparent hover:border-black ${isActive ? 'text-black font-600 border-black' : 'text-text-muted font-400'
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
            <p className="text-text-muted">Más de 20 años de trayectoria</p>
            <p className="mt-2 text-primary">Desarrollado por <a href="https://www.centroeidea.com" target="_blank" rel="noopener noreferrer" className="hover:underline">centroeidea.com</a></p>
          </div>

          <button
            onClick={() => handleNav('contact')}
            className="w-full bg-black text-white py-4 text-[11px] font-900 uppercase tracking-widest hover:bg-primary hover:text-black transition-colors"
          >
            Solicitar Cotización
          </button>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-black/5 md:hidden z-40" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};
