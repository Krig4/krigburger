import { useState } from "react";

export default function Welcome() {
  return (
    <section className="relative bg-[#ffcc66] py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-[#8B4513]">Bienvenidos a Krig Burger</h1>
        <p className="mt-4 text-xl text-[#663300]">Las mejores burgers para tu evento</p>
        
        <div className="mt-8 flex justify-center">
          <img
            className="w-full max-w-lg h-80 object-cover rounded-lg shadow-lg"
            src="../img/logo_sin_fondo.png" 
            alt="Bienvenida"
          />
        </div>
        
        <div className="mt-6">
          <a className="px-6 py-3 text-lg font-bold text-white bg-[#8B4513] rounded-lg shadow-md hover:bg-[#663300] transition-all duration-300" href="#">
            ¡Reserva tu evento ahora!
          </a>
        </div>
      </div>
    </section>
  );
}
