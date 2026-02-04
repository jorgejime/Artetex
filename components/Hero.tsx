
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { View } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onNavigate?: (view: View) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">

        {/* Bloque Tipográfico */}
        <div className="flex flex-col gap-10 order-2 lg:order-1 max-w-full">
          <div className="flex flex-col gap-2">
            <span className="text-black text-[10px] md:text-xs font-900 uppercase tracking-[0.5em] mb-4 block">ARTE EN TEXTIL</span>

            <div className="flex flex-col">
              <h1 className="text-black text-[clamp(2.5rem,11vw,6rem)] font-900 leading-[0.85] tracking-tighter uppercase">
                COLOR & ESTILO
              </h1>
              <h1 className="text-black text-[clamp(2.5rem,11vw,6rem)] font-300 leading-[0.85] tracking-tighter uppercase italic lg:ml-12">
                DEFINIDO
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-4">
            <p className="text-black text-base md:text-lg font-400 leading-tight max-w-[320px]">
              Expertos en sublimación de alta resolución y acabados textiles. Llevamos tus diseños del papel a la tela con fidelidad absoluta.
            </p>
            <div className="flex flex-col gap-5 pt-1">
              <button
                onClick={() => onNavigate && onNavigate('collection')}
                className="group flex items-center justify-between border-b border-black pb-2 text-[10px] font-900 uppercase tracking-widest hover:text-primary transition-colors"
              >
                Ver Colecciones <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate && onNavigate('services')}
                className="group flex items-center justify-between border-b border-black pb-2 text-[10px] font-900 uppercase tracking-widest hover:text-primary transition-colors"
              >
                Nuestros Procesos <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bloque de Imagen */}
        <div className="flex flex-col gap-4 order-1 lg:order-2 w-full">
          <div className="aspect-[4/5] border border-black group overflow-hidden relative shadow-2xl">
            <ImageWithFallback
              src="https://i.ibb.co/JjCpcZVb/28151803-348529935555579-5806917821392748544-n.jpg"
              alt="Muestra de Sublimación Artetex"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="bg-black p-5 text-white w-full border border-black flex justify-between items-center">
            <div>
              <p className="text-[9px] font-900 uppercase tracking-[0.2em] opacity-60 mb-1">MUESTRA</p>
              <p className="text-[11px] font-300 uppercase tracking-tight">Acabado premium sobre base de poliéster.</p>
            </div>
            <div className="h-8 w-[1px] bg-white/20 mx-4"></div>
            <div className="text-right">
              <p className="text-[11px] font-900">PREMIUM</p>
            </div>
          </div>
        </div>

      </div>

      {/* Guía Visual Suíza (Línea de fondo) */}
      <div className="absolute top-0 right-[50%] w-px h-full bg-black/5 -z-0"></div>
    </section>
  );
};
