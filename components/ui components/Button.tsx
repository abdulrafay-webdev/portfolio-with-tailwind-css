

const Button = ({children}:any) => {
  return (
   <button className="bg-gradient-to-b from-[#243B55] to-[#141E30] md:text-lg text-sm text-white px-8 py-3 font-bold rounded-lg flex items-center hover:bg-gradient-to-b hover:from-[#314965] hover:to-[#192836]" >
    {children}
   </button>
  );
};

export default Button;