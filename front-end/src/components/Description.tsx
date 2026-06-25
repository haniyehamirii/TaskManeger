import { useState } from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { BiSolidSend } from "react-icons/bi";

const Description = () => {
 const [description,setDescription] = useState("")
 const [isOpen, setIsOpen] = useState(false)

  return (
      <div className="bg-[#b38867de] mt-4 text-[#222] rounded-2xl p-3">
        <div className="flex justify-between">
         <h2 className="font-bold font-sans">Description</h2>
         <button onClick={() => setIsOpen(prv => !prv)} className="cursor-pointer translate-x-[6px]">
           <BiSolidMessageSquareEdit size={20} /> 
         </button>
       
        </div>
       
         
        <p className="text-[13px] mt-2">hiii u should change this button color</p>

      {isOpen && 
        <div className="flex relative items-center justify-center flex-col">
          <textarea
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           placeholder='description'
           className='bg-[#222]  p-2 text-[13px] pr-7 focus:outline-none w-full rounded-xl h-12 mt-3 text-[#ece9e9ce]  placeholder:text-[#ece9e9ce] placeholder:text-[12px]'
           />
           <button className="absolute bottom-1 right-2">
             <BiSolidSend color="#fff"/> 
            </button> 
         </div>
        }
        
      </div>
  )
}

export default Description
