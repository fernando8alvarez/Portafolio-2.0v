import tw from "tailwind-styled-components";

const Section = tw.section`
bg-[#080909] 
px-5 m-0 pb-8 
`
const ContainerTittles = tw.div`
flex flex-col justify-center items-center
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
const InputTittle = tw.label` 
font-Montserrat text-[#e5e3df] text-xs sm:text-base font-extrabold md:text-lg text-start sm:text-left
ml-4 sm:ml-5 transform duration-500
`

const ContainerForm = tw.div` 
flex justify-center items-center
py-8 lg:py-16 min-[550px]:px-10 sm:px-16 
`
const Form = tw.form` 
w-full lg:w-3/4 xl:w-1/2 
space-y-3 lg:space-y-8
`
const Input = tw.input`
bg-[#101010]
border-2.5 border-transparent
font-Montserrat text-xs md:text-lg text-[#e5e3df] 
focus:border-[#c5ff1e] outline-none
p-3 rounded-lg transform duration-500
`
const Textarea = tw.textarea` 
bg-[#101010]
border-2.5 border-transparent focus:border-[#c5ff1e]
font-Montserrat text-xs md:text-lg text-[#e5e3df] outline-none  
rounded-lg p-3 block transform duration-500 resize-y
`
const Button = tw.button` 
bg-transparent hover:bg-primary-800 
py-3 px-5 
border-2 border-[#e5e3df] hover:border-[#c5ff1e]
font-Montserrat font-semibold text-center text-xs md:text-base text-[#e5e3df] hover:text-[#c5ff1e]
rounded-full sm:w-fit cursor-pointer transform duration-500
`

const Errors = tw.p`
text-sm font-Montserrat text-red-500 
m-0
`

const modalOptions = {
    icon: 'success',
    title: 'Enviado!',
    text: 'Sus datos se han enviado correctamente. Me pondré en contacto con usted lo más pronto posible. Gracias!',
    color: '#e5e3df',
    background: '#040303',
    showConfirmButton: false,
    timer: 5000,
    iconColor: '#c5ff1e',
    timerProgressBar: true,
    allowEnterKey: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
        title: 'font-Montserrat',
        container: 'font-Montserrat'
    }
}

export {
    Tittle1,
    Tittle2,
    InputTittle,
    Input,
    Textarea,
    Button,
    Section,
    ContainerTittles,
    ContainerForm,
    Form,
    Errors,
    modalOptions
}