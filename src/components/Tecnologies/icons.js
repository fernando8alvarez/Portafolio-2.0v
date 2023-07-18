import { idGenerate } from '../../helpers';
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
import webstorm from '../../imgs/webstorm.png';
import git from '../../imgs/git.png';
import githubLogo from '../../imgs/githubLogo.png';
import canva from '../../imgs/canva.png';
import chatgpt from '../../imgs/chatgpt.png';
import jwt from '../../imgs/jwt.png';


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
];

const techback = [
    { id: idGenerate(), name: "NodeJS", img: nodeJS },
    { id: idGenerate(), name: "Express", img: express },
    { id: idGenerate(), name: "SQL", img: SQL },
    { id: idGenerate(), name: "Sequelize", img: sequelize },
    { id: idGenerate(), name: "PostgreSQL", img: postgresSQL },
    { id: idGenerate(), name: "MongoDB", img: MongoDB },
    { id: idGenerate(), name: "Nodemailer", img: nodemailer },
    { id: idGenerate(), name: "Docker", img: docker },
];

const tools = [
    { id: idGenerate(), name: "JavaScript", img: javascript },
    { id: idGenerate(), name: "Python", img: python },
    { id: idGenerate(), name: "VSCode", img: vscode },
    { id: idGenerate(), name: "WebStorm", img: webstorm },
    { id: idGenerate(), name: "Git", img: git },
    { id: idGenerate(), name: "GitHub", img: githubLogo },
    { id: idGenerate(), name: "Canva", img: canva },
    { id: idGenerate(), name: "ChatGPT", img: chatgpt },
    { id: idGenerate(), name: "JWT", img: jwt },
];

//Recorre los 3 arreglos y devuelve un objeto con cada "{ name1: false,...}"
const objectAllIcons = [techFront, techback, tools].reduce((acc, curr)=>{
    curr.forEach(item => acc[item.name] = false);
    return acc;
}, {});

export { techFront, techback, tools, objectAllIcons };