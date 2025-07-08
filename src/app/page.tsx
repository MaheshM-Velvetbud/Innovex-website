import Banner from "@/Components/Banner/Banner";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero"
import Moving from "@/Components/Moving/Moving";
import NavbarDemo from "@/Components/Navbar/Navbar";
import Service from "@/Components/Service/Service"
import Why from "@/Components/Why/Index"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavbarDemo/>
     <Hero/>
    
     <Service/>
     <Why/>
     <Moving/>
     <Banner/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}
