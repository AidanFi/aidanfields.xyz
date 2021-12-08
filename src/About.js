import React from 'react';
import Logo from './af.jpg';
import { Link } from 'react-router-dom';
import './App.css';
import Portrait from './portrait.jpg';

function About() {
    return (
        <div className="App">
        <header className="App-header">
          <div>
            <img src={Logo} class="logo"/>
          </div>
          <div class="topnav">
            <Link class="home" to="/">Home</Link>
            <hr class="vertical" />
            <Link class="about" to="/about">About</Link>
            <hr class="vertical" />
            <Link class="contact" to="/contact">Contact</Link>
            <hr class="vertical" />
            <Link class="projects" to="/projects">Projects</Link>
          </div>
          </header>
          <div class="title">
            About Me
          </div>
          <hr class="line2"/>
          <div class="about-me-content">
            I am currently a computer science student-athlete at Southwestern College in Winfield, Kansas.
            I plan to work in software development, with other interests being articifial inteligence/machine learning, ui/ux design, 
            computer graphics, 3D modeling, and game development. <br/> <br/>
            I know the C++ and Python programming languages, as well as 
            HTML, CSS, and JavaScript. I also have experience working in Windows and Linux, and I am able to code using functional 
            and object-oriented programming.
          </div>
          <div class="circle"/>
          </div>

        
    );
}

export default About;