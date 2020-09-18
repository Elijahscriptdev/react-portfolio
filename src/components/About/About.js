import React from "react";
import Typical from 'react-typical';
import './About.css'
import SocialMediaIcons from "../social-media-icons/social-media-icons";


const About = () => {
  return (
    <div className="about" id="about">
      <h1>Hello, I'm Elijah.</h1>
      <p>I am a <span>fullstack developer.</span></p>
        <p>I live in Nigeria and I code every day.</p>
        <p>
          I can do cool stuff with{" "}
          <span>
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'React.',
              1000,
              'Ruby on Rails.',
              1000,
              'Javascript.',
              1000,
              'Ruby.',
              1000,
              'Firebase.',
              1000,
              'PostgreSQL.',
              1000
            ]}
          />
          </span>
        </p>
        <p>Besides coding, I also love music and swimming!</p>
        <SocialMediaIcons />
      </div>
  );
};

export default About;
