import { useState } from 'react'
import { BiSolidSend } from "react-icons/bi";
import type { Task } from '../types/board';
import { TiDelete } from "react-icons/ti";
import { PiTextAlignLeft } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { format } from 'date-fns';
import Modal from './Modal';

type boardProps = {
title: string,
onDelete: () => void;
}

const Board = ({title, onDelete} : boardProps) => {
    const [openModalId, setOpenModalId] = useState<string| null>(null)
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])

    
    const handleClick = () => {
        setIsOpen(prv => !prv)
    }

    const handleSubmit = () => {
      if(!text.trim()) return
       
      const newTask : Task= {
       id: crypto.randomUUID(), 
       title : text,
       createAt: new Date(),
       description: ""
      }
       
      setTasks(prv => [...prv, newTask])
      setText("")
      setIsOpen(false)
    }

const handleDelete = (id: string) => {
  setTasks(prev => prev.filter(task => task.id !== id));
};

  return (
  <div className='bg-[#222] pb-3 w-60 rounded-[1.1rem]'>
    <div className='flex p-2 pb-0 items-center justify-between'>
      <h2 className='pl-3 capitalize'>{title}</h2>
      <button onClick={onDelete} className='cursor-pointer'>
        <TiDelete size={25} color='#ece9e9ce' />
      </button>
      
    </div>
    
  <div className='flex flex-col  justify-center p-3 gap-3 items-center'>
    <button
      onClick={handleClick}
      className='border rounded-xl cursor-pointer text-[13px] border-dashed flex items-center focus:outline-none justify-center border-[#eeeeee2c] h-8 w-[90%] p-2'
    >
      Add task
    </button>

    {isOpen && (
      <div className='relative flex flex-col justify-center items-center w-full'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='title'
          className='bg-[#b38867de] placeholder:text-[#222222a8]  text-[#222] p-2 text-[13px] focus:outline-none w-[90%] rounded-xl h-9'
        />

        <button onClick={handleSubmit} className='absolute bottom-2 right-5'>
          <BiSolidSend color='#e2deded8'/>
        </button>
      </div>
    )}

    {tasks.length > 0 || isOpen === true ?
      <div className='w-[90%] flex flex-col gap-2 text-[#222]'>
        {tasks.map((item) => (
          <div
            key={item.id}
            className='bg-[#b38867de] rounded-xl p-2.75 relative'
          >

           <h2 className='text-[13px] capitalize font-bold'>{item.title}</h2> 
           <p className='text-[13px] mt-2'>{item?.description}</p>
             
           <div className='absolute right-1 top-2 flex gap-1 items-center'>

            <button className='cursor-pointer' onClick={() => setOpenModalId(openModalId === item.id ? null : item.id)}>
              <PiTextAlignLeft color='#e2dedec8' size={20} />
            </button>
            
            <button onClick={() => handleDelete(item.id)} className=' text-[14px] cursor-pointer'><TiDelete size={21}  color='#e2dedeab'/></button>
           </div >
           
             <div className='bg-[#f3efef50] text-[9px] w-14 gap-1  rounded-full mt-3 px-2 flex items-center justify-center h-4.75'>
               <GoClockFill size={11}  color='#333'/>
              <p>{format(item.createAt,"dd MMM ")}</p>
            </div>
          </div>
        ))}
      </div>
   : <></>}

  {openModalId && 
   <div className='fixed inset-0 bg-black/70 flex items-center justify-center flex-col '>       
       <Modal 
         closeModal={() => setOpenModalId(null)}
         tasks={tasks}
         setTasks={setTasks}
         openModalId={openModalId}
         />

    </div>
  }
   
  </div>
</div>
  )
}

export default Board
