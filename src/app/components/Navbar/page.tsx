import Link from "next/link"
import Image from "next/image";


export default function Navbar() {
    return (
        <div>
            <title>Car Crowd</title>
            <meta name="description" content="It is All About Used and New Cars" />
        <nav className="flex items-center justify-between w-full bg-black h-20">
           
                
        <div className="h-20 w-28 ml-6">
        <img src="/logo3.png" alt="Logo" className="h-full w-full object-cover px-4 py-2 rounded ml-4"/>
        </div>

        <div className="text-white justify-center"><Link href="/">Home</Link></div>
        <div className="text-white justify-center"> Used Cars </div>
        <div className="text-white justify-center"> New Cars </div>
        <div className="text-white justify-center"> Bikes </div>
        <div className="text-white justify-center"> Auto Store </div>
        <div className="text-white justify-center"> Videos </div>
        <div className="text-white justify-center"> Forums </div>
        <div className="text-white justify-center"> Blog </div>
        <div className="text-white justify-center"> More </div>
        <button className="border flex items-center justify-center px-12 h-10 border-red-300 bg-red-500 text-white">
  Post An Ad
</button>


        </nav>
            
            
        </div>
        
    )
}
