import React from "react";

export default function LandingPage() {
  return (
    <div className="h-screen flex justify-center items-center px-32 relative">
        <div className="border-8 animate-giro border-[#c5ff1e] w-2/5 h-80 mx-40 absolute ">
    
        </div>
      <div className="flex flex-col text-8xl gap-5 items-center absolute hover:translate-x-0">
          <h1 className="text-[#e5e3df] text-center font-Montserrat font-semibold uppercase duration-700 hover:-translate-x-40 bg-[#080909] rounded-full px-5">
            Bienvenido a
          </h1>
        <h1 className="text-[#e5e3df] text-center font-Montserrat font-semibold uppercase duration-700 hover:translate-x-40 bg-[#080909] rounded-full px-5">
           mi portafolio
        </h1>
        <p className="text-2xl w-fit text-[#e5e3df] text-center font-bold font-Montserrat italic bg-[#080909] rounded-full px-2">
          Soy Luis Fernando, desarrollador web
        </p>
      </div>
    </div>
  );
}
