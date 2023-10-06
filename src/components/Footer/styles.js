import tw from "tailwind-styled-components";
import { animated } from 'react-spring';

const Foter = tw.footer`
w-full
bg-[#040303] 
flex flex-col gap-4
justify-center items-center  
pt-5 sm:pt-8 xl:pt-10 pb-1
`

const Container = tw.div`
max-w-screen-lg 
flex gap-5 sm:gap-10 md:gap-16 lg:gap-24 xl:gap-28
`

const Logo = tw.img` 
w-[150px] sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[450px]
`

const SubContainer = tw.div`
flex gap-5 
text-[#e5e3df] font-Montserrat text-[10px] sm:text-xs md:text-sm 
lg:p-10
`
const Tittle = tw.p` 
font-semibold lg:text-base 
uppercase m-0
`

const Icons = tw.img` 
w-4 h-4 lg:w-5 lg:h-5
`

const Link = tw.a`
text-[#e5e3df] hover:text-[#c5ff1e] 
m-0 no-underline cursor-pointer
transform duration-500
`
const Copyright = tw.p`
font-Montserrat text-[#e5e3df] font-medium
text-[10px] sm:text-xs md:text-sm xl:text-lg 
`


export {
    Foter,
    Container,
    Logo,
    SubContainer,
    Tittle,
    Icons,
    Link,
    Copyright
}