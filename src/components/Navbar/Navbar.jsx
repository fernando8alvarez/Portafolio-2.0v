import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../imgs/devfer.png';
import { idGenerate } from '../../helpers/index';
import { useSpring, animated } from 'react-spring';
import {
    Nav,
    Container1,
    Menu,
    ContainerOptions,
    Options1,
    Container2,
    Options2
} from './Styles';

export default function Navbar({ currentSection }) {

    const sections = [
        { text: "Home", id: "section-1" },
        { text: "Sobre mí", id: "section-2" },
        { text: "Tecnologías", id: "section-3" },
        { text: "Proyectos", id: "section-4" },
        { text: "Contacto", id: "section-5" }
    ]

    //Menu hamburguesa
    const [menu, setmenu] = useState(false);

    //Animacion Navbar
    const animatedNavbar = useSpring({
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: {
            mass: 10,
            tension: 2000,
            friction: 500,
        },
        delay: 500,
    });

    //Animacion para eldespliegue del menu hamburguesa
    const slideAnimation = useSpring({
        transform: menu ? "translateY(0%)" : "translateY(-100%)",
        opacity: menu ? 1 : 0,
        config: { duration: 200 }
    })

    //Activar/Desactivar el background del Navbar
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        }

        const handleScrollTop = () => {
            setIsScrolled(false);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScrollTop);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScrollTop);
        }

    }, []);

    return (
        <Nav bg={isScrolled ? "bg-[#000000ae]" : "bg-transparent"}>
            <animated.div style={animatedNavbar} className=" px-10 sm:px-20 md:px-10 py-2">
                <Container1>
                    <a href="#top" className="flex items-center">
                        <img src={logo} className="h-12 sm:h-16" alt="Logo" />
                    </a>
                    <Menu
                        data-collapse-toggle="navbar-default"
                        type="button"
                        onClick={() => setmenu(menu ? false : true)}
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </Menu>
                    <div className="hidden w-full h-fit md:flex md:w-auto" id="navbar-default">
                        <ContainerOptions id="navbar">
                            {
                                sections.map((el) => {
                                    return (
                                        <div key={idGenerate()}
                                            className={`transform duration-500 hover:-translate-y-1 ${(el.id === currentSection && "-translate-y-1")}`}>
                                            <Link 
                                            to={`${el.id}`} spy={true} smooth={true} offset={-60} duration={600}
                                            className={`${(el.id === currentSection ? "text-[#c5ff1e]" : "text-[#e5e3df]")}
                                            font-Montserrat hover:text-[#c5ff1e] text-sm xl:text-base
                                            cursor-pointer
                                            bg-transparent
                                            pl-3 pr-4 md:p-0  
                                            transform duration-500 no-underline`}
                                            >{el.text}</Link>
                                        </div>
                                    )
                                })
                            }
                        </ContainerOptions>
                    </div>
                </Container1>
            </animated.div>
            {menu && (
                <Container2 style={slideAnimation}>
                    <div className='w-full flex flex-col gap-4 justify-center items-center'>
                        {sections.map((el) => {
                            return (
                                <div key={idGenerate()} className="cursor-auto h-5 transform duration-500">
                                    <Link
                                        
                                        onClick={() => setmenu(false)}
                                        to={`${el.id}`} spy={true} smooth={true} offset={-60} duration={600}
                                        className={`${(el.id === currentSection ? "text-[#c5ff1e] text-base sm:text-lg" : "text-[#e5e3df] text-sm sm:text-base")}
                                            font-Montserrat hover:text-[#c5ff1e] hover:text-base hover:sm:text-lg
                                            bg-transparent cursor-pointer
                                            pl-3 pr-4 md:p-0  
                                            transform duration-500 no-underline`}
                                    >
                                        {el.text}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </Container2>
            )}
        </Nav>
    )
}