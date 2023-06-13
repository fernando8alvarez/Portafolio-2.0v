import tw from "tailwind-styled-components";
import { animated } from 'react-spring';

const Section = tw.section`
w-auto h-full 
flex flex-col
justify-center items-center
bg-[#080909]   
px-5 md:px-16 lg:px-24
`
const Container1 = tw.div`
w-auto h-[80%] md:h-[90%] lg:w-full 
flex 
justify-center items-center 
`
const ContainerTittle = tw.div`
w-auto h-fit
flex flex-col  
justify-center items-center
`
const Tittle1 = tw(animated.h1)`
w-full lg:w-full 
font-Bungee bg-gradient-to-r from-[#c7ff1ea0] to-[#fdf863a3] bg-clip-text text-transparent text-right uppercase leading-[1.5] 
text-5xl min-[550px]:text-6xl sm:text-7xl md:text-5xl min-[855px]:text-[55px] lg:text-[65px] xl:text-[85px]
my-0 transform duration-500
`
const Tittle2 = tw(animated.h1)`
w-full lg:w-full my-0 
text-[#e5e3df] font-Montserrat font-extrabold text-left uppercase leading-[1.15]
text-[40px] min-[550px]:text-[42px] sm:text-5xl md:text-[35px] min-[855px]:text-4xl lg:text-5xl xl:text-6xl
-mt-[215px] min-[550px]:-mt-[200px] sm:-mt-[225px] md:-mt-[158px] min-[855px]:-mt-[180px] lg:-mt-[205px] xl:-mt-[265px] 
transform duration-500 z-10
`
const Tittle3 = tw(animated.p)`
w-auto md:w-fit h-fit 
mb-0 mt-5 md:mt-4
text-[#e5e3df] font-Montserrat italic
text-xs min-[550px]:text-sm sm:text-base md:text-xs min-[855px]:text-sm lg:text-[15px] xl:text-lg 
transform duration-500
`
const Container2 = tw.div` 
w-full h-[10%] 
flex justify-center items-center 
gap-5
`
const Img = tw(animated.img)`
md:max-w-[380px] lg:max-w-[550px] 
grayscale c
`
const Alert = tw.div`
bg-black 
flex absolute
font-Montserrat text-[10px] lg:text-xs text-[#e5e3df] 
px-2 sm:px-3 py-1 -mt-4
animate-bounce rounded-full z-10 
`

const Icons = tw.img`
w-[22px] min-[550px]:w-[25px] sm:w-[28px] lg:w-[35px] 
transform duration-500 z-0"
`

export {
    Section,
    Container1,
    ContainerTittle,
    Tittle1,
    Tittle2,
    Tittle3,
    Icons,
    Img,
    Container2,
    Alert
};