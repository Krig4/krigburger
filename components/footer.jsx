import { FaInstagram, FaFacebook } from "react-icons/fa"; // Importa iconos de redes sociales

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-[#ffcc66] text-center">
      <p className="text-[#8B4513] font-semibold">&copy; {currentYear} Krig Burger. Todos los derechos reservados.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-[#8B4513] hover:text-[#663300] transition-all duration-300">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-[#8B4513] hover:text-[#663300] transition-all duration-300">
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
