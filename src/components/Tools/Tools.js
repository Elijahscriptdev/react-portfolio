import React from 'react'
import './Tools.css'
import { FaGithub } from 'react-icons/fa';
import { SiRails } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { ImCss3 } from 'react-icons/im';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiFirebase} from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { GrHeroku } from 'react-icons/gr';
import { SiRedux } from 'react-icons/si';
import { SiVisualstudio } from 'react-icons/si'

const Tools = () => {
  return(
    <div className="tools">
        <h1 className="head text-center">Technologies</h1>
        <div className="">
        <ul>
            <li><FaGithub /></li>
            <li className="rails"><SiRails /></li>
            <li className="ruby"><DiRuby /></li>
            <li className="javascript"><SiJavascript /></li>
        </ul>
        <ul>
            <li className="react"><FaReact /></li>
            <li className="html"><ImHtmlFive /></li>
            <li className="css"><ImCss3 /></li>
            <li className="bootstrap"><BsBootstrapFill /></li>
        </ul>
        <ul>
            <li className="firebase"><SiFirebase /></li>
            <li className="pg"><SiPostgresql /></li>
            <li className="sql"><SiMysql /></li>
            <li className="heroku"><GrHeroku /></li>
        </ul>
        <ul>
            <li className="redux"><SiRedux /></li>
            <li className="vsc"><SiVisualstudio /></li>
        </ul>
    </div>
    </div>
   )

 }

export default Tools