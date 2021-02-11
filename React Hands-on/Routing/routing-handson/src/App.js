import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './Home.jsx'
import {About} from './About.jsx'
import {ContactUs} from './ContactUs.jsx'

const showHomePage = () => {
  if(window.location.pathname === '/') {
    return (
        <div>
          <Home/>
        </div>
    )
  }
}

const showAboutPage = () => {
    if(window.location.pathname === '/about') {
        return (
            <div>
            <About/>
            </div>
    )
    }
}

const showContactPage = () => {
    if(window.location.pathname === '/contact') {
        return (
            <div>
              <ContactUs/>
            </div>
    )
    }
}

function App() {


  return (
      <div class="container">
        <div class="ui three item menu">
          <a href="/" class="active item">Home</a>
          <a href="/about" class="item">About</a>
          <a href="/contact" class="item">Contact us</a>
        </div>
        <div className="App">
            {showHomePage()}
            {showAboutPage()}
            {showContactPage()}
        </div>
    </div>
  );
}

export default App;
