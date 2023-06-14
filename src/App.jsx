import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Tecnologies from "./components/Tecnologies/Tecnologies.jsx";

function App() {

  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    const handleScroll = () => {

      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');

        if (sectionTop < window.innerHeight / 2) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection)
    };

    window.addEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="w-full h-screen">
      <Navbar currentSection={activeSection} />
      <LandingPage />
      <Tecnologies />
    </div>
  )
}

export default App
