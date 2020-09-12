import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { FaAngellist } from 'react-icons/fa';
import './social-media-icon.css';

const SocialMediaIcons = (props) => {
  return(
    <div className="social-media">
        <ul>
            <li><a href="https://github.com/Elijahscriptdev" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/elijah-obominuru/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a></li>
            <li><a href="https://twitter.com/ElijahObominuru" target="_blank" rel="noopener noreferrer"><ImTwitter /></a></li>
            <li><a href="https://angel.co/u/elijah-obominuru" target="_blank" rel="noopener noreferrer"><FaAngellist /></a></li>
            <li><a href="mailto:elijjaaahhhh@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail /></a></li>
        </ul>
    </div>
   )

 }

export default SocialMediaIcons