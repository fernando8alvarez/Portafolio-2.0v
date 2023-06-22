import React, { useState } from 'react';
import pc from '../../imgs/pc.svg';
import dev from '../../imgs/dev.svg';
import linkedin from '../../imgs/linkedin.png';
import github from '../../imgs/github.png';
import cv from '../../imgs/cv.png';
import { useSpring, animated } from 'react-spring';
import Typed from 'typed.js';


import {
  Section,
  Container1,
  ContainerTittle,
  Tittle1,
  Tittle2,
  Tittle3,
  Container2,
  Img,
  Icons,
  Alert
} from './Styles.js'

export default function LandingPage() {

  //TITTLES: Alertas en los icons
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);

  //ANIMACIONES: Configuracion de cada animacion
  const animatedTittles = [
    { name: "tittle1", opacity: 1, delay: 1000 },
    { name: "tittle2", opacity: 1, delay: 500 },
    { name: "tittle3", opacity: 1, delay: 1500 }

  ]

  const animatedIcons = [
    { name: "icon1", y: 200, opacity: 1, delay: 500 },
    { name: "icon2", y: 200, opacity: 1, delay: 1000 },
    { name: "icon3", y: 200, opacity: 1, delay: 1500 }
  ]

  //ANIMACIONES: aplicacion de configuracion de cada animacion
  const animated1 = animatedTittles.map((style) => {
    //Tittles
    return useSpring({
      from: { opacity: 0 },
      to: { opacity: style.opacity },
      config: {
        mass: 40,
        tension: 2000,
        friction: 500,
      },
      delay: style.delay
    });

  });

  const animated2 = animatedIcons.map((style) => {
    //Icons
    return useSpring({
      from: { y: style.y, opacity: 0 },
      to: { y: 0, opacity: style.opacity },
      config: {
        mass: 10,
        tension: 2000,
        friction: 500,
      },
      delay: style.delay,
    });

  });

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-end', 'Back-end', 'Full Stack ^2000'],
      typeSpeed: 100,
      startDelay: 800,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Section id="section-1" >
      <Container1>
        <ContainerTittle>
          <Tittle1 style={animated1[0]} >
            Bienvenido <br /> a mi <br />portafolio
          </Tittle1>
          <Tittle3 style={animated1[2]}>
            Desarrollo de aplicaciones web escalables y eficientes
          </Tittle3>
          <Tittle2 style={animated1[1]}>
            <span ref={el}></span><br />web<br />developer
          </Tittle2>
        </ContainerTittle>
        <div className="hidden md:flex" >
          <Img src={pc} alt="Img not found" style={animated1[2]} />
        </div>
      </Container1>
      <Container2>
        <animated.a
          href="https://www.linkedin.com/in/luis-fernando-alvarez-leccia-3a5b7b151/"
          target="_blank"
          style={animated2[0]}
          className="flex flex-col items-center no-underline"
          onMouseOver={() => setAlert(!alert && true)}
          onMouseOut={() => setAlert(alert && false)}
        >
          {alert && (<Alert>LinkedIn</Alert>)}
          <Icons src={linkedin} alt="Img not found" />
        </animated.a>
        <animated.a
          href="https://github.com/fernando8alvarez"
          target="_blank"
          style={animated2[1]}
          className="flex flex-col items-center no-underline"
          onMouseOver={() => setAlert2(!alert2 && true)}
          onMouseOut={() => setAlert2(alert2 && false)}
        >
          {alert2 && (<Alert>GitHub</Alert>)}
          <Icons src={github} alt="Img not found" />
        </animated.a>
        <animated.a
          href="#top"
          target="_blank"
          style={animated2[2]}
          className="flex flex-col items-center no-underline"
          onMouseOver={() => setAlert3(!alert3 && true)}
          onMouseOut={() => setAlert3(alert3 && false)}
        >
          {alert3 && (<Alert>CV</Alert>)}
          <Icons src={cv} alt="Img not found" />
        </animated.a>
      </Container2>
    </Section>
  );
}
