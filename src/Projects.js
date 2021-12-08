import React from 'react';
import Logo from './af.jpg';
import { Link } from 'react-router-dom';
import './App.css';
import construction from './construction.png'

function Projects() {
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
            Projects
          </div>
          <hr class="line2"/>
          <div id="rotator">
           <img src={construction} class="construction rotate linear infinite"/>
          </div>
          </div>
    );
}

export default Projects;