"use client";

import NavBar from "../components/navbar"
import Welcome from "../components/welcome"
import Services from "../components/services"
import Gallery from "../components/gallery"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <NavBar />
      
      <Welcome />
      
      <Services />
      
      <Gallery />

      <Testimonials />

      <Contact />
      

      <Footer />
      
      
    </div>
  );
}
