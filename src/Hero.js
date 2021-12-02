import Logo from './af.jpg'

const Hero = () => {
    return (

       
       <div class="top-nav">
            <img src={Logo}/>

             <a class="active" href="#home">Home</a>
             <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#projects">Projects</a>
        </div>
    );
};

export default Hero;