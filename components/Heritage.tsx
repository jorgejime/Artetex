
import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export const Heritage: React.FC = () => {
   return (
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-white border-t border-black">
         <div className="max-w-screen-2xl mx-auto flex flex-col gap-24">

            <header className="grid grid-cols-1 md:grid-cols-12 gap-8">
               <div className="md:col-span-4">
                  <span className="text-black text-sm font-900 uppercase tracking-[0.4em]">MANIFIESTO</span>
               </div>
               <div className="md:col-span-8 flex flex-col gap-8">
                  <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase">NOSOTROS</h2>
                  <p className="text-black text-2xl font-300 max-w-xl">Pasión por el detalle y excelencia en el estampado textil para marcas de moda.</p>
               </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-black pt-16">
               <div className="flex flex-col gap-8">
                  <h3 className="text-4xl font-900 tracking-tighter uppercase leading-none italic">Calidad en cada Trazado</h3>
                  <p className="text-xl font-400 text-text-muted leading-tight">
                     Contamos con más de 20 años de trayectoria transformando insumos en piezas de valor. Artetex se ha consolidado como el aliado estratégico de diseñadores y emprendedores, especializándose en sublimación de alta gama y acabados profesionales que potencian la identidad de cada marca.
                  </p>
                  <div className="flex flex-col gap-16 border-t border-black pt-8">
                     <div className="flex flex-col">
                        <p className="text-4xl md:text-6xl font-900 tracking-tighter uppercase leading-none">SUSTENTABLE</p>
                        <p className="text-xs font-900 uppercase tracking-[0.4em] mt-3 opacity-40">Origen de Fibra Controlado</p>
                     </div>
                     <div className="flex flex-col">
                        <p className="text-4xl md:text-6xl font-900 tracking-tighter uppercase leading-none">FIDELIDAD</p>
                        <p className="text-xs font-900 uppercase tracking-[0.4em] mt-3 opacity-40">Cromatismo Absoluto</p>
                     </div>
                  </div>
               </div>
               <div className="border border-black grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl overflow-hidden">
                  <ImageWithFallback
                     src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800"
                     alt="Registro de Calidad Artetex"
                     containerClassName="aspect-square w-full h-full"
                     className="w-full h-full object-cover"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
