
export default function Testimonials() {
  return (
    <section className="py-16 bg-[#ffcc66]"> {/* Fondo mostaza */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#8B4513]">Testimonios</h2> {/* Título en marrón */}
        <div className="mt-8 space-y-8">
          {[
            { text: "¡Las mejores hamburguesas que he probado en un evento! Servicio rápido y sabores espectaculares.", author: "Carlos G." },
            { text: "Increíble experiencia, la calidad de la carne y los ingredientes es insuperable. ¡Repetiré sin duda!", author: "María L." },
            { text: "Un pop-up lleno de sabor, atención y mucha pasión por las burgers. ¡100% recomendado!", author: "Andrés P." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <p className="text-lg text-gray-600">"{testimonial.text}"</p>
              <p className="mt-4 font-bold text-[#171717]">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

