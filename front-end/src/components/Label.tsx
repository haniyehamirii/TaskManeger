import { TiDelete } from "react-icons/ti";

interface LabelType {
  label: string;
}

const Label = () => {
  const labels: LabelType[] = [
    { label: "fast" },
    { label: "hard" },
    { label: "best" },
    { label: "best" },
    { label: "best" },
  ];

  return (
    <div className="mt-3">
      <h2 className="font-bold">Label</h2>
       
       <div className="flex gap-3 flex-wrap mt-4">
      {labels.map((item) => (
        <div
          key={item.label}
          className="bg-[#b38867de] px-1 text-[#222] h-7 rounded-full flex items-center gap-1 text-[12px]"
        >
          
           <span className="pl-1">{item.label}</span> 
           <TiDelete size={18} className="mt-0.5"/>
         
        </div>
      ))}
      </div>
    </div>
  );
};

export default Label;