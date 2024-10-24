import Link from 'next/link';
import Navbar from '../components/Navbar/page';
import Footer from '../components/Footer/page';

function ProductPage() {
  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Changan Alsvin 1.3L MT Comfort 2024 Price in Pakistan, Specs & Features
        </h1>
        <img src="/changan.jpg" alt="Product" className="w-64 h-auto mb-4" />

        <div className="flex space-x-4 mb-4">
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Request A Test Drive</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Request A Bank Finance</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Visit Place</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Car Inspection</button>
        </div>
        <h1 className="text-3xl py-4 mb-4">Vehicle Description </h1>
        <p className="text-center mb-4">
        <b>MILEAGE</b> (KM/LITER) 13 to 18 <b>Transmission</b> Manual <b>Fuel</b> Type Petrol <b>Engine</b> 1370 cc
        </p>

        <p className="text-xl text-green-600 font-bold mb-4">PKR 3,799,000</p>

        <Link href="/Payment" className="bg-blue-600 text-white px-6 py-2 rounded">
          Make a Payment
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
