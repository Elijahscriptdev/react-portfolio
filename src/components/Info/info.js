import React from 'react'
import Pdf from '../../assets/Elijah-Resume.pdf';
import './info.css'

const Info = (props) => {
  return(
    <div className="text-center info" id="info">
        <h1 className="head text-center">About Me</h1>
        <p className="containe">
        I am a recent graduate of Microverse, a remote 
        software development school. For the past nine months, 
        I have spent over 1500 hours learning new tech skills 
        such as Ruby on Rails, Javascript(React), SQL, Postgresql and TDD.
        I communicate eloquently, multitask and collaborate effectively with teams. 
        While I have been privileged to see some projects and tasks through
         successful completion and deployment, I am currently looking for a position 
         as a software developer in a unique
          organization with growth opportunities where my skills and 
          abilities can be fully harnessed and sharpened.
        </p>

        <div className="button my-5">
              <a href={Pdf} target="_blank" rel="noopener noreferrer"> View Resume </a>
        </div>
    </div>
   )

 }

export default Info