import tw from "tailwind-styled-components";
import { animated } from 'react-spring';

const Section = tw.section`
w-auto h-auto 
flex flex-col 
justify-center items-center 
bg-[#080909] 
px-5 md:px-16 lg:px-24 pb-20
`

const Title1 = tw.div`
font-Bungee text-[#6b6b6b] text-4xl min-[550px]:text-5xl md:text-6xl lg:text-7xl 
mt-20 mb-14 
transform duration-500
`

const Tittle2 = tw.div`
font-Montserrat font-extrabold text-[#e5e3df] text-2xl min-[550px]:text-3xl md:text-4xl lg:text-5xl 
my-0 mt-10 min-[550px]:mt-12 lg:mt-14 
absolute uppercase leading-[1.15] transform duration-500
`
const Container1 = tw.div`
max-w-screen-lg h-full  
flex flex-col items-center lg:flex-row gap-4
bg-[#101010]   
px-4 py-4 min-[550px]:py-6 lg:px-4
rounded-2xl
`

const Subtitle = tw.h3` 
w-full 
font-Montserrat font-bold text-center text-[#e5e3df] text-base min-[550px]:text-lg md:text-lg lg:text-2xl  
my-0
transform duration-500
`
const Summary = tw.span`
font-Montserrat text-justify text-[#e5e3df] text-xs lg:text-xs 
px-5
transform duration-500
`
const Link1 = tw.a`
flex gap-2 items-center 
font-Montserrat text-xs min-[550px]:text-sm text-[#e5e3df] hover:text-[#c5ff1e]
px-4 py-1 
rounded-xl border-2 border-solid border-[#e5e3df] hover:border-[#c5ff1e]
bg-transparent    
transform duration-300 no-underline cursor-pointer
`

const FlatIcon = tw.img`
w-4 min-[550px]:w-5 lg:w-6
transform duration-500
`

const TextImg = tw.span`
w-full h-full flex justify-center items-center
bg-black/30
px-0 mx-0 top-0 left-0  
font-Montserrat font-semibold text-center text-[#e5e3df] text-sm min-[550px]:text-base lg:text-lg xl:text-2xl
absolute rounded-xl backdrop-blur-sm cursor-pointer transform duration-500
 `

export {
    Section,
    Title1,
    Tittle2,
    Container1,
    Subtitle,
    Summary,
    Link1,
    FlatIcon,
    TextImg
}