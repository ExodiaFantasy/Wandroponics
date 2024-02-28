import { MdOutlineSettings } from "react-icons/md";
import { TfiDashboard } from "react-icons/tfi";
import { IoPowerOutline } from "react-icons/io5";
import Users from "../../components/users icon/Users";
import Notification from "@/app/components/notif icon/Notification";

export default function Header() {
  return (
    <nav className="bg-gray-100 flex items-center justify-between max-container padding-container z-20 py-5 mx-8 rounded-b-3xl"> 
      <div className="text-2xl text-green-900 text-left font-extrabold flex items-center ml-20">
        <TfiDashboard size={40} className="text-green-900 mr-6" /> 
        dashboard.
      </div>
  
      <div className="flex items-center">
        <a href="/404" className="text-green-800 mr-5 max-w-lg border-2 border-green-800 rounded-lg px-2 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white"> 
          <IoPowerOutline size={27} /> 
        </a>
        
        <Notification />

        <a href="/config" className="text-green-800 mr-5 max-w-lg border-2 border-green-800 rounded-lg px-2 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white"> 
          <MdOutlineSettings size={27} /> 
        </a>
  
        <Users />

      </div>
    </nav>
  );
  
}
