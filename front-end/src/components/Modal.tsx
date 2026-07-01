import type { Dispatch, SetStateAction } from "react";
import Description from "./Description"
import Label from "./Label"
import { TiDelete } from "react-icons/ti";
import type { Task } from "../types/board";

type modalProps = {
  closeModal: () => void
  setTasks: Dispatch<SetStateAction<Task[]>>
  openModalId: string | null
  tasks: Task[]
}

const Modal = ({closeModal, openModalId, setTasks, tasks}: modalProps ) => {

  return (
    <div className="bg-[#222] p-2 px-3.75 pb-10 rounded-3xl  text-[#ece9e9ce] w-52">

      <div className="flex justify-between items-center">
         <h2 className="capitalize font-bold font-sans p-1">button</h2>
         <button onClick={closeModal} className="cursor-pointer">
           <TiDelete size={21} />
         </button>
      </div>
      
     
      
      <Description 
       setTasks={setTasks}
       openModalId={openModalId}
       tasks={tasks}
       />
       
      <Label />
        
    </div>
  )
}

export default Modal
