import React from 'react';
import ProjectBox from './ProjectBox';
import jobkhojo from '../images/job.png';
import liveweatherapp from '../images/weather.png';
import todolist from '../images/todo.png';
import httppaw from '../images/httppaw.png';
import { SiTodoist } from 'react-icons/si';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={httppaw} projectName="HTTPPaw" />
        <ProjectBox projectPhoto={jobkhojo} projectName="Job_Khojo" />
        <ProjectBox projectPhoto={liveweatherapp} projectName="Live_Weather_Forecast" />
        <ProjectBox projectPhoto={todolist} projectName="ToDo_List" />
      </div>

    </div>
  )
}

export default Projects