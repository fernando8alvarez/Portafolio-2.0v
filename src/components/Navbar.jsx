import React, { useState } from 'react';
import logo from '../imgs/lf.png';
import { idGenerate } from '../helpers';

export default function Navbar() {
    const sections = [{ text: "Home", id: "section1" }, { text: "Sobre mí", id: "section2" }, { text: "Tecnologías", id: "section3" }, { text: "Formación", id: "section4" }, { text: "Proyectos", id: "section5" }, { text: "Contacto", id: "section6" }]
    const [menu, setmenu] = useState(false);

    return (
        <div className="w-full">
            <nav className="bg-transparent px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#top" className="flex items-center">
                        <img src={logo} className="h-10 mr-3 sm:h-14 rounded-full" alt="Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" onClick={() => setmenu(menu ? false : true)} className="inline-flex items-center p-2 ml-3 text-sm text-stone-400 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-stone-600 hover:bg-stone-900" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-transparent">
                            {
                                sections.map((el) => {
                                    return (
                                        <div key={idGenerate()} className='transform duration-500 hover:-translate-y-2 '>
                                            <a href={`#${el.id}`} className="font-Montserrat text-base pl-3 pr-4 text-[#e5e3df] bg-transparent md:p-0 dark:text-[#e5e3df] dark:hover:text-white transform duration-500 hover:-translate-y-5">{el.text}</a>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            {menu && (
                <div className="bg-stone-900 w-full h-auto md:hidden opacity-100 transition-opacity duration-500 z-10 ">
                    {sections.map((el) => {
                        return (
                            <div key={idGenerate()} className="hover:bg-stone-600 hover:w-full cursor-auto">
                                <a href={`#${el.id}`} onClick={() => setmenu(false)} className="font-Abel text-lg  pl-3 pr-4 text-slate-100 md:p-0 dark:text-gray-400 dark:hover:text-white">{el.text}</a>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}