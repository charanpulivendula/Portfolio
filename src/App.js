import React from 'react';
//import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills'


function App() {

  return (
 
      <div>
        <Header />
        <Hero />
        <Skills/>
        <About />
        <Experience/>
        <Projects/>
        <Contact/>

      </div>

 


  );
}

// function Home() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Projects/>
//       <Experience/>
//     </>
//   );
// }

export default App;
