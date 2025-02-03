import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import WelcomeText from './pages/landingPage';
import AboutUs from './pages/aboutus';
import OurDepartments from './pages/ourDepartments';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200, 
  once: true, 
});

export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll position in relation to the first section
      const scrolled = Math.min(scrollY / windowHeight, 1) * 100; // 0 to 100
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <section 
        className="full-screen white-section" 
        style={{ background: `rgba(255, 255, 255, ${1 - scrollPercent / 100})` }}>
        <WelcomeText />
      </section>
      <section className="full-screen red-section" style={{ background: `rgba(230, 43, 30, ${scrollPercent / 100})` }}>
        <AboutUs />
      </section>
      <section className="full-screen red-section" style={{ background: `rgba(230, 43, 30, ${scrollPercent / 100})` }}>
        <OurDepartments/>
      </section>
    </div>
  );
}
