import React, { useEffect, useState } from 'react';
import { techFront, techback, tools, objectAllIcons } from './icons';
import { useSpring, animated } from 'react-spring';
import 'aos/dist/aos.css';
import AOS from 'aos';
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

    const [allIcons, setAllIcons] = useState(objectAllIcons);

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
            <div className='flex flex-col justify-center items-center' data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="1000">
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
