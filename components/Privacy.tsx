
import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div className="py-32 px-8 md:px-16 lg:px-24 bg-white animate-fade-in">
            <div className="max-w-3xl mx-auto flex flex-col gap-12 font-400 text-black leading-relaxed">
                <header className="border-b border-black pb-8">
                    <span className="text-[10px] font-900 tracking-widest uppercase opacity-40 mb-4 block">POLÍTICA DE PRIVACIDAD</span>
                    <h1 className="text-6xl font-900 tracking-tighter uppercase">HABEAS DATA</h1>
                    <p className="mt-4 opacity-60">Última actualización: Febrero 2026</p>
                </header>

                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl font-900 uppercase tracking-tight">1. TRATAMIENTO DE DATOS</h2>
                    <p>
                        En cumplimiento de la <strong>Ley 1581 de 2012</strong> de la República de Colombia, Artetex SAS informa que los datos personales recolectados a través de nuestro formulario de contacto son tratados bajo estrictos estándares de seguridad y confidencialidad.
                    </p>
                </section>

                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl font-900 uppercase tracking-tight">2. FINALIDAD</h2>
                    <p>
                        Sus datos serán utilizados exclusivamente para atender solicitudes de cotización, envío de muestras digitales y comunicación directa relacionada con la prestación de nuestros servicios de estampado textil. No compartimos su información con terceros para fines comerciales.
                    </p>
                </section>

                <section className="flex flex-col gap-6">
                    <h2 className="text-2xl font-900 uppercase tracking-tight">3. SUS DERECHOS</h2>
                    <p>
                        Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar o solicitar la eliminación de su información de nuestras bases de datos en cualquier momento enviando un correo a <strong>hola@artetex.com</strong>.
                    </p>
                </section>

                <footer className="mt-12 border-t border-black pt-8 text-[10px] uppercase font-900 tracking-widest opacity-40">
                    Artetex SAS — Barranquilla, Colombia
                </footer>
            </div>
        </div>
    );
};
