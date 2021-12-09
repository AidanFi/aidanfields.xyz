import React from 'react';
import Logo from './af.jpg';
import { Link } from 'react-router-dom';
import './App.css';

function Contact() {
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
            Contact Me
          </div>
          <hr class="line2"/>
            <div class="container">
              <div class="message-me">Message me</div>
              <form action="action_page.php">

                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."></input>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.."></input>

                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject.."></input>

                <label for="message">Message</label>
                <textarea type="text" id="message" name="message" placeholder="Type message here.."></textarea>

                <input type="submit" value="Submit"></input>

              </form>
            </div>
            <div class="contact-info">
              Contact Information
              <div class="info">
                Name
                <div class="info-sub">
                  Aidan Fields
                </div>
                Location
                <div class="info-sub">
                  Winfield, Kansas, United States
                </div>
                Cell phone
                <div class="info-sub">
                  (+1)620-241-7421
                </div>
                Email
                <div class="info-sub">
                  aidanfields12@gmail.com
                </div>
              </div>
            </div>

        </div>
    );
}

export default Contact;