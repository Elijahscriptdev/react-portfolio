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
            <li><a href="https://github.com/Elijahscriptdev" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/elijah-obominuru/" target="_blank"><AiFillLinkedin /></a></li>
            <li><a href="https://twitter.com/ElijahObominuru" target="_blank"><ImTwitter /></a></li>
            <li><a href="https://angel.co/u/elijah-obominuru" target="_blank"><FaAngellist /></a></li>
            <li><a href="mailto:elijjaaahhhh@gmail.com" target="_blank"><GrMail /></a></li>
        </ul>
    </div>
   )

 }

export default SocialMediaIcons