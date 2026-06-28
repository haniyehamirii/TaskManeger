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
    <div>
      <h2 className="font-bold">Label</h2>
       
       <div className="flex gap-3 flex-wrap">
      {labels.map((item) => (
        <div
          key={item.label}
          className="bg-blue-500 p-1 gap-2 h-5 rounded-full flex w-12 items-center justify-between text-[12px]"
        >
          <span>  {item.label}</span>
        
          <span className="pr-0.5">x</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Label;