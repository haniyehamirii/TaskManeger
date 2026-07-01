import { useState } from "react";
import { RiStickyNoteAddFill } from "react-icons/ri";
import type { TypeColumn } from "../types/board";
import Board from "./Board";


const Column = () => {
 const [isOpen, setIsOpen] = useState(false)
 const [title, setTitle] = useState("")
 const [board, setBoard] = useState<TypeColumn[]>([])
 

  const handleBoard = () => {
     if(!title.trim()) return


    setBoard(prv => [...prv, {id: crypto.randomUUID(), title:title}])
    
    setIsOpen(false)
    setTitle("")
  }


 const handleDelete = (id: string) => {
  setBoard(prv => prv.filter(item => item.id !== id))
 }


  return (
    <div className='text-[#ece9e9ce]'>

      <button onClick={() => setIsOpen(prv => !prv)} className='bg-[#222] rounded-2xl cursor-pointer gap-1 w-23 justify-center p-2  flex items-center'>
       Board 
       <RiStickyNoteAddFill color="#ece9e9ce" size={22} className="mt-1" />
      </button>

      {isOpen &&
       <div className="mt-2 flex flex-col gap-1 bg-[#222] p-4 rounded-[1.3rem] w-[96%] min-[300px]:w-52">
         <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" className="bg-[#b38867de] text-[#222] p-2 text-[14px] focus:outline-none w-full rounded-xl h-8 placeholder:text-[#2222229f] " />
         <button onClick={handleBoard} className="border-[#ffffff27] border mt-1 border-dashed rounded-xl p-1 py-0.5 w-19 cursor-pointer text-[13px]">Add</button>
       </div>
      }
             
       <div className="mt-10 flex gap-5 p-4 flex-col items-center min-[470px]:flex-row">
        {board.map((item) =>
          <div key={item.id}>
            <Board title={item.title} onDelete={() => handleDelete(item.id)}/>
          </div>
          )}
       </div>

       
    </div>
  )
}

export default Column
