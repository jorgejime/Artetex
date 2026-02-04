
import React from 'react';

export const Legal: React.FC = () => {
    return (
        <div className="py-32 px-8 md:px-16 lg:px-24 bg-white animate-fade-in">
            <div className="max-w-3xl mx-auto flex flex-col gap-12 font-400 text-black leading-relaxed">
                <header className="border-b border-black pb-8">
                    <span className="text-[10px] font-900 tracking-widest uppercase opacity-40 mb-4 block">AVISO LEGAL</span>
                    <h1 className="text-6xl font-900 tracking-tighter uppercase">TÉRMINOS</h1>
                    <p className="mt-4 opacity-60">Condiciones de Servicio</p>
                </header>

                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl font-900 uppercase tracking-tight">INFORMACIÓN GENERAL</h2>
                    <p>
                        Artetex SAS es una sociedad legalmente constituida en Colombia dedicada a la producción textil. Este sitio web tiene como fin la exhibición de portafolio y la captación de prospectos para servicios de sublimación.
                    </p>
                </section>

                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl font-900 uppercase tracking-tight">PROPIEDAD INTELECTUAL</h2>
                    <p>
                        Todos los diseños y patrones exhibidos en este sitio son propiedad exclusiva de Artetex o han sido utilizados bajo autorización de sus respectivos autores. Queda prohibida la reproducción parcial o total sin consentimiento previo por escrito.
                    </p>
                </section>

                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl font-900 uppercase tracking-tight">LIMITACIÓN DE RESPONSABILIDAD</h2>
                    <p>
                        Artetex no se hace responsable por errores en la fidelidad de color derivados de la calibración de las pantallas de los usuarios. Las cotizaciones enviadas tienen una validez temporal sujeta a disponibilidad de insumos.
                    </p>
                </section>

                <footer className="mt-12 border-t border-black pt-8 text-[10px] uppercase font-900 tracking-widest opacity-40">
                    Artetex SAS — NIT: [Ingresar NIT] — Barranquilla
                </footer>
            </div>
        </div>
    );
};
