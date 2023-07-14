import { idGenerate } from '../../helpers';
import todaysRecipeImg from './ImgProjects/todaysRecipe.png';
import js from '../../imgs/javascript.png';
import html from '../../imgs/html.png';
import css from '../../imgs/css.png';
import react from '../../imgs/react.png';
import redux from '../../imgs/redux.png';
import nodeJS from '../../imgs/nodeJS.png';
import express from '../../imgs/express.png'
import postgresSQL from '../../imgs/postgresSQL.png';
import sequelize from '../../imgs/sequelize.png';
import carsMarketImg from './ImgProjects/carsMarket.png';
import tailwind from '../../imgs/tailwind.png';
import auth0 from '../../imgs/auth0.png';
import claudinary from '../../imgs/claudinary.png';
import mercadoPago from '../../imgs/mercado_pago.png';
import gestionPacientesImg from './ImgProjects/gestionPacientes.png';
import sweetAlert from '../../imgs/sweetalert2.png';
import controlGastosImg from './ImgProjects/controlGastos.png';




const iconsTodaysRecipe = [
    { id: idGenerate(), name: "JavaScript", img: js },
    { id: idGenerate(), name: "HTML", img: html },
    { id: idGenerate(), name: "CSS", img: css },
    { id: idGenerate(), name: "React", img: react },
    { id: idGenerate(), name: "Redux", img: redux },
    { id: idGenerate(), name: "NodeJS", img: nodeJS },
    { id: idGenerate(), name: "Express", img: express },
    { id: idGenerate(), name: "PostgreSQL", img: postgresSQL },
    { id: idGenerate(), name: "Sequelize", img: sequelize },
];

const summaryTodaysRecipe = 'Aplicación en la que los usuarios podrán buscar alguna receta saludable de comida, la cual quieran cocinar o preparar, en esta app podrán filtrar la búsqueda de alguna receta ya sea por nombre, tipo de dieta o nivel de salud, entre otras opciones de búsqueda. Por otro lado, al seleccionar alguna receta, en ella podrá ver más detalles de la misma, así como un resumen, los tipos de dietas asociados, y los pasos a seguir para su elaboración. Por último, el usuario podrá registrar una receta de su agrado a través de un formulario para postearlo en la página.'

const iconsCarsMarket = [
    { id: idGenerate(), name: "JavaScript", img: js },
    { id: idGenerate(), name: "Tailwind", img: tailwind },
    { id: idGenerate(), name: "React", img: react },
    { id: idGenerate(), name: "Redux", img: redux },
    { id: idGenerate(), name: "NodeJS", img: nodeJS },
    { id: idGenerate(), name: "Express", img: express },
    { id: idGenerate(), name: "PostgreSQL", img: postgresSQL },
    { id: idGenerate(), name: "Auth0", img: auth0 },
    { id: idGenerate(), name: "Claudinary", img: claudinary },
    { id: idGenerate(), name: "Mercado Pago", img: mercadoPago },
];

const summaryCarsMarket = 'Este market place de publicidad para venta de vehículos, permite a los posibles compradores ver a detalle los autos publicados por los vendedores, así mismo los posibles vendedores podrán poner en venta su(s) vehículo(s). Para realizar el proceso compra/venta, ambos usuarios (tanto compradores, como vendedores) deben estar registrados en la aplicación, lo cual podrán hacerlo a través de un correo y contraseña o directamente con Google. Una vez registrados ambos usuarios deberán llenar un formulario para tener más información de los mismos, tales como su nombre y apellido completo, teléfono, dirección e imagen de perfil.'

const iconsGestionPacientes = [
    { id: idGenerate(), name: "JavaScript", img: js },
    { id: idGenerate(), name: "HTML", img: html },
    { id: idGenerate(), name: "Tailwind", img: tailwind },
    { id: idGenerate(), name: "React", img: react },
    { id: idGenerate(), name: "Sweet Alert", img: sweetAlert },

]

const summaryGestionPacientes = 'Herramienta útil para gestionar pacientes en entornos médicos como la creación de nuevos pacientes a través de un formulario, visualización de su información personal y número de turno para ser atendido. También permite editar o eliminar pacientes de una lista. De igual forma, proporciona una visión general de la cantidad de pacientes que hay en la lista, así como llevar un registro del número de turno de cada paciente y la cantidad de pacientes que ingresan diariamente al centro médico.'

const summaryControlGastos = 'Esta app permite a los usuarios llevar un seguimiento de los egresos o gastos durante un día normal de compras a través de una interfaz fácil de usar. El usuario ingresa un presupuesto inicial y selecciona la moneda de su país, el cual luego se reflejara en un panel principal con estos datos y un gráfico. Luego justo allí podemos ver una interfaz para agregar los gastos correspondientes a través de un formulario y  si queremos eliminar o editar un gasto podemos deslizar en ese gasto de izquierda o derecha.';

const todaysRecipe = {
    id: idGenerate(),
    title: 'Today´s Recipes',
    summary: summaryTodaysRecipe,
    linkDemo: 'https://todays-recipe.vercel.app/',
    linkGitHub: 'https://github.com/fernando8alvarez/My-PI-Food',
    icons: iconsTodaysRecipe,
    img: todaysRecipeImg
}

const carsMarket = {
    id: idGenerate(),
    title: 'Cars-Market',
    summary: summaryCarsMarket,
    linkDemo: 'https://carsmarket.vercel.app/',
    linkGitHub: 'https://github.com/fernando8alvarez/Cars-Market',
    icons: iconsCarsMarket,
    img: carsMarketImg
}

const gestionPacientes = {
    id: idGenerate(),
    title: 'Gestión de pacientes',
    summary: summaryGestionPacientes,
    linkDemo: 'https://sistema-gestion-pacientes.netlify.app/',
    linkGitHub: 'https://github.com/fernando8alvarez/gestion_pacientes',
    icons: iconsGestionPacientes,
    img: gestionPacientesImg
}

const controlGastos = {
    id: idGenerate(),
    title: 'Control de gastos',
    summary: summaryControlGastos,
    linkDemo: 'https://sistema-control-gastos.netlify.app/',
    linkGitHub: 'https://github.com/fernando8alvarez/Control-Gastos',
    icons: iconsGestionPacientes,
    img: controlGastosImg
}

export default [controlGastos, todaysRecipe, carsMarket, gestionPacientes]