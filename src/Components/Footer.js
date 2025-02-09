//Footer.js
import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Anand Ubarhande</h4>
      <h4>Copyright &copy; 2024 AU</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ianand3977" target=''><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anand3977/" target=''><FaLinkedin/></a>
        <a href='mailTo:anandgu2002@gmail.com' target=''><GrMail/></a>
        <a href="https://leetcode.com/ianand3977/" target=""><SiLeetcode/></a>
        
      </div>
    </footer>
  )
}

export default Footer