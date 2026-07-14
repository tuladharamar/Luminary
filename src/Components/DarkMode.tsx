import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"


const DarkMode = () => {

   const [enabled, setEnabled] = useState(()=>{
    const storedValue = localStorage.getItem('theme') === 'dark'
    return storedValue;
   })

   useEffect(()=>{
    const root = document.documentElement;
    if(enabled){
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }else{
        root.classList.remove('dark');
        localStorage.removeItem('theme');
    }
   }, [enabled]);
  return (
    <>
        <div  onClick={()=>setEnabled((prev)=>!prev)} className={`w-16 h-6 ${enabled ? "bg-gray-500": "bg-black"} flex  items-center rounded-full transition-colors duration-300 `}>
            <button className={`${enabled ? "text-gray-600":"text-black"} p-1 w-8 h-8 rounded-full bg-white flex items-center ${enabled ? 'translate-x-8': 'transalte-x-0'} transition-all duration-300 border-2` }>
                {enabled ? <Sun />:<Moon /> }
            </button>
        </div>
    </>
  )
}

export default DarkMode