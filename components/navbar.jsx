import { useState } from "react";
import { FaHamburger } from "react-icons/fa"; // Importa un icono de hamburguesa

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#ffcc66] shadow-lg">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-10" src="../img/icono.jpg" alt="Logo" />
          </a>

          {/* Botón menú móvil */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#8B4513] hover:text-[#663300] focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú */}
        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-[#ffcc66] transition-all duration-300 ease-in-out md:relative md:w-auto md:flex md:items-center ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="text-[#8B4513] hover:text-[#663300] md:mx-4" href="#">Inicio</a>
            <a className="text-[#8B4513] hover:text-[#663300] md:mx-4" href="#">Servicios</a>
            <a className="text-[#8B4513] hover:text-[#663300] md:mx-4" href="#">Contacto</a>
            <a className="text-[#8B4513] hover:text-[#663300] md:mx-4" href="#">¿Quiénes somos?</a>
          </div>

          {/* Botón de Reservas con icono de hamburguesa */}
          <div className="flex justify-center md:block">
            <a className="flex items-center gap-2 px-4 py-2 text-white bg-[#8B4513] rounded-xl shadow-lg hover:bg-[#663300] transition-all duration-300" href="#">
              Reservas
              <FaHamburger className="w-6 h-6 text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
