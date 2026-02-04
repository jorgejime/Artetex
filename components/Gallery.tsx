
import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

const galleryItems = [
  { id: '01', title: 'Ondas_Cinéticas', category: 'MORFOLOGÍA_LINEAL', imageUrl: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800' },
  { id: '02', title: 'Floral_Apis', category: 'BOTÁNICA_MACRO', imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800' },
  { id: '03', title: 'Tríptico_Vertical', category: 'COMPOSICIÓN_MIXTA', imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800' },
  { id: '04', title: 'Desenfoque_Cromático', category: 'ESTUDIO_PIGMENTO', imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800' },
  { id: '05', title: 'Follaje_Geométrico', category: 'NATURALIS_ABSTRACTA', imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800' },
  { id: '06', title: 'Patrón_Poligonal', category: 'INGENIERÍA_GRID', imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800' },
  { id: '07', title: 'Inspir(arte)_Yellow', category: 'TIPOGRAFÍA_EXPERIMENTAL', imageUrl: 'https://images.unsplash.com/photo-1551218372-a2025978f50d?q=80&w=800' },
  { id: '08', title: 'Textura_Lentejuela', category: 'SUPERFICIE_REFRACTIVA', imageUrl: 'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=800' },
  { id: '09', title: 'Seda_Metálica', category: 'BRILLO_INDUSTRIAL', imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800' },
  { id: '10', title: 'Mesh_Rosáceo', category: 'ESTRUCTURA_POROSA', imageUrl: 'https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=800' },
  { id: '11', title: 'Acuarela_Fluida', category: 'PIGMENTACIÓN_LIBRE', imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800' },
  { id: '12', title: 'Contorno_Cálido', category: 'LÍNEA_CONTINUA', imageUrl: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80&w=800' },
  { id: '13', title: 'Follaje_Cian_Gris', category: 'BOTÁNICA_MODULAR', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800' },
  { id: '14', title: 'Composición_Mesa', category: 'APLICACIÓN_INTERIOR', imageUrl: 'https://images.unsplash.com/photo-1520183060592-7f726715d97f?q=80&w=800' },
  { id: '15', title: 'Amapolas_Noir', category: 'CONTRASTE_DENSIDAD', imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800' },
  { id: '16', title: 'Lavado_Pastel', category: 'GRADIENTE_SUAVE', imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800' },
  { id: '17', title: 'Ramificación_Roja', category: 'ESTRUCTURA_ORGÁNICA', imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800' },
  { id: '18', title: 'Check_Floral', category: 'PATRÓN_HÍBRIDO', imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800' },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white border-t border-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-24">
        
        <header className="grid md:grid-cols-12 gap-8">
           <div className="md:col-span-4">
              <span className="text-black text-sm font-900 uppercase tracking-[0.4em]">ARCHIVO_03 / REGISTRO</span>
           </div>
           <div className="md:col-span-8 flex flex-col gap-8">
              <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase">COLECCIÓN</h2>
              <p className="text-black text-2xl font-300 max-w-xl italic">
                Sistemática visual del estudio Artetex: un catálogo riguroso de morfologías cinéticas y botánica curada.
              </p>
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {galleryItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 group cursor-pointer border-t border-black pt-8">
              <ImageWithFallback 
                src={item.imageUrl} 
                alt={item.title} 
                containerClassName="aspect-[3/4] border border-black grayscale group-hover:grayscale-0"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="flex justify-between items-start">
                 <div>
                   <h3 className="text-xl font-900 uppercase tracking-tighter leading-none mb-1">{item.title}</h3>
                   <p className="text-[10px] font-400 text-text-muted uppercase tracking-widest">{item.category}</p>
                 </div>
                 <span className="text-[10px] font-900 border border-black px-2 py-1">SKU_{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
