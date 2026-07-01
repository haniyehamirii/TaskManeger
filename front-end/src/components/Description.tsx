import { useState } from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { BiSolidSend } from "react-icons/bi";
import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../types/board";

type descriptionProps = {
  setTasks: Dispatch<SetStateAction<Task[]>>
  openModalId: string | null
  tasks: Task[]
}

const Description = ({setTasks, openModalId, tasks}: descriptionProps) => {
  const[text,setText] = useState("")
 const [isOpen, setIsOpen] = useState(false)

 const handleSubmit = () => {
  if(!text.trim()) return null
  setTasks(prv => prv.map(task => task.id === openModalId ? {...task , description: text} : task))
  setIsOpen(false)
  setText("")
 }

  return (
      <div className="bg-[#b38867de] mt-2 text-[#222] rounded-2xl p-3">
        <div className="flex justify-between">
         <h2 className="font-bold font-sans">Description</h2>
         <button onClick={() => setIsOpen(prv => !prv)} className="cursor-pointer translate-x-[6px]">
           <BiSolidMessageSquareEdit size={20} /> 
         </button>
       
        </div>
        
       {tasks.map(item => item.id === openModalId ? <p className="text-[13px] mt-1">{item.description}</p>: "")}
         
       

      {isOpen && 
        <div className="flex relative items-center justify-center flex-col">
          <textarea
           value={text}
           onChange={(e) => setText(e.target.value)}
           placeholder='text'
           className='bg-[#222]  p-2 text-[13px] pr-7 focus:outline-none w-full rounded-xl h-12 mt-3 text-[#ece9e9ce]  placeholder:text-[#ece9e9ce] placeholder:text-[12px]'
           />
           <button onClick={handleSubmit} className="absolute bottom-1 right-2">
             <BiSolidSend color="#fff" size={15}/> 
            </button> 
         </div>
        }
        
      </div>
  )
}

export default Description
