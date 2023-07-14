import tw from "tailwind-styled-components";
import { animated } from 'react-spring';

const Section = tw.section`
w-auto h-auto 
flex flex-col
justify-center items-center
bg-[#080909]   
px-5 md:px-16 lg:px-24
`
const Tittle1 = tw.p`
font-Bungee text-[#6b6b6b] text-4xl min-[550px]:text-5xl md:text-6xl lg:text-7xl 
mt-15 mb-10 
transform duration-500
`
const Tittle2 = tw.h1`
font-Montserrat text-[#e5e3df] font-extrabold text-2xl min-[550px]:text-3xl md:text-4xl lg:text-5xl 
my-0 mt-4 min-[550px]:mt-7 md:mt-12 lg:mt-16
uppercase leading-[1.15] absolute transform duration-500
`
const Subtittle = tw(animated.h2)` 
font-Montserrat text-[#e5e3df] text-base md:text-lg lg:text-xl text-center sm:text-left
uppercase sm:ml-10 transform duration-500
`
const ContainerTech = tw.div`
bg-[#101010]
grid grid-cols-4 gap-3 min-[550px]:grid-cols-5 min-[550px]:gap-4 sm:grid-cols-6 lg:grid-cols-9 lg:gap-10 
px-8 py-6
rounded-xl cursor-pointer transform duration-500
`
const Alert = tw.p`
bg-black 
flex absolute 
font-Montserrat text-[#e5e3df] text-[10px] sm:text-xs md:text-sm lg:text-base  
px-2 sm:px-3 py-1 -mt-14 sm:-mt-20 mb-0 
animate-bounce rounded-full z-10
`
const Img = tw.img`
w-14 min-[550px]:w-16 md:w-20 lg:w-20 
grayscale 
hover:grayscale-0
transform duration-300
`
export {
    Section,
    Tittle1,
    Tittle2,
    Subtittle,
    ContainerTech,
    Alert,
    Img
}