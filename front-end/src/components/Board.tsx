import { useState } from 'react'
import { BiSolidSend } from "react-icons/bi";
import type { Task } from '../types/board';


const Board = ({title} : {title: string}) => {
    const [isClick, setIsClick] = useState(false);
    const [text, setText] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])
    
    const handleClick = () => {
        setIsClick(clikc => !clikc)
    }

    const handleSubmit = () => {
      if(!text.trim()) return
       
       
      setTasks(prv => [...prv, {id: crypto.randomUUID(), title : text}])
      setText("")
      setIsClick(false)
    }

const handleDelete = (id: string) => {
  setTasks(prev => prev.filter(task => task.id !== id));
};

  return (
  <div className='bg-[#111] text-[#ece9e9ce] h-72 w-60 rounded-[1.1rem]'>
    <h2 className='p-4 pb-0 capitalize'>{title}</h2>
  <div className='flex flex-col  justify-center p-3 gap-3 items-center'>
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
          className='bg-[#442e1f]  p-2 text-[13px] focus:outline-none w-[90%] rounded-xl h-9'
        />

        <button onClick={handleSubmit} className='absolute bottom-2 right-5'>
          <BiSolidSend />
        </button>
      </div>
    )}

    {tasks.length > 0 || isClick === true ?
      <div className='w-[90%] flex flex-col gap-2'>
        {tasks.map((item) => (
          <div
            key={item.id}
            className='bg-[#442e1f] rounded-xl p-2 relative'
          >
           <p className='text-[13px]'>{item.title}</p>   
           <button onClick={() => handleDelete(item.id)} className='absolute right-3 top-2 text-[14px] cursor-pointer'>x</button>
          </div>
        ))}
      </div>
   : <></>}
  </div>
</div>
  )
}

export default Board
