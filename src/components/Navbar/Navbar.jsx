import React, { useEffect, useState } from 'react';
import logo from '../../imgs/lf.png';
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

export default function Navbar() {

    const sections = [
        { text: "Home", id: "mainSection" },
        { text: "Sobre mí", id: "section2" },
        { text: "Tecnologías", id: "section3" },
        { text: "Proyectos", id: "section5" },
        { text: "Contacto", id: "section6" }
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

    //Activar/Desactivar el backgraund del Navbar
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

    }, [])

    return (
        <Nav bg={isScrolled ? "bg-[#000000ae]" : "bg-transparent"}>
            <animated.div style={animatedNavbar} className=" px-10 sm:px-20 md:px-10 py-2">
                <Container1>
                    <a href="#top" className="flex items-center">
                        <img src={logo} className="h-10 mr-3 sm:h-12 rounded-full" alt="Logo" />
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
                        <ContainerOptions>
                            {
                                sections.map((el) => {
                                    return (
                                        <div key={idGenerate()} className='transform duration-500 hover:-translate-y-1'>
                                            <Options1 href={`#${el.id}`}>{el.text}</Options1>
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
                                <div key={idGenerate()} className="cursor-auto h-5">
                                    <Options2
                                        href={`#${el.id}`}
                                        onClick={() => setmenu(false)}
                                    >
                                        {el.text}
                                    </Options2>
                                </div>
                            )
                        })}
                    </div>
                </Container2>
            )}
        </Nav>
    )
}