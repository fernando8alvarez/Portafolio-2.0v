import tw from "tailwind-styled-components";
import { animated } from 'react-spring';

const Nav = tw(animated.nav)`
w-full 
${(props) => (props.bg)}
top-0 left-0 right-0  
fixed z-20 backdrop-blur-md
transform duration-1000
`
const Container1 = tw.div`
container flex flex-wrap 
items-center justify-between 
mx-auto
`

const Menu = tw.button`
md:hidden 
inline-flex items-center 
p-2 ml-3 
text-sm text-[#c5ff1e]
bg-transparent focus:bg-transparent focus:outline-none 
border-transparent border-2 rounded-lg hover:border-[#c5ff1e]
`

const ContainerOptions = tw.ul`   
flex 
bg-transparent
md:font-medium
border md:border-0 rounded-lg  
md:space-x-8   
`

const Options1 = tw.a`
text-${(props)=>(props.section === props.currentsection ? "[#c5ff1e]" : "[#e5e3df]")}
font-Montserrat hover:text-[#c5ff1e] text-sm xl:text-base
bg-transparent
pl-3 pr-4 md:p-0  
transform duration-500 hover:-translate-y-4 no-underline
`

const Container2 = tw(animated.div)`
w-full h-auto md:hidden 
py-3
opacity-100 transition-opacity duration-500 z-10
`

const Options2 = tw.a` 
font-Montserrat text-[#e5e3df] text-sm sm:text-base hover:text-base hover:sm:text-lg hover:lg:text-lg hover:text-[#c5ff1e]
pl-3 pr-4 md:p-0   
no-underline transition-all duration-300
`
export {
    Nav,
    Container1,
    Menu,
    ContainerOptions,
    Options1,
    Container2,
    Options2
}