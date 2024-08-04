//projectBox.js
import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    HTTPPawDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using render and vercel.",
    HTTPPawGithub : "https://github.com/DevanshSahni/tindog",
    HTTPPawWebsite : "https://devanshsahni.github.io/tindog/",

    Job_KhojoDesc : "A comprehensive job portal application built using the MERN stack, offering dual login functionalities for both employers and recruiters. Employers can post job listings, manage applications, and communicate with candidates, while recruiters can search for jobs, apply, and track their application statuses seamlessly.",
    Job_KhojoGithub : "https://github.com/ianand3977/JOBPORTAL",
    Job_KhojoWebsite : "",

    Live_Weather_ForecastDesc:"This is a live weather app that allows users to check the current weather conditions for any city. The app uses the OpenWeatherMap API to fetch and display weather data.",
    Live_Weather_ForecastGithub:"https://github.com/ianand3977/Live_Weather_app",
    Live_Weather_ForecastWebsite:"https://ianand3977.github.io/Live_Weather_app/",
    
    ToDo_ListDesc:"This is a simple and interactive To-Do List application that allows users to add, mark as completed, and remove tasks. The tasks are stored in the browser's local storage.",
    ToDo_ListGithub:"https://github.com/ianand3977/to-do-list",
    ToDo_ListWebsite:"https://ianand3977.github.io/to-do-list/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target=''>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target=''>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox