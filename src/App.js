import './App.css';
import About from './About';
import Contact from './Contact';
import projects from './Projects';
import email from './email.svg';
import resume from './resume.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import Logo from './af.jpg';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div>
          <img src={Logo} class="logo"/>
        </div>
        <div class="topnav">
          <div class="home">Home</div>
          <hr class="vertical" />
          <div class="about">About</div>
          <hr class="vertical" />
          <div class="contact">Contact</div>
          <hr class="vertical" />
          <div class="projects">Projects</div>
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
        <a href="INSERT RESUME HERE">
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

export default App;
