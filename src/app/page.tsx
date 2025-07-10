import Banner from "@/Components/Banner/Banner";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero/Hero"
import Service from "@/Components/Service/Service"
import AboutUsPage from "@/Components/About/Index";
import Servicepage2 from "@/Components/Servicepage2/Index"
import Moving from "@/Components/Moving/Moving";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      
     <Hero/>
     <Header/>
    
     
     <Servicepage2/>
     <Service/>
    
     <AboutUsPage/>
    
     <Banner/>
     <Moving/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}
