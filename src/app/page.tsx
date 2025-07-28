import Banner from "@/Components/Banner/Banner";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero"
import Aboutmission from "@/Components/About/Aboutmission"

import Servicepage2 from "@/Components/Servicepage2/Index"



export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
    
     <Hero/>
     <Aboutmission/>
     <Servicepage2/>
     <Banner/>
     <Contact/>
     <Footer/>
    </div>
  );
}
