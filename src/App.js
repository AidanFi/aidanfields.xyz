import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import email from './email.svg';
import resume from './resume.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import Logo from './af.jpg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <About /> } /> 
          <Route exact path="/contact" element={ <Contact /> } /> 
          <Route exact path="/projects" element={ <Projects /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
