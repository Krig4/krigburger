import { useState } from "react";
import { FaHamburger, FaGlassMartiniAlt, FaUtensils } from "react-icons/fa";

export default function Services() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDetails = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#ffcc66]"> 
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#8B4513]">Nuestros Servicios</h2> {/* Color mostaza */}
        <p className="mt-4 text-xl text-[#663300]">¡Te llevamos las mejores hamburguesas a tu evento!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Servicio Hamburguesas */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <FaHamburger className="text-4xl text-[#F1A800] mx-auto" /> {/* Icono hamburguesa */}
            <h3 className="text-xl font-bold text-[#171717] mt-4">Hamburguesas Gourmet</h3>
            <p className="mt-4 text-gray-600">Hamburguesas personalizadas, creadas para sorprender a tus invitados.</p>
            <button
              onClick={() => toggleDetails(0)}
              className="mt-4 bg-[#8B4513] text-white py-2 px-6 rounded-full hover:bg-[#663300] transition-all"
            >
              {isOpen === 0 ? "Ver menos" : "Ver más"}
            </button>
            {isOpen === 0 && (
              <p className="mt-4 text-gray-500">
                Ofrecemos una amplia variedad de hamburguesas gourmet con los mejores ingredientes frescos y de calidad.
              </p>
            )}
          </div>
          {/* Servicio Drinks */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <FaGlassMartiniAlt className="text-4xl text-[#F1A800] mx-auto" /> {/* Icono bebida */}
            <h3 className="text-xl font-bold text-[#171717] mt-4">Bebidas y Cócteles</h3>
            <p className="mt-4 text-gray-600">Cócteles refrescantes y bebidas deliciosas para acompañar tu comida.</p>
            <button
              onClick={() => toggleDetails(1)}
              className="mt-4 bg-[#8B4513] text-white py-2 px-6 rounded-full hover:bg-[#663300] transition-all"
            >
              {isOpen === 1 ? "Ver menos" : "Ver más"}
            </button>
            {isOpen === 1 && (
              <p className="mt-4 text-gray-500">
                Desde cócteles clásicos hasta opciones personalizadas para complementar tu evento con estilo.
              </p>
            )}
          </div>
          {/* Servicio Catering */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <FaUtensils className="text-4xl text-[#F1A800] mx-auto" /> {/* Icono utensilios */}
            <h3 className="text-xl font-bold text-[#171717] mt-4">Catering para Eventos</h3>
            <p className="mt-4 text-gray-600">Llevamos nuestras hamburguesas y más a tu evento o pop-up.</p>
            <button
              onClick={() => toggleDetails(2)}
              className="mt-4 bg-[#8B4513] text-white py-2 px-6 rounded-full hover:bg-[#663300] transition-all"
            >
              {isOpen === 2 ? "Ver menos" : "Ver más"}
            </button>
            {isOpen === 2 && (
              <p className="mt-4 text-gray-500">
                Ofrecemos un servicio de catering personalizado que se adapta a las necesidades de tu evento, asegurando que todos disfruten.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
