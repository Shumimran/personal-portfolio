"use client"

import Hero from "./components/Hero";
import Contact from "./components/Contact"; 
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

export default function Home() {
  useEffect ( () => {
    AOS.init({
      easing: "ease-out-back",
      duration:1200,
      delay:100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <main>
        
        <Hero/>
        <Projects/>
        <Skills />
        <About />
        <Contact/>
      </main>
    </div>
    )}
   