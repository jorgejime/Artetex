
import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

const serviceList = [
  {
    code: "ESP PREMIUM",
    title: "Sublimación Premium",
    desc: "Impresión de alta definición sobre bases de poliéster y mezclas. Colores vibrantes y detalles nítidos que no pierden intensidad.",
    img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800",
    steps: [
      { num: "•", title: "Selección de Base", desc: "Escogemos la tela ideal para tu diseño, garantizando la mejor absorción de tinta y textura." },
      { num: "•", title: "Preparación de Arte", desc: "Ajuste de perfiles de color y resolución para una impresión digital impecable." },
      { num: "•", title: "Calibración Térmica", desc: "Transferencia por calor controlada para asegurar que el color penetre la fibra permanentemente." },
      { num: "•", title: "Control de Acabado", desc: "Revisión final de cada pieza para asegurar suavidad y fidelidad cromática." }
    ]
  },
  {
    code: "ESP MODA",
    title: "Estampado de Moda",
    desc: "Desarrollo de patterns exclusivos para colecciones de temporada. Adaptamos tus ideas a los formatos de impresión más exigentes.",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800"
  },
  {
    code: "ESP TEXTIL",
    title: "Acabados Textiles",
    desc: "Manejo de diversas texturas y fijación térmica de alta calidad. Garantizamos la durabilidad y el tacto suave en cada prenda.",
    img: "https://images.unsplash.com/photo-1520183060592-7f726715d97f?q=80&w=800"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-neutral-gray border-t border-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-24">

        <header className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-black text-sm font-900 uppercase tracking-[0.4em]">DIVISIÓN PRODUCCIÓN</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase mb-8">NUESTROS<br />PROCESOS</h2>
            <p className="text-black text-2xl font-300 max-w-xl">Tecnología de punta aplicada al arte del estampado textil personalizado.</p>
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
