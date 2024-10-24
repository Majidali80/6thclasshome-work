import Image from "next/image";
import Link from "next/link"

export default function Futured() {
    return (
       <div className="bg-gray-100 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Featured New Cars
          </h2>
          <a href="#" className="text-blue-500 hover:underline">
            View All New Cars
          </a>
        </div>

        <div className="mt-6">
          {/* Tabs */}
          <div className="flex space-x-6 font-bold border-b-2 border-gray-300">
            <button className="hover:underline">
              Popular
            </button>
            <button className="hover:underline">
              Upcoming
            </button>
            <button className="hover:underline">
              Newly Launched
            </button>
          </div>
     <div className="flex justify-between items-center w-full mt-6">
  <Link href="/products1" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/hc.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">Honda City 1.2L M/T 2024</h3>
    <p className="text-green-600 mt-2">PKR 4,649,000</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="/products/1#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>

  <Link href="/products2" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/toyota.jpg" alt="Product 2" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">Toyota Altis X Manual 1.6</h3>
    <p className="text-green-600">PKR 5,969,000</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="/products/2#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>

  <Link href="/products3" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/changan.jpg" alt="Product 3" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">Changan Alsvin 1.3L MT</h3>
    <p className="text-green-600">PKR 3,799,000</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="/products/3#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>

  <Link href="/products4" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/sonata.jpg" alt="Product 4" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">Hyundai Sonata 2.5</h3>
    <p className="text-green-600">PKR 11,205,000</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="/products/4#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>
</div>
   </div>
     </div>
        </div>
  );
}
