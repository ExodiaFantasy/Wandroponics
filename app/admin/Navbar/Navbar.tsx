import { RiAdminLine } from "react-icons/ri";
import { TfiDashboard } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 flex items-center justify-between max-container padding-container relative z-20 py-5 mx-8 rounded-b-3xl"> 
      <div className="text-xl text-green-900 text-left font-extrabold flex items-center mx-12">
        <RiAdminLine size={35} className="text-green-900 m-3" /> 
        administrator mode.
      </div>
  
      <div className="flex items-center">
        <a href="/dashboard" className="text-green-800 mr-5 max-w-lg border-2 border-green-800 rounded-lg px-2 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white"> 
          <TfiDashboard size={27} /> 
        </a>
  
        <a href="/404" className="text-green-800 mr-12 max-w-lg border-2 border-green-800 rounded-lg px-2 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white"> 
          <FaRegUser size={27} /> 
        </a>
      </div>
    </nav>
  );
  
}
