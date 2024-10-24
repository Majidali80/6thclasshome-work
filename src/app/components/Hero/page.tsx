// src/app/page.tsx

export default function HomePage() {
  return (
    <div className="bg-gray-100 py-20">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
      Sale on Car Crowd and Get the Best Price
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-12">
        {/* Post your Ad section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-100 text-left">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
          Post your Ad on Car Crowd
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
            <li>✔️ Get Genuine offers from Verified Buyers</li>
            <li>✔️ Sell Fast at the Best Price</li>
          </ul>
          <button className="mt-6 w-48 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Post Your Ad
          </button>
        </div>

        {/* OR section */}
        <div className="text-xl text-gray-500">OR</div>

        {/* Try PakWheels Sell It For Me section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-100 text-left">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
          Try Car Crowd Sell It For Me
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔️ Dedicated Sales Expert to Sell for You</li>
            <li>✔️ We Bargain for you and share the Best Offer</li>
            <li>✔️ We ensure Safe & Secure Transaction</li>
          </ul>
          <button className="mt-6 w-48 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Register Your Item
          </button>
        </div>
      </div>
    </div>
  );
}
