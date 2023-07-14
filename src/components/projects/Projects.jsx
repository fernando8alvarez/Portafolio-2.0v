import React, { useState } from 'react';
import projects from './data';
import ojoB from './ImgProjects/ojo-b.png';
import githubB from './ImgProjects/github-b.png';
import ojoV from './ImgProjects/ojo-v.png';
import githubV from './ImgProjects/github-v.png';
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
        eye: false,
        github: false,
        img: false
    });

    return (
        <Section id='section-4'>
            <div className='flex flex-col justify-center items-center'>
                <Title1 >Aplicaciones</Title1>
                <Tittle2 >Proyectos</Tittle2>
            </div>

            <div className='flex flex-col gap-6'>
                {projects.map(e => (
                    <Container1 key={e.id}>
                        <div className='w-full lg:w-[55%] flex flex-col gap-4 lg:justify-between'>
                            <div className='flex flex-col gap-3'>
                                <Subtitle>{e.title}</Subtitle>
                                <Summary>
                                    {e.summary}
                                </Summary>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className="flex gap-5 justify-center items-end h-full">
                                    <Link1
                                        href={e.linkDemo} target="_blank" rel="noreferrer noopener"
                                        onMouseEnter={() => !view.eye && setview({ ...view, eye: true })}
                                        onMouseLeave={() => view.eye && setview({ ...view, eye: false })}>
                                        {view.eye ? (<FlatIcon src={ojoV} alt="demo" />)
                                            : (<FlatIcon src={ojoB} alt="demo" />)}
                                        <span>Demo</span>
                                    </Link1>
                                    <Link1 href={e.linkGitHub} target="_blank" rel="noreferrer noopener"
                                        onMouseEnter={() => !view.github && setview({ ...view, github: true })}
                                        onMouseLeave={() => view.github && setview({ ...view, github: false })}>
                                        {view.github ? (<FlatIcon src={githubV} alt="github" />)
                                            : (<FlatIcon src={githubB} alt="github" />)}
                                        <span>Repo</span>
                                    </Link1>
                                </div>
                                <div className='w-full flex gap-2 items-center justify-center'>
                                    {e.icons.map(i => (
                                        <img src={i.img} alt={i.name} key={i.id} className='w-5 min-[550px]:w-6 sm:w-8 lg:w-8' />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <a
                            onMouseEnter={() => setview({ ...view, img: true })}
                            onMouseLeave={() => setview({ ...view, img: false })}
                            className='w-full lg:w-[45%] relative h-fit rounded-xl'>
                            <img src={e.img} alt="Not img" className='w-[100%] rounded-xl' />
                            {/* {view.img && <TextImg>Ver más ...</TextImg>} */}
                        </a>
                    </Container1>
                ))}
            </div>
        </Section>
    )
}
