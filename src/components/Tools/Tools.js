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
import { UncontrolledTooltip } from 'reactstrap';

const Tools = () => {
  return(
    <div className="tools" id="tools">
        <h1 className="head text-center">Technologies</h1>
        <div className="">
        <ul>
            <li>
                <FaGithub id="UncontrolledTooltipExample1" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample1" style={{background: "white", color:"black"}}>
                    Github
                </UncontrolledTooltip>
            </li>
            <li className="rails">
                <SiRails id="UncontrolledTooltipExample2" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample2" style={{background: "white", color:"black"}}>
                    Rails
                </UncontrolledTooltip>
                </li>
            <li className="ruby">
                <DiRuby id="UncontrolledTooltipExample3" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample3" style={{background: "white", color:"black"}}>
                    Ruby
                </UncontrolledTooltip>
                </li>
            <li className="javascript">
                <SiJavascript id="UncontrolledTooltipExample4" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample4" style={{background: "white", color:"black"}}>
                Javascript
                </UncontrolledTooltip>
                </li>
        </ul>
        <ul>
            <li className="react">
                <FaReact id="UncontrolledTooltipExample5" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample5" style={{background: "white", color:"black"}}>
                React
                </UncontrolledTooltip>
                </li>
            <li className="html">
                <ImHtmlFive id="UncontrolledTooltipExample6" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample6" style={{background: "white", color:"black"}}>
                    Html5
                </UncontrolledTooltip>
                </li>
            <li className="css">
                <ImCss3 id="UncontrolledTooltipExample7" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample7" style={{background: "white", color:"black"}}>
                    Css3
                </UncontrolledTooltip>
                </li>
            <li className="bootstrap">
                <BsBootstrapFill id="UncontrolledTooltipExample8" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample8" style={{background: "white", color:"black"}}>
                    Bootstrap
                </UncontrolledTooltip>
                </li>
        </ul>
        <ul>
            <li className="firebase">
                <SiFirebase id="UncontrolledTooltipExample9" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample9" style={{background: "white", color:"black"}}>
                Firebase
                </UncontrolledTooltip>
                </li>
            <li className="pg">
                <SiPostgresql id="UncontrolledTooltipExample10" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample10" style={{background: "white", color:"black"}}>
                Postgresql
                </UncontrolledTooltip>
                </li>
            <li className="sql">
                <SiMysql id="UncontrolledTooltipExample11" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample11" style={{background: "white", color:"black"}}>
                Mysql
                </UncontrolledTooltip>
                </li>
            <li className="heroku">
                <GrHeroku id="UncontrolledTooltipExample12" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample12" style={{background: "white", color:"black"}}>
                Heroku
                </UncontrolledTooltip>
                </li>
        </ul>
        <ul>
            <li className="redux">
                <SiRedux id="UncontrolledTooltipExample13" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample13" style={{background: "white", color:"black"}}>
                Redux
                </UncontrolledTooltip>
                </li>
            <li className="vsc">
                <SiVisualstudio id="UncontrolledTooltipExample14" />
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample14" style={{background: "white", color:"black"}}>
                    Visual studio code
                </UncontrolledTooltip>
                </li>
        </ul>
    </div>
    </div>
   )

 }

export default Tools