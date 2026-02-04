
import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Curaduría de Sustrato", desc: "Selección rigurosa de fibras: desde algodones certificados hasta linos de alta densidad." },
    { num: "02", title: "Optimización Vectorial", desc: "Auditoría de archivos y ajuste cromático para garantizar nitidez industrial absoluta." },
    { num: "03", title: "Prototipado Táctil", desc: "Validación física de mano, caída y resolución sobre la base textil definitiva." },
    { num: "04", title: "Producción Serializada", desc: "Impresión 4K con fijación térmica controlada para una durabilidad superior." }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white border-t border-black">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div>
            <span className="text-black text-sm font-900 uppercase tracking-[0.4em] mb-12 block">PROTOCOLO_04</span>
            <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase mb-12">SISTEMA DE<br/>PRODUCCIÓN</h2>
            <div className="grid grid-cols-1 gap-12 border-t border-black pt-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 group items-start">
                  <span className="text-4xl font-900 tracking-tighter group-hover:text-primary transition-colors leading-none">{step.num}</span>
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
              src="https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?q=80&w=1200&auto=format&fit=crop" 
              alt="Planta de Producción Artetex" 
              containerClassName="aspect-[16/10] w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 text-[10px] font-900 uppercase tracking-widest text-black border-t border-black pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary animate-pulse"></span>
              ESTADO: LABORATORIO_ACTIVO
            </div>
            <div className="text-right">NORMA: CONTROL_CALIDAD_A01</div>
          </div>
        </div>
      </div>
    </section>
  );
};
