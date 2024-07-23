import React, {useEffect} from 'react'
import './App.css';
import Hero from './Sections/Hero/Hero';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import { scroller } from 'react-scroll';
import Navbar from './Sections/Navbar/Navbar';

const App = () => {

  useEffect(() => {
    const handleScrollOrKey = (event) => {
      const viewportWidth = window.innerWidth;

      // Disable smooth scrolling for viewport width < 800px
      if (viewportWidth < 800) {
        return;
      }
      
      event.preventDefault();

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine the current section index
      const currentSectionIndex = Math.round(scrollPosition / windowHeight);

      // Scroll to the next or previous section
      if (event.deltaY > 0 || event.key === 'ArrowDown') {
        // Scrolling down or pressing the down arrow key
        const nextSectionIndex = Math.min(currentSectionIndex + 1, 4); // Assuming 3 sections, indexed 0, 1, 2
        window.scrollTo({
          top: nextSectionIndex * windowHeight,
          behavior: 'smooth'
        });
      } else if (event.deltaY < 0 || event.key === 'ArrowUp') {
        // Scrolling up or pressing the up arrow key
        const previousSectionIndex = Math.max(currentSectionIndex - 1, 0);
        window.scrollTo({
          top: previousSectionIndex * windowHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('wheel', handleScrollOrKey, { passive: false });
    window.addEventListener('keydown', handleScrollOrKey, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScrollOrKey);
      window.removeEventListener('keydown', handleScrollOrKey);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App