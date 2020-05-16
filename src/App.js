import React, { Component } from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import p from "./images/p.jpg";
import data from "./images/data.jpeg"
import hacker from "./images/hacker.jpg"
import coding from "./images/coding.jpeg";
import web from "./images/web.png"
import project from "./images/project.png"
import goal from "./images/goal.jpg"
import con from "./images/con.png"
import "./App.css";

class App extends Component {
  static defaultProps = {
    pradip: [
      {
        name: "Pradip Gareja",
        age: "Computer Science Engineer.",
        src: p,
        facts: [
          "Forced Coder and Researcher.",
          "Stock Trader.",
          "I m  Belive in : Bussiness and Technology Makes Man Perfect!.",
          "Want to be Computer Scientist!"
        ]
      },
      {
        name: "Data Science",
        age: "Data is Everything...",
        src: data,
        facts: [
          "Hey viewer, you are one the probebility for me !",
          "Stastistic with python.",
          "AI and ML ethu."
          
        ]
      },
      {
        name: "Ethical Hacker",
        age: "Think inside the box . Hack Everything",
        src: hacker,
        facts: [
          "Cyber Security Researcher ",
          "Windows Attack.",
          "Mobile Hacking.",
          "Network Hacking.",
          "Malvar Analysis.",
          "SDR Hacking.",
          "Hacker is in progess......"
        ]
      },
      {
        name: "Language",
        age: "Hey, Gujarati , Hindi , English, German",
        src: coding,
        facts: [
          "Just Kidding, Computer Language. ",
          "My First Love Python.",
          "My Ex C and C++.",
          "My Crush is Java but I am not Capable.",
          "My Current Gf is Javascript.",
          "My Grand Father is Assembly.",
          "My Brother is Mongo and Cousin Bro is SQL",
          "My Grand Mother is Bash",
          "I am Loving PHP for Attack ..."
        ]
      },
      {
        name: "Web Developer",
        age: "Bussiness Purspose ",
        src: web,
        facts: [
          "Javascript ",
          "Node js.",
          "dJango.",
          "React.",
          "Docker and Kubernetes.",
          "BootStrap.",
          "Devloper in pogess......"
        ]
      }
      ,
      {
        name: "Project",
        age: "Self Driving Car",
        src: project,
        facts: [
          "Deep Learning ",
          "Future Robotics.",
          <a href="https://www.ripublication.com/ijaer19/ijaerv14n9_12.pdf">My Publication : The Yan</a>,
          <iframe width="405" height="325"
            src="https://www.youtube.com/embed/2nSpQxpBcbY?autoplay=1">
          </iframe>
        ]
      },
      {
        name: "Future Goal",
        age: "Want to Be an Enterprenure....",
        src: goal,
        facts: [
          "Data Science With Food Industry ",
          ".................................",
          "Bussiness in Progess . Let you know Soon..."
          
         
        ]
      },
      {
        name: "Contact Me!",
        age: "",
        src: con,
        facts: [
          <a href="https://github.com/psgareja">My Project and Repo : Github</a>,
          "Contact: 7623805247",
          <a href = "mailto: psgareja@gmail.com">Send Email</a>
          
         
        ]
      }
      

    ]
  };
  render() {
    return (
      <div>
        <Navbar pradip={this.props.pradip} />
        <div className='container'>
          <Routes pradip={this.props.pradip} />
        </div>
      </div>
    );
  }
}

export default App;
