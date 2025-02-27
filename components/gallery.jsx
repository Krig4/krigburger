export default function Gallery() {
  return (
    <section className="py-16 bg-[#ffcc66]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#8B4513]">Galería</h2>
        <p className="mt-4 text-lg text-[#663300]">Descubre nuestras hamburguesas en acción</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {['galeria1.jpg', 'galeria2.jpg', 'galeria3.jpg', 'galeria4.jpg', 'galeria5.jpg', 'galeria6.jpg'].map((img, index) => (
            <div
              key={index}
              className="w-full h-56 bg-cover bg-center rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundImage: `url('/img/${img}')` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
