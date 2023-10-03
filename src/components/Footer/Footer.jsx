import logo from './imgs/logo-horizontal.svg';
import linkedin from '../../imgs/linkedin.png';
import github from '../../imgs/github.png';
import email from './imgs/mail.png';
import ws from './imgs/whatsapp.png';
import {
    Foter,
    Container,
    Logo,
    SubContainer,
    Tittle,
    Icons,
    Link,
    Copyright
} from './styles.js';

const red = {
    linkedin: {
        name: "Linkedi",
        link: 'https://www.linkedin.com/in/luis-fernando-a-3a5b7b151/'
    },
    github: {
        name: "GitHub",
        link: 'https://github.com/fernando8alvarez'
    }
}

export default function Footer() {

    return (
        <Foter>
            <Container>
                <Logo src={logo} alt="img not fount" />
                < SubContainer >
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <Tittle>Redes</Tittle>
                        <div className='flex gap-3 items-center m-0'>
                            <Icons src={linkedin} alt="Img not found" />
                            <Link
                                href={red.linkedin.link}
                                target="_blank">
                                {red.linkedin.name}
                            </Link>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <Icons src={github} alt="Img not found" />
                            <Link
                                href={red.github.link}
                                target="_blank">
                                {red.github.name}
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <Tittle>Contactos</Tittle>
                        <div className='flex gap-3 items-center m-0'>
                            <Icons src={ws} alt="Img not found" />
                            <Link target="_blank">Whatsapp</Link>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <Icons src={email} alt="Img not found" />
                            <Link target="_blank">Correo</Link>
                        </div>
                    </div>
                </SubContainer>
            </Container>
            <div>
                <Copyright >
                    © Copyright 2023 | Coded by Luis Fernando Alvarez
                </Copyright>
            </div>
        </Foter>
    )
}
