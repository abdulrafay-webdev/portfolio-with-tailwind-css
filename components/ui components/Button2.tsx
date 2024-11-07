

const Button2 = ({children}:any) => {
  return (
   <button className="border-2 border-[#67C8C7] bg-transparent text-[#67C8C7] px-8 py-2 md:text-lg text-sm font-bold rounded-lg hover:bg-[#5ABBB9] hover:text-white" >
    {children}
   </button>
  );
};

export default Button2;