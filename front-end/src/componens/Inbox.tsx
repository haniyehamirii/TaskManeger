import React, { useState } from 'react'
import { BiSolidSend } from "react-icons/bi";

interface typeTask {
  taskJob: string;
}

const Inbox = () => {
    const [isClick, setIsClick] = useState(false);
    const [text, setText] = useState("")
    const [tasks, setTasks] = useState<typeTask[]>([])
    
    const handleClick = () => {
        setIsClick(clikc => !clikc)
    }

    const handleSubmit = () => {
      if(!text.trim()) return
       
       
      setTasks(prv => [...prv, {taskJob : text}])
      setText("")
      setIsClick(false)
    }


   const handleDelete = (index: number) => {
    setTasks(prv => prv.filter((_,item) => item !== index))
   }

  return (
  <div className='bg-[#111] text-[#ece9e9ce] h-72 w-60 rounded-[1.1rem]'>
  <div className='flex flex-col justify-center p-3 gap-3 items-center'>
    <button
      onClick={handleClick}
      className='border-1 rounded-[0.75rem] cursor-pointer text-[13px] border-dashed flex items-center justify-center border-[#eeeeee2c] h-8 w-[90%] p-2'
    >
      Add task
    </button>

    {isClick && (
      <div className='relative flex flex-col justify-center items-center w-full'>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='text'
          className='bg-[#442e1f]  p-2 text-[13px] focus:outline-none  w-[90%] rounded-[0.75rem] h-9'
        />

        <button onClick={handleSubmit} className='absolute bottom-2 right-5'>
          <BiSolidSend />
        </button>
      </div>
    )}

    {tasks.length > 0 || isClick === true ? (
      <div className='w-[90%] flex flex-col gap-2'>
        {tasks.map((item, index) => (
          <div
            key={index}
            className='bg-[#442e1f] rounded-[0.75rem] p-2 relative'
          >
           <p className='text-[13px]'>{item.taskJob}</p>   
           <button onClick={() => handleDelete(index)} className='absolute right-3 top-2 text-[14px] cursor-pointer'>x</button>
          </div>
        ))}
      </div>
    ) : (
      <div className='mt-15 text-[14px]'>inbox is empty</div>
    )}
  </div>
</div>
  )
}

export default Inbox
