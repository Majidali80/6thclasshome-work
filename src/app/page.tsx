import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page'; // Correct casing
import Hero from './components/Hero/page';
import Futured from './components/Futured/page';
import Image from "next/image";



export default function Home() {
  return (
    <div>
    <title>Car Crowd</title>
    <meta name="description" content="It is All About Used and New Cars" />

      <Navbar />
      <Hero />
      <div className="bg-gray-100 py-4 px-4"></div>
      <Futured />
      <Footer />
    </div>
  );
}