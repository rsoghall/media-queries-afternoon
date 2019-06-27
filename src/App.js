import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="background">
          <nav className="navbar">
            <div className="title">Start Bootstrap</div>
            <div className="links">
              <a href="#Services">SERVICES</a>
              <a href="#Portfolio" >PORTFOLIO</a>
              <a href="#Team">TEAM</a>
              <a href="#About">ABOUT</a>
              <a href="#Contact">CONTACT</a>
            </div>
            <div class="menuBar">
              <div class="dropdown">
                <button class="menuButton">
                  MENU &#9776;
                  <i class="fa fa-caret-down" />
                </button>
                <div class="dropdown-content">
                <a className="nav-link js-scroll-trigger" href="#Services">SERVICES</a>
                  <a href="#Portfolio">PORTFOLIO</a>
                  <a href="#About">ABOUT</a>
                  <a href="#Team">TEAM</a>
                  <a href="#Contact">CONTACT</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="greeting">
            <div className="greetingBox">
              <p className="Welcome">Welcome to Our Studio!</p>
              <p className="Nice">
                IT'S NICE TO MEET YOU
              </p>
              <div className="box">
                <button>TELL ME MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="Section1" id="Services">
          <h2>SERVICES</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          <p>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    );
  }
}

export default App;
