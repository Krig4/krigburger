import { useState } from "react";

export default function Testimonials() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-[#ffcc66]"> {/* Fondo mostaza */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#8B4513]">Testimonios</h2> {/* Título en marrón */}
        <div className="mt-8 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-lg text-gray-600">"¡Un servicio increíble! Me sentí completamente relajada y renovada después de mi tratamiento facial. ¡Totalmente recomendado!"</p>
            <p className="mt-4 font-bold text-[#171717]">- Laura M.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-lg text-gray-600">"El masaje que recibí fue maravilloso. Todo el personal es muy amable y profesional."</p>
            <p className="mt-4 font-bold text-[#171717]">- Juan R.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
