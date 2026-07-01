import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { BiSolidSend } from "react-icons/bi";
import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../types/board";

type labelProps = {
   setTasks: Dispatch<SetStateAction<Task[]>>
   openModalId: string | null
   task: Task[]
}

const Label = ({openModalId,setTasks, task}: labelProps) => {
  const [text, setText] = useState("");
   const selectedTask = task.find(task => task.id === openModalId)

  const handleSubmit = () => {
    if(!text.trim()) return
    
   setTasks(prev =>
  prev.map(task =>
    task.id === openModalId
      ? { ...task, label: [...task.label, text] }
      : task
  )
);

setText("")
     
  }

 const handleDelete = (indexToDelete: number) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === openModalId
        ? {
            ...task,
            label: task.label.filter(
              (_, index) => index !== indexToDelete
            ),
          }
        : task
    )
  );
};

  return (
    <div className="mt-3">
      <h2 className="font-bold">Label</h2>
       
          <div className="flex relative items-center justify-center flex-col">
             <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="label" className="bg-[#b38867de] text-[#222] p-2 text-[14px] mt-2 focus:outline-none w-full rounded-xl h-9 pr-7 placeholder:text-[#2222229f] " />
             <button onClick={handleSubmit} className="absolute mt-3 right-2">
             <BiSolidSend color="#ffffffca" size={15}/> 
            </button> 
          </div>
        
         
       <div className="flex gap-3 flex-wrap mt-4">
      {selectedTask?.label?.map((item,i) => (
        <div
          key={i}
          className="bg-[#b38867de] px-1 text-[#222] h-7 rounded-full flex items-center gap-1 text-[12px]"
        >
          
           <span className="pl-1">{item}</span> 
           <button onClick={() => handleDelete(i)} className="cursor-pointer">
               <TiDelete size={18} className="mt-0.5"/>
           </button>
        
        
        </div>
      ))}
      </div>
    </div>
  );
};

export default Label;