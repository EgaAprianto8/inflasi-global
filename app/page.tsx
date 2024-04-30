import Image from "next/image";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Navbar2 from "@/components/layouts/Navbar2";
import Hero from "@/components/pages/beranda/herosection";
import About from "@/components/pages/beranda/About";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <Hero/> 
    <About/>
    <Footer/>
    </>
  );
}
