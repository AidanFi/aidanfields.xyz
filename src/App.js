import Hero from './Hero';
import Footer from './Footer';
import './App.css';
import email from './email.svg';
import resume from './resume.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
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
      <Footer />
    </div>
  );
}

export default App;
