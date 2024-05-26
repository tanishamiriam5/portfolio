import React from 'react';
import './Abt.css';
import { Link } from 'react-router-dom';
const Abt = () => {
  return (
    <div>
      <header className="main-header">
     
      </header>   

      <header className="header2">
        <nav>
          <div className="nav2">
          <Link to="/">Home</Link>
                    <Link to="/Abt">About</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Contact">Contact</Link>
          </div>
        </nav>
      </header>
      
      <img src="pic1.webp" className="img" alt="Profile"/>

      <footer>
        &copy; 2024 My Portfolio. All rights reserved.
      </footer>
      
      <u>
        <div className="head">
          HELLO, I'M TANISHA CURRENTLY PERSUING BCA IN STELLA MARIS COLLEGE
        </div>
      </u>
      
      <div className="p">
        hi, I am a diligent student who has completed two years of Bachelor of Computer Applications (BCA) at Stella Maris College, where I have acquired a comprehensive understanding of various computer science fundamentals. My coursework encompassed a wide array of subjects including computing principles, digital logic, procedural and object-oriented programming, database management systems, operating systems, web design, software engineering, and testing methodologies. Additionally, I have actively participated in numerous cultural events both within my college and at intercollegiate levels, honing my interpersonal and leadership skills. Furthermore, I have pursued certificate courses to augment my knowledge and expertise in the field. I am eager to leverage this diverse skill set and academic background to contribute effectively in any professional endeavor within the realm of computer science.
      </div>
    </div>
  );
}

export default Abt;
