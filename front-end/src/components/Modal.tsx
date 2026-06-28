import Description from "./Description"
import Label from "./Label"

const Modal = () => {

  return (
    <div className="bg-[#222] p-2 px-3 rounded-3xl  text-[#ece9e9ce] w-52">
      <h2 className="capitalize font-bold font-sans p-1">button</h2>
      
      <Description />
      <Label />
        
    </div>
  )
}

export default Modal
