import './App.css';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import React from 'react';
import email from './email.svg';
import resume from './resume.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import Logo from './af.jpg';
import { Link } from 'react-router-dom';

function Home() {
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
        <div class="name">
          Aidan Fields
        </div>
        <div class="student">
          Computer Science Student
        </div>
        <hr class="line"/>
        <div class="links">
          <a href="mailto:aidanfields12@gmail.com">
            <img src={email} />
          </a>
          <a href="https://www.linkedin.com/in/aidan-fields-a648541a7/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADBbhewBAbUbqgNAjmJg8azIigZA4TzdtaM,1635476517430)/">
            <img src={resume} />
          </a>
          <a href="https://github.com/AidanFi">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/aidan-fields-a648541a7/">
            <img src={linkedin} />
          </a>
          </ div>
        <footer className="footer">
          <div class="credit">Wesbite created in React by Aidan Fields</div>
        </footer>
      </div>
    );
}

export default Home;