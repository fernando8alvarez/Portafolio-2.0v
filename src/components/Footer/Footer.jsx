import logo from './imgs/logo-horizontal.svg';
import linkedin from '../../imgs/linkedin.png';
import github from '../../imgs/github.png';
import email from './imgs/mail.png';
import ws from './imgs/whatsapp.png';



export default function Footer() {
    return (
        <div className='bg-[#040303] w-full flex flex-col justify-center items-center gap-4 pt-5 sm:pt-8 xl:pt-10 pb-1'>
            <div className='max-w-screen-lg flex gap-5 sm:gap-10 md:gap-16 lg:gap-24 xl:gap-28'>
                <img src={logo} alt="img not fount" className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[450px]' />
                <div className='flex gap-5 text-white font-Montserrat text-[10px] sm:text-xs md:text-sm lg:p-10'>
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <p className='font-semibold lg:text-base uppercase m-0'>Redes</p>
                        <div className='flex gap-3 items-center m-0'>
                            <img src={linkedin} alt="Img not found" className='w-4 h-4 lg:w-5 lg:h-5' />
                            <p className='m-0'>LinkedIn</p>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <img src={github} alt="Img not found" className='w-4 h-4 lg:w-5 lg:h-5' />
                            <p className='m-0'>GitHub</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <p className='font-semibold lg:text-base uppercase m-0'>Contactos</p>
                        <div className='flex gap-3 items-center m-0'>
                            <img src={ws} alt="Img not found" className='w-4 h-4 lg:w-5 lg:h-5' />
                            <p className='m-0'>Whatsapp</p>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <img src={email} alt="Img not found" className='w-4 h-4 lg:w-5 lg:h-5' />
                            <p className='m-0'>Correo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-Montserrat text-[#e5e3df] text-[10px] sm:text-xs md:text-sm xl:text-lg font-medium'>
                    © Copyright 2023 | Coded by Luis Fernando Alvarez
                </p>
            </div>
        </div>
    )
}
