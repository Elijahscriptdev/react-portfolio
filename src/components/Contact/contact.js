import React from 'react'
// import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { FaAngellist } from 'react-icons/fa';
import './contact.css';

const ContactUs = () => {
  return(
    <div className="social-media contact">
        <h1 className="head text-center">Contact Me</h1>
        <ul>
            {/* <li><a href="https://github.com/Elijahscriptdev" target="_blank" rel="noopener noreferrer"><FaGithub style={{background: "white", color:"black"}} /></a></li> */}
            <li><a href="https://www.linkedin.com/in/elijah-obominuru/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={{background: "white", color:"#26AFF5"}} /></a></li>
            <li><a href="https://twitter.com/ElijahObominuru" target="_blank" rel="noopener noreferrer"><ImTwitter style={{background: "white", color:"#1DA1F2"}} /></a></li>
            <li><a href="https://angel.co/u/elijah-obominuru" target="_blank" rel="noopener noreferrer"><FaAngellist /></a></li>
            <li><a href="mailto:elijjaaahhhh@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail style={{background: "white", color:"#C23B2C"}} /></a></li>
        </ul>
    </div>
   )

 }

export default ContactUs