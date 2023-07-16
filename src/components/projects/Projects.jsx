import React, { useState } from 'react';
import projects from './data';
import ojoB from './ImgProjects/ojo-b.png';
import githubB from './ImgProjects/github-b.png';
import ojoV from './ImgProjects/ojo-v.png';
import githubV from './ImgProjects/github-v.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {
    Section,
    Title1,
    Tittle2,
    Container1,
    Subtitle,
    Summary,
    Link1,
    FlatIcon,
    TextImg
} from './styles.js';

export default function Projects() {

    const [view, setview] = useState({
        todaysrecipe: {
            eye: false,
            github: false,
            img: false
        },
        carsmarket: {
            eye: false,
            github: false,
            img: false
        },
        gestionpaciente: {
            eye: false,
            github: false,
            img: false
        },
        controlgastos: {
            eye: false,
            github: false,
            img: false
        },
    });

    return (
        <Section id='section-4'>
            <div className='flex flex-col justify-center items-center' data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="1000">
                <Title1 >Aplicaciones</Title1>
                <Tittle2 >Proyectos</Tittle2>
            </div>

            <div className='flex flex-col gap-6'>
                {projects.map(element => (
                    <Container1 key={element.id} data-aos="fade-down" data-aos-duration="1000">
                        <div className='w-full lg:w-[55%] flex flex-col gap-4 lg:justify-between'>
                            <div className='flex flex-col gap-3'>
                                <Subtitle>{element.title}</Subtitle>
                                <Summary>
                                    {element.summary}
                                </Summary>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className="flex gap-5 justify-center items-end h-full">
                                    <Link1
                                        href={element.linkDemo} target="_blank" rel="noreferrer noopener" name="eye"
                                        onMouseEnter={() => !view[element.name].eye && setview({ ...view, [element.name]: { ...view[element.name], eye: true } })}
                                        onMouseLeave={() => view[element.name].eye && setview({ ...view, [element.name]: { ...view[element.name], eye: false } })}>
                                        {view[element.name].eye ? (<FlatIcon src={ojoV} alt="demo" />)
                                            : (<FlatIcon src={ojoB} alt="demo" />)}
                                        <span>Demo</span>
                                    </Link1>
                                    <Link1 href={element.linkGitHub} target="_blank" rel="noreferrer noopener"
                                        onMouseEnter={() => !view[element.name].github && setview({ ...view, [element.name]: { ...view[element.name], github: true } })}
                                        onMouseLeave={() => view[element.name].github && setview({ ...view, [element.name]: { ...view[element.name], github: false } })}>
                                        {view[element.name].github ? (<FlatIcon src={githubV} alt="github" />)
                                            : (<FlatIcon src={githubB} alt="github" />)}
                                        <span>Repo</span>
                                    </Link1>
                                </div>
                                <div className='w-full flex gap-2 items-center justify-center'>
                                    {element.icons.map(i => (
                                        <img src={i.img} alt={i.name} key={i.id} className='w-5 min-[550px]:w-6 sm:w-8 lg:w-8' />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <a
                            onMouseEnter={() => !view[element.name].img && setview({ ...view, [element.name]: { ...view[element.name], img: true } })}
                            onMouseLeave={() => view[element.name].img && setview({ ...view, [element.name]: { ...view[element.name], img: false } })}
                            className='w-full lg:w-[45%] relative h-fit rounded-xl'>
                            <img src={element.img} alt="Not img" className='w-[100%] rounded-xl' />
                            {/* {view[element.name].img && <TextImg>Ver más ...</TextImg>} */}
                        </a>
                    </Container1>
                ))}
            </div>
        </Section>
    )
}
