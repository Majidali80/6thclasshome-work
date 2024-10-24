import Link from 'next/link';
import Navbar from '../components/Navbar/page'; // Adjust the path as needed
import Footer from '../components/Footer/page'; // Adjust the path as needed

export default function Forms() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50 ">
      <Navbar />
      <div>
        <h1 className="mt-10 text-4xl font-semibold text-center uppercase ">Enter Your Details
          
        </h1>
      <div>
        <form className="mt-10 flex gap-5 justify-center items-center flex-col border h-50">
        {/*mt-10: Applies a margin-top of 2.5rem (40px), giving space above the form.*/}
        {/*flex: Sets the display to flex, allowing for flexible layout.*/}
        {/*gap-5: Adds a gap of 1.25rem (20px) between flex items.*/}
        {/*justify-center: Centers the flex items horizontally within the form.*/}
        {/*items-center: Aligns flex items vertically in the center.*/}
        {/*flex-col: Arranges the flex items in a column instead of the default row.*/}
        {/*border: Adds a default border around the form.*/}
        {/*bg-white: Sets the background color to white.*/}
        {/*h-50: This class might be a custom height class since it’s not a standard Tailwind height utility. You might want to check your Tailwind configuration.*/}
        <input type="name" className="p-4 rounded-lg w-2/5 border border-red-700" placeholder="Enter Your Name"/>
        <input type="email" className="p-4 w-2/5 rounded-lg border border-red-700" placeholder="Enter Your Email"/>
        <input type="card" className="p-4 w-2/5 rounded-lg border border-red-700" placeholder="Enter Your Card No"/>
        <input type="address" className="p-4 w-2/5 rounded-lg border border-red-700" placeholder="Enter Your Address"/>
        <button className="p-4 rounded-lg">
        <Link href="/Thankyou" className="bg-blue-600 text-white px-6 py-2 rounded">
          Make a Payment
        </Link></button>
        <div className="p-4"></div>
</form>
    </div>    
    <Footer />
    </div>
   
    </div>
    
  );
}

