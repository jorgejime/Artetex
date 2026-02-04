
import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

const serviceList = [
  {
    code: "TEC_01",
    title: "Cromatismo Digital",
    desc: "Sistemas de impresión reactiva sobre fibras orgánicas. Fidelidad absoluta en la reproducción de gradientes y micro-patrones.",
    img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800"
  },
  {
    code: "TEC_02",
    title: "Desarrollo de Autor",
    desc: "Curaduría y diseño de patrones exclusivos. Morfologías botánicas y geométricas adaptadas a lineamientos de marca premium.",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800"
  },
  {
    code: "TEC_03",
    title: "Sustratos de Lujo",
    desc: "Abastecimiento de bases técnicas: desde sedas de alta densidad hasta linos con acabados industriales de última generación.",
    img: "https://images.unsplash.com/photo-1520183060592-7f726715d97f?q=80&w=800"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-neutral-gray border-t border-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-24">
        
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-black text-sm font-900 uppercase tracking-[0.4em]">DIVISIÓN_SERVICIOS</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase mb-8">CAPACIDAD<br/>TÉCNICA</h2>
            <p className="text-black text-2xl font-300 max-w-xl">Infraestructura tecnológica dedicada a la excelencia textil de gran escala.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-black">
          {serviceList.map((service, idx) => (
            <div key={idx} className="group border-r border-b border-black flex flex-col hover:bg-white transition-colors">
              <ImageWithFallback 
                src={service.img} 
                alt={service.title} 
                containerClassName="aspect-square grayscale group-hover:grayscale-0"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="p-10 flex flex-col gap-6">
                <span className="text-[10px] font-900 tracking-widest text-text-muted">{service.code}</span>
                <h3 className="text-3xl font-900 tracking-tighter uppercase leading-none">{service.title}</h3>
                <p className="text-sm font-400 text-text-muted leading-tight">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
