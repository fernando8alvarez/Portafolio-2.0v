import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

import html from '../../imgs/html.png';
import css from '../../imgs/css.png';
import react from '../../imgs/react.png';
import redux from '../../imgs/redux.png';
import tailwind from '../../imgs/tailwind.png';
import sweetalert2 from '../../imgs/sweetalert2.png';
import auth0 from '../../imgs/auth0.png';
import emailJS from '../../imgs/emailJS.png';
import figma from '../../imgs/figma.png';
import nodeJS from '../../imgs/nodeJS.png';
import express from '../../imgs/express.png';
import SQL from '../../imgs/SQL.png';
import sequelize from '../../imgs/sequelize.png';
import postgresSQL from '../../imgs/postgresSQL.png';
import MongoDB from '../../imgs/MongoDB.png';
import nodemailer from '../../imgs/nodemailer.png';
import docker from '../../imgs/docker.png';
import javascript from '../../imgs/javascript.png';
import python from '../../imgs/python.png';
import vscode from '../../imgs/vsCode.png';
import git from '../../imgs/git.png';
import githubLogo from '../../imgs/githubLogo.png';
import canva from '../../imgs/canva.png';
import chatgpt from '../../imgs/chatgpt.png';

import { idGenerate } from '../../helpers';
import {
    Section,
    Tittle1,
    Tittle2,
    Subtittle,
    ContainerTech,
    Alert,
    Img
} from './Styles';

export default function Tecnologies() {

    const techFront = [
        { id: idGenerate(), name: "CSS3", img: css },
        { id: idGenerate(), name: "React", img: react },
        { id: idGenerate(), name: "HTML5", img: html },
        { id: idGenerate(), name: "Redux", img: redux },
        { id: idGenerate(), name: "Tailwind", img: tailwind },
        { id: idGenerate(), name: "SweetAlert2", img: sweetalert2 },
        { id: idGenerate(), name: "Auth0", img: auth0 },
        { id: idGenerate(), name: "EmailJS", img: emailJS },
        { id: idGenerate(), name: "Figma", img: figma },
    ]

    const techback = [
        { id: idGenerate(), name: "NodeJS", img: nodeJS },
        { id: idGenerate(), name: "Express", img: express },
        { id: idGenerate(), name: "SQL", img: SQL },
        { id: idGenerate(), name: "Sequelize", img: sequelize },
        { id: idGenerate(), name: "PostgreSQL", img: postgresSQL },
        { id: idGenerate(), name: "MongoDB", img: MongoDB },
        { id: idGenerate(), name: "Nodemailer", img: nodemailer },
        { id: idGenerate(), name: "Docker", img: docker },
    ]

    const tools = [
        { id: idGenerate(), name: "JavaScript", img: javascript },
        { id: idGenerate(), name: "Python", img: python },
        { id: idGenerate(), name: "VSCode", img: vscode },
        { id: idGenerate(), name: "Git", img: git },
        { id: idGenerate(), name: "GitHub", img: githubLogo },
        { id: idGenerate(), name: "Canva", img: canva },
        { id: idGenerate(), name: "ChatGPT", img: chatgpt },

    ]

    const [allIcons, setAllIcons] = useState({
        CSS3: false,
        React: false,
        HTML5: false,
        Redux: false,
        Tailwind: false,
        SweetAlert2: false,
        Auth0: false,
        EmailJS: false,
        Figma: false,
        NodeJS: false,
        Express: false,
        SQL: false,
        Sequelize: false,
        PostgreSQL: false,
        MongoDB: false,
        Nodemailer: false,
        Docker: false,
        JavaScript: false,
        Python: false,
        VSCode: false,
        Git: false,
        GitHub: false,
        Canva: false
    });

    //ICONS DESKTOP
    const onAlert = (name) => {

        const alerts = Object.keys(allIcons).reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {});

        alerts[name] = true;
        return setAllIcons(alerts);
    }

    const offAlerts = () => {
        let offAllalerts = Object.keys(allIcons).reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {});

        return setAllIcons(offAllalerts);
    }


    //ICONS MOBILE
    const onAlert2 = (name) => {
        let offAllalerts = Object.keys(allIcons).reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {});

        return (!allIcons[name] ? setAllIcons({ ...offAllalerts, [name]: true }) : setAllIcons(offAllalerts))
    }

    const animacion = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            mass: 40,
            tension: 2000,
            friction: 500,
        },
        delay: 500
    });

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Section id="section-3">
            <div className='flex flex-col justify-center items-center'>
                <Tittle1>Tecnologias</Tittle1>
                <Tittle2>Habilidades</Tittle2>
            </div>
            <div className='hidden md:flex flex-col gap-5 md:gap-10 mb-10'>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <Subtittle >Frontend</Subtittle>
                    <ContainerTech >
                        {techFront.map((t) => (
                            <div className='flex flex-col justify-center items-center'
                                key={t.id}
                            >
                                {allIcons[t.name] && <Alert>{t.name}</Alert>}
                                <Img
                                    src={t.img}
                                    alt="Img not found"
                                    onMouseEnter={() => onAlert(t.name)}
                                    onMouseLeave={() => offAlerts()}
                                />
                            </div>
                        ))}
                    </ContainerTech>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <Subtittle>Backend</Subtittle>
                    <div>
                        <ContainerTech>
                            {techback.map((t) => (
                                <div className='flex flex-col justify-center items-center'
                                    key={t.id}
                                    onMouseEnter={() => onAlert(t.name)}
                                    onMouseLeave={() => offAlerts()}
                                >
                                    {allIcons[t.name] && <Alert>{t.name}</Alert>}
                                    <Img
                                        src={t.img}
                                        alt="Img not found"

                                    />
                                </div>
                            ))}
                        </ContainerTech>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <Subtittle>Lenguajes y herramientas</Subtittle>
                    <div>
                        <ContainerTech>
                            {tools.map((t) => (
                                <div className='flex flex-col justify-center items-center'
                                    key={t.id}
                                >
                                    {allIcons[t.name] && <Alert>{t.name}</Alert>}
                                    <Img
                                        src={t.img}
                                        alt="Img not found"
                                        onMouseEnter={() => onAlert(t.name)}
                                        onMouseLeave={() => offAlerts()}
                                    />
                                </div>
                            ))}
                        </ContainerTech>
                    </div>
                </div>
            </div>
            {/*PARTE MOBILE - PARTE MOBILE - PARTE MOBILE - PARTE MOBILE - PARTE MOBILE - PARTE MOBILE*/}
            <div className='md:hidden flex flex-col  gap-5 md:gap-10 mb-10'>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <Subtittle>Frontend</Subtittle>
                    <ContainerTech>
                        {techFront.map((t) => (
                            <div className='flex flex-col justify-center items-center '
                                key={t.id}
                            >
                                {allIcons[t.name] && <Alert>{t.name}</Alert>}
                                <img
                                    src={t.img}
                                    alt="Img not found"
                                    onClick={() => onAlert2(t.name)}
                                    className={`
                                    w-14 min-[550px]:w-16 md:w-20 lg:w-20 
                                    ${!allIcons[t.name] && "grayscale"}
                                    hover:grayscale-0 
                                    transform duration-300`}
                                />
                            </div>
                        ))}
                    </ContainerTech>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <Subtittle>Backend</Subtittle>
                    <div>
                        <ContainerTech>
                            {techback.map((t) => (
                                <div className='flex flex-col justify-center items-center'
                                    key={t.id}
                                    onClick={() => onAlert2(t.name)}
                                >
                                    {allIcons[t.name] && <Alert>{t.name}</Alert>}
                                    <img
                                        src={t.img}
                                        alt="Img not found"
                                        onClick={() => onAlert2(t.name)}
                                        className={`
                                        w-14 min-[550px]:w-16 md:w-20 lg:w-20 
                                        ${!allIcons[t.name] && "grayscale"}
                                        hover:grayscale-0 
                                        transform duration-300`}
                                    />
                                </div>
                            ))}
                        </ContainerTech>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <Subtittle>Lenguajes y herramientas</Subtittle>
                    <div>
                        <ContainerTech>
                            {tools.map((t) => (
                                <div className='flex flex-col justify-center items-center'
                                    key={t.id}
                                >
                                    {allIcons[t.name] && <Alert>{t.name}</Alert>}
                                    <img
                                        src={t.img}
                                        alt="Img not found"
                                        onClick={() => onAlert2(t.name)}
                                        className={`
                                        w-14 min-[550px]:w-16 md:w-20 lg:w-20 
                                        ${!allIcons[t.name] && "grayscale"}
                                        hover:grayscale-0 
                                        transform duration-300`}
                                    />
                                </div>
                            ))}
                        </ContainerTech>
                    </div>
                </div>
            </div>
        </Section>
    )
}
