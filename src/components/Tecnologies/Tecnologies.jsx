import React, { useState } from 'react';
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

    const [alertFront, setAlertFront] = useState({
        CSS3: false,
        Ract: false,
        HTML5: false,
        Redux: false,
        Tailwind: false,
        SweetAlert2: false,
        Auth0: false,
        EmailJ: false,
        Figma: false
    });

    const [alertBack, setAlertBack] = useState({
        CSS3: false,
        Ract: false,
        HTML5: false,
        Redux: false,
        Tailwind: false,
        SweetAlert2: false,
        Auth0: false,
        EmailJ: false,
    });

    const [alertTools, setAlertTools] = useState({
        JavaScript: false,
        Python: false,
        VSCode: false,
        Git: false,
        GitHub: false,
        Canva: false
    });


    return (
        <Section id="section-3">
            <div className='flex flex-col justify-center items-center'>
                <Tittle1>Tecnologias</Tittle1>
                <Tittle2>Habilidades</Tittle2>
            </div>
            <div className='flex flex-col gap-5 md:gap-10 mb-10'>
                <div>
                    <Subtittle>Frontend</Subtittle>
                    <ContainerTech>
                        {techFront.map((t) => (
                            <div className='flex flex-col justify-center items-center '
                                key={t.id}
                            >
                                {alertFront[t.name] && <Alert>{t.name}</Alert>}
                                <Img
                                    src={t.img}
                                    alt="Img not found"
                                    onMouseEnter={() => setAlertFront({ ...alertFront, [t.name]: true })}
                                    onMouseLeave={() => setAlertFront({ ...alertFront, [t.name]: false })}
                                />
                            </div>
                        ))}
                    </ContainerTech>
                </div>
                <div>
                    <Subtittle>Backend</Subtittle>
                    <div>
                        <ContainerTech>
                            {techback.map((t) => (
                                <div className='flex flex-col justify-center items-center'
                                    key={t.id}
                                >
                                    {alertBack[t.name] && <Alert>{t.name}</Alert>}
                                    <Img
                                        src={t.img}
                                        alt="Img not found"
                                        onMouseEnter={() => setAlertBack({ ...alertBack, [t.name]: true })}
                                        onMouseLeave={() => setAlertBack({ ...alertBack, [t.name]: false })}
                                    />
                                </div>
                            ))}
                        </ContainerTech>
                    </div>
                </div>
                <div>
                    <Subtittle>Lenguajes y herramientas</Subtittle>
                    <div>
                        <ContainerTech>
                            {tools.map((t) => (
                                <div className='flex flex-col justify-center items-center'
                                    key={t.id}
                                >
                                    {alertTools[t.name] && <Alert>{t.name}</Alert>}
                                    <Img
                                        src={t.img}
                                        alt="Img not found"
                                        onMouseEnter={() => setAlertTools({ ...alertTools, [t.name]: true })}
                                        onMouseLeave={() => setAlertTools({ ...alertBack, [t.name]: false })}
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
