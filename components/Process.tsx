
import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export const Process: React.FC = () => {
  const steps = [
    { num: "•", title: "Selección de Base", desc: "Escogemos la tela ideal para tu diseño, garantizando la mejor absorción de tinta y textura." },
    { num: "•", title: "Preparación de Arte", desc: "Ajuste de perfiles de color y resolución para una impresión digital impecable." },
    { num: "•", title: "Calibración Térmica", desc: "Transferencia por calor controlada para asegurar que el color penetre la fibra permanentemente." },
    { num: "•", title: "Control de Acabado", desc: "Revisión final de cada pieza para asegurar suavidad y fidelidad cromática." }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white border-t border-black">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

        <div className="lg:col-span-5 flex flex-col gap-12">
          <div>
            <span className="text-black text-sm font-900 uppercase tracking-[0.4em] mb-12 block">PRODUCCIÓN ACTIVA</span>
            <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase mb-12">NUESTRO<br />MÉTODO</h2>
            <div className="grid grid-cols-1 gap-12 border-t border-black pt-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 group items-start">
                  <span className="text-[10px] font-900 border border-black px-2 py-1">SOLUCIÓN</span>
                  <div className="flex flex-col gap-2 border-l border-black pl-6">
                    <h3 className="text-lg font-900 uppercase tracking-tighter leading-none">{step.title}</h3>
                    <p className="text-sm text-text-muted font-400 leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 h-full justify-center">
          <div className="border border-black grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200"
              alt="Planta de Producción Artetex"
              containerClassName="aspect-[16/10] w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            ESTADO: LABORATORIO ACTIVO
          </div>
          <div className="text-right">NORMA: CONTROL CALIDAD</div>
        </div>
      </div>
    </section>
  );
};
