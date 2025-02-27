import { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Importa icono de correo

export default function Contact() {
  return (
    <section className="py-16 bg-[#ffcc66]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#8B4513]">Contacto</h2>
        <p className="mt-4 text-lg text-[#663300]">¡Estamos aquí para ayudarte! Contáctanos para más información o agendar tu evento.</p>
        
        <div className="mt-8">
          <form className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513]"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513]"
            />
            <textarea
              placeholder="Tu mensaje"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513]"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 p-4 bg-[#8B4513] text-white font-semibold rounded-lg hover:bg-[#663300] transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
