
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
   return (
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-neutral-gray border-t border-black">
         <div className="max-w-screen-2xl mx-auto flex flex-col gap-24">

            <header className="grid md:grid-cols-12 gap-8">
               <div className="md:col-span-4">
                  <span className="text-black text-sm font-900 uppercase tracking-[0.4em]">CANAL</span>
               </div>
               <div className="md:col-span-8 flex flex-col gap-8">
                  <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase">COTIZAR</h2>
                  <p className="text-black text-2xl font-300 max-w-xl">Inicie su proyecto de estampado personalizado con nosotros.</p>
               </div>
            </header>

            <div className="grid lg:grid-cols-12 gap-16 border-t border-black pt-16">
               <div className="lg:col-span-4 flex flex-col gap-8 text-[11px] font-900 uppercase tracking-[0.2em]">
                  <div>
                     <p className="text-text-muted mb-2">Central de Operaciones</p>
                     <p>Barranquilla, Colombia</p>
                  </div>
                  <div>
                     <p className="text-text-muted mb-2">Línea Directa</p>
                     <p>+57 (300) 123-4567</p>
                  </div>
                  <div>
                     <p className="text-text-muted mb-2">Comunicación Oficial</p>
                     <p className="lowercase">hola@artetex.com</p>
                  </div>
               </div>

               <form className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-900 uppercase tracking-widest">Nombre Completo</label>
                     <input type="text" className="bg-transparent border-b border-black py-4 outline-none text-xl font-300 focus:border-primary transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-900 uppercase tracking-widest">Marca o Empresa</label>
                     <input type="text" className="bg-transparent border-b border-black py-4 outline-none text-xl font-300 focus:border-primary transition-colors" placeholder="Nombre de tu marca" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                     <label className="text-[10px] font-900 uppercase tracking-widest">Detalles del Pedido</label>
                     <textarea rows={4} className="bg-transparent border-b border-black py-4 outline-none text-xl font-300 focus:border-primary transition-colors resize-none" placeholder="Cuéntanos sobre los diseños, telas y cantidades..."></textarea>
                  </div>
                  <button type="button" className="md:col-span-2 flex items-center justify-between bg-black text-white px-12 py-6 text-sm font-900 uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all">
                     Enviar Solicitud <ArrowRight className="w-6 h-6" />
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};
